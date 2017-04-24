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
					return this.from_string('' + object, 10, is_negative);
				case 'string':
					if (base === undefined) base = 10;
					return this.from_string(object, base, is_negative);
				default:
					throw 'IntegerRing#from cannot handle ' + (typeof object === 'undefined' ? 'undefined' : _typeof(object));
			}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnRlZ2VyUmluZy5qcyJdLCJuYW1lcyI6WyJJbnRlZ2VyUmluZyIsIm5hbWUiLCJiYXNlIiwib2JqZWN0IiwidW5kZWZpbmVkIiwiaXNfbmVnYXRpdmUiLCJmcm9tX3N0cmluZyIsInN0cmluZyIsImxlbmd0aCIsInNsaWNlIiwibGltYnMiLCJmaXJzdCIsInNlY29uZCIsImFkZCIsInN1YiIsIm11bCIsInBvdyIsImRpdiIsIm1vZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztJQUVhQSxXLFdBQUFBLFc7QUFFWixzQkFBY0MsSUFBZCxFQUFxQkMsSUFBckIsRUFBNEI7QUFBQTs7QUFDM0IsT0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsT0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0E7Ozs7dUJBRU1DLE0sRUFBOEM7QUFBQSxPQUFyQ0QsSUFBcUMsdUVBQTlCRSxTQUE4QjtBQUFBLE9BQWxCQyxXQUFrQix1RUFBSixDQUFJOzs7QUFFcEQsa0JBQWdCRixNQUFoQix5Q0FBZ0JBLE1BQWhCO0FBQ0MsU0FBSyxRQUFMO0FBQ0MsU0FBS0QsU0FBU0UsU0FBZCxFQUEwQixNQUFNLGtHQUFOO0FBQzFCLFlBQU8sS0FBS0UsV0FBTCxDQUFrQixLQUFLSCxNQUF2QixFQUFnQyxFQUFoQyxFQUFxQ0UsV0FBckMsQ0FBUDtBQUNELFNBQUssUUFBTDtBQUNDLFNBQUtILFNBQVNFLFNBQWQsRUFBMEJGLE9BQU8sRUFBUDtBQUMxQixZQUFPLEtBQUtJLFdBQUwsQ0FBa0JILE1BQWxCLEVBQTJCRCxJQUEzQixFQUFrQ0csV0FBbEMsQ0FBUDtBQUNEO0FBQ0MsdURBQStDRixNQUEvQyx5Q0FBK0NBLE1BQS9DO0FBUkY7QUFXQTs7OzhCQUVhSSxNLEVBQXdDO0FBQUEsT0FBL0JMLElBQStCLHVFQUF4QixFQUF3QjtBQUFBLE9BQW5CRyxXQUFtQix1RUFBTCxDQUFLOzs7QUFFckQsT0FBS0UsT0FBT0MsTUFBUCxLQUFrQixDQUF2QixFQUEyQixNQUFNLG9EQUFOOztBQUUzQixPQUFLRCxPQUFPLENBQVAsTUFBYyxHQUFuQixFQUF5QixPQUFPLEtBQUtELFdBQUwsQ0FBa0JDLE9BQU9FLEtBQVAsQ0FBYSxDQUFiLENBQWxCLEVBQW9DUCxJQUFwQyxFQUEyQyxDQUFDRyxXQUE1QyxDQUFQOztBQUV6QixPQUFLRSxPQUFPLENBQVAsTUFBYyxHQUFuQixFQUF5QixPQUFPLEtBQUtELFdBQUwsQ0FBa0JDLE9BQU9FLEtBQVAsQ0FBYSxDQUFiLENBQWxCLEVBQW9DUCxJQUFwQyxFQUEyQ0csV0FBM0MsQ0FBUDs7QUFFekIsT0FBTUssUUFBUSwrQkFBT1IsSUFBUCxFQUFjLEtBQUtBLElBQW5CLEVBQTBCSyxNQUExQixDQUFkOztBQUVBLFVBQU8sY0FBYSxLQUFLTCxJQUFsQixFQUF5QkcsV0FBekIsRUFBdUNLLEtBQXZDLENBQVA7QUFFQTs7OzZCQUVZO0FBQ1osVUFBTyxLQUFLVCxJQUFaO0FBQ0E7OztzQkFFWVUsSyxFQUFRQyxNLEVBQVM7QUFDN0IsVUFBT0QsTUFBTUUsR0FBTixDQUFVRCxNQUFWLENBQVA7QUFDQTs7O3NCQUVZRCxLLEVBQVFDLE0sRUFBUztBQUM3QixVQUFPRCxNQUFNRyxHQUFOLENBQVVGLE1BQVYsQ0FBUDtBQUNBOzs7c0JBRVlELEssRUFBUUMsTSxFQUFTO0FBQzdCLFVBQU9ELE1BQU1JLEdBQU4sQ0FBVUgsTUFBVixDQUFQO0FBQ0E7OztzQkFFWUQsSyxFQUFRQyxNLEVBQVM7QUFDN0IsVUFBT0QsTUFBTUssR0FBTixDQUFVSixNQUFWLENBQVA7QUFDQTs7O3NCQUVZRCxLLEVBQVFDLE0sRUFBUztBQUM3QixVQUFPRCxNQUFNTSxHQUFOLENBQVVMLE1BQVYsQ0FBUDtBQUNBOzs7c0JBRVlELEssRUFBUUMsTSxFQUFTO0FBQzdCLFVBQU9ELE1BQU1PLEdBQU4sQ0FBVU4sTUFBVixDQUFQO0FBQ0EiLCJmaWxlIjoiSW50ZWdlclJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnRlZ2VyIH0gZnJvbSAnLi8nIDtcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAnQGF1cmVvb21zL2pzLWludGVnZXItYmlnLWVuZGlhbicgO1xuXG5leHBvcnQgY2xhc3MgSW50ZWdlclJpbmcge1xuXG5cdGNvbnN0cnVjdG9yICggbmFtZSAsIGJhc2UgKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZSA7XG5cdFx0dGhpcy5iYXNlID0gYmFzZSA7XG5cdH1cblxuXHRmcm9tICggb2JqZWN0ICwgYmFzZSA9IHVuZGVmaW5lZCAsIGlzX25lZ2F0aXZlID0gMCApIHtcblxuXHRcdHN3aXRjaCAoIHR5cGVvZiBvYmplY3QgKSB7XG5cdFx0XHRjYXNlICdudW1iZXInIDpcblx0XHRcdFx0aWYgKCBiYXNlICE9PSB1bmRlZmluZWQgKSB0aHJvdyAnSW50ZWdlclJpbmcjZnJvbTogdXNpbmcgdGhlIGJhc2UgcGFyYW1ldGVyIGRvZXMgbm90IG1ha2Ugc2Vuc2Ugd2hlbiBwYXJzaW5nIGEgSmF2YVNjcmlwdCBudW1iZXIuJyA7XG5cdFx0XHRcdHJldHVybiB0aGlzLmZyb21fc3RyaW5nKCAnJyArIG9iamVjdCAsIDEwICwgaXNfbmVnYXRpdmUgKSA7XG5cdFx0XHRjYXNlICdzdHJpbmcnIDpcblx0XHRcdFx0aWYgKCBiYXNlID09PSB1bmRlZmluZWQgKSBiYXNlID0gMTAgO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5mcm9tX3N0cmluZyggb2JqZWN0ICwgYmFzZSAsIGlzX25lZ2F0aXZlICkgO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgYEludGVnZXJSaW5nI2Zyb20gY2Fubm90IGhhbmRsZSAke3R5cGVvZiBvYmplY3R9YCA7XG5cdFx0fVxuXG5cdH1cblxuXHRmcm9tX3N0cmluZyAoIHN0cmluZyAsIGJhc2UgPSAxMCAsIGlzX25lZ2F0aXZlID0gMCAgKSB7XG5cblx0XHRpZiAoIHN0cmluZy5sZW5ndGggPT09IDAgKSB0aHJvdyAnSW50ZWdlclJpbmcjZnJvbV9zdHJpbmcgY2Fubm90IHBhcnNlIGVtcHR5IHN0cmluZy4nIDtcblxuXHRcdGlmICggc3RyaW5nWzBdID09PSAnLScgKSByZXR1cm4gdGhpcy5mcm9tX3N0cmluZyggc3RyaW5nLnNsaWNlKDEpICwgYmFzZSAsIH5pc19uZWdhdGl2ZSApIDtcblxuXHRcdGlmICggc3RyaW5nWzBdID09PSAnKycgKSByZXR1cm4gdGhpcy5mcm9tX3N0cmluZyggc3RyaW5nLnNsaWNlKDEpICwgYmFzZSAsIGlzX25lZ2F0aXZlICkgO1xuXG5cdFx0Y29uc3QgbGltYnMgPSBwYXJzZSggYmFzZSAsIHRoaXMuYmFzZSAsIHN0cmluZyApIDtcblxuXHRcdHJldHVybiBuZXcgSW50ZWdlciggdGhpcy5iYXNlICwgaXNfbmVnYXRpdmUgLCBsaW1icyApIDtcblxuXHR9XG5cblx0dG9TdHJpbmcgKCApIHtcblx0XHRyZXR1cm4gdGhpcy5uYW1lIDtcblx0fVxuXG5cdHN0YXRpYyBhZGQgKCBmaXJzdCAsIHNlY29uZCApIHtcblx0XHRyZXR1cm4gZmlyc3QuYWRkKHNlY29uZCkgO1xuXHR9XG5cblx0c3RhdGljIHN1YiAoIGZpcnN0ICwgc2Vjb25kICkge1xuXHRcdHJldHVybiBmaXJzdC5zdWIoc2Vjb25kKSA7XG5cdH1cblxuXHRzdGF0aWMgbXVsICggZmlyc3QgLCBzZWNvbmQgKSB7XG5cdFx0cmV0dXJuIGZpcnN0Lm11bChzZWNvbmQpIDtcblx0fVxuXG5cdHN0YXRpYyBwb3cgKCBmaXJzdCAsIHNlY29uZCApIHtcblx0XHRyZXR1cm4gZmlyc3QucG93KHNlY29uZCkgO1xuXHR9XG5cblx0c3RhdGljIGRpdiAoIGZpcnN0ICwgc2Vjb25kICkge1xuXHRcdHJldHVybiBmaXJzdC5kaXYoc2Vjb25kKSA7XG5cdH1cblxuXHRzdGF0aWMgbW9kICggZmlyc3QgLCBzZWNvbmQgKSB7XG5cdFx0cmV0dXJuIGZpcnN0Lm1vZChzZWNvbmQpIDtcblx0fVxuXG59XG4iXX0=