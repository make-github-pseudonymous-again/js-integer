"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._convert_slow = _convert_slow;


/**
 *
 * @param {Number} f the base to convert from
 * @param {Number} t the base to convert to
 * @param {Array} a the origin array
 * @param {Number} ai start offset in the origin array
 * @param {Number} aj end offset in the origin array
 * @param {Array} b the destination array
 * @param {Number} bi start offset in the destination array
 * @param {Number} bj end offset in the destination array
 */

function _convert_slow(f, t, a, ai, aj, b, bi, bj) {

	var d = _build(f, t);
	var di = 0;
	var dj = d.length;
	var qi = 0;
	var qj = aj - ai;
	var q = _alloc(qj - qi);

	while (true) {

		_reset(q, qi, qj);

		_div(f, a, ai, aj, d, di, dj, q, qi);

		--bj;
		var x = 0;

		for (var k = ai; k < aj; ++k) {
			x *= f;
			x += a[k];
		}

		b[bj] = x;

		if (_jz(q, qi, qj)) return;

		_copy(q, qi, qj, a, ai);
	}
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8xLW5ldy9jb252ZXJ0L19jb252ZXJ0X3Nsb3cuanMiXSwibmFtZXMiOlsiX2NvbnZlcnRfc2xvdyIsImYiLCJ0IiwiYSIsImFpIiwiYWoiLCJiIiwiYmkiLCJiaiIsImQiLCJfYnVpbGQiLCJkaSIsImRqIiwibGVuZ3RoIiwicWkiLCJxaiIsInEiLCJfYWxsb2MiLCJfcmVzZXQiLCJfZGl2IiwieCIsImsiLCJfanoiLCJfY29weSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFjZ0JBLGEsR0FBQUEsYTs7O0FBWmhCOzs7Ozs7Ozs7Ozs7QUFZTyxTQUFTQSxhQUFULENBQXlCQyxDQUF6QixFQUE2QkMsQ0FBN0IsRUFBaUNDLENBQWpDLEVBQXFDQyxFQUFyQyxFQUEwQ0MsRUFBMUMsRUFBK0NDLENBQS9DLEVBQW1EQyxFQUFuRCxFQUF3REMsRUFBeEQsRUFBNkQ7O0FBRW5FLEtBQU1DLElBQUlDLE9BQVFULENBQVIsRUFBWUMsQ0FBWixDQUFWO0FBQ0EsS0FBTVMsS0FBSyxDQUFYO0FBQ0EsS0FBTUMsS0FBS0gsRUFBRUksTUFBYjtBQUNBLEtBQU1DLEtBQUssQ0FBWDtBQUNBLEtBQU1DLEtBQUtWLEtBQUtELEVBQWhCO0FBQ0EsS0FBTVksSUFBSUMsT0FBUUYsS0FBS0QsRUFBYixDQUFWOztBQUVBLFFBQVEsSUFBUixFQUFlOztBQUVkSSxTQUFRRixDQUFSLEVBQVlGLEVBQVosRUFBaUJDLEVBQWpCOztBQUVBSSxPQUFNbEIsQ0FBTixFQUFVRSxDQUFWLEVBQWNDLEVBQWQsRUFBbUJDLEVBQW5CLEVBQXdCSSxDQUF4QixFQUE0QkUsRUFBNUIsRUFBaUNDLEVBQWpDLEVBQXNDSSxDQUF0QyxFQUEwQ0YsRUFBMUM7O0FBRUEsSUFBRU4sRUFBRjtBQUNBLE1BQUlZLElBQUksQ0FBUjs7QUFFQSxPQUFNLElBQUlDLElBQUlqQixFQUFkLEVBQW1CaUIsSUFBSWhCLEVBQXZCLEVBQTRCLEVBQUVnQixDQUE5QixFQUFrQztBQUNqQ0QsUUFBS25CLENBQUw7QUFDQW1CLFFBQUtqQixFQUFFa0IsQ0FBRixDQUFMO0FBQ0E7O0FBRURmLElBQUVFLEVBQUYsSUFBUVksQ0FBUjs7QUFFQSxNQUFLRSxJQUFLTixDQUFMLEVBQVNGLEVBQVQsRUFBY0MsRUFBZCxDQUFMLEVBQTBCOztBQUUxQlEsUUFBT1AsQ0FBUCxFQUFXRixFQUFYLEVBQWdCQyxFQUFoQixFQUFxQlosQ0FBckIsRUFBeUJDLEVBQXpCO0FBRUE7QUFFRCIsImZpbGUiOiJfY29udmVydF9zbG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBmIHRoZSBiYXNlIHRvIGNvbnZlcnQgZnJvbVxuICogQHBhcmFtIHtOdW1iZXJ9IHQgdGhlIGJhc2UgdG8gY29udmVydCB0b1xuICogQHBhcmFtIHtBcnJheX0gYSB0aGUgb3JpZ2luIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gYWkgc3RhcnQgb2Zmc2V0IGluIHRoZSBvcmlnaW4gYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBhaiBlbmQgb2Zmc2V0IGluIHRoZSBvcmlnaW4gYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGIgdGhlIGRlc3RpbmF0aW9uIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gYmkgc3RhcnQgb2Zmc2V0IGluIHRoZSBkZXN0aW5hdGlvbiBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGJqIGVuZCBvZmZzZXQgaW4gdGhlIGRlc3RpbmF0aW9uIGFycmF5XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIF9jb252ZXJ0X3Nsb3cgKCBmICwgdCAsIGEgLCBhaSAsIGFqICwgYiAsIGJpICwgYmogKSB7XG5cblx0Y29uc3QgZCA9IF9idWlsZCggZiAsIHQgKSA7XG5cdGNvbnN0IGRpID0gMCA7XG5cdGNvbnN0IGRqID0gZC5sZW5ndGggO1xuXHRjb25zdCBxaSA9IDAgO1xuXHRjb25zdCBxaiA9IGFqIC0gYWkgO1xuXHRjb25zdCBxID0gX2FsbG9jKCBxaiAtIHFpICkgO1xuXG5cdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdF9yZXNldCggcSAsIHFpICwgcWogKSA7XG5cblx0XHRfZGl2KCBmICwgYSAsIGFpICwgYWogLCBkICwgZGkgLCBkaiAsIHEgLCBxaSApIDtcblxuXHRcdC0tYmogO1xuXHRcdGxldCB4ID0gMCA7XG5cblx0XHRmb3IgKCBsZXQgayA9IGFpIDsgayA8IGFqIDsgKytrICkge1xuXHRcdFx0eCAqPSBmIDtcblx0XHRcdHggKz0gYVtrXSA7XG5cdFx0fVxuXG5cdFx0Yltial0gPSB4IDtcblxuXHRcdGlmICggX2p6KCBxICwgcWkgLCBxaiApICkgcmV0dXJuIDtcblxuXHRcdF9jb3B5KCBxICwgcWkgLCBxaiAsIGEgLCBhaSApIDtcblxuXHR9XG5cbn1cbiJdfQ==