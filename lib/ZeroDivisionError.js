"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ZeroDivisionError = exports.ZeroDivisionError = function () {
	function ZeroDivisionError(message) {
		_classCallCheck(this, ZeroDivisionError);

		this.message = message;
	}

	_createClass(ZeroDivisionError, [{
		key: "toString",
		value: function toString() {
			return "ZeroDivisionError: " + this.message;
		}
	}]);

	return ZeroDivisionError;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9aZXJvRGl2aXNpb25FcnJvci5qcyJdLCJuYW1lcyI6WyJaZXJvRGl2aXNpb25FcnJvciIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFDYUEsaUIsV0FBQUEsaUI7QUFFWiw0QkFBY0MsT0FBZCxFQUF3QjtBQUFBOztBQUN2QixPQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQTs7Ozs2QkFFWTtBQUNaLGtDQUE2QixLQUFLQSxPQUFsQztBQUNBIiwiZmlsZSI6Ilplcm9EaXZpc2lvbkVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgWmVyb0RpdmlzaW9uRXJyb3Ige1xuXG5cdGNvbnN0cnVjdG9yICggbWVzc2FnZSApIHtcblx0XHR0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIDtcblx0fVxuXG5cdHRvU3RyaW5nICggKSB7XG5cdFx0cmV0dXJuIGBaZXJvRGl2aXNpb25FcnJvcjogJHt0aGlzLm1lc3NhZ2V9YCA7XG5cdH1cblxufVxuIl19