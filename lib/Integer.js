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
	}, {
		key: 'pow',
		value: function pow(other) {
			throw 'Integer#pow not implemented yet, waiting for @aureooms/js-integer-big-endian.';
		}
	}, {
		key: 'ipow',
		value: function ipow(other) {
			// TODO optimize but be careful with side effects
			return this.pow(other).move(this);
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

			var quotient_is_negative = this.is_negative ^ other.is_negative;
			var r = this.base;

			// Dividend (& Remainder)
			var D = (0, _jsIntegerBigEndian._alloc)(this.limbs.length);
			(0, _jsIntegerBigEndian._copy)(this.limbs, 0, this.limbs.length, D, 0);

			// Divisor
			var d = other._limbs_in_base(r);

			// Quotient
			var q = (0, _jsIntegerBigEndian._zeros)(D.length);

			(0, _jsIntegerBigEndian._div)(r, D, 0, D.length, d, 0, d.length, q, 0, q.length);

			return [new Integer(r, quotient_is_negative, q), // quotient
			new Integer(r, 0, D) // remainder
			];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnRlZ2VyLmpzIl0sIm5hbWVzIjpbIkludGVnZXIiLCJiYXNlIiwiaXNfbmVnYXRpdmUiLCJsaW1icyIsIm90aGVyIiwibGVuZ3RoIiwiaXN6ZXJvIiwiZGlnaXRzIiwic3ViIiwib3Bwb3NpdGUiLCJyZXN1bHRfaXNfbmVnYXRpdmUiLCJyIiwiYSIsImIiLCJfbGltYnNfaW5fYmFzZSIsImMiLCJNYXRoIiwibWF4IiwiYWRkIiwibW92ZSIsIm11bCIsInBvdyIsImRpdm1vZCIsImRpdiIsIm1vZCIsInF1b3RpZW50X2lzX25lZ2F0aXZlIiwiRCIsImQiLCJxIiwiX2VxIiwidG9TdHJpbmciLCJyZXZlcnNlIiwiY21wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7QUFFQTs7OztJQU9hQSxPLFdBQUFBLE87QUFFWixrQkFBY0MsSUFBZCxFQUFxQkMsV0FBckIsRUFBbUNDLEtBQW5DLEVBQTJDO0FBQUE7O0FBQzFDLE9BQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsT0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0E7Ozs7dUJBRU1DLEssRUFBUTtBQUNkQSxTQUFNSCxJQUFOLEdBQWEsS0FBS0EsSUFBbEI7QUFDQUcsU0FBTUYsV0FBTixHQUFvQixLQUFLQSxXQUF6QjtBQUNBRSxTQUFNRCxLQUFOLEdBQWMsS0FBS0EsS0FBbkI7QUFDQSxVQUFPQyxLQUFQO0FBQ0E7Ozt5QkFFUTtBQUNSLFVBQU8sSUFBSUosT0FBSixDQUFhLEtBQUtDLElBQWxCLEVBQXlCLEtBQUtDLFdBQTlCLEVBQTRDLEtBQUtDLEtBQWpELENBQVA7QUFDQTs7O2lDQUVnQkYsSSxFQUFPO0FBQ3ZCLE9BQUssS0FBS0EsSUFBTCxLQUFjQSxJQUFuQixFQUEwQixPQUFPLEtBQUtFLEtBQVosQ0FBMUIsS0FDSyxPQUFPLGlDQUFTLEtBQUtGLElBQWQsRUFBcUJBLElBQXJCLEVBQTRCLEtBQUtFLEtBQWpDLEVBQXlDLENB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LEdBQUwsQ0FBVTVCLEtBQVYsS0FBcUIsQ0FBNUI7QUFDQTs7O3FCQUVJQSxLLEVBQVE7QUFDWixVQUFPLEtBQUs0QixHQUFMLENBQVU1QixLQUFWLElBQW9CLENBQTNCO0FBQ0E7OztxQkFFSUEsSyxFQUFRO0FBQ1osVUFBTyxLQUFLNEIsR0FBTCxDQUFVNUIsS0FBVixNQUFzQixDQUE3QjtBQUNBIiwiZmlsZSI6IkludGVnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IERFRkFVTFRfRElTUExBWV9CQVNFIH0gZnJvbSAnLi8nIDtcblxuaW1wb3J0IHtcblx0c3RyaW5naWZ5ICwgY29udmVydCAsXG5cdF9hbGxvYyAsIF9jb3B5ICwgX3plcm9zICxcblx0X2p6ICwgX2NtcCAsXG5cdF9hZGQgLCBfc3ViICwgX211bCAsIF9kaXYgLFxufSBmcm9tICdAYXVyZW9vbXMvanMtaW50ZWdlci1iaWctZW5kaWFuJyA7XG5cbmV4cG9ydCBjbGFzcyBJbnRlZ2VyIHtcblxuXHRjb25zdHJ1Y3RvciAoIGJhc2UgLCBpc19uZWdhdGl2ZSAsIGxpbWJzICkge1xuXHRcdHRoaXMuYmFzZSA9IGJhc2UgO1xuXHRcdHRoaXMuaXNfbmVnYXRpdmUgPSBpc19uZWdhdGl2ZSA7XG5cdFx0dGhpcy5saW1icyA9IGxpbWJzIDtcblx0fVxuXG5cdG1vdmUgKCBvdGhlciApIHtcblx0XHRvdGhlci5iYXNlID0gdGhpcy5iYXNlIDtcblx0XHRvdGhlci5pc19uZWdhdGl2ZSA9IHRoaXMuaXNfbmVnYXRpdmUgO1xuXHRcdG90aGVyLmxpbWJzID0gdGhpcy5saW1icyA7XG5cdFx0cmV0dXJuIG90aGVyIDtcblx0fVxuXG5cdGNvcHkgKCApIHtcblx0XHRyZXR1cm4gbmV3IEludGVnZXIoIHRoaXMuYmFzZSAsIHRoaXMuaXNfbmVnYXRpdmUgLCB0aGlzLmxpbWJzICkgO1xuXHR9XG5cblx0X2xpbWJzX2luX2Jhc2UgKCBiYXNlICkge1xuXHRcdGlmICggdGhpcy5iYXNlID09PSBiYXNlICkgcmV0dXJuIHRoaXMubGltYnMgO1xuXHRcdGVsc2UgcmV0dXJuIGNvbnZlcnQoIHRoaXMuYmFzZSAsIGJhc2UgLCB0aGlzLmxpbWJzICwgMCAsIHRoaXMubGltYnMubGVuZ3RoICkgO1xuXHR9XG5cblx0dG9TdHJpbmcgKCBiYXNlID0gREVGQVVMVF9ESVNQTEFZX0JBU0UgKSB7XG5cblx0XHRpZiAoIHRoaXMuaXN6ZXJvKCApICkgcmV0dXJuICcwJyA7XG5cblx0XHRjb25zdCBkaWdpdHMgPSBzdHJpbmdpZnkoIHRoaXMuYmFzZSAsIGJhc2UgLCB0aGlzLmxpbWJzICwgMCAsIHRoaXMubGltYnMubGVuZ3RoICkgO1xuXG5cdFx0cmV0dXJuIHRoaXMuaXNfbmVnYXRpdmUgPyAnLScgKyBkaWdpdHMgOiBkaWdpdHMgO1xuXG5cdH1cblxuXHRhZGQgKCBvdGhlciApIHtcblxuXHRcdGlmICggdGhpcy5pc19uZWdhdGl2ZSAhPT0gb3RoZXIuaXNfbmVnYXRpdmUgKSB7XG5cblx0XHRcdGlmICggb3RoZXIuaXNfbmVnYXRpdmUgKSByZXR1cm4gdGhpcy5zdWIoIG90aGVyLm9wcG9zaXRlKCkgKSA7XG5cblx0XHRcdGVsc2UgcmV0dXJuIG90aGVyLnN1YiggdGhpcy5vcHBvc2l0ZSgpICkgO1xuXG5cdFx0fVxuXG5cdFx0ZWxzZSB7XG5cblx0XHRcdGNvbnN0IHJlc3VsdF9pc19uZWdhdGl2ZSA9IHRoaXMuaXNfbmVnYXRpdmUgO1xuXHRcdFx0Y29uc3QgciA9IHRoaXMuYmFzZSA7XG5cblx0XHRcdGNvbnN0IGEgPSB0aGlzLmxpbWJzIDtcblxuXHRcdFx0Y29uc3QgYiA9IG90aGVyLl9saW1ic19pbl9iYXNlKCByICkgO1xuXG5cdFx0XHRjb25zdCBjID0gX3plcm9zKCBNYXRoLm1heCggYS5sZW5ndGggLCBiLmxlbmd0aCApICsgMSApIDtcblxuXHRcdFx0X2FkZCggciAsIGEgLCAwICwgYS5sZW5ndGggLCBiICwgMCAsIGIubGVuZ3RoICwgYyAsIDAgLCBjLmxlbmd0aCApIDtcblxuXHRcdFx0cmV0dXJuIG5ldyBJbnRlZ2VyKCByICwgcmVzdWx0X2lzX25lZ2F0aXZlICwgYyApIDtcblxuXHRcdH1cblxuXHR9XG5cblx0aWFkZCAoIG90aGVyICkge1xuXHRcdC8vIFRPRE8gb3B0aW1pemUgYnV0IGJlIGNhcmVmdWwgd2l0aCBzaWRlIGVmZmVjdHNcblx0XHRyZXR1cm4gdGhpcy5hZGQob3RoZXIpLm1vdmUodGhpcyk7XG5cdH1cblxuXHRzdWIgKCBvdGhlciApIHtcblxuXHRcdGlmICggdGhpcy5pc19uZWdhdGl2ZSAhPT0gb3RoZXIuaXNfbmVnYXRpdmUgKSB7XG5cblx0XHRcdGlmICggb3RoZXIuaXNfbmVnYXRpdmUgKSByZXR1cm4gdGhpcy5hZGQoIG90aGVyLm9wcG9zaXRlKCkgKSA7XG5cblx0XHRcdGVsc2UgcmV0dXJuIHRoaXMub3Bwb3NpdGUoKS5hZGQoIG90aGVyICkub3Bwb3NpdGUoKSA7XG5cblx0XHR9XG5cblx0XHRlbHNlIHtcblxuXHRcdFx0Y29uc3QgciA9IHRoaXMuYmFzZSA7XG5cdFx0XHRjb25zdCBhID0gdGhpcy5saW1icyA7XG5cblx0XHRcdGNvbnN0IGIgPSBvdGhlci5fbGltYnNfaW5fYmFzZSggciApIDtcblxuXHRcdFx0Y29uc3QgYyA9IF96ZXJvcyggTWF0aC5tYXgoIGEubGVuZ3RoICwgYi5sZW5ndGggKSApIDtcblxuXHRcdFx0aWYgKCBfY21wKCBhICwgMCAsIGEubGVuZ3RoICwgYiAsIDAgLCBiLmxlbmd0aCApIDwgMCApIHtcblxuXHRcdFx0XHRfc3ViKCByICwgYiAsIDAgLCBiLmxlbmd0aCAsIGEgLCAwICwgYS5sZW5ndGggLCBjICwgMCAsIGMubGVuZ3RoICkgO1xuXG5cdFx0XHRcdHJldHVybiBuZXcgSW50ZWdlciggciAsIH50aGlzLmlzX25lZ2F0aXZlICwgYyApIDtcblx0XHRcdH1cblxuXHRcdFx0ZWxzZSB7XG5cblx0XHRcdFx0X3N1YiggciAsIGEgLCAwICwgYS5sZW5ndGggLCBiICwgMCAsIGIubGVuZ3RoICwgYyAsIDAgLCBjLmxlbmd0aCApIDtcblxuXHRcdFx0XHRyZXR1cm4gbmV3IEludGVnZXIoIHIgLCB0aGlzLmlzX25lZ2F0aXZlICwgYyApIDtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH1cblxuXHRpc3ViICggb3RoZXIgKSB7XG5cdFx0Ly8gVE9ETyBvcHRpbWl6ZSBidXQgYmUgY2FyZWZ1bCB3aXRoIHNpZGUgZWZmZWN0c1xuXHRcdHJldHVybiB0aGlzLnN1YihvdGhlcikubW92ZSh0aGlzKTtcblx0fVxuXG5cdG11bCAoIG90aGVyICkge1xuXG5cdFx0Y29uc3QgcmVzdWx0X2lzX25lZ2F0aXZlID0gdGhpcy5pc19uZWdhdGl2ZSBeIG90aGVyLmlzX25lZ2F0aXZlIDtcblx0XHRjb25zdCByID0gdGhpcy5iYXNlIDtcblxuXHRcdGNvbnN0IGEgPSB0aGlzLmxpbWJzIDtcblxuXHRcdGNvbnN0IGIgPSBvdGhlci5fbGltYnNfaW5fYmFzZSggciApIDtcblxuXHRcdGNvbnN0IGMgPSBfemVyb3MoIGEubGVuZ3RoICsgYi5sZW5ndGggKSA7XG5cblx0XHRfbXVsKCByICwgYSAsIDAgLCBhLmxlbmd0aCAsIGIgLCAwICwgYi5sZW5ndGggLCBjICwgMCAsIGMubGVuZ3RoICkgO1xuXG5cdFx0cmV0dXJuIG5ldyBJbnRlZ2VyKCByICwgcmVzdWx0X2lzX25lZ2F0aXZlICwgYyApIDtcblxuXHR9XG5cblx0aW11bCAoIG90aGVyICkge1xuXHRcdC8vIFRPRE8gb3B0aW1pemUgYnV0IGJlIGNhcmVmdWwgd2l0aCBzaWRlIGVmZmVjdHNcblx0XHRyZXR1cm4gdGhpcy5tdWwob3RoZXIpLm1vdmUodGhpcyk7XG5cdH1cblxuXHRwb3cgKCBvdGhlciApIHtcblx0XHR0aHJvdyAnSW50ZWdlciNwb3cgbm90IGltcGxlbWVudGVkIHlldCwgd2FpdGluZyBmb3IgQGF1cmVvb21zL2pzLWludGVnZXItYmlnLWVuZGlhbi4nIDtcblx0fVxuXG5cdGlwb3cgKCBvdGhlciApIHtcblx0XHQvLyBUT0RPIG9wdGltaXplIGJ1dCBiZSBjYXJlZnVsIHdpdGggc2lkZSBlZmZlY3RzXG5cdFx0cmV0dXJuIHRoaXMucG93KG90aGVyKS5tb3ZlKHRoaXMpO1xuXHR9XG5cblx0ZGl2ICggb3RoZXIgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGl2bW9kKCBvdGhlciApWzBdIDtcblx0fVxuXG5cdGlkaXYgKCBvdGhlciApIHtcblx0XHQvLyBUT0RPIG9wdGltaXplIGJ1dCBiZSBjYXJlZnVsIHdpdGggc2lkZSBlZmZlY3RzXG5cdFx0cmV0dXJuIHRoaXMuZGl2KG90aGVyKS5tb3ZlKHRoaXMpO1xuXHR9XG5cblx0bW9kICggb3RoZXIgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGl2bW9kKCBvdGhlciApWzFdIDtcblx0fVxuXG5cdGltb2QgKCBvdGhlciApIHtcblx0XHQvLyBUT0RPIG9wdGltaXplIGJ1dCBiZSBjYXJlZnVsIHdpdGggc2lkZSBlZmZlY3RzXG5cdFx0cmV0dXJuIHRoaXMubW9kKG90aGVyKS5tb3ZlKHRoaXMpO1xuXHR9XG5cblx0ZGl2bW9kICggb3RoZXIgKSB7XG5cblx0XHRjb25zdCBxdW90aWVudF9pc19uZWdhdGl2ZSA9IHRoaXMuaXNfbmVnYXRpdmUgXiBvdGhlci5pc19uZWdhdGl2ZSA7XG5cdFx0Y29uc3QgciA9IHRoaXMuYmFzZSA7XG5cblx0XHQvLyBEaXZpZGVuZCAoJiBSZW1haW5kZXIpXG5cdFx0Y29uc3QgRCA9IF9hbGxvYyggdGhpcy5saW1icy5sZW5ndGggKSA7XG5cdFx0X2NvcHkoIHRoaXMubGltYnMgLCAwICwgdGhpcy5saW1icy5sZW5ndGggLCBEICwgMCApIDtcblxuXHRcdC8vIERpdmlzb3Jcblx0XHRjb25zdCBkID0gb3RoZXIuX2xpbWJzX2luX2Jhc2UoIHIgKSA7XG5cblx0XHQvLyBRdW90aWVudFxuXHRcdGNvbnN0IHEgPSBfemVyb3MoIEQubGVuZ3RoICkgO1xuXG5cdFx0X2RpdiggciAsIEQgLCAwICwgRC5sZW5ndGggLCBkICwgMCAsIGQubGVuZ3RoICwgcSAsIDAgLCBxLmxlbmd0aCApIDtcblxuXHRcdHJldHVybiBbXG5cdFx0XHRuZXcgSW50ZWdlciggciAsIHF1b3RpZW50X2lzX25lZ2F0aXZlICwgcSApICwgLy8gcXVvdGllbnRcblx0XHRcdG5ldyBJbnRlZ2VyKCByICwgMCAsIEQgKSAgICAgICAgICAgICAgICAgICAgICAvLyByZW1haW5kZXJcblx0XHRdIDtcblxuXHR9XG5cblx0b3Bwb3NpdGUgKCApIHtcblx0XHRyZXR1cm4gbmV3IEludGVnZXIoIHRoaXMuYmFzZSAsIH50aGlzLmlzX25lZ2F0aXZlICwgdGhpcy5saW1icyApIDtcblx0fVxuXG5cdG5lZ2F0ZSAoICkge1xuXHRcdC8vIFRPRE8gb3B0aW1pemUgYnV0IGJlIGNhcmVmdWwgd2l0aCBzaWRlIGVmZmVjdHNcblx0XHRyZXR1cm4gdGhpcy5vcHBvc2l0ZSgpLm1vdmUodGhpcyk7XG5cdH1cblxuXHRzaWduICggKSB7XG5cdFx0cmV0dXJuIHRoaXMuaXN6ZXJvKCkgPyAwIDogdGhpcy5pc19uZWdhdGl2ZSA/IC0xIDogMSA7XG5cdH1cblxuXHRpc3plcm8gKCApIHtcblx0XHRyZXR1cm4gX2p6KCB0aGlzLmxpbWJzICwgMCAsIHRoaXMubGltYnMubGVuZ3RoICkgO1xuXHR9XG5cblx0aXNvbmUgKCApIHtcblx0XHRpZiAoIHRoaXMuaXNfbmVnYXRpdmUgKSByZXR1cm4gZmFsc2UgO1xuXHRcdHJldHVybiBfZXEoIHRoaXMubGltYnMgLCAwICwgdGhpcy5saW1icy5sZW5ndGggLCBbIDEgXSAsIDAgLCAxICkgO1xuXHR9XG5cblx0bm9uemVybyAoICkge1xuXHRcdHJldHVybiAhdGhpcy5pc3plcm8oKTtcblx0fVxuXG5cdGJpbmFyeSAoICkge1xuXHRcdHJldHVybiB0aGlzLnRvU3RyaW5nKCAyICkgO1xuXHR9XG5cblx0ZGlnaXRzICggYmFzZSA9IHRoaXMuYmFzZSApIHtcblx0XHRyZXR1cm4gY29udmVydCggdGhpcy5iYXNlICwgYmFzZSAsIHRoaXMubGltYnMgLCAwICwgdGhpcy5saW1icy5sZW5ndGggKS5yZXZlcnNlKCApIDtcblx0fVxuXG5cdGJpdHMgKCApIHtcblx0XHRyZXR1cm4gdGhpcy5kaWdpdHMoIDIgKSA7XG5cdH1cblxuXHRkaXZpZGVzICggb3RoZXIgKSB7XG5cdFx0cmV0dXJuIG90aGVyLm1vZCggdGhpcyApLmlzemVybyggKSA7XG5cdH1cblxuXHRkaXZpZGVfa25vd2luZ19kaXZpc2libGVfYnkgKCBvdGhlciApIHtcblx0XHRyZXR1cm4gdGhpcy5kaXYoIG90aGVyICkgO1xuXHR9XG5cblx0Y21wICggb3RoZXIgKSB7XG5cblx0XHRpZiAoIHRoaXMuaXN6ZXJvKCApICkge1xuXHRcdFx0aWYgKCBvdGhlci5pc3plcm8oICkgKSAgICAgICAgcmV0dXJuICAwIDtcblx0XHRcdGVsc2UgaWYgKCBvdGhlci5pc19uZWdhdGl2ZSApIHJldHVybiAgMSA7XG5cdFx0XHRlbHNlICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTEgO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5pc19uZWdhdGl2ZSA8IG90aGVyLmlzX25lZ2F0aXZlICkgcmV0dXJuIC0xIDtcblx0XHRpZiAoIHRoaXMuaXNfbmVnYXRpdmUgPiBvdGhlci5pc19uZWdhdGl2ZSApIHJldHVybiAgMSA7XG5cblx0XHRjb25zdCBhID0gdGhpcy5saW1icyA7XG5cdFx0Y29uc3QgYiA9IG90aGVyLl9saW1ic19pbl9iYXNlKCB0aGlzLmJhc2UgKSA7XG5cblx0XHRyZXR1cm4gX2NtcCggYSAsIDAgLCBhLmxlbmd0aCAsIGIgLCAwICwgYi5sZW5ndGggKSA7XG5cblx0fVxuXG5cdGVxICggb3RoZXIgKSB7XG5cdFx0cmV0dXJuIHRoaXMuY21wKCBvdGhlciApID09PSAwIDtcblx0fVxuXG5cdGdlICggb3RoZXIgKSB7XG5cdFx0cmV0dXJuIHRoaXMuY21wKCBvdGhlciApID49IDAgO1xuXHR9XG5cblx0Z3QgKCBvdGhlciApIHtcblx0XHRyZXR1cm4gdGhpcy5jbXAoIG90aGVyICkgPiAwIDtcblx0fVxuXG5cdGxlICggb3RoZXIgKSB7XG5cdFx0cmV0dXJuIHRoaXMuY21wKCBvdGhlciApIDw9IDAgO1xuXHR9XG5cblx0bHQgKCBvdGhlciApIHtcblx0XHRyZXR1cm4gdGhpcy5jbXAoIG90aGVyICkgPCAwIDtcblx0fVxuXG5cdG5lICggb3RoZXIgKSB7XG5cdFx0cmV0dXJuIHRoaXMuY21wKCBvdGhlciApICE9PSAwIDtcblx0fVxuXG59XG4iXX0=