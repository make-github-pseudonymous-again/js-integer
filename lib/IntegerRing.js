'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.IntegerRing = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
		key: 'get',
		value: function get(object) {
			var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
			var is_negative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;


			switch (typeof object === 'undefined' ? 'undefined' : _typeof(object)) {
				case 'number':
					if (base !== undefined) throw 'IntegerRing#get: using the base parameter does not make sense when parsing a JavaScript number.';
					return this.get_string('' + object, 10, is_negative);
				case 'string':
					if (base === undefined) base = 10;
					return this.get_string(object, base, is_negative);
				default:
					throw 'IntegerRing#get cannot handle ' + (typeof object === 'undefined' ? 'undefined' : _typeof(object));
			}
		}
	}, {
		key: 'get_string',
		value: function get_string(string) {
			var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
			var is_negative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;


			if (string.length === 0) throw 'IntegerRing#get_string cannot parse empty string.';

			if (string[0] === '-') return this.get_string(string.slice(1), base, ~is_negative);

			if (string[0] === '+') return this.get_string(string.slice(1), base, is_negative);

			var limbs = (0, _jsIntegerBigEndian.parse)(base, this.base, string);

			return new _.Integer(this.base, is_negative, limbs);
		}
	}, {
		key: 'toString',
		value: function toString() {
			return this.name;
		}
	}], [{
		key: 'add',
		value: function add(first, second) {
			return first.add(second);
		}
	}, {
		key: 'sub',
		value: function sub(first, second) {
			return first.sub(second);
		}
	}, {
		key: 'mul',
		value: function mul(first, second) {
			return first.mul(second);
		}
	}, {
		key: 'pow',
		value: function pow(first, second) {
			return first.pow(second);
		}
	}, {
		key: 'div',
		value: function div(first, second) {
			return first.div(second);
		}
	}, {
		key: 'mod',
		value: function mod(first, second) {
			return first.mod(second);
		}
	}]);

	return IntegerRing;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnRlZ2VyUmluZy5qcyJdLCJuYW1lcyI6WyJJbnRlZ2VyUmluZyIsIm5hbWUiLCJiYXNlIiwib2JqZWN0IiwidW5kZWZpbmVkIiwiaXNfbmVnYXRpdmUiLCJnZXRfc3RyaW5nIiwic3RyaW5nIiwibGVuZ3RoIiwic2xpY2UiLCJsaW1icyIsImZpcnN0Iiwic2Vjb25kIiwiYWRkIiwic3ViIiwibXVsIiwicG93IiwiZGl2IiwibW9kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0lBRWFBLFcsV0FBQUEsVztBQUVaLHNCQUFjQyxJQUFkLEVBQXFCQyxJQUFyQixFQUE0QjtBQUFBOztBQUMzQixPQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQTs7OztzQkFFS0MsTSxFQUE4QztBQUFBLE9BQXJDRCxJQUFxQyx1RUFBOUJFLFNBQThCO0FBQUEsT0FBbEJDLFdBQWtCLHVFQUFKLENBQUk7OztBQUVuRCxrQkFBZ0JGLE1BQWhCLHlDQUFnQkEsTUFBaEI7QUFDQyxTQUFLLFFBQUw7QUFDQyxTQUFLRCxTQUFTRSxTQUFkLEVBQTBCLE1BQU0saUdBQU47QUFDMUIsWUFBTyxLQUFLRSxVQUFMLENBQWlCLEtBQUtILE1BQXRCLEVBQStCLEVBQS9CLEVBQW9DRSxXQUFwQyxDQUFQO0FBQ0QsU0FBSyxRQUFMO0FBQ0MsU0FBS0gsU0FBU0UsU0FBZCxFQUEwQkYsT0FBTyxFQUFQO0FBQzFCLFlBQU8sS0FBS0ksVUFBTCxDQUFpQkgsTUFBakIsRUFBMEJELElBQTFCLEVBQWlDRyxXQUFqQyxDQUFQO0FBQ0Q7QUFDQyxzREFBOENGLE1BQTlDLHlDQUE4Q0EsTUFBOUM7QUFSRjtBQVdBOzs7NkJBRVlJLE0sRUFBd0M7QUFBQSxPQUEvQkwsSUFBK0IsdUVBQXhCLEVBQXdCO0FBQUEsT0FBbkJHLFdBQW1CLHVFQUFMLENBQUs7OztBQUVwRCxPQUFLRSxPQUFPQyxNQUFQLEtBQWtCLENBQXZCLEVBQTJCLE1BQU0sbURBQU47O0FBRTNCLE9BQUtELE9BQU8sQ0FBUCxNQUFjLEdBQW5CLEVBQXlCLE9BQU8sS0FBS0QsVUFBTCxDQUFpQkMsT0FBT0UsS0FBUCxDQUFhLENBQWIsQ0FBakIsRUFBbUNQLElBQW5DLEVBQTBDLENBQUNHLFdBQTNDLENBQVA7O0FBRXpCLE9BQUtFLE9BQU8sQ0FBUCxNQUFjLEdBQW5CLEVBQXlCLE9BQU8sS0FBS0QsVUFBTCxDQUFpQkMsT0FBT0UsS0FBUCxDQUFhLENBQWIsQ0FBakIsRUFBbUNQLElBQW5DLEVBQTBDRyxXQUExQyxDQUFQOztBQUV6QixPQUFNSyxRQUFRLCtCQUFPUixJQUFQLEVBQWMsS0FBS0EsSUFBbkIsRUFBMEJLLE1BQTFCLENBQWQ7O0FBRUEsVUFBTyxjQUFhLEtBQUtMLElBQWxCLEVBQXlCRyxXQUF6QixFQUF1Q0ssS0FBdkMsQ0FBUDtBQUVBOzs7NkJBRVk7QUFDWixVQUFPLEtBQUtULElBQVo7QUFDQTs7O3NCQUVZVSxLLEVBQVFDLE0sRUFBUztBQUM3QixVQUFPRCxNQUFNRSxHQUFOLENBQVVELE1BQVYsQ0FBUDtBQUNBOzs7c0JBRVlELEssRUFBUUMsTSxFQUFTO0FBQzdCLFVBQU9ELE1BQU1HLEdBQU4sQ0FBVUYsTUFBVixDQUFQO0FBQ0E7OztzQkFFWUQsSyxFQUFRQyxNLEVBQVM7QUFDN0IsVUFBT0QsTUFBTUksR0FBTixDQUFVSCxNQUFWLENBQVA7QUFDQTs7O3NCQUVZRCxLLEVBQVFDLE0sRUFBUztBQUM3QixVQUFPRCxNQUFNSyxHQUFOLENBQVVKLE1BQVYsQ0FBUDtBQUNBOzs7c0JBRVlELEssRUFBUUMsTSxFQUFTO0FBQzdCLFVBQU9ELE1BQU1NLEdBQU4sQ0FBVUwsTUFBVixDQUFQO0FBQ0E7OztzQkFFWUQsSyxFQUFRQyxNLEVBQVM7QUFDN0IsVUFBT0QsTUFBTU8sR0FBTixDQUFVTixNQUFWLENBQVA7QUFDQSIsImZpbGUiOiJJbnRlZ2VyUmluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEludGVnZXIgfSBmcm9tICcuLycgO1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICdAYXVyZW9vbXMvanMtaW50ZWdlci1iaWctZW5kaWFuJyA7XG5cbmV4cG9ydCBjbGFzcyBJbnRlZ2VyUmluZyB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lICwgYmFzZSApIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lIDtcblx0XHR0aGlzLmJhc2UgPSBiYXNlIDtcblx0fVxuXG5cdGdldCAoIG9iamVjdCAsIGJhc2UgPSB1bmRlZmluZWQgLCBpc19uZWdhdGl2ZSA9IDAgKSB7XG5cblx0XHRzd2l0Y2ggKCB0eXBlb2Ygb2JqZWN0ICkge1xuXHRcdFx0Y2FzZSAnbnVtYmVyJyA6XG5cdFx0XHRcdGlmICggYmFzZSAhPT0gdW5kZWZpbmVkICkgdGhyb3cgJ0ludGVnZXJSaW5nI2dldDogdXNpbmcgdGhlIGJhc2UgcGFyYW1ldGVyIGRvZXMgbm90IG1ha2Ugc2Vuc2Ugd2hlbiBwYXJzaW5nIGEgSmF2YVNjcmlwdCBudW1iZXIuJyA7XG5cdFx0XHRcdHJldHVybiB0aGlzLmdldF9zdHJpbmcoICcnICsgb2JqZWN0ICwgMTAgLCBpc19uZWdhdGl2ZSApIDtcblx0XHRcdGNhc2UgJ3N0cmluZycgOlxuXHRcdFx0XHRpZiAoIGJhc2UgPT09IHVuZGVmaW5lZCApIGJhc2UgPSAxMCA7XG5cdFx0XHRcdHJldHVybiB0aGlzLmdldF9zdHJpbmcoIG9iamVjdCAsIGJhc2UgLCBpc19uZWdhdGl2ZSApIDtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IGBJbnRlZ2VyUmluZyNnZXQgY2Fubm90IGhhbmRsZSAke3R5cGVvZiBvYmplY3R9YCA7XG5cdFx0fVxuXG5cdH1cblxuXHRnZXRfc3RyaW5nICggc3RyaW5nICwgYmFzZSA9IDEwICwgaXNfbmVnYXRpdmUgPSAwICApIHtcblxuXHRcdGlmICggc3RyaW5nLmxlbmd0aCA9PT0gMCApIHRocm93ICdJbnRlZ2VyUmluZyNnZXRfc3RyaW5nIGNhbm5vdCBwYXJzZSBlbXB0eSBzdHJpbmcuJyA7XG5cblx0XHRpZiAoIHN0cmluZ1swXSA9PT0gJy0nICkgcmV0dXJuIHRoaXMuZ2V0X3N0cmluZyggc3RyaW5nLnNsaWNlKDEpICwgYmFzZSAsIH5pc19uZWdhdGl2ZSApIDtcblxuXHRcdGlmICggc3RyaW5nWzBdID09PSAnKycgKSByZXR1cm4gdGhpcy5nZXRfc3RyaW5nKCBzdHJpbmcuc2xpY2UoMSkgLCBiYXNlICwgaXNfbmVnYXRpdmUgKSA7XG5cblx0XHRjb25zdCBsaW1icyA9IHBhcnNlKCBiYXNlICwgdGhpcy5iYXNlICwgc3RyaW5nICkgO1xuXG5cdFx0cmV0dXJuIG5ldyBJbnRlZ2VyKCB0aGlzLmJhc2UgLCBpc19uZWdhdGl2ZSAsIGxpbWJzICkgO1xuXG5cdH1cblxuXHR0b1N0cmluZyAoICkge1xuXHRcdHJldHVybiB0aGlzLm5hbWUgO1xuXHR9XG5cblx0c3RhdGljIGFkZCAoIGZpcnN0ICwgc2Vjb25kICkge1xuXHRcdHJldHVybiBmaXJzdC5hZGQoc2Vjb25kKSA7XG5cdH1cblxuXHRzdGF0aWMgc3ViICggZmlyc3QgLCBzZWNvbmQgKSB7XG5cdFx0cmV0dXJuIGZpcnN0LnN1YihzZWNvbmQpIDtcblx0fVxuXG5cdHN0YXRpYyBtdWwgKCBmaXJzdCAsIHNlY29uZCApIHtcblx0XHRyZXR1cm4gZmlyc3QubXVsKHNlY29uZCkgO1xuXHR9XG5cblx0c3RhdGljIHBvdyAoIGZpcnN0ICwgc2Vjb25kICkge1xuXHRcdHJldHVybiBmaXJzdC5wb3coc2Vjb25kKSA7XG5cdH1cblxuXHRzdGF0aWMgZGl2ICggZmlyc3QgLCBzZWNvbmQgKSB7XG5cdFx0cmV0dXJuIGZpcnN0LmRpdihzZWNvbmQpIDtcblx0fVxuXG5cdHN0YXRpYyBtb2QgKCBmaXJzdCAsIHNlY29uZCApIHtcblx0XHRyZXR1cm4gZmlyc3QubW9kKHNlY29uZCkgO1xuXHR9XG5cbn1cbiJdfQ==