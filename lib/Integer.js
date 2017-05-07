'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Integer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = require('./');

var _jsIntegerBigEndian = require('@aureooms/js-integer-big-endian');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Integer = exports.Integer = function () {
	function Integer(base, is_negative, limbs) {
		_classCallCheck(this, Integer);

		this.base = base;
		this.is_negative = is_negative;
		this.limbs = limbs;
	}

	_createClass(Integer, [{
		key: 'move',
		value: function move(other) {
			other.base = this.base;
			other.is_negative = this.is_negative;
			other.limbs = this.limbs;
			return other;
		}
	}, {
		key: 'copy',
		value: function copy() {
			return new Integer(this.base, this.is_negative, this.limbs);
		}
	}, {
		key: '_limbs_in_base',
		value: function _limbs_in_base(base) {
			if (this.base === base) return this.limbs;else return (0, _jsIntegerBigEndian.convert)(this.base, base, this.limbs, 0, this.limbs.length);
		}
	}, {
		key: 'toString',
		value: function toString() {
			var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _.DEFAULT_DISPLAY_BASE;


			if (this.iszero()) return '0';

			var digits = (0, _jsIntegerBigEndian.stringify)(this.base, base, this.limbs, 0, this.limbs.length);

			return this.is_negative ? '-' + digits : digits;
		}
	}, {
		key: 'add',
		value: function add(other) {

			if (this.is_negative !== other.is_negative) {

				if (other.is_negative) return this.sub(other.opposite());else return other.sub(this.opposite());
			} else {

				var result_is_negative = this.is_negative;
				var r = this.base;

				var a = this.limbs;

				var b = other._limbs_in_base(r);

				var c = (0, _jsIntegerBigEndian._zeros)(Math.max(a.length, b.length) + 1);

				(0, _jsIntegerBigEndian._add)(r, a, 0, a.length, b, 0, b.length, c, 0, c.length);

				return new Integer(r, result_is_negative, c);
			}
		}
	}, {
		key: 'iadd',
		value: function iadd(other) {
			// TODO optimize but be careful with side effects
			return this.add(other).move(this);
		}
	}, {
		key: 'sub',
		value: function sub(other) {

			if (this.is_negative !== other.is_negative) {

				if (other.is_negative) return this.add(other.opposite());else return this.opposite().add(other).opposite();
			} else {

				// /!\ _sub needs |c| >= |a| >= |b|

				var r = this.base;
				var a = this.limbs;
				var aj = a.length;
				var ai = (0, _jsIntegerBigEndian._trim_positive)(a, 0, aj);

				if (ai >= aj) return other.opposite();

				var b = other._limbs_in_base(r);
				var bj = b.length;
				var bi = (0, _jsIntegerBigEndian._trim_positive)(b, 0, bj);

				if (bi >= bj) return this.copy();

				if ((0, _jsIntegerBigEndian._cmp)(a, ai, aj, b, bi, bj) < 0) {

					var c = (0, _jsIntegerBigEndian._zeros)(bj - bi);

					(0, _jsIntegerBigEndian._sub)(r, b, bi, bj, a, ai, aj, c, 0, c.length);

					return new Integer(r, ~this.is_negative, c);
				} else {

					var _c = (0, _jsIntegerBigEndian._zeros)(aj - ai);

					(0, _jsIntegerBigEndian._sub)(r, a, ai, aj, b, bi, bj, _c, 0, _c.length);

					return new Integer(r, this.is_negative, _c);
				}
			}
		}
	}, {
		key: 'isub',
		value: function isub(other) {
			// TODO optimize but be careful with side effects
			return this.sub(other).move(this);
		}
	}, {
		key: 'mul',
		value: function mul(other) {

			var result_is_negative = this.is_negative ^ other.is_negative;
			var r = this.base;

			var a = this.limbs;

			var b = other._limbs_in_base(r);

			var c = (0, _jsIntegerBigEndian._zeros)(a.length + b.length);

			(0, _jsIntegerBigEndian._mul)(r, a, 0, a.length, b, 0, b.length, c, 0, c.length);

			return new Integer(r, result_is_negative, c);
		}
	}, {
		key: 'imul',
		value: function imul(other) {
			// TODO optimize but be careful with side effects
			return this.mul(other).move(this);
		}

		/**
   * Computes <code>this</code> raised to the <code>x</code>th power.
   * <code>x</code> is a double smaller or equal to 2^53.
   *
   * @param {Number} x The power to raise <code>this</code> to.
   * @return {Integer} <code>this ^ x</code>
   */

	}, {
		key: 'pow',
		value: function pow(x) {

			var is_negative = Math.pow(this.is_negative, x);

			var a = this.limbs;
			var c = (0, _jsIntegerBigEndian._zeros)(Math.max(1, a.length * x));

			(0, _jsIntegerBigEndian._powd)(this.base, x, a, 0, a.length, c, 0, c.length);

			return new Integer(this.base, is_negative, c);
		}
	}, {
		key: 'ipow',
		value: function ipow(x) {
			// TODO optimize but be careful with side effects
			return this.pow(x).move(this);
		}
	}, {
		key: 'square',
		value: function square() {
			// TODO optimize but be careful with side effects
			return this.pow(2);
		}
	}, {
		key: 'isquare',
		value: function isquare() {
			// TODO optimize but be careful with side effects
			return this.ipow(2);
		}
	}, {
		key: 'div',
		value: function div(other) {
			return this.divmod(other)[0];
		}
	}, {
		key: 'idiv',
		value: function idiv(other) {
			// TODO optimize but be careful with side effects
			return this.div(other).move(this);
		}
	}, {
		key: 'mod',
		value: function mod(other) {
			return this.divmod(other)[1];
		}
	}, {
		key: 'imod',
		value: function imod(other) {
			// TODO optimize but be careful with side effects
			return this.mod(other).move(this);
		}
	}, {
		key: 'divmod',
		value: function divmod(other) {

			if (other.iszero()) throw new _.ZeroDivisionError('Integer division by zero'); // optimize

			var quotient_is_negative = this.is_negative ^ other.is_negative;
			var r = this.base;

			// The underlying algorithm does not allow leading 0's so we trim them.
			var lj = this.limbs.length;
			var li = (0, _jsIntegerBigEndian._trim_positive)(this.limbs, 0, lj);

			// Dividend is 0
			if (li >= lj) return [new Integer(this.base, 0, [0]), new Integer(this.base, 0, [0])];

			// Dividend (& Remainder)
			var D = (0, _jsIntegerBigEndian._alloc)(lj - li);
			(0, _jsIntegerBigEndian._copy)(this.limbs, li, lj, D, 0);

			// Divisor
			var d = other._limbs_in_base(r);
			var dj = d.length;
			var di = (0, _jsIntegerBigEndian._trim_positive)(d, 0, dj); // di < dj because d != 0

			// Quotient
			var q = (0, _jsIntegerBigEndian._zeros)(D.length);

			(0, _jsIntegerBigEndian._div)(r, D, 0, D.length, d, di, dj, q, 0, q.length);

			var Q = new Integer(r, quotient_is_negative, q); // quotient
			var R = new Integer(r, 0, D); // remainder

			if ((this.is_negative || other.is_negative) && !(0, _jsIntegerBigEndian._jz)(D, 0, D.length)) {

				if (other.is_negative) {

					if (!this.is_negative) {
						(0, _jsIntegerBigEndian._increment)(r, q, 0, q.length);
						R.iadd(other); // TODO optimize
					} else {
						R.negate(); // TODO optimize
					}
				} else {
					(0, _jsIntegerBigEndian._increment)(r, q, 0, q.length);
					R.negate().iadd(other); // TODO optimize
				}
			}

			return [Q, R];
		}
	}, {
		key: 'opposite',
		value: function opposite() {
			return new Integer(this.base, ~this.is_negative, this.limbs);
		}
	}, {
		key: 'negate',
		value: function negate() {
			// TODO optimize but be careful with side effects
			return this.opposite().move(this);
		}
	}, {
		key: 'sign',
		value: function sign() {
			return this.iszero() ? 0 : this.is_negative ? -1 : 1;
		}
	}, {
		key: 'iszero',
		value: function iszero() {
			return (0, _jsIntegerBigEndian._jz)(this.limbs, 0, this.limbs.length);
		}
	}, {
		key: 'isone',
		value: function isone() {
			if (this.is_negative) return false;
			return (0, _jsIntegerBigEndian._eq)(this.limbs, 0, this.limbs.length, [1], 0, 1);
		}
	}, {
		key: 'nonzero',
		value: function nonzero() {
			return !this.iszero();
		}
	}, {
		key: 'bin',
		value: function bin() {
			return this.toString(2);
		}
	}, {
		key: 'oct',
		value: function oct() {
			return this.toString(8);
		}
	}, {
		key: 'hex',
		value: function hex() {
			return this.toString(16);
		}
	}, {
		key: 'digits',
		value: function digits() {
			var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _.DEFAULT_DISPLAY_BASE;

			return (0, _jsIntegerBigEndian.convert)(this.base, base, this.limbs, 0, this.limbs.length).reverse();
		}
	}, {
		key: 'bits',
		value: function bits() {
			return this.digits(2);
		}
	}, {
		key: 'divides',
		value: function divides(other) {
			return other.mod(this).iszero();
		}
	}, {
		key: 'divide_knowing_divisible_by',
		value: function divide_knowing_divisible_by(other) {
			return this.div(other);
		}
	}, {
		key: 'cmp',
		value: function cmp(other) {

			if (this.iszero()) {
				if (other.iszero()) return 0;else if (other.is_negative) return 1;else return -1;
			}

			if (this.is_negative < other.is_negative) return -1;
			if (this.is_negative > other.is_negative) return 1;

			var a = this.limbs;
			var b = other._limbs_in_base(this.base);

			return (0, _jsIntegerBigEndian._cmp)(a, 0, a.length, b, 0, b.length);
		}
	}, {
		key: 'eq',
		value: function eq(other) {
			return this.cmp(other) === 0;
		}
	}, {
		key: 'ge',
		value: function ge(other) {
			return this.cmp(other) >= 0;
		}
	}, {
		key: 'gt',
		value: function gt(other) {
			return this.cmp(other) > 0;
		}
	}, {
		key: 'le',
		value: function le(other) {
			return this.cmp(other) <= 0;
		}
	}, {
		key: 'lt',
		value: function lt(other) {
			return this.cmp(other) < 0;
		}
	}, {
		key: 'ne',
		value: function ne(other) {
			return this.cmp(other) !== 0;
		}
	}]);

	return Integer;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnRlZ2VyLmpzIl0sIm5hbWVzIjpbIkludGVnZXIiLCJiYXNlIiwiaXNfbmVnYXRpdmUiLCJsaW1icyIsIm90aGVyIiwibGVuZ3RoIiwiaXN6ZXJvIiwiZGlnaXRzIiwic3ViIiwib3Bwb3NpdGUiLCJyZXN1bHRfaXNfbmVnYXRpdmUiLCJyIiwiYSIsImIiLCJfbGltYnNfaW5fYmFzZSIsImMiLCJNYXRoIiwibWF4IiwiYWRkIiwibW92ZSIsImFqIiwiYWkiLCJiaiIsImJpIiwiY29weSIsIm11bCIsIngiLCJwb3ciLCJpcG93IiwiZGl2bW9kIiwiZGl2IiwibW9kIiwicXVvdGllbnRfaXNfbmVnYXRpdmUiLCJsaiIsImxpIiwiRCIsImQiLCJkaiIsImRpIiwicSIsIlEiLCJSIiwiaWFkZCIsIm5lZ2F0ZSIsInRvU3RyaW5nIiwicmV2ZXJzZSIsImNtcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7SUFRYUEsTyxXQUFBQSxPO0FBRVosa0JBQWNDLElBQWQsRUFBcUJDLFdBQXJCLEVBQW1DQyxLQUFuQyxFQUEyQztBQUFBOztBQUMxQyxPQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLE9BQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBOzs7O3VCQUVNQyxLLEVBQVE7QUFDZEEsU0FBTUgsSUFBTixHQUFhLEtBQUtBLElBQWxCO0FBQ0FHLFNBQU1GLFdBQU4sR0FBb0IsS0FBS0EsV0FBekI7QUFDQUUsU0FBTUQsS0FBTixHQUFjLEtBQUtBLEtBQW5CO0FBQ0EsVUFBT0MsS0FBUDtBQUNBOzs7eUJBRVE7QUFDUixVQUFPLElBQUlKLE9BQUosQ0FBYSxLQUFLQyxJQUFsQixFQUF5QixLQUFLQyxXQUE5QixFQUE0QyxLQUFLQyxLQUFqRCxDQUFQO0FBQ0E7OztpQ0FFZ0JGLEksRUFBTztBQUN2QixPQUFLLEtBQUtBLElBQUwsS0FBY0EsSUFBbkIsRUFBMEIsT0FBTyxLQUFLRSxL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S0FBSzBDLEdBQUwsQ0FBVTFDLEtBQVYsSUFBb0IsQ0FBM0I7QUFDQTs7O3FCQUVJQSxLLEVBQVE7QUFDWixVQUFPLEtBQUswQyxHQUFMLENBQVUxQyxLQUFWLEtBQXFCLENBQTVCO0FBQ0E7OztxQkFFSUEsSyxFQUFRO0FBQ1osVUFBTyxLQUFLMEMsR0FBTCxDQUFVMUMsS0FBVixJQUFvQixDQUEzQjtBQUNBOzs7cUJBRUlBLEssRUFBUTtBQUNaLFVBQU8sS0FBSzBDLEdBQUwsQ0FBVTFDLEtBQVYsTUFBc0IsQ0FBN0I7QUFDQSIsImZpbGUiOiJJbnRlZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgREVGQVVMVF9ESVNQTEFZX0JBU0UgLCBaZXJvRGl2aXNpb25FcnJvciB9IGZyb20gJy4vJyA7XG5cbmltcG9ydCB7XG5cdHN0cmluZ2lmeSAsIGNvbnZlcnQgLCBfdHJpbV9wb3NpdGl2ZSAsXG5cdF9hbGxvYyAsIF9jb3B5ICwgX3plcm9zICxcblx0X2p6ICwgX2NtcCAsIF9lcSAsXG5cdF9hZGQgLCBfc3ViICwgX211bCAsIF9kaXYgLCBfcG93ZCAsXG5cdF9pbmNyZW1lbnQgLFxufSBmcm9tICdAYXVyZW9vbXMvanMtaW50ZWdlci1iaWctZW5kaWFuJyA7XG5cbmV4cG9ydCBjbGFzcyBJbnRlZ2VyIHtcblxuXHRjb25zdHJ1Y3RvciAoIGJhc2UgLCBpc19uZWdhdGl2ZSAsIGxpbWJzICkge1xuXHRcdHRoaXMuYmFzZSA9IGJhc2UgO1xuXHRcdHRoaXMuaXNfbmVnYXRpdmUgPSBpc19uZWdhdGl2ZSA7XG5cdFx0dGhpcy5saW1icyA9IGxpbWJzIDtcblx0fVxuXG5cdG1vdmUgKCBvdGhlciApIHtcblx0XHRvdGhlci5iYXNlID0gdGhpcy5iYXNlIDtcblx0XHRvdGhlci5pc19uZWdhdGl2ZSA9IHRoaXMuaXNfbmVnYXRpdmUgO1xuXHRcdG90aGVyLmxpbWJzID0gdGhpcy5saW1icyA7XG5cdFx0cmV0dXJuIG90aGVyIDtcblx0fVxuXG5cdGNvcHkgKCApIHtcblx0XHRyZXR1cm4gbmV3IEludGVnZXIoIHRoaXMuYmFzZSAsIHRoaXMuaXNfbmVnYXRpdmUgLCB0aGlzLmxpbWJzICkgO1xuXHR9XG5cblx0X2xpbWJzX2luX2Jhc2UgKCBiYXNlICkge1xuXHRcdGlmICggdGhpcy5iYXNlID09PSBiYXNlICkgcmV0dXJuIHRoaXMubGltYnMgO1xuXHRcdGVsc2UgcmV0dXJuIGNvbnZlcnQoIHRoaXMuYmFzZSAsIGJhc2UgLCB0aGlzLmxpbWJzICwgMCAsIHRoaXMubGltYnMubGVuZ3RoICkgO1xuXHR9XG5cblx0dG9TdHJpbmcgKCBiYXNlID0gREVGQVVMVF9ESVNQTEFZX0JBU0UgKSB7XG5cblx0XHRpZiAoIHRoaXMuaXN6ZXJvKCApICkgcmV0dXJuICcwJyA7XG5cblx0XHRjb25zdCBkaWdpdHMgPSBzdHJpbmdpZnkoIHRoaXMuYmFzZSAsIGJhc2UgLCB0aGlzLmxpbWJzICwgMCAsIHRoaXMubGltYnMubGVuZ3RoICkgO1xuXG5cdFx0cmV0dXJuIHRoaXMuaXNfbmVnYXRpdmUgPyAnLScgKyBkaWdpdHMgOiBkaWdpdHMgO1xuXG5cdH1cblxuXHRhZGQgKCBvdGhlciApIHtcblxuXHRcdGlmICggdGhpcy5pc19uZWdhdGl2ZSAhPT0gb3RoZXIuaXNfbmVnYXRpdmUgKSB7XG5cblx0XHRcdGlmICggb3RoZXIuaXNfbmVnYXRpdmUgKSByZXR1cm4gdGhpcy5zdWIoIG90aGVyLm9wcG9zaXRlKCkgKSA7XG5cblx0XHRcdGVsc2UgcmV0dXJuIG90aGVyLnN1YiggdGhpcy5vcHBvc2l0ZSgpICkgO1xuXG5cdFx0fVxuXG5cdFx0ZWxzZSB7XG5cblx0XHRcdGNvbnN0IHJlc3VsdF9pc19uZWdhdGl2ZSA9IHRoaXMuaXNfbmVnYXRpdmUgO1xuXHRcdFx0Y29uc3QgciA9IHRoaXMuYmFzZSA7XG5cblx0XHRcdGNvbnN0IGEgPSB0aGlzLmxpbWJzIDtcblxuXHRcdFx0Y29uc3QgYiA9IG90aGVyLl9saW1ic19pbl9iYXNlKCByICkgO1xuXG5cdFx0XHRjb25zdCBjID0gX3plcm9zKCBNYXRoLm1heCggYS5sZW5ndGggLCBiLmxlbmd0aCApICsgMSApIDtcblxuXHRcdFx0X2FkZCggciAsIGEgLCAwICwgYS5sZW5ndGggLCBiICwgMCAsIGIubGVuZ3RoICwgYyAsIDAgLCBjLmxlbmd0aCApIDtcblxuXHRcdFx0cmV0dXJuIG5ldyBJbnRlZ2VyKCByICwgcmVzdWx0X2lzX25lZ2F0aXZlICwgYyApIDtcblxuXHRcdH1cblxuXHR9XG5cblx0aWFkZCAoIG90aGVyICkge1xuXHRcdC8vIFRPRE8gb3B0aW1pemUgYnV0IGJlIGNhcmVmdWwgd2l0aCBzaWRlIGVmZmVjdHNcblx0XHRyZXR1cm4gdGhpcy5hZGQob3RoZXIpLm1vdmUodGhpcyk7XG5cdH1cblxuXHRzdWIgKCBvdGhlciApIHtcblxuXHRcdGlmICggdGhpcy5pc19uZWdhdGl2ZSAhPT0gb3RoZXIuaXNfbmVnYXRpdmUgKSB7XG5cblx0XHRcdGlmICggb3RoZXIuaXNfbmVnYXRpdmUgKSByZXR1cm4gdGhpcy5hZGQoIG90aGVyLm9wcG9zaXRlKCkgKSA7XG5cblx0XHRcdGVsc2UgcmV0dXJuIHRoaXMub3Bwb3NpdGUoKS5hZGQoIG90aGVyICkub3Bwb3NpdGUoKSA7XG5cblx0XHR9XG5cblx0XHRlbHNlIHtcblxuXHRcdFx0Ly8gLyFcXCBfc3ViIG5lZWRzIHxjfCA+PSB8YXwgPj0gfGJ8XG5cblx0XHRcdGNvbnN0IHIgPSB0aGlzLmJhc2UgO1xuXHRcdFx0Y29uc3QgYSA9IHRoaXMubGltYnMgO1xuXHRcdFx0Y29uc3QgYWogPSBhLmxlbmd0aCA7XG5cdFx0XHRjb25zdCBhaSA9IF90cmltX3Bvc2l0aXZlKCBhICwgMCAsIGFqICkgO1xuXG5cdFx0XHRpZiAoIGFpID49IGFqICkgcmV0dXJuIG90aGVyLm9wcG9zaXRlKCkgO1xuXG5cdFx0XHRjb25zdCBiID0gb3RoZXIuX2xpbWJzX2luX2Jhc2UoIHIgKSA7XG5cdFx0XHRjb25zdCBiaiA9IGIubGVuZ3RoIDtcblx0XHRcdGNvbnN0IGJpID0gX3RyaW1fcG9zaXRpdmUoIGIgLCAwICwgYmogKSA7XG5cblx0XHRcdGlmICggYmkgPj0gYmogKSByZXR1cm4gdGhpcy5jb3B5KCkgO1xuXG5cdFx0XHRpZiAoIF9jbXAoIGEgLCBhaSAsIGFqICwgYiAsIGJpICwgYmogKSA8IDAgKSB7XG5cblx0XHRcdFx0Y29uc3QgYyA9IF96ZXJvcyggYmogLSBiaSApIDtcblxuXHRcdFx0XHRfc3ViKCByICwgYiAsIGJpICwgYmogLCBhICwgYWkgLCBhaiAsIGMgLCAwICwgYy5sZW5ndGggKSA7XG5cblx0XHRcdFx0cmV0dXJuIG5ldyBJbnRlZ2VyKCByICwgfnRoaXMuaXNfbmVnYXRpdmUgLCBjICkgO1xuXHRcdFx0fVxuXG5cdFx0XHRlbHNlIHtcblxuXHRcdFx0XHRjb25zdCBjID0gX3plcm9zKCBhaiAtIGFpICkgO1xuXG5cdFx0XHRcdF9zdWIoIHIgLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICwgYyAsIDAgLCBjLmxlbmd0aCApIDtcblxuXHRcdFx0XHRyZXR1cm4gbmV3IEludGVnZXIoIHIgLCB0aGlzLmlzX25lZ2F0aXZlICwgYyApIDtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH1cblxuXHRpc3ViICggb3RoZXIgKSB7XG5cdFx0Ly8gVE9ETyBvcHRpbWl6ZSBidXQgYmUgY2FyZWZ1bCB3aXRoIHNpZGUgZWZmZWN0c1xuXHRcdHJldHVybiB0aGlzLnN1YihvdGhlcikubW92ZSh0aGlzKTtcblx0fVxuXG5cdG11bCAoIG90aGVyICkge1xuXG5cdFx0Y29uc3QgcmVzdWx0X2lzX25lZ2F0aXZlID0gdGhpcy5pc19uZWdhdGl2ZSBeIG90aGVyLmlzX25lZ2F0aXZlIDtcblx0XHRjb25zdCByID0gdGhpcy5iYXNlIDtcblxuXHRcdGNvbnN0IGEgPSB0aGlzLmxpbWJzIDtcblxuXHRcdGNvbnN0IGIgPSBvdGhlci5fbGltYnNfaW5fYmFzZSggciApIDtcblxuXHRcdGNvbnN0IGMgPSBfemVyb3MoIGEubGVuZ3RoICsgYi5sZW5ndGggKSA7XG5cblx0XHRfbXVsKCByICwgYSAsIDAgLCBhLmxlbmd0aCAsIGIgLCAwICwgYi5sZW5ndGggLCBjICwgMCAsIGMubGVuZ3RoICkgO1xuXG5cdFx0cmV0dXJuIG5ldyBJbnRlZ2VyKCByICwgcmVzdWx0X2lzX25lZ2F0aXZlICwgYyApIDtcblxuXHR9XG5cblx0aW11bCAoIG90aGVyICkge1xuXHRcdC8vIFRPRE8gb3B0aW1pemUgYnV0IGJlIGNhcmVmdWwgd2l0aCBzaWRlIGVmZmVjdHNcblx0XHRyZXR1cm4gdGhpcy5tdWwob3RoZXIpLm1vdmUodGhpcyk7XG5cdH1cblxuXHQvKipcblx0ICogQ29tcHV0ZXMgPGNvZGU+dGhpczwvY29kZT4gcmFpc2VkIHRvIHRoZSA8Y29kZT54PC9jb2RlPnRoIHBvd2VyLlxuXHQgKiA8Y29kZT54PC9jb2RlPiBpcyBhIGRvdWJsZSBzbWFsbGVyIG9yIGVxdWFsIHRvIDJeNTMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB4IFRoZSBwb3dlciB0byByYWlzZSA8Y29kZT50aGlzPC9jb2RlPiB0by5cblx0ICogQHJldHVybiB7SW50ZWdlcn0gPGNvZGU+dGhpcyBeIHg8L2NvZGU+XG5cdCAqL1xuXHRwb3cgKCB4ICkge1xuXG5cdFx0Y29uc3QgaXNfbmVnYXRpdmUgPSBNYXRoLnBvdyggdGhpcy5pc19uZWdhdGl2ZSAsIHggKSA7XG5cblx0XHRjb25zdCBhID0gdGhpcy5saW1icyA7XG5cdFx0Y29uc3QgYyA9IF96ZXJvcyggTWF0aC5tYXgoIDEgLCBhLmxlbmd0aCAqIHggKSApIDtcblxuXHRcdF9wb3dkKCB0aGlzLmJhc2UgLCB4ICwgYSAsIDAgLCBhLmxlbmd0aCAsIGMgLCAwICwgYy5sZW5ndGggKSA7XG5cblx0XHRyZXR1cm4gbmV3IEludGVnZXIoIHRoaXMuYmFzZSAsIGlzX25lZ2F0aXZlICwgYyApIDtcblxuXHR9XG5cblx0aXBvdyAoIHggKSB7XG5cdFx0Ly8gVE9ETyBvcHRpbWl6ZSBidXQgYmUgY2FyZWZ1bCB3aXRoIHNpZGUgZWZmZWN0c1xuXHRcdHJldHVybiB0aGlzLnBvdyh4KS5tb3ZlKHRoaXMpO1xuXHR9XG5cblx0c3F1YXJlICggKSB7XG5cdFx0Ly8gVE9ETyBvcHRpbWl6ZSBidXQgYmUgY2FyZWZ1bCB3aXRoIHNpZGUgZWZmZWN0c1xuXHRcdHJldHVybiB0aGlzLnBvdygyKTtcblx0fVxuXG5cdGlzcXVhcmUgKCApIHtcblx0XHQvLyBUT0RPIG9wdGltaXplIGJ1dCBiZSBjYXJlZnVsIHdpdGggc2lkZSBlZmZlY3RzXG5cdFx0cmV0dXJuIHRoaXMuaXBvdygyKTtcblx0fVxuXG5cdGRpdiAoIG90aGVyICkge1xuXHRcdHJldHVybiB0aGlzLmRpdm1vZCggb3RoZXIgKVswXSA7XG5cdH1cblxuXHRpZGl2ICggb3RoZXIgKSB7XG5cdFx0Ly8gVE9ETyBvcHRpbWl6ZSBidXQgYmUgY2FyZWZ1bCB3aXRoIHNpZGUgZWZmZWN0c1xuXHRcdHJldHVybiB0aGlzLmRpdihvdGhlcikubW92ZSh0aGlzKTtcblx0fVxuXG5cdG1vZCAoIG90aGVyICkge1xuXHRcdHJldHVybiB0aGlzLmRpdm1vZCggb3RoZXIgKVsxXSA7XG5cdH1cblxuXHRpbW9kICggb3RoZXIgKSB7XG5cdFx0Ly8gVE9ETyBvcHRpbWl6ZSBidXQgYmUgY2FyZWZ1bCB3aXRoIHNpZGUgZWZmZWN0c1xuXHRcdHJldHVybiB0aGlzLm1vZChvdGhlcikubW92ZSh0aGlzKTtcblx0fVxuXG5cdGRpdm1vZCAoIG90aGVyICkge1xuXG5cdFx0aWYgKCBvdGhlci5pc3plcm8oKSApIHRocm93IG5ldyBaZXJvRGl2aXNpb25FcnJvciggJ0ludGVnZXIgZGl2aXNpb24gYnkgemVybycgKSA7IC8vIG9wdGltaXplXG5cblx0XHRjb25zdCBxdW90aWVudF9pc19uZWdhdGl2ZSA9IHRoaXMuaXNfbmVnYXRpdmUgXiBvdGhlci5pc19uZWdhdGl2ZSA7XG5cdFx0Y29uc3QgciA9IHRoaXMuYmFzZSA7XG5cblx0XHQvLyBUaGUgdW5kZXJseWluZyBhbGdvcml0aG0gZG9lcyBub3QgYWxsb3cgbGVhZGluZyAwJ3Mgc28gd2UgdHJpbSB0aGVtLlxuXHRcdGNvbnN0IGxqID0gdGhpcy5saW1icy5sZW5ndGggO1xuXHRcdGNvbnN0IGxpID0gIF90cmltX3Bvc2l0aXZlKCB0aGlzLmxpbWJzICwgMCAsIGxqICkgO1xuXG5cdFx0Ly8gRGl2aWRlbmQgaXMgMFxuXHRcdGlmICggbGkgPj0gbGogKSByZXR1cm4gWyBuZXcgSW50ZWdlciggdGhpcy5iYXNlICwgMCAsIFsgMCBdICkgLCBuZXcgSW50ZWdlciggdGhpcy5iYXNlICwgMCAsIFsgMCBdICkgXSA7XG5cblx0XHQvLyBEaXZpZGVuZCAoJiBSZW1haW5kZXIpXG5cdFx0Y29uc3QgRCA9IF9hbGxvYyggbGogLSBsaSApIDtcblx0XHRfY29weSggdGhpcy5saW1icyAsIGxpICwgbGogLCBEICwgMCApIDtcblxuXHRcdC8vIERpdmlzb3Jcblx0XHRjb25zdCBkID0gb3RoZXIuX2xpbWJzX2luX2Jhc2UoIHIgKSA7XG5cdFx0Y29uc3QgZGogPSBkLmxlbmd0aCA7XG5cdFx0Y29uc3QgZGkgPSBfdHJpbV9wb3NpdGl2ZSggZCAsIDAgLCBkaiApIDsgLy8gZGkgPCBkaiBiZWNhdXNlIGQgIT0gMFxuXG5cdFx0Ly8gUXVvdGllbnRcblx0XHRjb25zdCBxID0gX3plcm9zKCBELmxlbmd0aCApIDtcblxuXHRcdF9kaXYoIHIgLCBEICwgMCAsIEQubGVuZ3RoICwgZCAsIGRpICwgZGogLCBxICwgMCAsIHEubGVuZ3RoICkgO1xuXG5cdFx0Y29uc3QgUSA9IG5ldyBJbnRlZ2VyKCByICwgcXVvdGllbnRfaXNfbmVnYXRpdmUgLCBxICkgOyAvLyBxdW90aWVudFxuXHRcdGNvbnN0IFIgPSBuZXcgSW50ZWdlciggciAsIDAgLCBEICkgOyAgICAgICAgICAgICAgICAgICAgLy8gcmVtYWluZGVyXG5cblx0XHRpZiAoICh0aGlzLmlzX25lZ2F0aXZlIHx8IG90aGVyLmlzX25lZ2F0aXZlICkgJiYgIV9qeiggRCAsIDAgLCBELmxlbmd0aCApICkge1xuXG5cdFx0XHRpZiAoIG90aGVyLmlzX25lZ2F0aXZlICkge1xuXG5cdFx0XHRcdGlmICggIXRoaXMuaXNfbmVnYXRpdmUgKSB7XG5cdFx0XHRcdFx0X2luY3JlbWVudCggciAsIHEgLCAwICwgcS5sZW5ndGggKSA7XG5cdFx0XHRcdFx0Ui5pYWRkKCBvdGhlciApIDsgLy8gVE9ETyBvcHRpbWl6ZVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0Ui5uZWdhdGUoKTsgLy8gVE9ETyBvcHRpbWl6ZVxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdF9pbmNyZW1lbnQoIHIgLCBxICwgMCAsIHEubGVuZ3RoICkgO1xuXHRcdFx0XHRSLm5lZ2F0ZSgpLmlhZGQoIG90aGVyICkgOyAvLyBUT0RPIG9wdGltaXplXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gWyBRICwgUiBdIDtcblxuXHR9XG5cblx0b3Bwb3NpdGUgKCApIHtcblx0XHRyZXR1cm4gbmV3IEludGVnZXIoIHRoaXMuYmFzZSAsIH50aGlzLmlzX25lZ2F0aXZlICwgdGhpcy5saW1icyApIDtcblx0fVxuXG5cdG5lZ2F0ZSAoICkge1xuXHRcdC8vIFRPRE8gb3B0aW1pemUgYnV0IGJlIGNhcmVmdWwgd2l0aCBzaWRlIGVmZmVjdHNcblx0XHRyZXR1cm4gdGhpcy5vcHBvc2l0ZSgpLm1vdmUodGhpcyk7XG5cdH1cblxuXHRzaWduICggKSB7XG5cdFx0cmV0dXJuIHRoaXMuaXN6ZXJvKCkgPyAwIDogdGhpcy5pc19uZWdhdGl2ZSA/IC0xIDogMSA7XG5cdH1cblxuXHRpc3plcm8gKCApIHtcblx0XHRyZXR1cm4gX2p6KCB0aGlzLmxpbWJzICwgMCAsIHRoaXMubGltYnMubGVuZ3RoICkgO1xuXHR9XG5cblx0aXNvbmUgKCApIHtcblx0XHRpZiAoIHRoaXMuaXNfbmVnYXRpdmUgKSByZXR1cm4gZmFsc2UgO1xuXHRcdHJldHVybiBfZXEoIHRoaXMubGltYnMgLCAwICwgdGhpcy5saW1icy5sZW5ndGggLCBbIDEgXSAsIDAgLCAxICkgO1xuXHR9XG5cblx0bm9uemVybyAoICkge1xuXHRcdHJldHVybiAhdGhpcy5pc3plcm8oKTtcblx0fVxuXG5cdGJpbiAoICkge1xuXHRcdHJldHVybiB0aGlzLnRvU3RyaW5nKCAyICkgO1xuXHR9XG5cblx0b2N0ICggKSB7XG5cdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoIDggKSA7XG5cdH1cblxuXHRoZXggKCApIHtcblx0XHRyZXR1cm4gdGhpcy50b1N0cmluZyggMTYgKSA7XG5cdH1cblxuXHRkaWdpdHMgKCBiYXNlID0gREVGQVVMVF9ESVNQTEFZX0JBU0UgKSB7XG5cdFx0cmV0dXJuIGNvbnZlcnQoIHRoaXMuYmFzZSAsIGJhc2UgLCB0aGlzLmxpbWJzICwgMCAsIHRoaXMubGltYnMubGVuZ3RoICkucmV2ZXJzZSggKSA7XG5cdH1cblxuXHRiaXRzICggKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGlnaXRzKCAyICkgO1xuXHR9XG5cblx0ZGl2aWRlcyAoIG90aGVyICkge1xuXHRcdHJldHVybiBvdGhlci5tb2QoIHRoaXMgKS5pc3plcm8oICkgO1xuXHR9XG5cblx0ZGl2aWRlX2tub3dpbmdfZGl2aXNpYmxlX2J5ICggb3RoZXIgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGl2KCBvdGhlciApIDtcblx0fVxuXG5cdGNtcCAoIG90aGVyICkge1xuXG5cdFx0aWYgKCB0aGlzLmlzemVybyggKSApIHtcblx0XHRcdGlmICggb3RoZXIuaXN6ZXJvKCApICkgICAgICAgIHJldHVybiAgMCA7XG5cdFx0XHRlbHNlIGlmICggb3RoZXIuaXNfbmVnYXRpdmUgKSByZXR1cm4gIDEgO1xuXHRcdFx0ZWxzZSAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xIDtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuaXNfbmVnYXRpdmUgPCBvdGhlci5pc19uZWdhdGl2ZSApIHJldHVybiAtMSA7XG5cdFx0aWYgKCB0aGlzLmlzX25lZ2F0aXZlID4gb3RoZXIuaXNfbmVnYXRpdmUgKSByZXR1cm4gIDEgO1xuXG5cdFx0Y29uc3QgYSA9IHRoaXMubGltYnMgO1xuXHRcdGNvbnN0IGIgPSBvdGhlci5fbGltYnNfaW5fYmFzZSggdGhpcy5iYXNlICkgO1xuXG5cdFx0cmV0dXJuIF9jbXAoIGEgLCAwICwgYS5sZW5ndGggLCBiICwgMCAsIGIubGVuZ3RoICkgO1xuXG5cdH1cblxuXHRlcSAoIG90aGVyICkge1xuXHRcdHJldHVybiB0aGlzLmNtcCggb3RoZXIgKSA9PT0gMCA7XG5cdH1cblxuXHRnZSAoIG90aGVyICkge1xuXHRcdHJldHVybiB0aGlzLmNtcCggb3RoZXIgKSA+PSAwIDtcblx0fVxuXG5cdGd0ICggb3RoZXIgKSB7XG5cdFx0cmV0dXJuIHRoaXMuY21wKCBvdGhlciApID4gMCA7XG5cdH1cblxuXHRsZSAoIG90aGVyICkge1xuXHRcdHJldHVybiB0aGlzLmNtcCggb3RoZXIgKSA8PSAwIDtcblx0fVxuXG5cdGx0ICggb3RoZXIgKSB7XG5cdFx0cmV0dXJuIHRoaXMuY21wKCBvdGhlciApIDwgMCA7XG5cdH1cblxuXHRuZSAoIG90aGVyICkge1xuXHRcdHJldHVybiB0aGlzLmNtcCggb3RoZXIgKSAhPT0gMCA7XG5cdH1cblxufVxuIl19