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
		key: 'toString',
		value: function toString() {
			var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _.DEFAULT_DISPLAY_BASE;


			if ((0, _jsIntegerBigEndian._jz)(this.limbs, 0, this.limbs.length)) return '0';

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

				var b = void 0;

				if (other.base === r) b = other.limbs;else b = (0, _jsIntegerBigEndian.convert)(other.base, r, other.limbs, 0, other.limbs.length);

				var c = (0, _jsIntegerBigEndian._zeros)(Math.max(a.length, b.length) + 1);

				(0, _jsIntegerBigEndian._add)(r, a, 0, a.length, b, 0, b.length, c, 0, c.length);

				return new Integer(r, result_is_negative, c);
			}
		}
	}, {
		key: 'sub',
		value: function sub(other) {

			if (this.is_negative !== other.is_negative) {

				if (other.is_negative) return this.add(other.opposite());else return this.opposite().add(other).opposite();
			} else {

				var r = this.base;
				var a = this.limbs;

				var b = void 0;

				if (other.base === r) b = other.limbs;else b = (0, _jsIntegerBigEndian.convert)(other.base, r, other.limbs, 0, other.limbs.length);

				var c = (0, _jsIntegerBigEndian._zeros)(Math.max(a.length, b.length));

				if ((0, _jsIntegerBigEndian._lt)(a, 0, a.length, b, 0, b.length)) {

					(0, _jsIntegerBigEndian._sub)(r, b, 0, b.length, a, 0, a.length, c, 0, c.length);

					return new Integer(r, ~this.is_negative, c);
				} else {

					(0, _jsIntegerBigEndian._sub)(r, a, 0, a.length, b, 0, b.length, c, 0, c.length);

					return new Integer(r, this.is_negative, c);
				}
			}
		}
	}, {
		key: 'mul',
		value: function mul(other) {

			var result_is_negative = this.is_negative ^ other.is_negative;
			var r = this.base;

			var a = this.limbs;

			var b = void 0;

			if (other.base === r) b = other.limbs;else b = (0, _jsIntegerBigEndian.convert)(other.base, r, other.limbs, 0, other.limbs.length);

			var c = (0, _jsIntegerBigEndian._zeros)(a.length + b.length);

			(0, _jsIntegerBigEndian._mul)(r, a, 0, a.length, b, 0, b.length, c, 0, c.length);

			return new Integer(r, result_is_negative, c);
		}
	}, {
		key: 'pow',
		value: function pow(other) {
			throw 'Integer#pow not implemented yet, waiting for @aureooms/js-integer-big-endian.';
		}
	}, {
		key: 'div',
		value: function div(other) {
			return this.divmod(other)[0];
		}
	}, {
		key: 'mod',
		value: function mod(other) {
			return this.divmod(other)[1];
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
			var d = void 0;
			if (other.base === r) d = other.limbs;else d = (0, _jsIntegerBigEndian.convert)(other.base, r, other.limbs, 0, other.limbs.length);

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
	}]);

	return Integer;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnRlZ2VyLmpzIl0sIm5hbWVzIjpbIkludGVnZXIiLCJiYXNlIiwiaXNfbmVnYXRpdmUiLCJsaW1icyIsImxlbmd0aCIsImRpZ2l0cyIsIm90aGVyIiwic3ViIiwib3Bwb3NpdGUiLCJyZXN1bHRfaXNfbmVnYXRpdmUiLCJyIiwiYSIsImIiLCJjIiwiTWF0aCIsIm1heCIsImFkZCIsImRpdm1vZCIsInF1b3RpZW50X2lzX25lZ2F0aXZlIiwiRCIsImQiLCJxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7QUFFQTs7OztJQU9hQSxPLFdBQUFBLE87QUFFWixrQkFBY0MsSUFBZCxFQUFxQkMsV0FBckIsRUFBbUNDLEtBQW5DLEVBQTJDO0FBQUE7O0FBQzFDLE9BQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsT0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0E7Ozs7NkJBRXdDO0FBQUEsT0FBOUJGLElBQThCOzs7QUFFeEMsT0FBSyw2QkFBSyxLQUFLRSxLQUFWLEVBQWtCLENBQWxCLEVBQXNCLEtBQUtBLEtBQUwsQ0FBV0MsTUFBakMsQ0FBTCxFQUFpRCxPQUFPLEdBQVA7O0FBRWpELE9BQU1DLFNBQVMsbUNBQVcsS0FBS0osSUFBaEIsRUFBdUJBLElBQXZCLEVBQThCLEtBQUtFLEtBQW5DLEVBQTJDLENBQTNDLEVBQStDLEtBQUtBLEtBQUwsQ0FBV0MsTUFBMUQsQ0FBZjs7QUFFQSxVQUFPLEtBQUtGLFdBQUwsR0FBbUIsTUFBTUcsTUFBekIsR0FBa0NBLE1BQXpDO0FBRUE7OztzQkFFS0MsSyxFQUFROztBQUViLE9BQUssS0FBS0osV0FBTCxLQUFxQkksTUFBTUosV0FBaEMsRUFBOEM7O0FBRTdDLFFBQUtJLE1BQU1KLFdBQVgsRUFBeUIsT0FBTyxLQUFLSyxHQUFMLENBQVVELE1BQU1FLFFBQU4sRUFBVixDQUFQLENBQXpCLEtBRUssT0FBT0YsTUFBTUMsR0FBTixDQUFXLEtBQUtDLFFB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QyxNQUFuQyxFQUE0Q2UsQ0FBNUMsRUFBZ0QsQ0FBaEQ7O0FBRUE7QUFDQSxPQUFJQyxVQUFKO0FBQ0EsT0FBS2QsTUFBTUwsSUFBTixLQUFlUyxDQUFwQixFQUF3QlUsSUFBSWQsTUFBTUgsS0FBVixDQUF4QixLQUNLaUIsSUFBSSxpQ0FBU2QsTUFBTUwsSUFBZixFQUFzQlMsQ0FBdEIsRUFBMEJKLE1BQU1ILEtBQWhDLEVBQXdDLENBQXhDLEVBQTRDRyxNQUFNSCxLQUFOLENBQVlDLE1BQXhELENBQUo7O0FBRUw7QUFDQSxPQUFNaUIsSUFBSSxnQ0FBUUYsRUFBRWYsTUFBVixDQUFWOztBQUVBLGlDQUFNTSxDQUFOLEVBQVVTLENBQVYsRUFBYyxDQUFkLEVBQWtCQSxFQUFFZixNQUFwQixFQUE2QmdCLENBQTdCLEVBQWlDLENBQWpDLEVBQXFDQSxFQUFFaEIsTUFBdkMsRUFBZ0RpQixDQUFoRCxFQUFvRCxDQUFwRCxFQUF3REEsRUFBRWpCLE1BQTFEOztBQUVBLFVBQU8sQ0FDTixJQUFJSixPQUFKLENBQWFVLENBQWIsRUFBaUJRLG9CQUFqQixFQUF3Q0csQ0FBeEMsQ0FETSxFQUN3QztBQUM5QyxPQUFJckIsT0FBSixDQUFhVSxDQUFiLEVBQWlCLENBQWpCLEVBQXFCUyxDQUFyQixDQUZNLENBRXdDO0FBRnhDLElBQVA7QUFLQTs7OzZCQUVZO0FBQ1osVUFBTyxJQUFJbkIsT0FBSixDQUFhLEtBQUtDLElBQWxCLEVBQXlCLENBQUMsS0FBS0MsV0FBL0IsRUFBNkMsS0FBS0MsS0FBbEQsQ0FBUDtBQUNBIiwiZmlsZSI6IkludGVnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IERFRkFVTFRfRElTUExBWV9CQVNFIH0gZnJvbSAnLi8nIDtcblxuaW1wb3J0IHtcblx0c3RyaW5naWZ5ICwgY29udmVydCAsXG5cdF9hbGxvYyAsIF9jb3B5ICwgX3plcm9zICxcblx0X2x0ICwgX2p6ICxcblx0X2FkZCAsIF9zdWIgLCBfbXVsICwgX2Rpdixcbn0gZnJvbSAnQGF1cmVvb21zL2pzLWludGVnZXItYmlnLWVuZGlhbicgO1xuXG5leHBvcnQgY2xhc3MgSW50ZWdlciB7XG5cblx0Y29uc3RydWN0b3IgKCBiYXNlICwgaXNfbmVnYXRpdmUgLCBsaW1icyApIHtcblx0XHR0aGlzLmJhc2UgPSBiYXNlIDtcblx0XHR0aGlzLmlzX25lZ2F0aXZlID0gaXNfbmVnYXRpdmUgO1xuXHRcdHRoaXMubGltYnMgPSBsaW1icyA7XG5cdH1cblxuXHR0b1N0cmluZyAoIGJhc2UgPSBERUZBVUxUX0RJU1BMQVlfQkFTRSApIHtcblxuXHRcdGlmICggX2p6KCB0aGlzLmxpbWJzICwgMCAsIHRoaXMubGltYnMubGVuZ3RoICkgKSByZXR1cm4gJzAnIDtcblxuXHRcdGNvbnN0IGRpZ2l0cyA9IHN0cmluZ2lmeSggdGhpcy5iYXNlICwgYmFzZSAsIHRoaXMubGltYnMgLCAwICwgdGhpcy5saW1icy5sZW5ndGggKSA7XG5cblx0XHRyZXR1cm4gdGhpcy5pc19uZWdhdGl2ZSA/ICctJyArIGRpZ2l0cyA6IGRpZ2l0cyA7XG5cblx0fVxuXG5cdGFkZCAoIG90aGVyICkge1xuXG5cdFx0aWYgKCB0aGlzLmlzX25lZ2F0aXZlICE9PSBvdGhlci5pc19uZWdhdGl2ZSApIHtcblxuXHRcdFx0aWYgKCBvdGhlci5pc19uZWdhdGl2ZSApIHJldHVybiB0aGlzLnN1Yiggb3RoZXIub3Bwb3NpdGUoKSApIDtcblxuXHRcdFx0ZWxzZSByZXR1cm4gb3RoZXIuc3ViKCB0aGlzLm9wcG9zaXRlKCkgKSA7XG5cblx0XHR9XG5cblx0XHRlbHNlIHtcblxuXHRcdFx0Y29uc3QgcmVzdWx0X2lzX25lZ2F0aXZlID0gdGhpcy5pc19uZWdhdGl2ZSA7XG5cdFx0XHRjb25zdCByID0gdGhpcy5iYXNlIDtcblxuXHRcdFx0Y29uc3QgYSA9IHRoaXMubGltYnMgO1xuXG5cdFx0XHRsZXQgYiA7XG5cblx0XHRcdGlmICggb3RoZXIuYmFzZSA9PT0gciApIGIgPSBvdGhlci5saW1icyA7XG5cdFx0XHRlbHNlIGIgPSBjb252ZXJ0KCBvdGhlci5iYXNlICwgciAsIG90aGVyLmxpbWJzICwgMCAsIG90aGVyLmxpbWJzLmxlbmd0aCApIDtcblxuXHRcdFx0Y29uc3QgYyA9IF96ZXJvcyggTWF0aC5tYXgoIGEubGVuZ3RoICwgYi5sZW5ndGggKSArIDEgKSA7XG5cblx0XHRcdF9hZGQoIHIgLCBhICwgMCAsIGEubGVuZ3RoICwgYiAsIDAgLCBiLmxlbmd0aCAsIGMgLCAwICwgYy5sZW5ndGggKSA7XG5cblx0XHRcdHJldHVybiBuZXcgSW50ZWdlciggciAsIHJlc3VsdF9pc19uZWdhdGl2ZSAsIGMgKSA7XG5cblx0XHR9XG5cblx0fVxuXG5cdHN1YiAoIG90aGVyICkge1xuXG5cdFx0aWYgKCB0aGlzLmlzX25lZ2F0aXZlICE9PSBvdGhlci5pc19uZWdhdGl2ZSApIHtcblxuXHRcdFx0aWYgKCBvdGhlci5pc19uZWdhdGl2ZSApIHJldHVybiB0aGlzLmFkZCggb3RoZXIub3Bwb3NpdGUoKSApIDtcblxuXHRcdFx0ZWxzZSByZXR1cm4gdGhpcy5vcHBvc2l0ZSgpLmFkZCggb3RoZXIgKS5vcHBvc2l0ZSgpIDtcblxuXHRcdH1cblxuXHRcdGVsc2Uge1xuXG5cdFx0XHRjb25zdCByID0gdGhpcy5iYXNlIDtcblx0XHRcdGNvbnN0IGEgPSB0aGlzLmxpbWJzIDtcblxuXHRcdFx0bGV0IGIgO1xuXG5cdFx0XHRpZiAoIG90aGVyLmJhc2UgPT09IHIgKSBiID0gb3RoZXIubGltYnMgO1xuXHRcdFx0ZWxzZSBiID0gY29udmVydCggb3RoZXIuYmFzZSAsIHIgLCBvdGhlci5saW1icyAsIDAgLCBvdGhlci5saW1icy5sZW5ndGggKSA7XG5cblx0XHRcdGNvbnN0IGMgPSBfemVyb3MoIE1hdGgubWF4KCBhLmxlbmd0aCAsIGIubGVuZ3RoICkgKSA7XG5cblx0XHRcdGlmICggX2x0KCBhICwgMCAsIGEubGVuZ3RoICwgYiAsIDAgLCBiLmxlbmd0aCApICkge1xuXG5cdFx0XHRcdF9zdWIoIHIgLCBiICwgMCAsIGIubGVuZ3RoICwgYSAsIDAgLCBhLmxlbmd0aCAsIGMgLCAwICwgYy5sZW5ndGggKSA7XG5cblx0XHRcdFx0cmV0dXJuIG5ldyBJbnRlZ2VyKCByICwgfnRoaXMuaXNfbmVnYXRpdmUgLCBjICkgO1xuXHRcdFx0fVxuXG5cdFx0XHRlbHNlIHtcblxuXHRcdFx0XHRfc3ViKCByICwgYSAsIDAgLCBhLmxlbmd0aCAsIGIgLCAwICwgYi5sZW5ndGggLCBjICwgMCAsIGMubGVuZ3RoICkgO1xuXG5cdFx0XHRcdHJldHVybiBuZXcgSW50ZWdlciggciAsIHRoaXMuaXNfbmVnYXRpdmUgLCBjICkgO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fVxuXG5cdG11bCAoIG90aGVyICkge1xuXG5cdFx0Y29uc3QgcmVzdWx0X2lzX25lZ2F0aXZlID0gdGhpcy5pc19uZWdhdGl2ZSBeIG90aGVyLmlzX25lZ2F0aXZlIDtcblx0XHRjb25zdCByID0gdGhpcy5iYXNlIDtcblxuXHRcdGNvbnN0IGEgPSB0aGlzLmxpbWJzIDtcblxuXHRcdGxldCBiIDtcblxuXHRcdGlmICggb3RoZXIuYmFzZSA9PT0gciApIGIgPSBvdGhlci5saW1icyA7XG5cdFx0ZWxzZSBiID0gY29udmVydCggb3RoZXIuYmFzZSAsIHIgLCBvdGhlci5saW1icyAsIDAgLCBvdGhlci5saW1icy5sZW5ndGggKSA7XG5cblx0XHRjb25zdCBjID0gX3plcm9zKCBhLmxlbmd0aCArIGIubGVuZ3RoICkgO1xuXG5cdFx0X211bCggciAsIGEgLCAwICwgYS5sZW5ndGggLCBiICwgMCAsIGIubGVuZ3RoICwgYyAsIDAgLCBjLmxlbmd0aCApIDtcblxuXHRcdHJldHVybiBuZXcgSW50ZWdlciggciAsIHJlc3VsdF9pc19uZWdhdGl2ZSAsIGMgKSA7XG5cblx0fVxuXG5cdHBvdyAoIG90aGVyICkge1xuXHRcdHRocm93ICdJbnRlZ2VyI3BvdyBub3QgaW1wbGVtZW50ZWQgeWV0LCB3YWl0aW5nIGZvciBAYXVyZW9vbXMvanMtaW50ZWdlci1iaWctZW5kaWFuLicgO1xuXHR9XG5cblx0ZGl2ICggb3RoZXIgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGl2bW9kKCBvdGhlciApWzBdIDtcblx0fVxuXG5cdG1vZCAoIG90aGVyICkge1xuXHRcdHJldHVybiB0aGlzLmRpdm1vZCggb3RoZXIgKVsxXSA7XG5cdH1cblxuXHRkaXZtb2QgKCBvdGhlciApIHtcblxuXHRcdGNvbnN0IHF1b3RpZW50X2lzX25lZ2F0aXZlID0gdGhpcy5pc19uZWdhdGl2ZSBeIG90aGVyLmlzX25lZ2F0aXZlIDtcblx0XHRjb25zdCByID0gdGhpcy5iYXNlIDtcblxuXHRcdC8vIERpdmlkZW5kICgmIFJlbWFpbmRlcilcblx0XHRjb25zdCBEID0gX2FsbG9jKCB0aGlzLmxpbWJzLmxlbmd0aCApIDtcblx0XHRfY29weSggdGhpcy5saW1icyAsIDAgLCB0aGlzLmxpbWJzLmxlbmd0aCAsIEQgLCAwICkgO1xuXG5cdFx0Ly8gRGl2aXNvclxuXHRcdGxldCBkIDtcblx0XHRpZiAoIG90aGVyLmJhc2UgPT09IHIgKSBkID0gb3RoZXIubGltYnMgO1xuXHRcdGVsc2UgZCA9IGNvbnZlcnQoIG90aGVyLmJhc2UgLCByICwgb3RoZXIubGltYnMgLCAwICwgb3RoZXIubGltYnMubGVuZ3RoICkgO1xuXG5cdFx0Ly8gUXVvdGllbnRcblx0XHRjb25zdCBxID0gX3plcm9zKCBELmxlbmd0aCApIDtcblxuXHRcdF9kaXYoIHIgLCBEICwgMCAsIEQubGVuZ3RoICwgZCAsIDAgLCBkLmxlbmd0aCAsIHEgLCAwICwgcS5sZW5ndGggKSA7XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0bmV3IEludGVnZXIoIHIgLCBxdW90aWVudF9pc19uZWdhdGl2ZSAsIHEgKSAsIC8vIHF1b3RpZW50XG5cdFx0XHRuZXcgSW50ZWdlciggciAsIDAgLCBEICkgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtYWluZGVyXG5cdFx0XSA7XG5cblx0fVxuXG5cdG9wcG9zaXRlICggKSB7XG5cdFx0cmV0dXJuIG5ldyBJbnRlZ2VyKCB0aGlzLmJhc2UgLCB+dGhpcy5pc19uZWdhdGl2ZSAsIHRoaXMubGltYnMgKSA7XG5cdH1cblxufVxuIl19