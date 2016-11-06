'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.trim_natural = trim_natural;

var _ = require('.');

function trim_natural(a, ai, aj) {

	var x = (0, _._trim_positive)(a, ai, aj);

	if (x >= aj) return [0];

	var b = (0, _._alloc)(aj - x);

	(0, _._copy)(a, x, aj, b, 0);

	return b;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8xLW5ldy9jb252ZXJ0L3RyaW1fbmF0dXJhbC5qcyJdLCJuYW1lcyI6WyJ0cmltX25hdHVyYWwiLCJhIiwiYWkiLCJhaiIsIngiLCJiIl0sIm1hcHBpbmdzIjoiOzs7OztRQUNnQkEsWSxHQUFBQSxZOztBQURoQjs7QUFDTyxTQUFTQSxZQUFULENBQXdCQyxDQUF4QixFQUE0QkMsRUFBNUIsRUFBaUNDLEVBQWpDLEVBQXNDOztBQUU1QyxLQUFNQyxJQUFJLHNCQUFnQkgsQ0FBaEIsRUFBb0JDLEVBQXBCLEVBQXlCQyxFQUF6QixDQUFWOztBQUVBLEtBQUtDLEtBQUtELEVBQVYsRUFBZSxPQUFPLENBQUUsQ0FBRixDQUFQOztBQUVmLEtBQU1FLElBQUksY0FBUUYsS0FBS0MsQ0FBYixDQUFWOztBQUVBLGNBQU9ILENBQVAsRUFBV0csQ0FBWCxFQUFlRCxFQUFmLEVBQW9CRSxDQUFwQixFQUF3QixDQUF4Qjs7QUFFQSxRQUFPQSxDQUFQO0FBRUEiLCJmaWxlIjoidHJpbV9uYXR1cmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX3RyaW1fcG9zaXRpdmUgLCBfYWxsb2MgLCBfY29weSB9IGZyb20gJy4nIDtcbmV4cG9ydCBmdW5jdGlvbiB0cmltX25hdHVyYWwgKCBhICwgYWkgLCBhaiApIHtcblxuXHRjb25zdCB4ID0gX3RyaW1fcG9zaXRpdmUoIGEgLCBhaSAsIGFqICkgO1xuXG5cdGlmICggeCA+PSBhaiApIHJldHVybiBbIDAgXSA7XG5cblx0Y29uc3QgYiA9IF9hbGxvYyggYWogLSB4ICkgO1xuXG5cdF9jb3B5KCBhICwgeCAsIGFqICwgYiAsIDAgKSA7XG5cblx0cmV0dXJuIGIgO1xuXG59XG4iXX0=