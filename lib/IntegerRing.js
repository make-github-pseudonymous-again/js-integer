'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.IntegerRing = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = require('./');

var _jsIntegerBigEndian = require('@aureooms/js-integer-big-endian');

var _jsError = require('@aureooms/js-error');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new _jsError.TypeError("Cannot call a class as a function"); } }

var IntegerRing = exports.IntegerRing = function () {
	function IntegerRing(name, base) {
		_classCallCheck(this, IntegerRing);

		this.name = name;
		this.base = base;
	}

	_createClass(IntegerRing, [{
		key: 'characteristic',
		value: function characteristic() {
			return this.$0();
		}
	}, {
		key: 'from',
		value: function from(object) {
			var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
			var is_negative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;


			if (object === null || object === undefined) return this.$0();

			switch (object.constructor.prototype) {

				case Number.prototype:
					if (base !== undefined) throw new _jsError.ValueError('IntegerRing#from: using the base parameter does not make sense when passing a Number.');
					return this.from_number(object, is_negative);

				case String.prototype:
					if (base === undefined) base = _.DEFAULT_DISPLAY_BASE;
					return this.from_string(object, base, is_negative);

				case Array.prototype:
					if (base === undefined) base = this.base;
					return this.from_digits(object, base, is_negative);

				case Boolean.prototype:
					if (base !== undefined) throw new _jsError.ValueError('IntegerRing#from: using the base parameter does not make sense when passing a Boolean.');
					return this.from_number(+object, is_negative);

				case _.Integer.prototype:
					if (base !== undefined) throw new _jsError.ValueError('IntegerRing#from: using the base parameter does not make sense when passing an Integer.');
					return new _.Integer(object.base, object.is_negative ^ is_negative, object.limbs);

				default:
					throw new _jsError.TypeError('IntegerRing#from cannot handle ' + object.constructor.prototype);

			}
		}
	}, {
		key: 'from_number',
		value: function from_number(number) {
			var is_negative = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;


			if (number < 0) {
				is_negative = ~is_negative;
				number = -number;
			}

			var limbs = (0, _jsIntegerBigEndian.convert)(0x20000000000000, this.base, [number], 0, 1);

			return new _.Integer(this.base, is_negative, limbs);
		}
	}, {
		key: 'from_string',
		value: function from_string(string) {
			var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
			var is_negative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;


			if (string.length === 0) throw new _jsError.ValueError('IntegerRing#from_string cannot parse empty string.');

			if (string[0] === '-') return this.from_string(string.slice(1), base, ~is_negative);

			if (string[0] === '+') return this.from_string(string.slice(1), base, is_negative);

			var limbs = (0, _jsIntegerBigEndian.parse)(base, this.base, string);

			return new _.Integer(this.base, is_negative, limbs);
		}
	}, {
		key: 'from_digits',
		value: function from_digits(digits, base, is_negative) {

			var limbs = (0, _jsIntegerBigEndian.convert)(base, this.base, digits.slice().reverse(), 0, digits.length);

			return new _.Integer(this.base, is_negative, limbs);
		}
	}, {
		key: 'toString',
		value: function toString() {
			return this.name;
		}
	}, {
		key: '$0',
		value: function $0() {
			return new _.Integer(this.base, 0, [0]);
		}
	}, {
		key: '$1',
		value: function $1() {
			return new _.Integer(this.base, 0, [1]);
		}
	}]);

	return IntegerRing;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnRlZ2VyUmluZy5qcyJdLCJuYW1lcyI6WyJJbnRlZ2VyUmluZyIsIm5hbWUiLCJiYXNlIiwiJDAiLCJvYmplY3QiLCJ1bmRlZmluZWQiLCJpc19uZWdhdGl2ZSIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiTnVtYmVyIiwiZnJvbV9udW1iZXIiLCJTdHJpbmciLCJmcm9tX3N0cmluZyIsIkFycmF5IiwiZnJvbV9kaWdpdHMiLCJCb29sZWFuIiwibGltYnMiLCJudW1iZXIiLCJzdHJpbmciLCJsZW5ndGgiLCJzbGljZSIsImRpZ2l0cyIsInJldmVyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOzs7O0lBRWFBLFcsV0FBQUEsVztBQUVaLHNCQUFjQyxJQUFkLEVBQXFCQyxJQUFyQixFQUE0QjtBQUFBOztBQUMzQixPQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQTs7OzttQ0FFa0I7QUFDbEIsVUFBTyxLQUFLQyxFQUFMLEVBQVA7QUFDQTs7O3VCQUVNQyxNLEVBQThDO0FBQUEsT0FBckNGLElBQXFDLHVFQUE5QkcsU0FBOEI7QUFBQSxPQUFsQkMsV0FBa0IsdUVBQUosQ0FBSTs7O0FBRXBELE9BQUtGLFdBQVcsSUFBWCxJQUFtQkEsV0FBV0MsU0FBbkMsRUFBK0MsT0FBTyxLQUFLRixFQUFMLEVBQVA7O0FBRS9DLFdBQVNDLE9BQU9HLFdBQVAsQ0FBbUJDLFNBQTVCOztBQUVDLFNBQUtDLE9BQU9ELFNBQVo7QUFDQyxTQUFLTixTQUFTRyxTQUFkLEVBQTBCLE1BQU0sd0JBQWUsdUZBQWYsQ0FBTjtBQUMxQixZQUFPLEtBQUtLLFdBQUwsQ0FBa0JOLE1BQWxCLEVBQTJCRSxXQUEzQixDQUFQOztBQUVELFNBQUtLLE9BQU9ILFNBQVo7QUFDQyxTQUFLTixTQUFTRyxTQUFkLEVBQTBCSDtBQUMxQixZQUFPLEtBQUtVLFdBQUwsQ0FBa0JSLE1BQWxCLEVBQTJCRixJ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b20gJy4vJyA7XG5pbXBvcnQgeyBERUZBVUxUX0RJU1BMQVlfQkFTRSB9IGZyb20gJy4vJyA7XG5pbXBvcnQgeyBwYXJzZSAsIGNvbnZlcnQgfSBmcm9tICdAYXVyZW9vbXMvanMtaW50ZWdlci1iaWctZW5kaWFuJyA7XG5pbXBvcnQgeyBUeXBlRXJyb3IgLCBWYWx1ZUVycm9yIH0gZnJvbSAnQGF1cmVvb21zL2pzLWVycm9yJyA7XG5cbmV4cG9ydCBjbGFzcyBJbnRlZ2VyUmluZyB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lICwgYmFzZSApIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lIDtcblx0XHR0aGlzLmJhc2UgPSBiYXNlIDtcblx0fVxuXG5cdGNoYXJhY3RlcmlzdGljICggKSB7XG5cdFx0cmV0dXJuIHRoaXMuJDAoKSA7XG5cdH1cblxuXHRmcm9tICggb2JqZWN0ICwgYmFzZSA9IHVuZGVmaW5lZCAsIGlzX25lZ2F0aXZlID0gMCApIHtcblxuXHRcdGlmICggb2JqZWN0ID09PSBudWxsIHx8IG9iamVjdCA9PT0gdW5kZWZpbmVkICkgcmV0dXJuIHRoaXMuJDAoKTtcblxuXHRcdHN3aXRjaCAoIG9iamVjdC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgKSB7XG5cblx0XHRcdGNhc2UgTnVtYmVyLnByb3RvdHlwZSA6XG5cdFx0XHRcdGlmICggYmFzZSAhPT0gdW5kZWZpbmVkICkgdGhyb3cgbmV3IFZhbHVlRXJyb3IoJ0ludGVnZXJSaW5nI2Zyb206IHVzaW5nIHRoZSBiYXNlIHBhcmFtZXRlciBkb2VzIG5vdCBtYWtlIHNlbnNlIHdoZW4gcGFzc2luZyBhIE51bWJlci4nKSA7XG5cdFx0XHRcdHJldHVybiB0aGlzLmZyb21fbnVtYmVyKCBvYmplY3QgLCBpc19uZWdhdGl2ZSApIDtcblxuXHRcdFx0Y2FzZSBTdHJpbmcucHJvdG90eXBlIDpcblx0XHRcdFx0aWYgKCBiYXNlID09PSB1bmRlZmluZWQgKSBiYXNlID0gREVGQVVMVF9ESVNQTEFZX0JBU0UgO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5mcm9tX3N0cmluZyggb2JqZWN0ICwgYmFzZSAsIGlzX25lZ2F0aXZlICkgO1xuXG5cdFx0XHRjYXNlIEFycmF5LnByb3RvdHlwZSA6XG5cdFx0XHRcdGlmICggYmFzZSA9PT0gdW5kZWZpbmVkICkgYmFzZSA9IHRoaXMuYmFzZSA7XG5cdFx0XHRcdHJldHVybiB0aGlzLmZyb21fZGlnaXRzKCBvYmplY3QgLCBiYXNlICwgaXNfbmVnYXRpdmUgKSA7XG5cblx0XHRcdGNhc2UgQm9vbGVhbi5wcm90b3R5cGUgOlxuXHRcdFx0XHRpZiAoIGJhc2UgIT09IHVuZGVmaW5lZCApIHRocm93IG5ldyBWYWx1ZUVycm9yKCdJbnRlZ2VyUmluZyNmcm9tOiB1c2luZyB0aGUgYmFzZSBwYXJhbWV0ZXIgZG9lcyBub3QgbWFrZSBzZW5zZSB3aGVuIHBhc3NpbmcgYSBCb29sZWFuLicpIDtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZnJvbV9udW1iZXIoICtvYmplY3QgLCBpc19uZWdhdGl2ZSApIDtcblxuXHRcdFx0Y2FzZSBJbnRlZ2VyLnByb3RvdHlwZSA6XG5cdFx0XHRcdGlmICggYmFzZSAhPT0gdW5kZWZpbmVkICkgdGhyb3cgbmV3IFZhbHVlRXJyb3IoJ0ludGVnZXJSaW5nI2Zyb206IHVzaW5nIHRoZSBiYXNlIHBhcmFtZXRlciBkb2VzIG5vdCBtYWtlIHNlbnNlIHdoZW4gcGFzc2luZyBhbiBJbnRlZ2VyLicpIDtcblx0XHRcdFx0cmV0dXJuIG5ldyBJbnRlZ2VyKCBvYmplY3QuYmFzZSAsIG9iamVjdC5pc19uZWdhdGl2ZSBeIGlzX25lZ2F0aXZlICwgb2JqZWN0LmxpbWJzICkgO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnRlZ2VyUmluZyNmcm9tIGNhbm5vdCBoYW5kbGUgJHtvYmplY3QuY29uc3RydWN0b3IucHJvdG90eXBlfWApIDtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnJvbV9udW1iZXIgKCBudW1iZXIgLCBpc19uZWdhdGl2ZSA9IDAgKSB7XG5cblx0XHRpZiAoIG51bWJlciA8IDAgKSB7XG5cdFx0XHRpc19uZWdhdGl2ZSA9IH5pc19uZWdhdGl2ZSA7XG5cdFx0XHRudW1iZXIgPSAtbnVtYmVyIDtcblx0XHR9XG5cblx0XHRjb25zdCBsaW1icyA9IGNvbnZlcnQoIDB4MjAwMDAwMDAwMDAwMDAgLCB0aGlzLmJhc2UgLCBbIG51bWJlciBdICwgMCAsIDEgKSA7XG5cblx0XHRyZXR1cm4gbmV3IEludGVnZXIoIHRoaXMuYmFzZSAsIGlzX25lZ2F0aXZlICwgbGltYnMgKSA7XG5cblx0fVxuXG5cdGZyb21fc3RyaW5nICggc3RyaW5nICwgYmFzZSA9IDEwICwgaXNfbmVnYXRpdmUgPSAwICApIHtcblxuXHRcdGlmICggc3RyaW5nLmxlbmd0aCA9PT0gMCApIHRocm93IG5ldyBWYWx1ZUVycm9yKCAnSW50ZWdlclJpbmcjZnJvbV9zdHJpbmcgY2Fubm90IHBhcnNlIGVtcHR5IHN0cmluZy4nICkgO1xuXG5cdFx0aWYgKCBzdHJpbmdbMF0gPT09ICctJyApIHJldHVybiB0aGlzLmZyb21fc3RyaW5nKCBzdHJpbmcuc2xpY2UoMSkgLCBiYXNlICwgfmlzX25lZ2F0aXZlICkgO1xuXG5cdFx0aWYgKCBzdHJpbmdbMF0gPT09ICcrJyApIHJldHVybiB0aGlzLmZyb21fc3RyaW5nKCBzdHJpbmcuc2xpY2UoMSkgLCBiYXNlICwgaXNfbmVnYXRpdmUgKSA7XG5cblx0XHRjb25zdCBsaW1icyA9IHBhcnNlKCBiYXNlICwgdGhpcy5iYXNlICwgc3RyaW5nICkgO1xuXG5cdFx0cmV0dXJuIG5ldyBJbnRlZ2VyKCB0aGlzLmJhc2UgLCBpc19uZWdhdGl2ZSAsIGxpbWJzICkgO1xuXG5cdH1cblxuXHRmcm9tX2RpZ2l0cyAoIGRpZ2l0cyAsIGJhc2UgLCBpc19uZWdhdGl2ZSApIHtcblxuXHRcdGNvbnN0IGxpbWJzID0gY29udmVydCggYmFzZSAsIHRoaXMuYmFzZSAsIGRpZ2l0cy5zbGljZSgpLnJldmVyc2UoKSAsIDAgLCBkaWdpdHMubGVuZ3RoICkgO1xuXG5cdFx0cmV0dXJuIG5ldyBJbnRlZ2VyKCB0aGlzLmJhc2UgLCBpc19uZWdhdGl2ZSAsIGxpbWJzICkgO1xuXG5cdH1cblxuXHR0b1N0cmluZyAoICkge1xuXHRcdHJldHVybiB0aGlzLm5hbWUgO1xuXHR9XG5cblx0JDAgKCApIHtcblx0XHRyZXR1cm4gbmV3IEludGVnZXIoIHRoaXMuYmFzZSAsIDAgLCBbIDAgXSApIDtcblx0fVxuXG5cdCQxICggKSB7XG5cdFx0cmV0dXJuIG5ldyBJbnRlZ2VyKCB0aGlzLmJhc2UgLCAwICwgWyAxIF0gKSA7XG5cdH1cblxufVxuIl19