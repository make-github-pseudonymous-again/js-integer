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

				var r = this.base;
				var a = this.limbs;

				var b = other._limbs_in_base(r);

				var c = (0, _jsIntegerBigEndian._zeros)(Math.max(a.length, b.length));

				if ((0, _jsIntegerBigEndian._cmp)(a, 0, a.length, b, 0, b.length) < 0) {

					(0, _jsIntegerBigEndian._sub)(r, b, 0, b.length, a, 0, a.length, c, 0, c.length);

					return new Integer(r, ~this.is_negative, c);
				} else {

					(0, _jsIntegerBigEndian._sub)(r, a, 0, a.length, b, 0, b.length, c, 0, c.length);

					return new Integer(r, this.is_negative, c);
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
			return _eq(this.limbs, 0, this.limbs.length, [1], 0, 1);
		}
	}, {
		key: 'nonzero',
		value: function nonzero() {
			return !this.iszero();
		}
	}, {
		key: 'binary',
		value: function binary() {
			return this.toString(2);
		}
	}, {
		key: 'digits',
		value: function digits() {
			var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.base;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnRlZ2VyLmpzIl0sIm5hbWVzIjpbIkludGVnZXIiLCJiYXNlIiwiaXNfbmVnYXRpdmUiLCJsaW1icyIsIm90aGVyIiwibGVuZ3RoIiwiaXN6ZXJvIiwiZGlnaXRzIiwic3ViIiwib3Bwb3NpdGUiLCJyZXN1bHRfaXNfbmVnYXRpdmUiLCJyIiwiYSIsImIiLCJfbGltYnNfaW5fYmFzZSIsImMiLCJNYXRoIiwibWF4IiwiYWRkIiwibW92ZSIsIm11bCIsIngiLCJwb3ciLCJpcG93IiwiZGl2bW9kIiwiZGl2IiwibW9kIiwicXVvdGllbnRfaXNfbmVnYXRpdmUiLCJsaiIsImxpIiwiRCIsImQiLCJkaiIsImRpIiwicSIsIlEiLCJSIiwiaWFkZCIsIm5lZ2F0ZSIsIl9lcSIsInRvU3RyaW5nIiwicmV2ZXJzZSIsImNtcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7O0FBRUE7Ozs7SUFRYUEsTyxXQUFBQSxPO0FBRVosa0JBQWNDLElBQWQsRUFBcUJDLFdBQXJCLEVBQW1DQyxLQUFuQyxFQUEyQztBQUFBOztBQUMxQyxPQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLE9BQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBOzs7O3VCQUVNQyxLLEVBQVE7QUFDZEEsU0FBTUgsSUFBTixHQUFhLEtBQUtBLElBQWxCO0FBQ0FHLFNBQU1GLFdBQU4sR0FBb0IsS0FBS0EsV0FBekI7QUFDQUUsU0FBTUQsS0FBTixHQUFjLEtBQUtBLEtBQW5CO0FBQ0EsVUFBT0MsS0FBUDtBQUNBOzs7eUJBRVE7QUFDUixVQUFPLElBQUlKLE9BQUosQ0FBYSxLQUFLQyxJQUFsQixFQUF5QixLQUFLQyxXQUE5QixFQUE0QyxLQUFLQyxLQUFqRCxDQUFQO0FBQ0E7OztpQ0FFZ0JGLEksRUFBTztBQUN2QixPQUFLLEtBQUtBLElBQUwsS0FBY0EsSUFBbkIsRUFBMEIsT0FBTyxLQUFLRSxLQUFaLENBQTFCLEtBQ0ssT0FBTyxp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UixDQUE5QixLQUNLLElBQUtGLE1BQU1GLFdBQVgsRUFBeUIsT0FBUSxDQUFSLENBQXpCLEtBQ3lCLE9BQU8sQ0FBQyxDQUFSO0FBQzlCOztBQUVELE9BQUssS0FBS0EsV0FBTCxHQUFtQkUsTUFBTUYsV0FBOUIsRUFBNEMsT0FBTyxDQUFDLENBQVI7QUFDNUMsT0FBSyxLQUFLQSxXQUFMLEdBQW1CRSxNQUFNRixXQUE5QixFQUE0QyxPQUFRLENBQVI7O0FBRTVDLE9BQU1VLElBQUksS0FBS1QsS0FBZjtBQUNBLE9BQU1VLElBQUlULE1BQU1VLGNBQU4sQ0FBc0IsS0FBS2IsSUFBM0IsQ0FBVjs7QUFFQSxVQUFPLDhCQUFNVyxDQUFOLEVBQVUsQ0FBVixFQUFjQSxFQUFFUCxNQUFoQixFQUF5QlEsQ0FBekIsRUFBNkIsQ0FBN0IsRUFBaUNBLEVBQUVSLE1BQW5DLENBQVA7QUFFQTs7O3FCQUVJRCxLLEVBQVE7QUFDWixVQUFPLEtBQUtzQyxHQUFMLENBQVV0QyxLQUFWLE1BQXNCLENBQTdCO0FBQ0E7OztxQkFFSUEsSyxFQUFRO0FBQ1osVUFBTyxLQUFLc0MsR0FBTCxDQUFVdEMsS0FBVixLQUFxQixDQUE1QjtBQUNBOzs7cUJBRUlBLEssRUFBUTtBQUNaLFVBQU8sS0FBS3NDLEdBQUwsQ0FBVXRDLEtBQVYsSUFBb0IsQ0FBM0I7QUFDQTs7O3FCQUVJQSxLLEVBQVE7QUFDWixVQUFPLEtBQUtzQyxHQUFMLENBQVV0QyxLQUFWLEtBQXFCLENBQTVCO0FBQ0E7OztxQkFFSUEsSyxFQUFRO0FBQ1osVUFBTyxLQUFLc0MsR0FBTCxDQUFVdEMsS0FBVixJQUFvQixDQUEzQjtBQUNBOzs7cUJBRUlBLEssRUFBUTtBQUNaLFVBQU8sS0FBS3NDLEdBQUwsQ0FBVXRDLEtBQVYsTUFBc0IsQ0FBN0I7QUFDQSIsImZpbGUiOiJJbnRlZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBERUZBVUxUX0RJU1BMQVlfQkFTRSAsIFplcm9EaXZpc2lvbkVycm9yIH0gZnJvbSAnLi8nIDtcblxuaW1wb3J0IHtcblx0c3RyaW5naWZ5ICwgY29udmVydCAsIF90cmltX3Bvc2l0aXZlICxcblx0X2FsbG9jICwgX2NvcHkgLCBfemVyb3MgLFxuXHRfanogLCBfY21wICxcblx0X2FkZCAsIF9zdWIgLCBfbXVsICwgX2RpdiAsIF9wb3dkICxcblx0X2luY3JlbWVudCAsXG59IGZyb20gJ0BhdXJlb29tcy9qcy1pbnRlZ2VyLWJpZy1lbmRpYW4nIDtcblxuZXhwb3J0IGNsYXNzIEludGVnZXIge1xuXG5cdGNvbnN0cnVjdG9yICggYmFzZSAsIGlzX25lZ2F0aXZlICwgbGltYnMgKSB7XG5cdFx0dGhpcy5iYXNlID0gYmFzZSA7XG5cdFx0dGhpcy5pc19uZWdhdGl2ZSA9IGlzX25lZ2F0aXZlIDtcblx0XHR0aGlzLmxpbWJzID0gbGltYnMgO1xuXHR9XG5cblx0bW92ZSAoIG90aGVyICkge1xuXHRcdG90aGVyLmJhc2UgPSB0aGlzLmJhc2UgO1xuXHRcdG90aGVyLmlzX25lZ2F0aXZlID0gdGhpcy5pc19uZWdhdGl2ZSA7XG5cdFx0b3RoZXIubGltYnMgPSB0aGlzLmxpbWJzIDtcblx0XHRyZXR1cm4gb3RoZXIgO1xuXHR9XG5cblx0Y29weSAoICkge1xuXHRcdHJldHVybiBuZXcgSW50ZWdlciggdGhpcy5iYXNlICwgdGhpcy5pc19uZWdhdGl2ZSAsIHRoaXMubGltYnMgKSA7XG5cdH1cblxuXHRfbGltYnNfaW5fYmFzZSAoIGJhc2UgKSB7XG5cdFx0aWYgKCB0aGlzLmJhc2UgPT09IGJhc2UgKSByZXR1cm4gdGhpcy5saW1icyA7XG5cdFx0ZWxzZSByZXR1cm4gY29udmVydCggdGhpcy5iYXNlICwgYmFzZSAsIHRoaXMubGltYnMgLCAwICwgdGhpcy5saW1icy5sZW5ndGggKSA7XG5cdH1cblxuXHR0b1N0cmluZyAoIGJhc2UgPSBERUZBVUxUX0RJU1BMQVlfQkFTRSApIHtcblxuXHRcdGlmICggdGhpcy5pc3plcm8oICkgKSByZXR1cm4gJzAnIDtcblxuXHRcdGNvbnN0IGRpZ2l0cyA9IHN0cmluZ2lmeSggdGhpcy5iYXNlICwgYmFzZSAsIHRoaXMubGltYnMgLCAwICwgdGhpcy5saW1icy5sZW5ndGggKSA7XG5cblx0XHRyZXR1cm4gdGhpcy5pc19uZWdhdGl2ZSA/ICctJyArIGRpZ2l0cyA6IGRpZ2l0cyA7XG5cblx0fVxuXG5cdGFkZCAoIG90aGVyICkge1xuXG5cdFx0aWYgKCB0aGlzLmlzX25lZ2F0aXZlICE9PSBvdGhlci5pc19uZWdhdGl2ZSApIHtcblxuXHRcdFx0aWYgKCBvdGhlci5pc19uZWdhdGl2ZSApIHJldHVybiB0aGlzLnN1Yiggb3RoZXIub3Bwb3NpdGUoKSApIDtcblxuXHRcdFx0ZWxzZSByZXR1cm4gb3RoZXIuc3ViKCB0aGlzLm9wcG9zaXRlKCkgKSA7XG5cblx0XHR9XG5cblx0XHRlbHNlIHtcblxuXHRcdFx0Y29uc3QgcmVzdWx0X2lzX25lZ2F0aXZlID0gdGhpcy5pc19uZWdhdGl2ZSA7XG5cdFx0XHRjb25zdCByID0gdGhpcy5iYXNlIDtcblxuXHRcdFx0Y29uc3QgYSA9IHRoaXMubGltYnMgO1xuXG5cdFx0XHRjb25zdCBiID0gb3RoZXIuX2xpbWJzX2luX2Jhc2UoIHIgKSA7XG5cblx0XHRcdGNvbnN0IGMgPSBfemVyb3MoIE1hdGgubWF4KCBhLmxlbmd0aCAsIGIubGVuZ3RoICkgKyAxICkgO1xuXG5cdFx0XHRfYWRkKCByICwgYSAsIDAgLCBhLmxlbmd0aCAsIGIgLCAwICwgYi5sZW5ndGggLCBjICwgMCAsIGMubGVuZ3RoICkgO1xuXG5cdFx0XHRyZXR1cm4gbmV3IEludGVnZXIoIHIgLCByZXN1bHRfaXNfbmVnYXRpdmUgLCBjICkgO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRpYWRkICggb3RoZXIgKSB7XG5cdFx0Ly8gVE9ETyBvcHRpbWl6ZSBidXQgYmUgY2FyZWZ1bCB3aXRoIHNpZGUgZWZmZWN0c1xuXHRcdHJldHVybiB0aGlzLmFkZChvdGhlcikubW92ZSh0aGlzKTtcblx0fVxuXG5cdHN1YiAoIG90aGVyICkge1xuXG5cdFx0aWYgKCB0aGlzLmlzX25lZ2F0aXZlICE9PSBvdGhlci5pc19uZWdhdGl2ZSApIHtcblxuXHRcdFx0aWYgKCBvdGhlci5pc19uZWdhdGl2ZSApIHJldHVybiB0aGlzLmFkZCggb3RoZXIub3Bwb3NpdGUoKSApIDtcblxuXHRcdFx0ZWxzZSByZXR1cm4gdGhpcy5vcHBvc2l0ZSgpLmFkZCggb3RoZXIgKS5vcHBvc2l0ZSgpIDtcblxuXHRcdH1cblxuXHRcdGVsc2Uge1xuXG5cdFx0XHRjb25zdCByID0gdGhpcy5iYXNlIDtcblx0XHRcdGNvbnN0IGEgPSB0aGlzLmxpbWJzIDtcblxuXHRcdFx0Y29uc3QgYiA9IG90aGVyLl9saW1ic19pbl9iYXNlKCByICkgO1xuXG5cdFx0XHRjb25zdCBjID0gX3plcm9zKCBNYXRoLm1heCggYS5sZW5ndGggLCBiLmxlbmd0aCApICkgO1xuXG5cdFx0XHRpZiAoIF9jbXAoIGEgLCAwICwgYS5sZW5ndGggLCBiICwgMCAsIGIubGVuZ3RoICkgPCAwICkge1xuXG5cdFx0XHRcdF9zdWIoIHIgLCBiICwgMCAsIGIubGVuZ3RoICwgYSAsIDAgLCBhLmxlbmd0aCAsIGMgLCAwICwgYy5sZW5ndGggKSA7XG5cblx0XHRcdFx0cmV0dXJuIG5ldyBJbnRlZ2VyKCByICwgfnRoaXMuaXNfbmVnYXRpdmUgLCBjICkgO1xuXHRcdFx0fVxuXG5cdFx0XHRlbHNlIHtcblxuXHRcdFx0XHRfc3ViKCByICwgYSAsIDAgLCBhLmxlbmd0aCAsIGIgLCAwICwgYi5sZW5ndGggLCBjICwgMCAsIGMubGVuZ3RoICkgO1xuXG5cdFx0XHRcdHJldHVybiBuZXcgSW50ZWdlciggciAsIHRoaXMuaXNfbmVnYXRpdmUgLCBjICkgO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fVxuXG5cdGlzdWIgKCBvdGhlciApIHtcblx0XHQvLyBUT0RPIG9wdGltaXplIGJ1dCBiZSBjYXJlZnVsIHdpdGggc2lkZSBlZmZlY3RzXG5cdFx0cmV0dXJuIHRoaXMuc3ViKG90aGVyKS5tb3ZlKHRoaXMpO1xuXHR9XG5cblx0bXVsICggb3RoZXIgKSB7XG5cblx0XHRjb25zdCByZXN1bHRfaXNfbmVnYXRpdmUgPSB0aGlzLmlzX25lZ2F0aXZlIF4gb3RoZXIuaXNfbmVnYXRpdmUgO1xuXHRcdGNvbnN0IHIgPSB0aGlzLmJhc2UgO1xuXG5cdFx0Y29uc3QgYSA9IHRoaXMubGltYnMgO1xuXG5cdFx0Y29uc3QgYiA9IG90aGVyLl9saW1ic19pbl9iYXNlKCByICkgO1xuXG5cdFx0Y29uc3QgYyA9IF96ZXJvcyggYS5sZW5ndGggKyBiLmxlbmd0aCApIDtcblxuXHRcdF9tdWwoIHIgLCBhICwgMCAsIGEubGVuZ3RoICwgYiAsIDAgLCBiLmxlbmd0aCAsIGMgLCAwICwgYy5sZW5ndGggKSA7XG5cblx0XHRyZXR1cm4gbmV3IEludGVnZXIoIHIgLCByZXN1bHRfaXNfbmVnYXRpdmUgLCBjICkgO1xuXG5cdH1cblxuXHRpbXVsICggb3RoZXIgKSB7XG5cdFx0Ly8gVE9ETyBvcHRpbWl6ZSBidXQgYmUgY2FyZWZ1bCB3aXRoIHNpZGUgZWZmZWN0c1xuXHRcdHJldHVybiB0aGlzLm11bChvdGhlcikubW92ZSh0aGlzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb21wdXRlcyA8Y29kZT50aGlzPC9jb2RlPiByYWlzZWQgdG8gdGhlIDxjb2RlPng8L2NvZGU+dGggcG93ZXIuXG5cdCAqIDxjb2RlPng8L2NvZGU+IGlzIGEgZG91YmxlIHNtYWxsZXIgb3IgZXF1YWwgdG8gMl41My5cblx0ICpcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHggVGhlIHBvd2VyIHRvIHJhaXNlIDxjb2RlPnRoaXM8L2NvZGU+IHRvLlxuXHQgKiBAcmV0dXJuIHtJbnRlZ2VyfSA8Y29kZT50aGlzIF4geDwvY29kZT5cblx0ICovXG5cdHBvdyAoIHggKSB7XG5cblx0XHRjb25zdCBpc19uZWdhdGl2ZSA9IE1hdGgucG93KCB0aGlzLmlzX25lZ2F0aXZlICwgeCApIDtcblxuXHRcdGNvbnN0IGEgPSB0aGlzLmxpbWJzIDtcblx0XHRjb25zdCBjID0gX3plcm9zKCBNYXRoLm1heCggMSAsIGEubGVuZ3RoICogeCApICkgO1xuXG5cdFx0X3Bvd2QoIHRoaXMuYmFzZSAsIHggLCBhICwgMCAsIGEubGVuZ3RoICwgYyAsIDAgLCBjLmxlbmd0aCApIDtcblxuXHRcdHJldHVybiBuZXcgSW50ZWdlciggdGhpcy5iYXNlICwgaXNfbmVnYXRpdmUgLCBjICkgO1xuXG5cdH1cblxuXHRpcG93ICggeCApIHtcblx0XHQvLyBUT0RPIG9wdGltaXplIGJ1dCBiZSBjYXJlZnVsIHdpdGggc2lkZSBlZmZlY3RzXG5cdFx0cmV0dXJuIHRoaXMucG93KHgpLm1vdmUodGhpcyk7XG5cdH1cblxuXHRzcXVhcmUgKCApIHtcblx0XHQvLyBUT0RPIG9wdGltaXplIGJ1dCBiZSBjYXJlZnVsIHdpdGggc2lkZSBlZmZlY3RzXG5cdFx0cmV0dXJuIHRoaXMucG93KDIpO1xuXHR9XG5cblx0aXNxdWFyZSAoICkge1xuXHRcdC8vIFRPRE8gb3B0aW1pemUgYnV0IGJlIGNhcmVmdWwgd2l0aCBzaWRlIGVmZmVjdHNcblx0XHRyZXR1cm4gdGhpcy5pcG93KDIpO1xuXHR9XG5cblx0ZGl2ICggb3RoZXIgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGl2bW9kKCBvdGhlciApWzBdIDtcblx0fVxuXG5cdGlkaXYgKCBvdGhlciApIHtcblx0XHQvLyBUT0RPIG9wdGltaXplIGJ1dCBiZSBjYXJlZnVsIHdpdGggc2lkZSBlZmZlY3RzXG5cdFx0cmV0dXJuIHRoaXMuZGl2KG90aGVyKS5tb3ZlKHRoaXMpO1xuXHR9XG5cblx0bW9kICggb3RoZXIgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGl2bW9kKCBvdGhlciApWzFdIDtcblx0fVxuXG5cdGltb2QgKCBvdGhlciApIHtcblx0XHQvLyBUT0RPIG9wdGltaXplIGJ1dCBiZSBjYXJlZnVsIHdpdGggc2lkZSBlZmZlY3RzXG5cdFx0cmV0dXJuIHRoaXMubW9kKG90aGVyKS5tb3ZlKHRoaXMpO1xuXHR9XG5cblx0ZGl2bW9kICggb3RoZXIgKSB7XG5cblx0XHRpZiAoIG90aGVyLmlzemVybygpICkgdGhyb3cgbmV3IFplcm9EaXZpc2lvbkVycm9yKCAnSW50ZWdlciBkaXZpc2lvbiBieSB6ZXJvJyApIDsgLy8gb3B0aW1pemVcblxuXHRcdGNvbnN0IHF1b3RpZW50X2lzX25lZ2F0aXZlID0gdGhpcy5pc19uZWdhdGl2ZSBeIG90aGVyLmlzX25lZ2F0aXZlIDtcblx0XHRjb25zdCByID0gdGhpcy5iYXNlIDtcblxuXHRcdC8vIFRoZSB1bmRlcmx5aW5nIGFsZ29yaXRobSBkb2VzIG5vdCBhbGxvdyBsZWFkaW5nIDAncyBzbyB3ZSB0cmltIHRoZW0uXG5cdFx0Y29uc3QgbGogPSB0aGlzLmxpbWJzLmxlbmd0aCA7XG5cdFx0Y29uc3QgbGkgPSAgX3RyaW1fcG9zaXRpdmUoIHRoaXMubGltYnMgLCAwICwgbGogKSA7XG5cblx0XHQvLyBEaXZpZGVuZCBpcyAwXG5cdFx0aWYgKCBsaSA+PSBsaiApIHJldHVybiBbIG5ldyBJbnRlZ2VyKCB0aGlzLmJhc2UgLCAwICwgWyAwIF0gKSAsIG5ldyBJbnRlZ2VyKCB0aGlzLmJhc2UgLCAwICwgWyAwIF0gKSBdIDtcblxuXHRcdC8vIERpdmlkZW5kICgmIFJlbWFpbmRlcilcblx0XHRjb25zdCBEID0gX2FsbG9jKCBsaiAtIGxpICkgO1xuXHRcdF9jb3B5KCB0aGlzLmxpbWJzICwgbGkgLCBsaiAsIEQgLCAwICkgO1xuXG5cdFx0Ly8gRGl2aXNvclxuXHRcdGNvbnN0IGQgPSBvdGhlci5fbGltYnNfaW5fYmFzZSggciApIDtcblx0XHRjb25zdCBkaiA9IGQubGVuZ3RoIDtcblx0XHRjb25zdCBkaSA9IF90cmltX3Bvc2l0aXZlKCBkICwgMCAsIGRqICkgOyAvLyBkaSA8IGRqIGJlY2F1c2UgZCAhPSAwXG5cblx0XHQvLyBRdW90aWVudFxuXHRcdGNvbnN0IHEgPSBfemVyb3MoIEQubGVuZ3RoICkgO1xuXG5cdFx0X2RpdiggciAsIEQgLCAwICwgRC5sZW5ndGggLCBkICwgZGkgLCBkaiAsIHEgLCAwICwgcS5sZW5ndGggKSA7XG5cblx0XHRjb25zdCBRID0gbmV3IEludGVnZXIoIHIgLCBxdW90aWVudF9pc19uZWdhdGl2ZSAsIHEgKSA7IC8vIHF1b3RpZW50XG5cdFx0Y29uc3QgUiA9IG5ldyBJbnRlZ2VyKCByICwgMCAsIEQgKSA7ICAgICAgICAgICAgICAgICAgICAvLyByZW1haW5kZXJcblxuXHRcdGlmICggKHRoaXMuaXNfbmVnYXRpdmUgfHwgb3RoZXIuaXNfbmVnYXRpdmUgKSAmJiAhX2p6KCBEICwgMCAsIEQubGVuZ3RoICkgKSB7XG5cblx0XHRcdGlmICggb3RoZXIuaXNfbmVnYXRpdmUgKSB7XG5cblx0XHRcdFx0aWYgKCAhdGhpcy5pc19uZWdhdGl2ZSApIHtcblx0XHRcdFx0XHRfaW5jcmVtZW50KCByICwgcSAsIDAgLCBxLmxlbmd0aCApIDtcblx0XHRcdFx0XHRSLmlhZGQoIG90aGVyICkgOyAvLyBUT0RPIG9wdGltaXplXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRSLm5lZ2F0ZSgpOyAvLyBUT0RPIG9wdGltaXplXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0X2luY3JlbWVudCggciAsIHEgLCAwICwgcS5sZW5ndGggKSA7XG5cdFx0XHRcdFIubmVnYXRlKCkuaWFkZCggb3RoZXIgKSA7IC8vIFRPRE8gb3B0aW1pemVcblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiBbIFEgLCBSIF0gO1xuXG5cdH1cblxuXHRvcHBvc2l0ZSAoICkge1xuXHRcdHJldHVybiBuZXcgSW50ZWdlciggdGhpcy5iYXNlICwgfnRoaXMuaXNfbmVnYXRpdmUgLCB0aGlzLmxpbWJzICkgO1xuXHR9XG5cblx0bmVnYXRlICggKSB7XG5cdFx0Ly8gVE9ETyBvcHRpbWl6ZSBidXQgYmUgY2FyZWZ1bCB3aXRoIHNpZGUgZWZmZWN0c1xuXHRcdHJldHVybiB0aGlzLm9wcG9zaXRlKCkubW92ZSh0aGlzKTtcblx0fVxuXG5cdHNpZ24gKCApIHtcblx0XHRyZXR1cm4gdGhpcy5pc3plcm8oKSA/IDAgOiB0aGlzLmlzX25lZ2F0aXZlID8gLTEgOiAxIDtcblx0fVxuXG5cdGlzemVybyAoICkge1xuXHRcdHJldHVybiBfanooIHRoaXMubGltYnMgLCAwICwgdGhpcy5saW1icy5sZW5ndGggKSA7XG5cdH1cblxuXHRpc29uZSAoICkge1xuXHRcdGlmICggdGhpcy5pc19uZWdhdGl2ZSApIHJldHVybiBmYWxzZSA7XG5cdFx0cmV0dXJuIF9lcSggdGhpcy5saW1icyAsIDAgLCB0aGlzLmxpbWJzLmxlbmd0aCAsIFsgMSBdICwgMCAsIDEgKSA7XG5cdH1cblxuXHRub256ZXJvICggKSB7XG5cdFx0cmV0dXJuICF0aGlzLmlzemVybygpO1xuXHR9XG5cblx0YmluYXJ5ICggKSB7XG5cdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoIDIgKSA7XG5cdH1cblxuXHRkaWdpdHMgKCBiYXNlID0gdGhpcy5iYXNlICkge1xuXHRcdHJldHVybiBjb252ZXJ0KCB0aGlzLmJhc2UgLCBiYXNlICwgdGhpcy5saW1icyAsIDAgLCB0aGlzLmxpbWJzLmxlbmd0aCApLnJldmVyc2UoICkgO1xuXHR9XG5cblx0Yml0cyAoICkge1xuXHRcdHJldHVybiB0aGlzLmRpZ2l0cyggMiApIDtcblx0fVxuXG5cdGRpdmlkZXMgKCBvdGhlciApIHtcblx0XHRyZXR1cm4gb3RoZXIubW9kKCB0aGlzICkuaXN6ZXJvKCApIDtcblx0fVxuXG5cdGRpdmlkZV9rbm93aW5nX2RpdmlzaWJsZV9ieSAoIG90aGVyICkge1xuXHRcdHJldHVybiB0aGlzLmRpdiggb3RoZXIgKSA7XG5cdH1cblxuXHRjbXAgKCBvdGhlciApIHtcblxuXHRcdGlmICggdGhpcy5pc3plcm8oICkgKSB7XG5cdFx0XHRpZiAoIG90aGVyLmlzemVybyggKSApICAgICAgICByZXR1cm4gIDAgO1xuXHRcdFx0ZWxzZSBpZiAoIG90aGVyLmlzX25lZ2F0aXZlICkgcmV0dXJuICAxIDtcblx0XHRcdGVsc2UgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMSA7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLmlzX25lZ2F0aXZlIDwgb3RoZXIuaXNfbmVnYXRpdmUgKSByZXR1cm4gLTEgO1xuXHRcdGlmICggdGhpcy5pc19uZWdhdGl2ZSA+IG90aGVyLmlzX25lZ2F0aXZlICkgcmV0dXJuICAxIDtcblxuXHRcdGNvbnN0IGEgPSB0aGlzLmxpbWJzIDtcblx0XHRjb25zdCBiID0gb3RoZXIuX2xpbWJzX2luX2Jhc2UoIHRoaXMuYmFzZSApIDtcblxuXHRcdHJldHVybiBfY21wKCBhICwgMCAsIGEubGVuZ3RoICwgYiAsIDAgLCBiLmxlbmd0aCApIDtcblxuXHR9XG5cblx0ZXEgKCBvdGhlciApIHtcblx0XHRyZXR1cm4gdGhpcy5jbXAoIG90aGVyICkgPT09IDAgO1xuXHR9XG5cblx0Z2UgKCBvdGhlciApIHtcblx0XHRyZXR1cm4gdGhpcy5jbXAoIG90aGVyICkgPj0gMCA7XG5cdH1cblxuXHRndCAoIG90aGVyICkge1xuXHRcdHJldHVybiB0aGlzLmNtcCggb3RoZXIgKSA+IDAgO1xuXHR9XG5cblx0bGUgKCBvdGhlciApIHtcblx0XHRyZXR1cm4gdGhpcy5jbXAoIG90aGVyICkgPD0gMCA7XG5cdH1cblxuXHRsdCAoIG90aGVyICkge1xuXHRcdHJldHVybiB0aGlzLmNtcCggb3RoZXIgKSA8IDAgO1xuXHR9XG5cblx0bmUgKCBvdGhlciApIHtcblx0XHRyZXR1cm4gdGhpcy5jbXAoIG90aGVyICkgIT09IDAgO1xuXHR9XG5cbn1cbiJdfQ==