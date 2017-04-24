'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.stringify_t = stringify_t;

/**
 * Function template for number stringification.
 * Endianess provided by the iterator function
 *
 * @param {int} f from radix
 * @param {int} t to radix
 * @param {function} iter iterator function
 */

function stringify_t(f, t, iter, zfill_t) {

	if (t <= f) {

		if (t > 36) throw 't > 36 not implemented';

		var z = 0;
		while (f >= t) {
			if (f % t) break;
			f /= t;
			++z;
		}

		if (f !== 1) throw 'log(t) does not divide log(f) not implemented';

		var zfill = zfill_t(z);

		return function (a, i0, i1) {
			var s = [];
			iter(i0, i1, function (i) {
				s.push(zfill(Number(+a[i]).toString(t)));
			});
			return s.join('');
		};
	} else throw 't > f not implemented';
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWxlZ2FjeS9zdHJpbmdpZnkvc3RyaW5naWZ5LmpzIl0sIm5hbWVzIjpbInN0cmluZ2lmeV90IiwiZiIsInQiLCJpdGVyIiwiemZpbGxfdCIsInoiLCJ6ZmlsbCIsImEiLCJpMCIsImkxIiwicyIsImkiLCJwdXNoIiwiTnVtYmVyIiwidG9TdHJpbmciLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7OztRQVdnQkEsVyxHQUFBQSxXOztBQVZoQjs7Ozs7Ozs7O0FBVU8sU0FBU0EsV0FBVCxDQUFzQkMsQ0FBdEIsRUFBeUJDLENBQXpCLEVBQTRCQyxJQUE1QixFQUFrQ0MsT0FBbEMsRUFBMEM7O0FBRWhELEtBQUdGLEtBQUtELENBQVIsRUFBVTs7QUFFVCxNQUFHQyxJQUFJLEVBQVAsRUFBVyxNQUFNLHdCQUFOOztBQUVYLE1BQUlHLElBQUksQ0FBUjtBQUNBLFNBQU1KLEtBQUtDLENBQVgsRUFBYTtBQUNaLE9BQUdELElBQUlDLENBQVAsRUFBVTtBQUNWRCxRQUFLQyxDQUFMO0FBQ0EsS0FBRUcsQ0FBRjtBQUNBOztBQUVELE1BQUdKLE1BQU0sQ0FBVCxFQUFZLE1BQU0sK0NBQU47O0FBRVosTUFBSUssUUFBUUYsUUFBUUMsQ0FBUixDQUFaOztBQUVBLFNBQU8sVUFBU0UsQ0FBVCxFQUFZQyxFQUFaLEVBQWdCQyxFQUFoQixFQUFtQjtBQUN6QixPQUFJQyxJQUFJLEVBQVI7QUFDQVAsUUFBS0ssRUFBTCxFQUFTQyxFQUFULEVBQWEsVUFBU0UsQ0FBVCxFQUFXO0FBQ3ZCRCxNQUFFRSxJQUFGLENBQU9OLE1BQU1PLE9BQU8sQ0FBQ04sRUFBRUksQ0FBRixDQUFSLEVBQWNHLFFBQWQsQ0FBdUJaLENBQXZCLENBQU4sQ0FBUDtBQUNBLElBRkQ7QUFHQSxVQUFPUSxFQUFFSyxJQUFGLENBQU8sRUFBUCxDQUFQO0FBQ0EsR0FORDtBQVFBLEVBdkJELE1Bd0JLLE1BQU0sdUJBQU47QUFFTCIsImZpbGUiOiJzdHJpbmdpZnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogRnVuY3Rpb24gdGVtcGxhdGUgZm9yIG51bWJlciBzdHJpbmdpZmljYXRpb24uXG4gKiBFbmRpYW5lc3MgcHJvdmlkZWQgYnkgdGhlIGl0ZXJhdG9yIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtpbnR9IGYgZnJvbSByYWRpeFxuICogQHBhcmFtIHtpbnR9IHQgdG8gcmFkaXhcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGl0ZXIgaXRlcmF0b3IgZnVuY3Rpb25cbiAqL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnlfdCAoZiwgdCwgaXRlciwgemZpbGxfdCl7XG5cblx0aWYodCA8PSBmKXtcblxuXHRcdGlmKHQgPiAzNikgdGhyb3cgJ3QgPiAzNiBub3QgaW1wbGVtZW50ZWQnO1xuXG5cdFx0dmFyIHogPSAwO1xuXHRcdHdoaWxlKGYgPj0gdCl7XG5cdFx0XHRpZihmICUgdCkgYnJlYWs7XG5cdFx0XHRmIC89IHQ7XG5cdFx0XHQrK3o7XG5cdFx0fVxuXG5cdFx0aWYoZiAhPT0gMSkgdGhyb3cgJ2xvZyh0KSBkb2VzIG5vdCBkaXZpZGUgbG9nKGYpIG5vdCBpbXBsZW1lbnRlZCc7XG5cblx0XHR2YXIgemZpbGwgPSB6ZmlsbF90KHopO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKGEsIGkwLCBpMSl7XG5cdFx0XHR2YXIgcyA9IFtdO1xuXHRcdFx0aXRlcihpMCwgaTEsIGZ1bmN0aW9uKGkpe1xuXHRcdFx0XHRzLnB1c2goemZpbGwoTnVtYmVyKCthW2ldKS50b1N0cmluZyh0KSkpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gcy5qb2luKCcnKTtcblx0XHR9O1xuXG5cdH1cblx0ZWxzZSB0aHJvdyAndCA+IGYgbm90IGltcGxlbWVudGVkJztcblxufVxuIl19