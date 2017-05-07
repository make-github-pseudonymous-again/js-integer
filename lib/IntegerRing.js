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


			if (string.length === 0) throw 'IntegerRing#from_string cannot parse empty string.';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnRlZ2VyUmluZy5qcyJdLCJuYW1lcyI6WyJJbnRlZ2VyUmluZyIsIm5hbWUiLCJiYXNlIiwiJDAiLCJvYmplY3QiLCJ1bmRlZmluZWQiLCJpc19uZWdhdGl2ZSIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiTnVtYmVyIiwiZnJvbV9udW1iZXIiLCJTdHJpbmciLCJmcm9tX3N0cmluZyIsIkFycmF5IiwiZnJvbV9kaWdpdHMiLCJCb29sZWFuIiwibGltYnMiLCJudW1iZXIiLCJzdHJpbmciLCJsZW5ndGgiLCJzbGljZSIsImRpZ2l0cyIsInJldmVyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOzs7O0lBRWFBLFcsV0FBQUEsVztBQUVaLHNCQUFjQyxJQUFkLEVBQXFCQyxJQUFyQixFQUE0QjtBQUFBOztBQUMzQixPQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQTs7OzttQ0FFa0I7QUFDbEIsVUFBTyxLQUFLQyxFQUFMLEVBQVA7QUFDQTs7O3VCQUVNQyxNLEVBQThDO0FBQUEsT0FBckNGLElBQXFDLHVFQUE5QkcsU0FBOEI7QUFBQSxPQUFsQkMsV0FBa0IsdUVBQUosQ0FBSTs7O0FBRXBELE9BQUtGLFdBQVcsSUFBWCxJQUFtQkEsV0FBV0MsU0FBbkMsRUFBK0MsT0FBTyxLQUFLRixFQUFMLEVBQVA7O0FBRS9DLFdBQVNDLE9BQU9HLFdBQVAsQ0FBbUJDLFNBQTVCOztBQUVDLFNBQUtDLE9BQU9ELFNBQVo7QUFDQyxTQUFLTixTQUFTRyxTQUFkLEVBQTBCLE1BQU0sd0JBQWUsdUZBQWYsQ0FBTjtBQUMxQixZQUFPLEtBQUtLLFdBQUwsQ0FBa0JOLE1BQWxCLEVBQTJCRSxXQUEzQixDQUFQOztBQUVELFNBQUtLLE9BQU9ILFNBQVo7QUFDQyxTQUFLTixTQUFTRyxTQUFkLEVBQTBCSDtBQUMxQixZQUFPLEtBQUtVLFdBQUwsQ0FBa0JSLE1BQWxCLEVBQTJCRixJQUEzQixFQUFrQ0ksV0FBbEMsQ0FBUDs7QUFFRCxTQUFLTyxNQUFNTCxTQUFYO0FBQ0MsU0FBS04sU0FBU0csU0FBZCxFQUEwQkgsT0FBTyxLQUFLQSxJQUFaO0FBQzFCLFlBQU8sS0FBS1ksV0FBTCxDQUFrQlYsTUFBbEIsRUFBMkJGLElBQTNCLEVBQWtDSSxXQUFsQyxDQUFQOztBQUVELFNBQUtTLFFBQVFQLFNBQWI7QUFDQyxTQUFLTixTQUFTRyxTQUFkLEVBQTBCLE1BQU0sd0JBQWUsd0ZBQWYsQ0FBTjtBQUMxQixZQUFPLEtBQUtLLFdBQUwsQ0FBa0IsQ0FBQ04sTUFBbkIsRUFBNEJFLFdBQTVCLENBQVA7O0FBRUQsU0FBSyxVQUFRRSxTQUFiO0FBQ0MsU0FBS04sU0FBU0csU0FBZCxFQUEwQixNQUFNLHdCQUFlLHlGQUFmLENBQU47QUFDMUIsWUFBTyxjQUFhRCxPQUFPRixJQUFwQixFQUEyQkUsT0FBT0UsV0FBUCxHQUFxQkEsV0FBaEQsRUFBOERGLE9BQU9ZLEtBQXJFLENBQVA7O0FBRUQ7QUFDQyxXQUFNLDJEQUFnRFosT0FBT0csV0FBUCxDQUFtQkMsU0FBbkUsQ0FBTjs7QUF2QkY7QUEyQkE7Ozs4QkFFYVMsTSxFQUEyQjtBQUFBLE9BQWxCWCxXQUFrQix1RUFBSixDQUFJOzs7QUFFeEMsT0FBS1csU0FBUyxDQUFkLEVBQWtCO0FBQ2pCWCxrQkFBYyxDQUFDQSxXQUFmO0FBQ0FXLGFBQVMsQ0FBQ0EsTUFBVjtBQUNBOztBQUVELE9BQU1ELFFBQVEsaUNBQVMsZ0JBQVQsRUFBNEIsS0FBS2QsSUFBakMsRUFBd0MsQ0FBRWUsTUFBRixDQUF4QyxFQUFxRCxDQUFyRCxFQUF5RCxDQUF6RCxDQUFkOztBQUVBLFVBQU8sY0FBYSxLQUFLZixJQUFsQixFQUF5QkksV0FBekIsRUFBdUNVLEtBQXZDLENBQVA7QUFFQTs7OzhCQUVhRSxNLEVBQXdDO0FBQUEsT0FBL0JoQixJQUErQix1RUFBeEIsRUFBd0I7QUFBQSxPQUFuQkksV0FBbUIsdUVBQUwsQ0FBSzs7O0FBRXJELE9BQUtZLE9BQU9DLE1BQVAsS0FBa0IsQ0FBdkIsRUFBMkIsTUFBTSxvREFBTjs7QUFFM0IsT0FBS0QsT0FBTyxDQUFQLE1BQWMsR0FBbkIsRUFBeUIsT0FBTyxLQUFLTixXQUFMLENBQWtCTSxPQUFPRSxLQUFQLENBQWEsQ0FBYixDQUFsQixFQUFvQ2xCLElBQXBDLEVBQTJDLENBQUNJLFdBQTVDLENBQVA7O0FBRXpCLE9BQUtZLE9BQU8sQ0FBUCxNQUFjLEdBQW5CLEVBQXlCLE9BQU8sS0FBS04sV0FBTCxDQUFrQk0sT0FBT0UsS0FBUCxDQUFhLENBQWIsQ0FBbEIsRUFBb0NsQixJQUFwQyxFQUEyQ0ksV0FBM0MsQ0FBUDs7QUFFekIsT0FBTVUsUUFBUSwrQkFBT2QsSUFBUCxFQUFjLEtBQUtBLElBQW5CLEVBQTBCZ0IsTUFBMUIsQ0FBZDs7QUFFQSxVQUFPLGNBQWEsS0FBS2hCLElBQWxCLEVBQXlCSSxXQUF6QixFQUF1Q1UsS0FBdkMsQ0FBUDtBQUVBOzs7OEJBRWFLLE0sRUFBU25CLEksRUFBT0ksVyxFQUFjOztBQUUzQyxPQUFNVSxRQUFRLGlDQUFTZCxJQUFULEVBQWdCLEtBQUtBLElBQXJCLEVBQTRCbUIsT0FBT0QsS0FBUCxHQUFlRSxPQUFmLEVBQTVCLEVBQXVELENBQXZELEVBQTJERCxPQUFPRixNQUFsRSxDQUFkOztBQUVBLFVBQU8sY0FBYSxLQUFLakIsSUFBbEIsRUFBeUJJLFdBQXpCLEVBQXVDVSxLQUF2QyxDQUFQO0FBRUE7Ozs2QkFFWTtBQUNaLFVBQU8sS0FBS2YsSUFBWjtBQUNBOzs7dUJBRU07QUFDTixVQUFPLGNBQWEsS0FBS0MsSUFBbEIsRUFBeUIsQ0FBekIsRUFBNkIsQ0FBRSxDQUFGLENBQTdCLENBQVA7QUFDQTs7O3VCQUVNO0FBQ04sVUFBTyxjQUFhLEtBQUtBLElBQWxCLEVBQXlCLENBQXpCLEVBQTZCLENBQUUsQ0FBRixDQUE3QixDQUFQO0FBQ0EiLCJmaWxlIjoiSW50ZWdlclJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnRlZ2VyIH0gZnJvbSAnLi8nIDtcbmltcG9ydCB7IERFRkFVTFRfRElTUExBWV9CQVNFIH0gZnJvbSAnLi8nIDtcbmltcG9ydCB7IHBhcnNlICwgY29udmVydCB9IGZyb20gJ0BhdXJlb29tcy9qcy1pbnRlZ2VyLWJpZy1lbmRpYW4nIDtcbmltcG9ydCB7IFR5cGVFcnJvciAsIFZhbHVlRXJyb3IgfSBmcm9tICdAYXVyZW9vbXMvanMtZXJyb3InIDtcblxuZXhwb3J0IGNsYXNzIEludGVnZXJSaW5nIHtcblxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgLCBiYXNlICkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWUgO1xuXHRcdHRoaXMuYmFzZSA9IGJhc2UgO1xuXHR9XG5cblx0Y2hhcmFjdGVyaXN0aWMgKCApIHtcblx0XHRyZXR1cm4gdGhpcy4kMCgpIDtcblx0fVxuXG5cdGZyb20gKCBvYmplY3QgLCBiYXNlID0gdW5kZWZpbmVkICwgaXNfbmVnYXRpdmUgPSAwICkge1xuXG5cdFx0aWYgKCBvYmplY3QgPT09IG51bGwgfHwgb2JqZWN0ID09PSB1bmRlZmluZWQgKSByZXR1cm4gdGhpcy4kMCgpO1xuXG5cdFx0c3dpdGNoICggb2JqZWN0LmNvbnN0cnVjdG9yLnByb3RvdHlwZSApIHtcblxuXHRcdFx0Y2FzZSBOdW1iZXIucHJvdG90eXBlIDpcblx0XHRcdFx0aWYgKCBiYXNlICE9PSB1bmRlZmluZWQgKSB0aHJvdyBuZXcgVmFsdWVFcnJvcignSW50ZWdlclJpbmcjZnJvbTogdXNpbmcgdGhlIGJhc2UgcGFyYW1ldGVyIGRvZXMgbm90IG1ha2Ugc2Vuc2Ugd2hlbiBwYXNzaW5nIGEgTnVtYmVyLicpIDtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZnJvbV9udW1iZXIoIG9iamVjdCAsIGlzX25lZ2F0aXZlICkgO1xuXG5cdFx0XHRjYXNlIFN0cmluZy5wcm90b3R5cGUgOlxuXHRcdFx0XHRpZiAoIGJhc2UgPT09IHVuZGVmaW5lZCApIGJhc2UgPSBERUZBVUxUX0RJU1BMQVlfQkFTRSA7XG5cdFx0XHRcdHJldHVybiB0aGlzLmZyb21fc3RyaW5nKCBvYmplY3QgLCBiYXNlICwgaXNfbmVnYXRpdmUgKSA7XG5cblx0XHRcdGNhc2UgQXJyYXkucHJvdG90eXBlIDpcblx0XHRcdFx0aWYgKCBiYXNlID09PSB1bmRlZmluZWQgKSBiYXNlID0gdGhpcy5iYXNlIDtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZnJvbV9kaWdpdHMoIG9iamVjdCAsIGJhc2UgLCBpc19uZWdhdGl2ZSApIDtcblxuXHRcdFx0Y2FzZSBCb29sZWFuLnByb3RvdHlwZSA6XG5cdFx0XHRcdGlmICggYmFzZSAhPT0gdW5kZWZpbmVkICkgdGhyb3cgbmV3IFZhbHVlRXJyb3IoJ0ludGVnZXJSaW5nI2Zyb206IHVzaW5nIHRoZSBiYXNlIHBhcmFtZXRlciBkb2VzIG5vdCBtYWtlIHNlbnNlIHdoZW4gcGFzc2luZyBhIEJvb2xlYW4uJykgO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5mcm9tX251bWJlciggK29iamVjdCAsIGlzX25lZ2F0aXZlICkgO1xuXG5cdFx0XHRjYXNlIEludGVnZXIucHJvdG90eXBlIDpcblx0XHRcdFx0aWYgKCBiYXNlICE9PSB1bmRlZmluZWQgKSB0aHJvdyBuZXcgVmFsdWVFcnJvcignSW50ZWdlclJpbmcjZnJvbTogdXNpbmcgdGhlIGJhc2UgcGFyYW1ldGVyIGRvZXMgbm90IG1ha2Ugc2Vuc2Ugd2hlbiBwYXNzaW5nIGFuIEludGVnZXIuJykgO1xuXHRcdFx0XHRyZXR1cm4gbmV3IEludGVnZXIoIG9iamVjdC5iYXNlICwgb2JqZWN0LmlzX25lZ2F0aXZlIF4gaXNfbmVnYXRpdmUgLCBvYmplY3QubGltYnMgKSA7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEludGVnZXJSaW5nI2Zyb20gY2Fubm90IGhhbmRsZSAke29iamVjdC5jb25zdHJ1Y3Rvci5wcm90b3R5cGV9YCkgO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmcm9tX251bWJlciAoIG51bWJlciAsIGlzX25lZ2F0aXZlID0gMCApIHtcblxuXHRcdGlmICggbnVtYmVyIDwgMCApIHtcblx0XHRcdGlzX25lZ2F0aXZlID0gfmlzX25lZ2F0aXZlIDtcblx0XHRcdG51bWJlciA9IC1udW1iZXIgO1xuXHRcdH1cblxuXHRcdGNvbnN0IGxpbWJzID0gY29udmVydCggMHgyMDAwMDAwMDAwMDAwMCAsIHRoaXMuYmFzZSAsIFsgbnVtYmVyIF0gLCAwICwgMSApIDtcblxuXHRcdHJldHVybiBuZXcgSW50ZWdlciggdGhpcy5iYXNlICwgaXNfbmVnYXRpdmUgLCBsaW1icyApIDtcblxuXHR9XG5cblx0ZnJvbV9zdHJpbmcgKCBzdHJpbmcgLCBiYXNlID0gMTAgLCBpc19uZWdhdGl2ZSA9IDAgICkge1xuXG5cdFx0aWYgKCBzdHJpbmcubGVuZ3RoID09PSAwICkgdGhyb3cgJ0ludGVnZXJSaW5nI2Zyb21fc3RyaW5nIGNhbm5vdCBwYXJzZSBlbXB0eSBzdHJpbmcuJyA7XG5cblx0XHRpZiAoIHN0cmluZ1swXSA9PT0gJy0nICkgcmV0dXJuIHRoaXMuZnJvbV9zdHJpbmcoIHN0cmluZy5zbGljZSgxKSAsIGJhc2UgLCB+aXNfbmVnYXRpdmUgKSA7XG5cblx0XHRpZiAoIHN0cmluZ1swXSA9PT0gJysnICkgcmV0dXJuIHRoaXMuZnJvbV9zdHJpbmcoIHN0cmluZy5zbGljZSgxKSAsIGJhc2UgLCBpc19uZWdhdGl2ZSApIDtcblxuXHRcdGNvbnN0IGxpbWJzID0gcGFyc2UoIGJhc2UgLCB0aGlzLmJhc2UgLCBzdHJpbmcgKSA7XG5cblx0XHRyZXR1cm4gbmV3IEludGVnZXIoIHRoaXMuYmFzZSAsIGlzX25lZ2F0aXZlICwgbGltYnMgKSA7XG5cblx0fVxuXG5cdGZyb21fZGlnaXRzICggZGlnaXRzICwgYmFzZSAsIGlzX25lZ2F0aXZlICkge1xuXG5cdFx0Y29uc3QgbGltYnMgPSBjb252ZXJ0KCBiYXNlICwgdGhpcy5iYXNlICwgZGlnaXRzLnNsaWNlKCkucmV2ZXJzZSgpICwgMCAsIGRpZ2l0cy5sZW5ndGggKSA7XG5cblx0XHRyZXR1cm4gbmV3IEludGVnZXIoIHRoaXMuYmFzZSAsIGlzX25lZ2F0aXZlICwgbGltYnMgKSA7XG5cblx0fVxuXG5cdHRvU3RyaW5nICggKSB7XG5cdFx0cmV0dXJuIHRoaXMubmFtZSA7XG5cdH1cblxuXHQkMCAoICkge1xuXHRcdHJldHVybiBuZXcgSW50ZWdlciggdGhpcy5iYXNlICwgMCAsIFsgMCBdICkgO1xuXHR9XG5cblx0JDEgKCApIHtcblx0XHRyZXR1cm4gbmV3IEludGVnZXIoIHRoaXMuYmFzZSAsIDAgLCBbIDEgXSApIDtcblx0fVxuXG59XG4iXX0=