'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.IntegerRing = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = require('./');

var _jsIntegerBigEndian = require('@aureooms/js-integer-big-endian');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IntegerRing = exports.IntegerRing = function () {
	function IntegerRing(name, base) {
		_classCallCheck(this, IntegerRing);

		this.name = name;
		this.base = base;
	}

	_createClass(IntegerRing, [{
		key: 'from',
		value: function from(object) {
			var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
			var is_negative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;


			if (object === null || object === undefined) return this.$0();

			switch (object.constructor.prototype) {

				case Number.prototype:
					if (base !== undefined) throw 'IntegerRing#from: using the base parameter does not make sense when passing a Number.';
					return this.from_number(object, is_negative);

				case String.prototype:
					if (base === undefined) base = _.DEFAULT_DISPLAY_BASE;
					return this.from_string(object, base, is_negative);

				case Array.prototype:
					if (base === undefined) base = this.base;
					return this.from_digits(object, base, is_negative);

				case _.Integer.prototype:
					if (base !== undefined) throw 'IntegerRing#from: using the base parameter does not make sense when passing an Integer.';
					return new _.Integer(object.base, object.is_negative ^ is_negative, object.limbs);

				default:
					throw 'IntegerRing#from cannot handle ' + object.constructor.prototype;

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

			var limbs = (0, _jsIntegerBigEndian.convert)(base, this.base, digits.slice().reverse(), 0, object.length);

			return new _.Integer(this.base, is_negative, limbs);
		}
	}, {
		key: 'toString',
		value: function toString() {
			return this.name;
		}
	}, {
		key: 'stringify',
		value: function stringify(first) {
			var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _.DEFAULT_DISPLAY_BASE;

			return first.toString(base);
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
	}, {
		key: 'add',
		value: function add(first, second) {
			return first.add(second);
		}
	}, {
		key: 'iadd',
		value: function iadd(first, second) {
			return first.iadd(second);
		}
	}, {
		key: 'sub',
		value: function sub(first, second) {
			return first.sub(second);
		}
	}, {
		key: 'isub',
		value: function isub(first, second) {
			return first.isub(second);
		}
	}, {
		key: 'mul',
		value: function mul(first, second) {
			return first.mul(second);
		}
	}, {
		key: 'imul',
		value: function imul(first, second) {
			return first.imul(second);
		}
	}, {
		key: 'pow',
		value: function pow(first, second) {
			return first.pow(second);
		}
	}, {
		key: 'ipow',
		value: function ipow(first, second) {
			return first.ipow(second);
		}
	}, {
		key: 'div',
		value: function div(first, second) {
			return first.div(second);
		}
	}, {
		key: 'idiv',
		value: function idiv(first, second) {
			return first.idiv(second);
		}
	}, {
		key: 'mod',
		value: function mod(first, second) {
			return first.mod(second);
		}
	}, {
		key: 'imod',
		value: function imod(first, second) {
			return first.imod(second);
		}
	}]);

	return IntegerRing;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnRlZ2VyUmluZy5qcyJdLCJuYW1lcyI6WyJJbnRlZ2VyUmluZyIsIm5hbWUiLCJiYXNlIiwib2JqZWN0IiwidW5kZWZpbmVkIiwiaXNfbmVnYXRpdmUiLCIkMCIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiTnVtYmVyIiwiZnJvbV9udW1iZXIiLCJTdHJpbmciLCJmcm9tX3N0cmluZyIsIkFycmF5IiwiZnJvbV9kaWdpdHMiLCJsaW1icyIsIm51bWJlciIsInN0cmluZyIsImxlbmd0aCIsInNsaWNlIiwiZGlnaXRzIiwicmV2ZXJzZSIsImZpcnN0IiwidG9TdHJpbmciLCJzZWNvbmQiLCJhZGQiLCJpYWRkIiwic3ViIiwiaXN1YiIsIm11bCIsImltdWwiLCJwb3ciLCJpcG93IiwiZGl2IiwiaWRpdiIsIm1vZCIsImltb2QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBOzs7O0lBRWFBLFcsV0FBQUEsVztBQUVaLHNCQUFjQyxJQUFkLEVBQXFCQyxJQUFyQixFQUE0QjtBQUFBOztBQUMzQixPQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQTs7Ozt1QkFFTUMsTSxFQUE4QztBQUFBLE9BQXJDRCxJQUFxQyx1RUFBOUJFLFNBQThCO0FBQUEsT0FBbEJDLFdBQWtCLHVFQUFKLENBQUk7OztBQUVwRCxPQUFLRixXQUFXLElBQVgsSUFBbUJBLFdBQVdDLFNBQW5DLEVBQStDLE9BQU8sS0FBS0UsRUFBTCxFQUFQOztBQUUvQyxXQUFTSCxPQUFPSSxXQUFQLENBQW1CQyxTQUE1Qjs7QUFFQyxTQUFLQyxPQUFPRCxTQUFaO0FBQ0MsU0FBS04sU0FBU0UsU0FBZCxFQUEwQixNQUFNLHVGQUFOO0FBQzFCLFlBQU8sS0FBS00sV0FBTCxDQUFrQlAsTUFBbEIsRUFBMkJFLFdBQTNCLENBQVA7O0FBRUQsU0FBS00sT0FBT0gsU0FBWjtBQUNDLFNBQUtOLFNBQVNFLFNBQWQsRUFBMEJGO0FBQzFC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TUksSUFBTixDQUFXRixNQUFYLENBQVA7QUFDQTs7O3NCQUVLRixLLEVBQVFFLE0sRUFBUztBQUN0QixVQUFPRixNQUFNSyxHQUFOLENBQVVILE1BQVYsQ0FBUDtBQUNBOzs7dUJBRU1GLEssRUFBUUUsTSxFQUFTO0FBQ3ZCLFVBQU9GLE1BQU1NLElBQU4sQ0FBV0osTUFBWCxDQUFQO0FBQ0E7OztzQkFFS0YsSyxFQUFRRSxNLEVBQVM7QUFDdEIsVUFBT0YsTUFBTU8sR0FBTixDQUFVTCxNQUFWLENBQVA7QUFDQTs7O3VCQUVNRixLLEVBQVFFLE0sRUFBUztBQUN2QixVQUFPRixNQUFNUSxJQUFOLENBQVdOLE1BQVgsQ0FBUDtBQUNBOzs7c0JBRUtGLEssRUFBUUUsTSxFQUFTO0FBQ3RCLFVBQU9GLE1BQU1TLEdBQU4sQ0FBVVAsTUFBVixDQUFQO0FBQ0E7Ozt1QkFFTUYsSyxFQUFRRSxNLEVBQVM7QUFDdkIsVUFBT0YsTUFBTVUsSUFBTixDQUFXUixNQUFYLENBQVA7QUFDQTs7O3NCQUVLRixLLEVBQVFFLE0sRUFBUztBQUN0QixVQUFPRixNQUFNVyxHQUFOLENBQVVULE1BQVYsQ0FBUDtBQUNBOzs7dUJBRU1GLEssRUFBUUUsTSxFQUFTO0FBQ3ZCLFVBQU9GLE1BQU1ZLElBQU4sQ0FBV1YsTUFBWCxDQUFQO0FBQ0E7OztzQkFFS0YsSyxFQUFRRSxNLEVBQVM7QUFDdEIsVUFBT0YsTUFBTWEsR0FBTixDQUFVWCxNQUFWLENBQVA7QUFDQTs7O3VCQUVNRixLLEVBQVFFLE0sRUFBUztBQUN2QixVQUFPRixNQUFNYyxJQUFOLENBQVdaLE1BQVgsQ0FBUDtBQUNBIiwiZmlsZSI6IkludGVnZXJSaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW50ZWdlciB9IGZyb20gJy4vJyA7XG5pbXBvcnQgeyBERUZBVUxUX0RJU1BMQVlfQkFTRSB9IGZyb20gJy4vJyA7XG5pbXBvcnQgeyBwYXJzZSAsIGNvbnZlcnQgfSBmcm9tICdAYXVyZW9vbXMvanMtaW50ZWdlci1iaWctZW5kaWFuJyA7XG5cbmV4cG9ydCBjbGFzcyBJbnRlZ2VyUmluZyB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lICwgYmFzZSApIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lIDtcblx0XHR0aGlzLmJhc2UgPSBiYXNlIDtcblx0fVxuXG5cdGZyb20gKCBvYmplY3QgLCBiYXNlID0gdW5kZWZpbmVkICwgaXNfbmVnYXRpdmUgPSAwICkge1xuXG5cdFx0aWYgKCBvYmplY3QgPT09IG51bGwgfHwgb2JqZWN0ID09PSB1bmRlZmluZWQgKSByZXR1cm4gdGhpcy4kMCgpO1xuXG5cdFx0c3dpdGNoICggb2JqZWN0LmNvbnN0cnVjdG9yLnByb3RvdHlwZSApIHtcblxuXHRcdFx0Y2FzZSBOdW1iZXIucHJvdG90eXBlIDpcblx0XHRcdFx0aWYgKCBiYXNlICE9PSB1bmRlZmluZWQgKSB0aHJvdyAnSW50ZWdlclJpbmcjZnJvbTogdXNpbmcgdGhlIGJhc2UgcGFyYW1ldGVyIGRvZXMgbm90IG1ha2Ugc2Vuc2Ugd2hlbiBwYXNzaW5nIGEgTnVtYmVyLicgO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5mcm9tX251bWJlciggb2JqZWN0ICwgaXNfbmVnYXRpdmUgKSA7XG5cblx0XHRcdGNhc2UgU3RyaW5nLnByb3RvdHlwZSA6XG5cdFx0XHRcdGlmICggYmFzZSA9PT0gdW5kZWZpbmVkICkgYmFzZSA9IERFRkFVTFRfRElTUExBWV9CQVNFIDtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZnJvbV9zdHJpbmcoIG9iamVjdCAsIGJhc2UgLCBpc19uZWdhdGl2ZSApIDtcblxuXHRcdFx0Y2FzZSBBcnJheS5wcm90b3R5cGUgOlxuXHRcdFx0XHRpZiAoIGJhc2UgPT09IHVuZGVmaW5lZCApIGJhc2UgPSB0aGlzLmJhc2UgO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5mcm9tX2RpZ2l0cyggb2JqZWN0ICwgYmFzZSAsIGlzX25lZ2F0aXZlICkgO1xuXG5cdFx0XHRjYXNlIEludGVnZXIucHJvdG90eXBlIDpcblx0XHRcdFx0aWYgKCBiYXNlICE9PSB1bmRlZmluZWQgKSB0aHJvdyAnSW50ZWdlclJpbmcjZnJvbTogdXNpbmcgdGhlIGJhc2UgcGFyYW1ldGVyIGRvZXMgbm90IG1ha2Ugc2Vuc2Ugd2hlbiBwYXNzaW5nIGFuIEludGVnZXIuJyA7XG5cdFx0XHRcdHJldHVybiBuZXcgSW50ZWdlciggb2JqZWN0LmJhc2UgLCBvYmplY3QuaXNfbmVnYXRpdmUgXiBpc19uZWdhdGl2ZSAsIG9iamVjdC5saW1icyApIDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgYEludGVnZXJSaW5nI2Zyb20gY2Fubm90IGhhbmRsZSAke29iamVjdC5jb25zdHJ1Y3Rvci5wcm90b3R5cGV9YCA7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZyb21fbnVtYmVyICggbnVtYmVyICwgaXNfbmVnYXRpdmUgPSAwICkge1xuXG5cdFx0aWYgKCBudW1iZXIgPCAwICkge1xuXHRcdFx0aXNfbmVnYXRpdmUgPSB+aXNfbmVnYXRpdmUgO1xuXHRcdFx0bnVtYmVyID0gLW51bWJlciA7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbGltYnMgPSBjb252ZXJ0KCAweDIwMDAwMDAwMDAwMDAwICwgdGhpcy5iYXNlICwgWyBudW1iZXIgXSAsIDAgLCAxICkgO1xuXG5cdFx0cmV0dXJuIG5ldyBJbnRlZ2VyKCB0aGlzLmJhc2UgLCBpc19uZWdhdGl2ZSAsIGxpbWJzICkgO1xuXG5cdH1cblxuXHRmcm9tX3N0cmluZyAoIHN0cmluZyAsIGJhc2UgPSAxMCAsIGlzX25lZ2F0aXZlID0gMCAgKSB7XG5cblx0XHRpZiAoIHN0cmluZy5sZW5ndGggPT09IDAgKSB0aHJvdyAnSW50ZWdlclJpbmcjZnJvbV9zdHJpbmcgY2Fubm90IHBhcnNlIGVtcHR5IHN0cmluZy4nIDtcblxuXHRcdGlmICggc3RyaW5nWzBdID09PSAnLScgKSByZXR1cm4gdGhpcy5mcm9tX3N0cmluZyggc3RyaW5nLnNsaWNlKDEpICwgYmFzZSAsIH5pc19uZWdhdGl2ZSApIDtcblxuXHRcdGlmICggc3RyaW5nWzBdID09PSAnKycgKSByZXR1cm4gdGhpcy5mcm9tX3N0cmluZyggc3RyaW5nLnNsaWNlKDEpICwgYmFzZSAsIGlzX25lZ2F0aXZlICkgO1xuXG5cdFx0Y29uc3QgbGltYnMgPSBwYXJzZSggYmFzZSAsIHRoaXMuYmFzZSAsIHN0cmluZyApIDtcblxuXHRcdHJldHVybiBuZXcgSW50ZWdlciggdGhpcy5iYXNlICwgaXNfbmVnYXRpdmUgLCBsaW1icyApIDtcblxuXHR9XG5cblx0ZnJvbV9kaWdpdHMgKCBkaWdpdHMgLCBiYXNlICwgaXNfbmVnYXRpdmUgKSB7XG5cblx0XHRjb25zdCBsaW1icyA9IGNvbnZlcnQoIGJhc2UgLCB0aGlzLmJhc2UgLCBkaWdpdHMuc2xpY2UoKS5yZXZlcnNlKCkgLCAwICwgb2JqZWN0Lmxlbmd0aCApIDtcblxuXHRcdHJldHVybiBuZXcgSW50ZWdlciggdGhpcy5iYXNlICwgaXNfbmVnYXRpdmUgLCBsaW1icyApIDtcblxuXHR9XG5cblx0dG9TdHJpbmcgKCApIHtcblx0XHRyZXR1cm4gdGhpcy5uYW1lIDtcblx0fVxuXG5cdHN0cmluZ2lmeSAoIGZpcnN0ICwgYmFzZSA9IERFRkFVTFRfRElTUExBWV9CQVNFICkge1xuXHRcdHJldHVybiBmaXJzdC50b1N0cmluZyggYmFzZSApIDtcblx0fVxuXG5cdCQwICggKSB7XG5cdFx0cmV0dXJuIG5ldyBJbnRlZ2VyKCB0aGlzLmJhc2UgLCAwICwgWyAwIF0gKSA7XG5cdH1cblxuXHQkMSAoICkge1xuXHRcdHJldHVybiBuZXcgSW50ZWdlciggdGhpcy5iYXNlICwgMCAsIFsgMSBdICkgO1xuXHR9XG5cblx0YWRkICggZmlyc3QgLCBzZWNvbmQgKSB7XG5cdFx0cmV0dXJuIGZpcnN0LmFkZChzZWNvbmQpIDtcblx0fVxuXG5cdGlhZGQgKCBmaXJzdCAsIHNlY29uZCApIHtcblx0XHRyZXR1cm4gZmlyc3QuaWFkZChzZWNvbmQpIDtcblx0fVxuXG5cdHN1YiAoIGZpcnN0ICwgc2Vjb25kICkge1xuXHRcdHJldHVybiBmaXJzdC5zdWIoc2Vjb25kKSA7XG5cdH1cblxuXHRpc3ViICggZmlyc3QgLCBzZWNvbmQgKSB7XG5cdFx0cmV0dXJuIGZpcnN0LmlzdWIoc2Vjb25kKSA7XG5cdH1cblxuXHRtdWwgKCBmaXJzdCAsIHNlY29uZCApIHtcblx0XHRyZXR1cm4gZmlyc3QubXVsKHNlY29uZCkgO1xuXHR9XG5cblx0aW11bCAoIGZpcnN0ICwgc2Vjb25kICkge1xuXHRcdHJldHVybiBmaXJzdC5pbXVsKHNlY29uZCkgO1xuXHR9XG5cblx0cG93ICggZmlyc3QgLCBzZWNvbmQgKSB7XG5cdFx0cmV0dXJuIGZpcnN0LnBvdyhzZWNvbmQpIDtcblx0fVxuXG5cdGlwb3cgKCBmaXJzdCAsIHNlY29uZCApIHtcblx0XHRyZXR1cm4gZmlyc3QuaXBvdyhzZWNvbmQpIDtcblx0fVxuXG5cdGRpdiAoIGZpcnN0ICwgc2Vjb25kICkge1xuXHRcdHJldHVybiBmaXJzdC5kaXYoc2Vjb25kKSA7XG5cdH1cblxuXHRpZGl2ICggZmlyc3QgLCBzZWNvbmQgKSB7XG5cdFx0cmV0dXJuIGZpcnN0LmlkaXYoc2Vjb25kKSA7XG5cdH1cblxuXHRtb2QgKCBmaXJzdCAsIHNlY29uZCApIHtcblx0XHRyZXR1cm4gZmlyc3QubW9kKHNlY29uZCkgO1xuXHR9XG5cblx0aW1vZCAoIGZpcnN0ICwgc2Vjb25kICkge1xuXHRcdHJldHVybiBmaXJzdC5pbW9kKHNlY29uZCkgO1xuXHR9XG5cbn1cbiJdfQ==