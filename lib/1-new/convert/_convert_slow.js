'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._convert_slow = _convert_slow;

var _ = require('.');

var _arithmetic = require('../arithmetic');

var _compare = require('../compare');

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

	var d = (0, _._build)(f, t);
	var di = 0;
	var dj = d.length;
	var qi = 0;
	var qj = aj - ai;
	var q = (0, _._alloc)(qj - qi);

	while (true) {

		(0, _._reset)(q, qi, qj);

		(0, _arithmetic._div)(f, a, ai, aj, d, di, dj, q, qi);

		--bj;
		var x = 0;

		for (var k = ai; k < aj; ++k) {
			x *= f;
			x += a[k];
		}

		b[bj] = x;

		if ((0, _compare._jz)(q, qi, qj)) return;

		(0, _._copy)(q, qi, qj, a, ai);
	}
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8xLW5ldy9jb252ZXJ0L19jb252ZXJ0X3Nsb3cuanMiXSwibmFtZXMiOlsiX2NvbnZlcnRfc2xvdyIsImYiLCJ0IiwiYSIsImFpIiwiYWoiLCJiIiwiYmkiLCJiaiIsImQiLCJkaSIsImRqIiwibGVuZ3RoIiwicWkiLCJxaiIsInEiLCJ4IiwiayJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFnQmdCQSxhLEdBQUFBLGE7O0FBaEJoQjs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBWU8sU0FBU0EsYUFBVCxDQUF5QkMsQ0FBekIsRUFBNkJDLENBQTdCLEVBQWlDQyxDQUFqQyxFQUFxQ0MsRUFBckMsRUFBMENDLEVBQTFDLEVBQStDQyxDQUEvQyxFQUFtREMsRUFBbkQsRUFBd0RDLEVBQXhELEVBQTZEOztBQUVuRSxLQUFNQyxJQUFJLGNBQVFSLENBQVIsRUFBWUMsQ0FBWixDQUFWO0FBQ0EsS0FBTVEsS0FBSyxDQUFYO0FBQ0EsS0FBTUMsS0FBS0YsRUFBRUcsTUFBYjtBQUNBLEtBQU1DLEtBQUssQ0FBWDtBQUNBLEtBQU1DLEtBQUtULEtBQUtELEVBQWhCO0FBQ0EsS0FBTVcsSUFBSSxjQUFRRCxLQUFLRCxFQUFiLENBQVY7O0FBRUEsUUFBUSxJQUFSLEVBQWU7O0FBRWQsZ0JBQVFFLENBQVIsRUFBWUYsRUFBWixFQUFpQkMsRUFBakI7O0FBRUEsd0JBQU1iLENBQU4sRUFBVUUsQ0FBVixFQUFjQyxFQUFkLEVBQW1CQyxFQUFuQixFQUF3QkksQ0FBeEIsRUFBNEJDLEVBQTVCLEVBQWlDQyxFQUFqQyxFQUFzQ0ksQ0FBdEMsRUFBMENGLEVBQTFDOztBQUVBLElBQUVMLEVBQUY7QUFDQSxNQUFJUSxJQUFJLENBQVI7O0FBRUEsT0FBTSxJQUFJQyxJQUFJYixFQUFkLEVBQW1CYSxJQUFJWixFQUF2QixFQUE0QixFQUFFWSxDQUE5QixFQUFrQztBQUNqQ0QsUUFBS2YsQ0FBTDtBQUNBZSxRQUFLYixFQUFFYyxDQUFGLENBQUw7QUFDQTs7QUFFRFgsSUFBRUUsRUFBRixJQUFRUSxDQUFSOztBQUVBLE1BQUssa0JBQUtELENBQUwsRUFBU0YsRUFBVCxFQUFjQyxFQUFkLENBQUwsRUFBMEI7O0FBRTFCLGVBQU9DLENBQVAsRUFBV0YsRUFBWCxFQUFnQkMsRUFBaEIsRUFBcUJYLENBQXJCLEVBQXlCQyxFQUF6QjtBQUVBO0FBRUQiLCJmaWxlIjoiX2NvbnZlcnRfc2xvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9idWlsZCAsIF9hbGxvYyAsIF9yZXNldCAsIF9jb3B5IH0gZnJvbSAnLicgO1xuaW1wb3J0IHsgX2RpdiB9IGZyb20gJy4uL2FyaXRobWV0aWMnIDtcbmltcG9ydCB7IF9qeiB9IGZyb20gJy4uL2NvbXBhcmUnIDtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGYgdGhlIGJhc2UgdG8gY29udmVydCBmcm9tXG4gKiBAcGFyYW0ge051bWJlcn0gdCB0aGUgYmFzZSB0byBjb252ZXJ0IHRvXG4gKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBvcmlnaW4gYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBhaSBzdGFydCBvZmZzZXQgaW4gdGhlIG9yaWdpbiBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGFqIGVuZCBvZmZzZXQgaW4gdGhlIG9yaWdpbiBhcnJheVxuICogQHBhcmFtIHtBcnJheX0gYiB0aGUgZGVzdGluYXRpb24gYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBiaSBzdGFydCBvZmZzZXQgaW4gdGhlIGRlc3RpbmF0aW9uIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gYmogZW5kIG9mZnNldCBpbiB0aGUgZGVzdGluYXRpb24gYXJyYXlcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gX2NvbnZlcnRfc2xvdyAoIGYgLCB0ICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiApIHtcblxuXHRjb25zdCBkID0gX2J1aWxkKCBmICwgdCApIDtcblx0Y29uc3QgZGkgPSAwIDtcblx0Y29uc3QgZGogPSBkLmxlbmd0aCA7XG5cdGNvbnN0IHFpID0gMCA7XG5cdGNvbnN0IHFqID0gYWogLSBhaSA7XG5cdGNvbnN0IHEgPSBfYWxsb2MoIHFqIC0gcWkgKSA7XG5cblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0X3Jlc2V0KCBxICwgcWkgLCBxaiApIDtcblxuXHRcdF9kaXYoIGYgLCBhICwgYWkgLCBhaiAsIGQgLCBkaSAsIGRqICwgcSAsIHFpICkgO1xuXG5cdFx0LS1iaiA7XG5cdFx0bGV0IHggPSAwIDtcblxuXHRcdGZvciAoIGxldCBrID0gYWkgOyBrIDwgYWogOyArK2sgKSB7XG5cdFx0XHR4ICo9IGYgO1xuXHRcdFx0eCArPSBhW2tdIDtcblx0XHR9XG5cblx0XHRiW2JqXSA9IHggO1xuXG5cdFx0aWYgKCBfanooIHEgLCBxaSAsIHFqICkgKSByZXR1cm4gO1xuXG5cdFx0X2NvcHkoIHEgLCBxaSAsIHFqICwgYSAsIGFpICkgO1xuXG5cdH1cblxufVxuIl19