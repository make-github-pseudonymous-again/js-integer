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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnRlZ2VyUmluZy5qcyJdLCJuYW1lcyI6WyJJbnRlZ2VyUmluZyIsIm5hbWUiLCJiYXNlIiwiJDAiLCJvYmplY3QiLCJ1bmRlZmluZWQiLCJpc19uZWdhdGl2ZSIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiTnVtYmVyIiwiZnJvbV9udW1iZXIiLCJTdHJpbmciLCJmcm9tX3N0cmluZyIsIkFycmF5IiwiZnJvbV9kaWdpdHMiLCJsaW1icyIsIm51bWJlciIsInN0cmluZyIsImxlbmd0aCIsInNsaWNlIiwiZGlnaXRzIiwicmV2ZXJzZSIsImZpcnN0IiwidG9TdHJpbmciLCJzZWNvbmQiLCJhZGQiLCJpYWRkIiwic3ViIiwiaXN1YiIsIm11bCIsImltdWwiLCJwb3ciLCJpcG93IiwiZGl2IiwiaWRpdiIsIm1vZCIsImltb2QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBOzs7O0lBRWFBLFcsV0FBQUEsVztBQUVaLHNCQUFjQyxJQUFkLEVBQXFCQyxJQUFyQixFQUE0QjtBQUFBOztBQUMzQixPQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQTs7OzttQ0FFa0I7QUFDbEIsVUFBTyxLQUFLQyxFQUFMLEVBQVA7QUFDQTs7O3VCQUVNQyxNLEVBQThDO0FBQUEsT0FBckNGLElBQXFDLHVFQUE5QkcsU0FBOEI7QUFBQSxPQUFsQkMsV0FBa0IsdUVBQUosQ0FBSTs7O0FBRXBELE9BQUtGLFdBQVcsSUFBWCxJQUFtQkEsV0FBV0MsU0FBbkMsRUFBK0MsT0FBTyxLQUFLRixFQUFMLEVBQVA7O0FBRS9DLFdBQVNDLE9BQU9HLFdBQVAsQ0FBbUJDLFNBQTVCOztBQUVDLFNBQUtDLE9BQU9ELFNBQVo7QUFDQyxTQUFLTixTQUFTRyxTQUFkLEVBQTBCLE1BQU0sdUZBQU47QUFDMUIsWUFBTyxLQUFLSyxXQUFMLENBQWtCTixNQUFsQixFQUEyQkUsV0FBM0IsQ0FBUDs7QUFFRCxTQUFLSyxPQUFP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QTs7O3VCQUVNRixLLEVBQVFFLE0sRUFBUztBQUN2QixVQUFPRixNQUFNSSxJQUFOLENBQVdGLE1BQVgsQ0FBUDtBQUNBOzs7c0JBRUtGLEssRUFBUUUsTSxFQUFTO0FBQ3RCLFVBQU9GLE1BQU1LLEdBQU4sQ0FBVUgsTUFBVixDQUFQO0FBQ0E7Ozt1QkFFTUYsSyxFQUFRRSxNLEVBQVM7QUFDdkIsVUFBT0YsTUFBTU0sSUFBTixDQUFXSixNQUFYLENBQVA7QUFDQTs7O3NCQUVLRixLLEVBQVFFLE0sRUFBUztBQUN0QixVQUFPRixNQUFNTyxHQUFOLENBQVVMLE1BQVYsQ0FBUDtBQUNBOzs7dUJBRU1GLEssRUFBUUUsTSxFQUFTO0FBQ3ZCLFVBQU9GLE1BQU1RLElBQU4sQ0FBV04sTUFBWCxDQUFQO0FBQ0E7OztzQkFFS0YsSyxFQUFRRSxNLEVBQVM7QUFDdEIsVUFBT0YsTUFBTVMsR0FBTixDQUFVUCxNQUFWLENBQVA7QUFDQTs7O3VCQUVNRixLLEVBQVFFLE0sRUFBUztBQUN2QixVQUFPRixNQUFNVSxJQUFOLENBQVdSLE1BQVgsQ0FBUDtBQUNBOzs7c0JBRUtGLEssRUFBUUUsTSxFQUFTO0FBQ3RCLFVBQU9GLE1BQU1XLEdBQU4sQ0FBVVQsTUFBVixDQUFQO0FBQ0E7Ozt1QkFFTUYsSyxFQUFRRSxNLEVBQVM7QUFDdkIsVUFBT0YsTUFBTVksSUFBTixDQUFXVixNQUFYLENBQVA7QUFDQTs7O3NCQUVLRixLLEVBQVFFLE0sRUFBUztBQUN0QixVQUFPRixNQUFNYSxHQUFOLENBQVVYLE1BQVYsQ0FBUDtBQUNBOzs7dUJBRU1GLEssRUFBUUUsTSxFQUFTO0FBQ3ZCLFVBQU9GLE1BQU1jLElBQU4sQ0FBV1osTUFBWCxDQUFQO0FBQ0EiLCJmaWxlIjoiSW50ZWdlclJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnRlZ2VyIH0gZnJvbSAnLi8nIDtcbmltcG9ydCB7IERFRkFVTFRfRElTUExBWV9CQVNFIH0gZnJvbSAnLi8nIDtcbmltcG9ydCB7IHBhcnNlICwgY29udmVydCB9IGZyb20gJ0BhdXJlb29tcy9qcy1pbnRlZ2VyLWJpZy1lbmRpYW4nIDtcblxuZXhwb3J0IGNsYXNzIEludGVnZXJSaW5nIHtcblxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgLCBiYXNlICkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWUgO1xuXHRcdHRoaXMuYmFzZSA9IGJhc2UgO1xuXHR9XG5cblx0Y2hhcmFjdGVyaXN0aWMgKCApIHtcblx0XHRyZXR1cm4gdGhpcy4kMCgpIDtcblx0fVxuXG5cdGZyb20gKCBvYmplY3QgLCBiYXNlID0gdW5kZWZpbmVkICwgaXNfbmVnYXRpdmUgPSAwICkge1xuXG5cdFx0aWYgKCBvYmplY3QgPT09IG51bGwgfHwgb2JqZWN0ID09PSB1bmRlZmluZWQgKSByZXR1cm4gdGhpcy4kMCgpO1xuXG5cdFx0c3dpdGNoICggb2JqZWN0LmNvbnN0cnVjdG9yLnByb3RvdHlwZSApIHtcblxuXHRcdFx0Y2FzZSBOdW1iZXIucHJvdG90eXBlIDpcblx0XHRcdFx0aWYgKCBiYXNlICE9PSB1bmRlZmluZWQgKSB0aHJvdyAnSW50ZWdlclJpbmcjZnJvbTogdXNpbmcgdGhlIGJhc2UgcGFyYW1ldGVyIGRvZXMgbm90IG1ha2Ugc2Vuc2Ugd2hlbiBwYXNzaW5nIGEgTnVtYmVyLicgO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5mcm9tX251bWJlciggb2JqZWN0ICwgaXNfbmVnYXRpdmUgKSA7XG5cblx0XHRcdGNhc2UgU3RyaW5nLnByb3RvdHlwZSA6XG5cdFx0XHRcdGlmICggYmFzZSA9PT0gdW5kZWZpbmVkICkgYmFzZSA9IERFRkFVTFRfRElTUExBWV9CQVNFIDtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZnJvbV9zdHJpbmcoIG9iamVjdCAsIGJhc2UgLCBpc19uZWdhdGl2ZSApIDtcblxuXHRcdFx0Y2FzZSBBcnJheS5wcm90b3R5cGUgOlxuXHRcdFx0XHRpZiAoIGJhc2UgPT09IHVuZGVmaW5lZCApIGJhc2UgPSB0aGlzLmJhc2UgO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5mcm9tX2RpZ2l0cyggb2JqZWN0ICwgYmFzZSAsIGlzX25lZ2F0aXZlICkgO1xuXG5cdFx0XHRjYXNlIEludGVnZXIucHJvdG90eXBlIDpcblx0XHRcdFx0aWYgKCBiYXNlICE9PSB1bmRlZmluZWQgKSB0aHJvdyAnSW50ZWdlclJpbmcjZnJvbTogdXNpbmcgdGhlIGJhc2UgcGFyYW1ldGVyIGRvZXMgbm90IG1ha2Ugc2Vuc2Ugd2hlbiBwYXNzaW5nIGFuIEludGVnZXIuJyA7XG5cdFx0XHRcdHJldHVybiBuZXcgSW50ZWdlciggb2JqZWN0LmJhc2UgLCBvYmplY3QuaXNfbmVnYXRpdmUgXiBpc19uZWdhdGl2ZSAsIG9iamVjdC5saW1icyApIDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgYEludGVnZXJSaW5nI2Zyb20gY2Fubm90IGhhbmRsZSAke29iamVjdC5jb25zdHJ1Y3Rvci5wcm90b3R5cGV9YCA7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZyb21fbnVtYmVyICggbnVtYmVyICwgaXNfbmVnYXRpdmUgPSAwICkge1xuXG5cdFx0aWYgKCBudW1iZXIgPCAwICkge1xuXHRcdFx0aXNfbmVnYXRpdmUgPSB+aXNfbmVnYXRpdmUgO1xuXHRcdFx0bnVtYmVyID0gLW51bWJlciA7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbGltYnMgPSBjb252ZXJ0KCAweDIwMDAwMDAwMDAwMDAwICwgdGhpcy5iYXNlICwgWyBudW1iZXIgXSAsIDAgLCAxICkgO1xuXG5cdFx0cmV0dXJuIG5ldyBJbnRlZ2VyKCB0aGlzLmJhc2UgLCBpc19uZWdhdGl2ZSAsIGxpbWJzICkgO1xuXG5cdH1cblxuXHRmcm9tX3N0cmluZyAoIHN0cmluZyAsIGJhc2UgPSAxMCAsIGlzX25lZ2F0aXZlID0gMCAgKSB7XG5cblx0XHRpZiAoIHN0cmluZy5sZW5ndGggPT09IDAgKSB0aHJvdyAnSW50ZWdlclJpbmcjZnJvbV9zdHJpbmcgY2Fubm90IHBhcnNlIGVtcHR5IHN0cmluZy4nIDtcblxuXHRcdGlmICggc3RyaW5nWzBdID09PSAnLScgKSByZXR1cm4gdGhpcy5mcm9tX3N0cmluZyggc3RyaW5nLnNsaWNlKDEpICwgYmFzZSAsIH5pc19uZWdhdGl2ZSApIDtcblxuXHRcdGlmICggc3RyaW5nWzBdID09PSAnKycgKSByZXR1cm4gdGhpcy5mcm9tX3N0cmluZyggc3RyaW5nLnNsaWNlKDEpICwgYmFzZSAsIGlzX25lZ2F0aXZlICkgO1xuXG5cdFx0Y29uc3QgbGltYnMgPSBwYXJzZSggYmFzZSAsIHRoaXMuYmFzZSAsIHN0cmluZyApIDtcblxuXHRcdHJldHVybiBuZXcgSW50ZWdlciggdGhpcy5iYXNlICwgaXNfbmVnYXRpdmUgLCBsaW1icyApIDtcblxuXHR9XG5cblx0ZnJvbV9kaWdpdHMgKCBkaWdpdHMgLCBiYXNlICwgaXNfbmVnYXRpdmUgKSB7XG5cblx0XHRjb25zdCBsaW1icyA9IGNvbnZlcnQoIGJhc2UgLCB0aGlzLmJhc2UgLCBkaWdpdHMuc2xpY2UoKS5yZXZlcnNlKCkgLCAwICwgb2JqZWN0Lmxlbmd0aCApIDtcblxuXHRcdHJldHVybiBuZXcgSW50ZWdlciggdGhpcy5iYXNlICwgaXNfbmVnYXRpdmUgLCBsaW1icyApIDtcblxuXHR9XG5cblx0dG9TdHJpbmcgKCApIHtcblx0XHRyZXR1cm4gdGhpcy5uYW1lIDtcblx0fVxuXG5cdHN0cmluZ2lmeSAoIGZpcnN0ICwgYmFzZSA9IERFRkFVTFRfRElTUExBWV9CQVNFICkge1xuXHRcdHJldHVybiBmaXJzdC50b1N0cmluZyggYmFzZSApIDtcblx0fVxuXG5cdCQwICggKSB7XG5cdFx0cmV0dXJuIG5ldyBJbnRlZ2VyKCB0aGlzLmJhc2UgLCAwICwgWyAwIF0gKSA7XG5cdH1cblxuXHQkMSAoICkge1xuXHRcdHJldHVybiBuZXcgSW50ZWdlciggdGhpcy5iYXNlICwgMCAsIFsgMSBdICkgO1xuXHR9XG5cblx0YWRkICggZmlyc3QgLCBzZWNvbmQgKSB7XG5cdFx0cmV0dXJuIGZpcnN0LmFkZChzZWNvbmQpIDtcblx0fVxuXG5cdGlhZGQgKCBmaXJzdCAsIHNlY29uZCApIHtcblx0XHRyZXR1cm4gZmlyc3QuaWFkZChzZWNvbmQpIDtcblx0fVxuXG5cdHN1YiAoIGZpcnN0ICwgc2Vjb25kICkge1xuXHRcdHJldHVybiBmaXJzdC5zdWIoc2Vjb25kKSA7XG5cdH1cblxuXHRpc3ViICggZmlyc3QgLCBzZWNvbmQgKSB7XG5cdFx0cmV0dXJuIGZpcnN0LmlzdWIoc2Vjb25kKSA7XG5cdH1cblxuXHRtdWwgKCBmaXJzdCAsIHNlY29uZCApIHtcblx0XHRyZXR1cm4gZmlyc3QubXVsKHNlY29uZCkgO1xuXHR9XG5cblx0aW11bCAoIGZpcnN0ICwgc2Vjb25kICkge1xuXHRcdHJldHVybiBmaXJzdC5pbXVsKHNlY29uZCkgO1xuXHR9XG5cblx0cG93ICggZmlyc3QgLCBzZWNvbmQgKSB7XG5cdFx0cmV0dXJuIGZpcnN0LnBvdyhzZWNvbmQpIDtcblx0fVxuXG5cdGlwb3cgKCBmaXJzdCAsIHNlY29uZCApIHtcblx0XHRyZXR1cm4gZmlyc3QuaXBvdyhzZWNvbmQpIDtcblx0fVxuXG5cdGRpdiAoIGZpcnN0ICwgc2Vjb25kICkge1xuXHRcdHJldHVybiBmaXJzdC5kaXYoc2Vjb25kKSA7XG5cdH1cblxuXHRpZGl2ICggZmlyc3QgLCBzZWNvbmQgKSB7XG5cdFx0cmV0dXJuIGZpcnN0LmlkaXYoc2Vjb25kKSA7XG5cdH1cblxuXHRtb2QgKCBmaXJzdCAsIHNlY29uZCApIHtcblx0XHRyZXR1cm4gZmlyc3QubW9kKHNlY29uZCkgO1xuXHR9XG5cblx0aW1vZCAoIGZpcnN0ICwgc2Vjb25kICkge1xuXHRcdHJldHVybiBmaXJzdC5pbW9kKHNlY29uZCkgO1xuXHR9XG5cbn1cbiJdfQ==