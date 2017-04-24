"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.bcmp_t = bcmp_t;
exports.lcmp_t = lcmp_t;
function bcmp_t() {

	/**
  * Compares two big endian arrays, |a| >= |b|
  *
  * @param {array} a first operand
  * @param {int} ai a left
  * @param {int} aj a right
  * @param {array} b second operand
  * @param {int} bi b left
  * @param {int} bj b right
  *
  * @return {int} 1 if a > b; 0 if a = b; -1 otherwise.
  */

	return function (a, ai, aj, b, bi, bj) {

		var tmp = aj - bj + bi;

		for (; ai < tmp; ++ai) {
			if (a[ai] > 0) return 1;
		} // same size aj - ai === bj - bi
		for (; ai < aj; ++ai, ++bi) {
			if (a[ai] > b[bi]) return 1;
			if (a[ai] < b[bi]) return -1;
		}

		return 0;
	};
}

function lcmp_t() {

	/**
  * Compares two little endian arrays, |a| >= |b|
  *
  * @param {array} a first operand
  * @param {int} ai a left
  * @param {int} aj a right
  * @param {array} b second operand
  * @param {int} bi b left
  * @param {int} bj b right
  *
  * @return {int} 1 if a > b; 0 if a = b; -1 otherwise.
  */

	return function (a, ai, aj, b, bi, bj) {

		var tmp = ai + bj - bi;

		--aj;--bj;

		for (; aj >= tmp; --aj) {
			if (a[aj] > 0) return 1;
		} // same size aj - ai === bj - bi
		for (; aj >= ai; --aj, --bj) {
			if (a[aj] > b[bj]) return 1;
			if (a[aj] < b[bj]) return -1;
		}

		return 0;
	};
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWxlZ2FjeS9jb21wYXJlL2NtcC5qcyJdLCJuYW1lcyI6WyJiY21wX3QiLCJsY21wX3QiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIiwidG1wIl0sIm1hcHBpbmdzIjoiOzs7OztRQUNnQkEsTSxHQUFBQSxNO1FBbUNBQyxNLEdBQUFBLE07QUFuQ1QsU0FBU0QsTUFBVCxHQUFvQjs7QUFHMUI7Ozs7Ozs7Ozs7Ozs7QUFhQSxRQUFPLFVBQVNFLENBQVQsRUFBWUMsRUFBWixFQUFnQkMsRUFBaEIsRUFBb0JDLENBQXBCLEVBQXVCQyxFQUF2QixFQUEyQkMsRUFBM0IsRUFBOEI7O0FBRXBDLE1BQUlDLE1BQU1KLEtBQUtHLEVBQUwsR0FBVUQsRUFBcEI7O0FBRUEsU0FBT0gsS0FBS0ssR0FBWixFQUFpQixFQUFFTCxFQUFuQjtBQUNDLE9BQUlELEVBQUVDLEVBQUYsSUFBUSxDQUFaLEVBQWUsT0FBTyxDQUFQO0FBRGhCLEdBSm9DLENBUXBDO0FBQ0EsU0FBT0EsS0FBS0MsRUFBWixFQUFnQixFQUFFRCxFQUFGLEVBQU0sRUFBRUcsRUFBeEIsRUFBNEI7QUFDM0IsT0FBSUosRUFBRUMsRUFBRixJQUFRRSxFQUFFQyxFQUFGLENBQVosRUFBbUIsT0FBUSxDQUFSO0FBQ25CLE9BQUlKLEVBQUVDLEVBQUYsSUFBUUUsRUFBRUMsRUFBRixDQUFaLEVBQW1CLE9BQU8sQ0FBQyxDQUFSO0FBQ25COztBQUVELFNBQU8sQ0FBUDtBQUNBLEVBZkQ7QUFpQkE7O0FBRU0sU0FBU0wsTUFBVCxHQUFvQjs7QUFFMUI7Ozs7Ozs7Ozs7Ozs7QUFhQSxRQUFPLFVBQVNDLENBQVQsRUFBWUMsRUFBWixFQUFnQkMsRUFBaEIsRUFBb0JDLENBQXBCLEVBQXVCQyxFQUF2QixFQUEyQkMsRUFBM0IsRUFBOEI7O0FBRXBDLE1BQUlDLE1BQU1MLEtBQUtJLEVBQUwsR0FBVUQsRUFBcEI7O0FBRUEsSUFBRUYsRUFBRixDQUFNLEVBQUVHLEVBQUY7O0FBRU4sU0FBT0gsTUFBTUksR0FBYixFQUFrQixFQUFFSixFQUFwQjtBQUNDLE9BQUlGLEVBQUVFLEVBQUYsSUFBUSxDQUFaLEVBQWUsT0FBTyxDQUFQO0FBRGhCLEdBTm9DLENBVXBDO0FBQ0EsU0FBT0EsTUFBTUQsRUFBYixFQUFpQixFQUFFQyxFQUFGLEVBQU0sRUFBRUcsRUFBekIsRUFBNkI7QUFDNUIsT0FBSUwsRUFBRUUsRUFBRixJQUFRQyxFQUFFRSxFQUFGLENBQVosRUFBbUIsT0FBUSxDQUFSO0FBQ25CLE9BQUlMLEVBQUVFLEVBQUYsSUFBUUMsRUFBRUUsRUFBRixDQUFaLEVBQW1CLE9BQU8sQ0FBQyxDQUFSO0FBQ25COztBQUVELFNBQU8sQ0FBUDtBQUNBLEVBakJEO0FBa0JBIiwiZmlsZSI6ImNtcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uIGJjbXBfdCAoICkge1xuXG5cblx0LyoqXG5cdCAqIENvbXBhcmVzIHR3byBiaWcgZW5kaWFuIGFycmF5cywgfGF8ID49IHxifFxuXHQgKlxuXHQgKiBAcGFyYW0ge2FycmF5fSBhIGZpcnN0IG9wZXJhbmRcblx0ICogQHBhcmFtIHtpbnR9IGFpIGEgbGVmdFxuXHQgKiBAcGFyYW0ge2ludH0gYWogYSByaWdodFxuXHQgKiBAcGFyYW0ge2FycmF5fSBiIHNlY29uZCBvcGVyYW5kXG5cdCAqIEBwYXJhbSB7aW50fSBiaSBiIGxlZnRcblx0ICogQHBhcmFtIHtpbnR9IGJqIGIgcmlnaHRcblx0ICpcblx0ICogQHJldHVybiB7aW50fSAxIGlmIGEgPiBiOyAwIGlmIGEgPSBiOyAtMSBvdGhlcndpc2UuXG5cdCAqL1xuXG5cdHJldHVybiBmdW5jdGlvbihhLCBhaSwgYWosIGIsIGJpLCBiail7XG5cblx0XHR2YXIgdG1wID0gYWogLSBiaiArIGJpO1xuXG5cdFx0Zm9yICg7IGFpIDwgdG1wOyArK2FpKVxuXHRcdFx0aWYgKGFbYWldID4gMCkgcmV0dXJuIDE7XG5cblxuXHRcdC8vIHNhbWUgc2l6ZSBhaiAtIGFpID09PSBiaiAtIGJpXG5cdFx0Zm9yICg7IGFpIDwgYWo7ICsrYWksICsrYmkpIHtcblx0XHRcdGlmIChhW2FpXSA+IGJbYmldKSByZXR1cm4gIDE7XG5cdFx0XHRpZiAoYVthaV0gPCBiW2JpXSkgcmV0dXJuIC0xO1xuXHRcdH1cblxuXHRcdHJldHVybiAwO1xuXHR9O1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsY21wX3QgKCApIHtcblxuXHQvKipcblx0ICogQ29tcGFyZXMgdHdvIGxpdHRsZSBlbmRpYW4gYXJyYXlzLCB8YXwgPj0gfGJ8XG5cdCAqXG5cdCAqIEBwYXJhbSB7YXJyYXl9IGEgZmlyc3Qgb3BlcmFuZFxuXHQgKiBAcGFyYW0ge2ludH0gYWkgYSBsZWZ0XG5cdCAqIEBwYXJhbSB7aW50fSBhaiBhIHJpZ2h0XG5cdCAqIEBwYXJhbSB7YXJyYXl9IGIgc2Vjb25kIG9wZXJhbmRcblx0ICogQHBhcmFtIHtpbnR9IGJpIGIgbGVmdFxuXHQgKiBAcGFyYW0ge2ludH0gYmogYiByaWdodFxuXHQgKlxuXHQgKiBAcmV0dXJuIHtpbnR9IDEgaWYgYSA+IGI7IDAgaWYgYSA9IGI7IC0xIG90aGVyd2lzZS5cblx0ICovXG5cblx0cmV0dXJuIGZ1bmN0aW9uKGEsIGFpLCBhaiwgYiwgYmksIGJqKXtcblxuXHRcdHZhciB0bXAgPSBhaSArIGJqIC0gYmk7XG5cblx0XHQtLWFqOyAtLWJqO1xuXG5cdFx0Zm9yICg7IGFqID49IHRtcDsgLS1hailcblx0XHRcdGlmIChhW2FqXSA+IDApIHJldHVybiAxO1xuXG5cblx0XHQvLyBzYW1lIHNpemUgYWogLSBhaSA9PT0gYmogLSBiaVxuXHRcdGZvciAoOyBhaiA+PSBhaTsgLS1haiwgLS1iaikge1xuXHRcdFx0aWYgKGFbYWpdID4gYltial0pIHJldHVybiAgMTtcblx0XHRcdGlmIChhW2FqXSA8IGJbYmpdKSByZXR1cm4gLTE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDA7XG5cdH07XG59XG4iXX0=