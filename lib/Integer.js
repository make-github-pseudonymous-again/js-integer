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

			var is_negative = this.is_negative & x & 1 ? -1 : 0;

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

			// TODO optimize with _trim_positive

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnRlZ2VyLmpzIl0sIm5hbWVzIjpbIkludGVnZXIiLCJiYXNlIiwiaXNfbmVnYXRpdmUiLCJsaW1icyIsIm90aGVyIiwibGVuZ3RoIiwiaXN6ZXJvIiwiZGlnaXRzIiwic3ViIiwib3Bwb3NpdGUiLCJyZXN1bHRfaXNfbmVnYXRpdmUiLCJyIiwiYSIsImIiLCJfbGltYnNfaW5fYmFzZSIsImMiLCJNYXRoIiwibWF4IiwiYWRkIiwibW92ZSIsImFqIiwiYWkiLCJiaiIsImJpIiwiY29weSIsIm11bCIsIngiLCJwb3ciLCJpcG93IiwiZGl2bW9kIiwiZGl2IiwibW9kIiwicXVvdGllbnRfaXNfbmVnYXRpdmUiLCJsaiIsImxpIiwiRCIsImQiLCJkaiIsImRpIiwicSIsIlEiLCJSIiwiaWFkZCIsIm5lZ2F0ZSIsInRvU3RyaW5nIiwicmV2ZXJzZSIsImNtcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7SUFRYUEsTyxXQUFBQSxPO0FBRVosa0JBQWNDLElBQWQsRUFBcUJDLFdBQXJCLEVBQW1DQyxLQUFuQyxFQUEyQztBQUFBOztBQUMxQyxPQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLE9BQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBOzs7O3VCQUVNQyxLLEVBQVE7QUFDZEEsU0FBTUgsSUFBTixHQUFhLEtBQUtBLElBQWxCO0FBQ0FHLFNBQU1GLFdBQU4sR0FBb0IsS0FBS0EsV0FBekI7QUFDQUUsU0FBTUQsS0FBTixHQUFjLEtBQUtBLEtBQW5CO0FBQ0EsVUFBT0MsS0FBUDtBQUNBOzs7eUJBRVE7QUFDUixVQUFPLElBQUlKLE9BQUosQ0FBYSxLQUFLQyxJQUFsQixFQUF5QixLQUFLQyxXQUE5QixFQUE0QyxLQUFLQyxLQUFqRCxDQUFQO0FBQ0E7OztpQ0FFZ0JGLEksRUFBTztBQUN2QixPQUFLLEtBQUtBLElBQUwsS0FBY0EsSUFBbkIsRUFBMEIsT0FBTyxLQUFLRSxL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QkFFSUEsSyxFQUFRO0FBQ1osVUFBTyxLQUFLMEMsR0FBTCxDQUFVMUMsS0FBVixJQUFvQixDQUEzQjtBQUNBOzs7cUJBRUlBLEssRUFBUTtBQUNaLFVBQU8sS0FBSzBDLEdBQUwsQ0FBVTFDLEtBQVYsS0FBcUIsQ0FBNUI7QUFDQTs7O3FCQUVJQSxLLEVBQVE7QUFDWixVQUFPLEtBQUswQyxHQUFMLENBQVUxQyxLQUFWLElBQW9CLENBQTNCO0FBQ0E7OztxQkFFSUEsSyxFQUFRO0FBQ1osVUFBTyxLQUFLMEMsR0FBTCxDQUFVMUMsS0FBVixNQUFzQixDQUE3QjtBQUNBIiwiZmlsZSI6IkludGVnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBERUZBVUxUX0RJU1BMQVlfQkFTRSAsIFplcm9EaXZpc2lvbkVycm9yIH0gZnJvbSAnLi8nIDtcblxuaW1wb3J0IHtcblx0c3RyaW5naWZ5ICwgY29udmVydCAsIF90cmltX3Bvc2l0aXZlICxcblx0X2FsbG9jICwgX2NvcHkgLCBfemVyb3MgLFxuXHRfanogLCBfY21wICwgX2VxICxcblx0X2FkZCAsIF9zdWIgLCBfbXVsICwgX2RpdiAsIF9wb3dkICxcblx0X2luY3JlbWVudCAsXG59IGZyb20gJ0BhdXJlb29tcy9qcy1pbnRlZ2VyLWJpZy1lbmRpYW4nIDtcblxuZXhwb3J0IGNsYXNzIEludGVnZXIge1xuXG5cdGNvbnN0cnVjdG9yICggYmFzZSAsIGlzX25lZ2F0aXZlICwgbGltYnMgKSB7XG5cdFx0dGhpcy5iYXNlID0gYmFzZSA7XG5cdFx0dGhpcy5pc19uZWdhdGl2ZSA9IGlzX25lZ2F0aXZlIDtcblx0XHR0aGlzLmxpbWJzID0gbGltYnMgO1xuXHR9XG5cblx0bW92ZSAoIG90aGVyICkge1xuXHRcdG90aGVyLmJhc2UgPSB0aGlzLmJhc2UgO1xuXHRcdG90aGVyLmlzX25lZ2F0aXZlID0gdGhpcy5pc19uZWdhdGl2ZSA7XG5cdFx0b3RoZXIubGltYnMgPSB0aGlzLmxpbWJzIDtcblx0XHRyZXR1cm4gb3RoZXIgO1xuXHR9XG5cblx0Y29weSAoICkge1xuXHRcdHJldHVybiBuZXcgSW50ZWdlciggdGhpcy5iYXNlICwgdGhpcy5pc19uZWdhdGl2ZSAsIHRoaXMubGltYnMgKSA7XG5cdH1cblxuXHRfbGltYnNfaW5fYmFzZSAoIGJhc2UgKSB7XG5cdFx0aWYgKCB0aGlzLmJhc2UgPT09IGJhc2UgKSByZXR1cm4gdGhpcy5saW1icyA7XG5cdFx0ZWxzZSByZXR1cm4gY29udmVydCggdGhpcy5iYXNlICwgYmFzZSAsIHRoaXMubGltYnMgLCAwICwgdGhpcy5saW1icy5sZW5ndGggKSA7XG5cdH1cblxuXHR0b1N0cmluZyAoIGJhc2UgPSBERUZBVUxUX0RJU1BMQVlfQkFTRSApIHtcblxuXHRcdGlmICggdGhpcy5pc3plcm8oICkgKSByZXR1cm4gJzAnIDtcblxuXHRcdGNvbnN0IGRpZ2l0cyA9IHN0cmluZ2lmeSggdGhpcy5iYXNlICwgYmFzZSAsIHRoaXMubGltYnMgLCAwICwgdGhpcy5saW1icy5sZW5ndGggKSA7XG5cblx0XHRyZXR1cm4gdGhpcy5pc19uZWdhdGl2ZSA/ICctJyArIGRpZ2l0cyA6IGRpZ2l0cyA7XG5cblx0fVxuXG5cdGFkZCAoIG90aGVyICkge1xuXG5cdFx0aWYgKCB0aGlzLmlzX25lZ2F0aXZlICE9PSBvdGhlci5pc19uZWdhdGl2ZSApIHtcblxuXHRcdFx0aWYgKCBvdGhlci5pc19uZWdhdGl2ZSApIHJldHVybiB0aGlzLnN1Yiggb3RoZXIub3Bwb3NpdGUoKSApIDtcblxuXHRcdFx0ZWxzZSByZXR1cm4gb3RoZXIuc3ViKCB0aGlzLm9wcG9zaXRlKCkgKSA7XG5cblx0XHR9XG5cblx0XHRlbHNlIHtcblxuXHRcdFx0Y29uc3QgcmVzdWx0X2lzX25lZ2F0aXZlID0gdGhpcy5pc19uZWdhdGl2ZSA7XG5cdFx0XHRjb25zdCByID0gdGhpcy5iYXNlIDtcblxuXHRcdFx0Y29uc3QgYSA9IHRoaXMubGltYnMgO1xuXG5cdFx0XHRjb25zdCBiID0gb3RoZXIuX2xpbWJzX2luX2Jhc2UoIHIgKSA7XG5cblx0XHRcdGNvbnN0IGMgPSBfemVyb3MoIE1hdGgubWF4KCBhLmxlbmd0aCAsIGIubGVuZ3RoICkgKyAxICkgO1xuXG5cdFx0XHRfYWRkKCByICwgYSAsIDAgLCBhLmxlbmd0aCAsIGIgLCAwICwgYi5sZW5ndGggLCBjICwgMCAsIGMubGVuZ3RoICkgO1xuXG5cdFx0XHRyZXR1cm4gbmV3IEludGVnZXIoIHIgLCByZXN1bHRfaXNfbmVnYXRpdmUgLCBjICkgO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRpYWRkICggb3RoZXIgKSB7XG5cdFx0Ly8gVE9ETyBvcHRpbWl6ZSBidXQgYmUgY2FyZWZ1bCB3aXRoIHNpZGUgZWZmZWN0c1xuXHRcdHJldHVybiB0aGlzLmFkZChvdGhlcikubW92ZSh0aGlzKTtcblx0fVxuXG5cdHN1YiAoIG90aGVyICkge1xuXG5cdFx0aWYgKCB0aGlzLmlzX25lZ2F0aXZlICE9PSBvdGhlci5pc19uZWdhdGl2ZSApIHtcblxuXHRcdFx0aWYgKCBvdGhlci5pc19uZWdhdGl2ZSApIHJldHVybiB0aGlzLmFkZCggb3RoZXIub3Bwb3NpdGUoKSApIDtcblxuXHRcdFx0ZWxzZSByZXR1cm4gdGhpcy5vcHBvc2l0ZSgpLmFkZCggb3RoZXIgKS5vcHBvc2l0ZSgpIDtcblxuXHRcdH1cblxuXHRcdGVsc2Uge1xuXG5cdFx0XHQvLyAvIVxcIF9zdWIgbmVlZHMgfGN8ID49IHxhfCA+PSB8YnxcblxuXHRcdFx0Y29uc3QgciA9IHRoaXMuYmFzZSA7XG5cdFx0XHRjb25zdCBhID0gdGhpcy5saW1icyA7XG5cdFx0XHRjb25zdCBhaiA9IGEubGVuZ3RoIDtcblx0XHRcdGNvbnN0IGFpID0gX3RyaW1fcG9zaXRpdmUoIGEgLCAwICwgYWogKSA7XG5cblx0XHRcdGlmICggYWkgPj0gYWogKSByZXR1cm4gb3RoZXIub3Bwb3NpdGUoKSA7XG5cblx0XHRcdGNvbnN0IGIgPSBvdGhlci5fbGltYnNfaW5fYmFzZSggciApIDtcblx0XHRcdGNvbnN0IGJqID0gYi5sZW5ndGggO1xuXHRcdFx0Y29uc3QgYmkgPSBfdHJpbV9wb3NpdGl2ZSggYiAsIDAgLCBiaiApIDtcblxuXHRcdFx0aWYgKCBiaSA+PSBiaiApIHJldHVybiB0aGlzLmNvcHkoKSA7XG5cblx0XHRcdGlmICggX2NtcCggYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiApIDwgMCApIHtcblxuXHRcdFx0XHRjb25zdCBjID0gX3plcm9zKCBiaiAtIGJpICkgO1xuXG5cdFx0XHRcdF9zdWIoIHIgLCBiICwgYmkgLCBiaiAsIGEgLCBhaSAsIGFqICwgYyAsIDAgLCBjLmxlbmd0aCApIDtcblxuXHRcdFx0XHRyZXR1cm4gbmV3IEludGVnZXIoIHIgLCB+dGhpcy5pc19uZWdhdGl2ZSAsIGMgKSA7XG5cdFx0XHR9XG5cblx0XHRcdGVsc2Uge1xuXG5cdFx0XHRcdGNvbnN0IGMgPSBfemVyb3MoIGFqIC0gYWkgKSA7XG5cblx0XHRcdFx0X3N1YiggciAsIGEgLCBhaSAsIGFqICwgYiAsIGJpICwgYmogLCBjICwgMCAsIGMubGVuZ3RoICkgO1xuXG5cdFx0XHRcdHJldHVybiBuZXcgSW50ZWdlciggciAsIHRoaXMuaXNfbmVnYXRpdmUgLCBjICkgO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fVxuXG5cdGlzdWIgKCBvdGhlciApIHtcblx0XHQvLyBUT0RPIG9wdGltaXplIGJ1dCBiZSBjYXJlZnVsIHdpdGggc2lkZSBlZmZlY3RzXG5cdFx0cmV0dXJuIHRoaXMuc3ViKG90aGVyKS5tb3ZlKHRoaXMpO1xuXHR9XG5cblx0bXVsICggb3RoZXIgKSB7XG5cblx0XHRjb25zdCByZXN1bHRfaXNfbmVnYXRpdmUgPSB0aGlzLmlzX25lZ2F0aXZlIF4gb3RoZXIuaXNfbmVnYXRpdmUgO1xuXHRcdGNvbnN0IHIgPSB0aGlzLmJhc2UgO1xuXG5cdFx0Y29uc3QgYSA9IHRoaXMubGltYnMgO1xuXG5cdFx0Y29uc3QgYiA9IG90aGVyLl9saW1ic19pbl9iYXNlKCByICkgO1xuXG5cdFx0Y29uc3QgYyA9IF96ZXJvcyggYS5sZW5ndGggKyBiLmxlbmd0aCApIDtcblxuXHRcdF9tdWwoIHIgLCBhICwgMCAsIGEubGVuZ3RoICwgYiAsIDAgLCBiLmxlbmd0aCAsIGMgLCAwICwgYy5sZW5ndGggKSA7XG5cblx0XHRyZXR1cm4gbmV3IEludGVnZXIoIHIgLCByZXN1bHRfaXNfbmVnYXRpdmUgLCBjICkgO1xuXG5cdH1cblxuXHRpbXVsICggb3RoZXIgKSB7XG5cdFx0Ly8gVE9ETyBvcHRpbWl6ZSBidXQgYmUgY2FyZWZ1bCB3aXRoIHNpZGUgZWZmZWN0c1xuXHRcdHJldHVybiB0aGlzLm11bChvdGhlcikubW92ZSh0aGlzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb21wdXRlcyA8Y29kZT50aGlzPC9jb2RlPiByYWlzZWQgdG8gdGhlIDxjb2RlPng8L2NvZGU+dGggcG93ZXIuXG5cdCAqIDxjb2RlPng8L2NvZGU+IGlzIGEgZG91YmxlIHNtYWxsZXIgb3IgZXF1YWwgdG8gMl41My5cblx0ICpcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHggVGhlIHBvd2VyIHRvIHJhaXNlIDxjb2RlPnRoaXM8L2NvZGU+IHRvLlxuXHQgKiBAcmV0dXJuIHtJbnRlZ2VyfSA8Y29kZT50aGlzIF4geDwvY29kZT5cblx0ICovXG5cdHBvdyAoIHggKSB7XG5cblx0XHRjb25zdCBpc19uZWdhdGl2ZSA9IHRoaXMuaXNfbmVnYXRpdmUgJiB4ICYgMSA/IC0xIDogMCA7XG5cblx0XHRjb25zdCBhID0gdGhpcy5saW1icyA7XG5cdFx0Y29uc3QgYyA9IF96ZXJvcyggTWF0aC5tYXgoIDEgLCBhLmxlbmd0aCAqIHggKSApIDtcblxuXHRcdF9wb3dkKCB0aGlzLmJhc2UgLCB4ICwgYSAsIDAgLCBhLmxlbmd0aCAsIGMgLCAwICwgYy5sZW5ndGggKSA7XG5cblx0XHRyZXR1cm4gbmV3IEludGVnZXIoIHRoaXMuYmFzZSAsIGlzX25lZ2F0aXZlICwgYyApIDtcblxuXHR9XG5cblx0aXBvdyAoIHggKSB7XG5cdFx0Ly8gVE9ETyBvcHRpbWl6ZSBidXQgYmUgY2FyZWZ1bCB3aXRoIHNpZGUgZWZmZWN0c1xuXHRcdHJldHVybiB0aGlzLnBvdyh4KS5tb3ZlKHRoaXMpO1xuXHR9XG5cblx0c3F1YXJlICggKSB7XG5cdFx0Ly8gVE9ETyBvcHRpbWl6ZSBidXQgYmUgY2FyZWZ1bCB3aXRoIHNpZGUgZWZmZWN0c1xuXHRcdHJldHVybiB0aGlzLnBvdygyKTtcblx0fVxuXG5cdGlzcXVhcmUgKCApIHtcblx0XHQvLyBUT0RPIG9wdGltaXplIGJ1dCBiZSBjYXJlZnVsIHdpdGggc2lkZSBlZmZlY3RzXG5cdFx0cmV0dXJuIHRoaXMuaXBvdygyKTtcblx0fVxuXG5cdGRpdiAoIG90aGVyICkge1xuXHRcdHJldHVybiB0aGlzLmRpdm1vZCggb3RoZXIgKVswXSA7XG5cdH1cblxuXHRpZGl2ICggb3RoZXIgKSB7XG5cdFx0Ly8gVE9ETyBvcHRpbWl6ZSBidXQgYmUgY2FyZWZ1bCB3aXRoIHNpZGUgZWZmZWN0c1xuXHRcdHJldHVybiB0aGlzLmRpdihvdGhlcikubW92ZSh0aGlzKTtcblx0fVxuXG5cdG1vZCAoIG90aGVyICkge1xuXHRcdHJldHVybiB0aGlzLmRpdm1vZCggb3RoZXIgKVsxXSA7XG5cdH1cblxuXHRpbW9kICggb3RoZXIgKSB7XG5cdFx0Ly8gVE9ETyBvcHRpbWl6ZSBidXQgYmUgY2FyZWZ1bCB3aXRoIHNpZGUgZWZmZWN0c1xuXHRcdHJldHVybiB0aGlzLm1vZChvdGhlcikubW92ZSh0aGlzKTtcblx0fVxuXG5cdGRpdm1vZCAoIG90aGVyICkge1xuXG5cdFx0aWYgKCBvdGhlci5pc3plcm8oKSApIHRocm93IG5ldyBaZXJvRGl2aXNpb25FcnJvciggJ0ludGVnZXIgZGl2aXNpb24gYnkgemVybycgKSA7IC8vIG9wdGltaXplXG5cblx0XHRjb25zdCBxdW90aWVudF9pc19uZWdhdGl2ZSA9IHRoaXMuaXNfbmVnYXRpdmUgXiBvdGhlci5pc19uZWdhdGl2ZSA7XG5cdFx0Y29uc3QgciA9IHRoaXMuYmFzZSA7XG5cblx0XHQvLyBUaGUgdW5kZXJseWluZyBhbGdvcml0aG0gZG9lcyBub3QgYWxsb3cgbGVhZGluZyAwJ3Mgc28gd2UgdHJpbSB0aGVtLlxuXHRcdGNvbnN0IGxqID0gdGhpcy5saW1icy5sZW5ndGggO1xuXHRcdGNvbnN0IGxpID0gIF90cmltX3Bvc2l0aXZlKCB0aGlzLmxpbWJzICwgMCAsIGxqICkgO1xuXG5cdFx0Ly8gRGl2aWRlbmQgaXMgMFxuXHRcdGlmICggbGkgPj0gbGogKSByZXR1cm4gWyBuZXcgSW50ZWdlciggdGhpcy5iYXNlICwgMCAsIFsgMCBdICkgLCBuZXcgSW50ZWdlciggdGhpcy5iYXNlICwgMCAsIFsgMCBdICkgXSA7XG5cblx0XHQvLyBEaXZpZGVuZCAoJiBSZW1haW5kZXIpXG5cdFx0Y29uc3QgRCA9IF9hbGxvYyggbGogLSBsaSApIDtcblx0XHRfY29weSggdGhpcy5saW1icyAsIGxpICwgbGogLCBEICwgMCApIDtcblxuXHRcdC8vIERpdmlzb3Jcblx0XHRjb25zdCBkID0gb3RoZXIuX2xpbWJzX2luX2Jhc2UoIHIgKSA7XG5cdFx0Y29uc3QgZGogPSBkLmxlbmd0aCA7XG5cdFx0Y29uc3QgZGkgPSBfdHJpbV9wb3NpdGl2ZSggZCAsIDAgLCBkaiApIDsgLy8gZGkgPCBkaiBiZWNhdXNlIGQgIT0gMFxuXG5cdFx0Ly8gUXVvdGllbnRcblx0XHRjb25zdCBxID0gX3plcm9zKCBELmxlbmd0aCApIDtcblxuXHRcdF9kaXYoIHIgLCBEICwgMCAsIEQubGVuZ3RoICwgZCAsIGRpICwgZGogLCBxICwgMCAsIHEubGVuZ3RoICkgO1xuXG5cdFx0Y29uc3QgUSA9IG5ldyBJbnRlZ2VyKCByICwgcXVvdGllbnRfaXNfbmVnYXRpdmUgLCBxICkgOyAvLyBxdW90aWVudFxuXHRcdGNvbnN0IFIgPSBuZXcgSW50ZWdlciggciAsIDAgLCBEICkgOyAgICAgICAgICAgICAgICAgICAgLy8gcmVtYWluZGVyXG5cblx0XHRpZiAoICh0aGlzLmlzX25lZ2F0aXZlIHx8IG90aGVyLmlzX25lZ2F0aXZlICkgJiYgIV9qeiggRCAsIDAgLCBELmxlbmd0aCApICkge1xuXG5cdFx0XHRpZiAoIG90aGVyLmlzX25lZ2F0aXZlICkge1xuXG5cdFx0XHRcdGlmICggIXRoaXMuaXNfbmVnYXRpdmUgKSB7XG5cdFx0XHRcdFx0X2luY3JlbWVudCggciAsIHEgLCAwICwgcS5sZW5ndGggKSA7XG5cdFx0XHRcdFx0Ui5pYWRkKCBvdGhlciApIDsgLy8gVE9ETyBvcHRpbWl6ZVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0Ui5uZWdhdGUoKTsgLy8gVE9ETyBvcHRpbWl6ZVxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdF9pbmNyZW1lbnQoIHIgLCBxICwgMCAsIHEubGVuZ3RoICkgO1xuXHRcdFx0XHRSLm5lZ2F0ZSgpLmlhZGQoIG90aGVyICkgOyAvLyBUT0RPIG9wdGltaXplXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gWyBRICwgUiBdIDtcblxuXHR9XG5cblx0b3Bwb3NpdGUgKCApIHtcblx0XHRyZXR1cm4gbmV3IEludGVnZXIoIHRoaXMuYmFzZSAsIH50aGlzLmlzX25lZ2F0aXZlICwgdGhpcy5saW1icyApIDtcblx0fVxuXG5cdG5lZ2F0ZSAoICkge1xuXHRcdC8vIFRPRE8gb3B0aW1pemUgYnV0IGJlIGNhcmVmdWwgd2l0aCBzaWRlIGVmZmVjdHNcblx0XHRyZXR1cm4gdGhpcy5vcHBvc2l0ZSgpLm1vdmUodGhpcyk7XG5cdH1cblxuXHRzaWduICggKSB7XG5cdFx0cmV0dXJuIHRoaXMuaXN6ZXJvKCkgPyAwIDogdGhpcy5pc19uZWdhdGl2ZSA/IC0xIDogMSA7XG5cdH1cblxuXHRpc3plcm8gKCApIHtcblx0XHRyZXR1cm4gX2p6KCB0aGlzLmxpbWJzICwgMCAsIHRoaXMubGltYnMubGVuZ3RoICkgO1xuXHR9XG5cblx0aXNvbmUgKCApIHtcblx0XHRpZiAoIHRoaXMuaXNfbmVnYXRpdmUgKSByZXR1cm4gZmFsc2UgO1xuXHRcdHJldHVybiBfZXEoIHRoaXMubGltYnMgLCAwICwgdGhpcy5saW1icy5sZW5ndGggLCBbIDEgXSAsIDAgLCAxICkgO1xuXHR9XG5cblx0bm9uemVybyAoICkge1xuXHRcdHJldHVybiAhdGhpcy5pc3plcm8oKTtcblx0fVxuXG5cdGJpbiAoICkge1xuXHRcdHJldHVybiB0aGlzLnRvU3RyaW5nKCAyICkgO1xuXHR9XG5cblx0b2N0ICggKSB7XG5cdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoIDggKSA7XG5cdH1cblxuXHRoZXggKCApIHtcblx0XHRyZXR1cm4gdGhpcy50b1N0cmluZyggMTYgKSA7XG5cdH1cblxuXHRkaWdpdHMgKCBiYXNlID0gREVGQVVMVF9ESVNQTEFZX0JBU0UgKSB7XG5cdFx0cmV0dXJuIGNvbnZlcnQoIHRoaXMuYmFzZSAsIGJhc2UgLCB0aGlzLmxpbWJzICwgMCAsIHRoaXMubGltYnMubGVuZ3RoICkucmV2ZXJzZSggKSA7XG5cdH1cblxuXHRiaXRzICggKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGlnaXRzKCAyICkgO1xuXHR9XG5cblx0ZGl2aWRlcyAoIG90aGVyICkge1xuXHRcdHJldHVybiBvdGhlci5tb2QoIHRoaXMgKS5pc3plcm8oICkgO1xuXHR9XG5cblx0ZGl2aWRlX2tub3dpbmdfZGl2aXNpYmxlX2J5ICggb3RoZXIgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGl2KCBvdGhlciApIDtcblx0fVxuXG5cdGNtcCAoIG90aGVyICkge1xuXG5cdFx0Ly8gVE9ETyBvcHRpbWl6ZSB3aXRoIF90cmltX3Bvc2l0aXZlXG5cblx0XHRpZiAoIHRoaXMuaXN6ZXJvKCApICkge1xuXHRcdFx0aWYgKCBvdGhlci5pc3plcm8oICkgKSAgICAgICAgcmV0dXJuICAwIDtcblx0XHRcdGVsc2UgaWYgKCBvdGhlci5pc19uZWdhdGl2ZSApIHJldHVybiAgMSA7XG5cdFx0XHRlbHNlICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTEgO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5pc19uZWdhdGl2ZSA8IG90aGVyLmlzX25lZ2F0aXZlICkgcmV0dXJuIC0xIDtcblx0XHRpZiAoIHRoaXMuaXNfbmVnYXRpdmUgPiBvdGhlci5pc19uZWdhdGl2ZSApIHJldHVybiAgMSA7XG5cblx0XHRjb25zdCBhID0gdGhpcy5saW1icyA7XG5cdFx0Y29uc3QgYiA9IG90aGVyLl9saW1ic19pbl9iYXNlKCB0aGlzLmJhc2UgKSA7XG5cblx0XHRyZXR1cm4gX2NtcCggYSAsIDAgLCBhLmxlbmd0aCAsIGIgLCAwICwgYi5sZW5ndGggKSA7XG5cblx0fVxuXG5cdGVxICggb3RoZXIgKSB7XG5cdFx0cmV0dXJuIHRoaXMuY21wKCBvdGhlciApID09PSAwIDtcblx0fVxuXG5cdGdlICggb3RoZXIgKSB7XG5cdFx0cmV0dXJuIHRoaXMuY21wKCBvdGhlciApID49IDAgO1xuXHR9XG5cblx0Z3QgKCBvdGhlciApIHtcblx0XHRyZXR1cm4gdGhpcy5jbXAoIG90aGVyICkgPiAwIDtcblx0fVxuXG5cdGxlICggb3RoZXIgKSB7XG5cdFx0cmV0dXJuIHRoaXMuY21wKCBvdGhlciApIDw9IDAgO1xuXHR9XG5cblx0bHQgKCBvdGhlciApIHtcblx0XHRyZXR1cm4gdGhpcy5jbXAoIG90aGVyICkgPCAwIDtcblx0fVxuXG5cdG5lICggb3RoZXIgKSB7XG5cdFx0cmV0dXJuIHRoaXMuY21wKCBvdGhlciApICE9PSAwIDtcblx0fVxuXG59XG4iXX0=