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
		key: 'from',
		value: function from(object) {
			var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
			var is_negative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;


			switch (typeof object === 'undefined' ? 'undefined' : _typeof(object)) {
				case 'number':
					if (base !== undefined) throw 'IntegerRing#from: using the base parameter does not make sense when parsing a JavaScript number.';
					return this.from_number(object, is_negative);
				case 'string':
					if (base === undefined) base = 10;
					return this.from_string(object, base, is_negative);
				default:
					throw 'IntegerRing#from cannot handle ' + (typeof object === 'undefined' ? 'undefined' : _typeof(object));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnRlZ2VyUmluZy5qcyJdLCJuYW1lcyI6WyJJbnRlZ2VyUmluZyIsIm5hbWUiLCJiYXNlIiwib2JqZWN0IiwidW5kZWZpbmVkIiwiaXNfbmVnYXRpdmUiLCJmcm9tX251bWJlciIsImZyb21fc3RyaW5nIiwibnVtYmVyIiwibGltYnMiLCJzdHJpbmciLCJsZW5ndGgiLCJzbGljZSIsImZpcnN0Iiwic2Vjb25kIiwiYWRkIiwic3ViIiwibXVsIiwicG93IiwiZGl2IiwibW9kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0lBRWFBLFcsV0FBQUEsVztBQUVaLHNCQUFjQyxJQUFkLEVBQXFCQyxJQUFyQixFQUE0QjtBQUFBOztBQUMzQixPQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQTs7Ozt1QkFFTUMsTSxFQUE4QztBQUFBLE9BQXJDRCxJQUFxQyx1RUFBOUJFLFNBQThCO0FBQUEsT0FBbEJDLFdBQWtCLHVFQUFKLENBQUk7OztBQUVwRCxrQkFBZ0JGLE1BQWhCLHlDQUFnQkEsTUFBaEI7QUFDQyxTQUFLLFFBQUw7QUFDQyxTQUFLRCxTQUFTRSxTQUFkLEVBQTBCLE1BQU0sa0dBQU47QUFDMUIsWUFBTyxLQUFLRSxXQUFMLENBQWtCSCxNQUFsQixFQUEyQkUsV0FBM0IsQ0FBUDtBQUNELFNBQUssUUFBTDtBQUNDLFNBQUtILFNBQVNFLFNBQWQsRUFBMEJGLE9BQU8sRUFBUDtBQUMxQixZQUFPLEtBQUtLLFdBQUwsQ0FBa0JKLE1BQWxCLEVBQTJCRCxJQUEzQixFQUFrQ0csV0FBbEMsQ0FBUDtBQUNEO0FBQ0MsdURBQStDRixNQUEvQyx5Q0FBK0NBLE1BQS9DO0FBUkY7QUFXQTs7OzhCQUVhSyxNLEVBQTJCO0FBQUEsT0FBbEJILFdBQWtCLHVFQUFKLENBQUk7OztBQUV4QyxPQUFLRyxTQUFTLENBQWQsRUFBa0I7QUFDakJILGtCQUFjLENBQUNBLFdBQWY7QUFDQUcsYUFBUyxDQUFDQSxNQUFWO0FBQ0E7O0FBRUQsT0FBTUMsUUFBUSxpQ0FBUyxnQkFBVCxFQUE0QixLQUFLUCxJQUFqQyxFQUF3QyxDQUFFTSxNQUFGLENBQXhDLEVBQXFELENBQXJELEVBQXlELENBQXpELENBQWQ7O0FBRUEsVUFBTyxjQUFhLEtBQUtOLElBQWxCLEVBQXlCRyxXQUF6QixFQUF1Q0ksS0FBdkMsQ0FBUDtBQUVBOzs7OEJBRWFDLE0sRUFBd0M7QUFBQSxPQUEvQlIsSUFBK0IsdUVBQXhCLEVBQXdCO0FBQUEsT0FBbkJHLFdBQW1CLHVFQUFMLENBQUs7OztBQUVyRCxPQUFLSyxPQUFPQyxNQUFQLEtBQWtCLENBQXZCLEVBQTJCLE1BQU0sb0RBQU47O0FBRTNCLE9BQUtELE9BQU8sQ0FBUCxNQUFjLEdBQW5CLEVBQXlCLE9BQU8sS0FBS0gsV0FBTCxDQUFrQkcsT0FBT0UsS0FBUCxDQUFhLENBQWIsQ0FBbEIsRUFBb0NWLElBQXBDLEVBQTJDLENBQUNHLFdBQTVDLENBQVA7O0FBRXpCLE9BQUtLLE9BQU8sQ0FBUCxNQUFjLEdBQW5CLEVBQXlCLE9BQU8sS0FBS0gsV0FBTCxDQUFrQkcsT0FBT0UsS0FBUCxDQUFhLENBQWIsQ0FBbEIsRUFBb0NWLElBQXBDLEVBQTJDRyxXQUEzQyxDQUFQOztBQUV6QixPQUFNSSxRQUFRLCtCQUFPUCxJQUFQLEVBQWMsS0FBS0EsSUFBbkIsRUFBMEJRLE1BQTFCLENBQWQ7O0FBRUEsVUFBTyxjQUFhLEtBQUtSLElBQWxCLEVBQXlCRyxXQUF6QixFQUF1Q0ksS0FBdkMsQ0FBUDtBQUVBOzs7NkJBRVk7QUFDWixVQUFPLEtBQUtSLElBQVo7QUFDQTs7O3NCQUVZWSxLLEVBQVFDLE0sRUFBUztBQUM3QixVQUFPRCxNQUFNRSxHQUFOLENBQVVELE1BQVYsQ0FBUDtBQUNBOzs7c0JBRVlELEssRUFBUUMsTSxFQUFTO0FBQzdCLFVBQU9ELE1BQU1HLEdBQU4sQ0FBVUYsTUFBVixDQUFQO0FBQ0E7OztzQkFFWUQsSyxFQUFRQyxNLEVBQVM7QUFDN0IsVUFBT0QsTUFBTUksR0FBTixDQUFVSCxNQUFWLENBQVA7QUFDQTs7O3NCQUVZRCxLLEVBQVFDLE0sRUFBUztBQUM3QixVQUFPRCxNQUFNSyxHQUFOLENBQVVKLE1BQVYsQ0FBUDtBQUNBOzs7c0JBRVlELEssRUFBUUMsTSxFQUFTO0FBQzdCLFVBQU9ELE1BQU1NLEdBQU4sQ0FBVUwsTUFBVixDQUFQO0FBQ0E7OztzQkFFWUQsSyxFQUFRQyxNLEVBQVM7QUFDN0IsVUFBT0QsTUFBTU8sR0FBTixDQUFVTixNQUFWLENBQVA7QUFDQSIsImZpbGUiOiJJbnRlZ2VyUmluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEludGVnZXIgfSBmcm9tICcuLycgO1xuaW1wb3J0IHsgcGFyc2UgLCBjb252ZXJ0IH0gZnJvbSAnQGF1cmVvb21zL2pzLWludGVnZXItYmlnLWVuZGlhbicgO1xuXG5leHBvcnQgY2xhc3MgSW50ZWdlclJpbmcge1xuXG5cdGNvbnN0cnVjdG9yICggbmFtZSAsIGJhc2UgKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZSA7XG5cdFx0dGhpcy5iYXNlID0gYmFzZSA7XG5cdH1cblxuXHRmcm9tICggb2JqZWN0ICwgYmFzZSA9IHVuZGVmaW5lZCAsIGlzX25lZ2F0aXZlID0gMCApIHtcblxuXHRcdHN3aXRjaCAoIHR5cGVvZiBvYmplY3QgKSB7XG5cdFx0XHRjYXNlICdudW1iZXInIDpcblx0XHRcdFx0aWYgKCBiYXNlICE9PSB1bmRlZmluZWQgKSB0aHJvdyAnSW50ZWdlclJpbmcjZnJvbTogdXNpbmcgdGhlIGJhc2UgcGFyYW1ldGVyIGRvZXMgbm90IG1ha2Ugc2Vuc2Ugd2hlbiBwYXJzaW5nIGEgSmF2YVNjcmlwdCBudW1iZXIuJyA7XG5cdFx0XHRcdHJldHVybiB0aGlzLmZyb21fbnVtYmVyKCBvYmplY3QgLCBpc19uZWdhdGl2ZSApIDtcblx0XHRcdGNhc2UgJ3N0cmluZycgOlxuXHRcdFx0XHRpZiAoIGJhc2UgPT09IHVuZGVmaW5lZCApIGJhc2UgPSAxMCA7XG5cdFx0XHRcdHJldHVybiB0aGlzLmZyb21fc3RyaW5nKCBvYmplY3QgLCBiYXNlICwgaXNfbmVnYXRpdmUgKSA7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBgSW50ZWdlclJpbmcjZnJvbSBjYW5ub3QgaGFuZGxlICR7dHlwZW9mIG9iamVjdH1gIDtcblx0XHR9XG5cblx0fVxuXG5cdGZyb21fbnVtYmVyICggbnVtYmVyICwgaXNfbmVnYXRpdmUgPSAwICkge1xuXG5cdFx0aWYgKCBudW1iZXIgPCAwICkge1xuXHRcdFx0aXNfbmVnYXRpdmUgPSB+aXNfbmVnYXRpdmUgO1xuXHRcdFx0bnVtYmVyID0gLW51bWJlciA7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbGltYnMgPSBjb252ZXJ0KCAweDIwMDAwMDAwMDAwMDAwICwgdGhpcy5iYXNlICwgWyBudW1iZXIgXSAsIDAgLCAxICkgO1xuXG5cdFx0cmV0dXJuIG5ldyBJbnRlZ2VyKCB0aGlzLmJhc2UgLCBpc19uZWdhdGl2ZSAsIGxpbWJzICkgO1xuXG5cdH1cblxuXHRmcm9tX3N0cmluZyAoIHN0cmluZyAsIGJhc2UgPSAxMCAsIGlzX25lZ2F0aXZlID0gMCAgKSB7XG5cblx0XHRpZiAoIHN0cmluZy5sZW5ndGggPT09IDAgKSB0aHJvdyAnSW50ZWdlclJpbmcjZnJvbV9zdHJpbmcgY2Fubm90IHBhcnNlIGVtcHR5IHN0cmluZy4nIDtcblxuXHRcdGlmICggc3RyaW5nWzBdID09PSAnLScgKSByZXR1cm4gdGhpcy5mcm9tX3N0cmluZyggc3RyaW5nLnNsaWNlKDEpICwgYmFzZSAsIH5pc19uZWdhdGl2ZSApIDtcblxuXHRcdGlmICggc3RyaW5nWzBdID09PSAnKycgKSByZXR1cm4gdGhpcy5mcm9tX3N0cmluZyggc3RyaW5nLnNsaWNlKDEpICwgYmFzZSAsIGlzX25lZ2F0aXZlICkgO1xuXG5cdFx0Y29uc3QgbGltYnMgPSBwYXJzZSggYmFzZSAsIHRoaXMuYmFzZSAsIHN0cmluZyApIDtcblxuXHRcdHJldHVybiBuZXcgSW50ZWdlciggdGhpcy5iYXNlICwgaXNfbmVnYXRpdmUgLCBsaW1icyApIDtcblxuXHR9XG5cblx0dG9TdHJpbmcgKCApIHtcblx0XHRyZXR1cm4gdGhpcy5uYW1lIDtcblx0fVxuXG5cdHN0YXRpYyBhZGQgKCBmaXJzdCAsIHNlY29uZCApIHtcblx0XHRyZXR1cm4gZmlyc3QuYWRkKHNlY29uZCkgO1xuXHR9XG5cblx0c3RhdGljIHN1YiAoIGZpcnN0ICwgc2Vjb25kICkge1xuXHRcdHJldHVybiBmaXJzdC5zdWIoc2Vjb25kKSA7XG5cdH1cblxuXHRzdGF0aWMgbXVsICggZmlyc3QgLCBzZWNvbmQgKSB7XG5cdFx0cmV0dXJuIGZpcnN0Lm11bChzZWNvbmQpIDtcblx0fVxuXG5cdHN0YXRpYyBwb3cgKCBmaXJzdCAsIHNlY29uZCApIHtcblx0XHRyZXR1cm4gZmlyc3QucG93KHNlY29uZCkgO1xuXHR9XG5cblx0c3RhdGljIGRpdiAoIGZpcnN0ICwgc2Vjb25kICkge1xuXHRcdHJldHVybiBmaXJzdC5kaXYoc2Vjb25kKSA7XG5cdH1cblxuXHRzdGF0aWMgbW9kICggZmlyc3QgLCBzZWNvbmQgKSB7XG5cdFx0cmV0dXJuIGZpcnN0Lm1vZChzZWNvbmQpIDtcblx0fVxuXG59XG4iXX0=