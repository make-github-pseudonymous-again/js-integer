'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._div = _div;

var _sub2 = require('../sub');

var _compare = require('../../compare');

/**
 * Computes quotient and remainder of two big endian arrays.
 * <p>
 * Computes quotient and remainder of two big endian arrays
 * using long division algorithm (the one teached in
 * european primary schools).
 *
 * /!\ This algorithm modifies its first operand.
 *
 * HYP : q is at least as large as r
 *       b is not zero
 *
 * @param {int} x the radix
 * @param {array} r dividend and remainder
 * @param {int} ri r left
 * @param {int} rj r right
 * @param {array} b divisor
 * @param {int} bi b left
 * @param {int} bj b right
 * @param {array} q quotient, must be 0 initialized
 * @param {int} qi q left
 */

// /!\ There are implicit hypotheses
//     made on the size of the operands.
//     Should clarify.

function _div(x, r, ri, rj, b, bi, bj, q, qi) {

	var k,
	    t = ri + 1;

	do {

		// trim leading zeros
		//     - maybe could try to put this procedure inside the _sub loop
		//     - or assume that the number is trimed at the begining
		//       and put this statement at the end of the main loop
		while (ri < rj && r[ri] === 0) {
			++ri;
		} // search for a remainder block interval
		// greater than the divisor
		//     - maybe could try binary search on the _lt function
		//     for another implementation
		k = ri + 1;
		while (k <= rj && (0, _compare._lt)(r, ri, k, b, bi, bj)) {
			++k;
		} // remainder smaller than divisor --> end
		if (k > rj) break;

		// divide current block interval by quotient
		do {

			// increment quotient block corresponding
			// to current ls block of remainder interval
			++q[qi + k - t];

			// subtract divisor from current remainder
			// block interval
			(0, _sub2._sub)(x, r, ri, k, b, bi, bj, r, ri, k);
		} while (!(0, _compare._lt)(r, ri, k, b, bi, bj));
	} while (true);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8xLW5ldy9hcml0aG1ldGljL2Rpdi9fZGl2LmpzIl0sIm5hbWVzIjpbIl9kaXYiLCJ4IiwiciIsInJpIiwicmoiLCJiIiwiYmkiLCJiaiIsInEiLCJxaSIsImsiLCJ0Il0sIm1hcHBpbmdzIjoiOzs7OztRQThCZ0JBLEksR0FBQUEsSTs7QUE5QmhCOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBO0FBQ0E7O0FBRU8sU0FBU0EsSUFBVCxDQUFnQkMsQ0FBaEIsRUFBb0JDLENBQXBCLEVBQXdCQyxFQUF4QixFQUE2QkMsRUFBN0IsRUFBa0NDLENBQWxDLEVBQXNDQyxFQUF0QyxFQUEyQ0MsRUFBM0MsRUFBZ0RDLENBQWhELEVBQW9EQyxFQUFwRCxFQUF5RDs7QUFFL0QsS0FBSUMsQ0FBSjtBQUFBLEtBQU9DLElBQUlSLEtBQUssQ0FBaEI7O0FBRUEsSUFBRzs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQU9BLEtBQUtDLEVBQUwsSUFBV0YsRUFBRUMsRUFBRixNQUFVLENBQTVCO0FBQStCLEtBQUVBLEVBQUY7QUFBL0IsR0FORSxDQVFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0FPLE1BQUlQLEtBQUssQ0FBVDtBQUNBLFNBQU9PLEtBQUtOLEVBQUwsSUFBVyxrQkFBSUYsQ0FBSixFQUFPQyxFQUFQLEVBQVdPLENBQVgsRUFBY0wsQ0FBZCxFQUFpQkMsRUFBakIsRUFBcUJDLEVBQXJCLENBQWxCO0FBQTRDLEtBQUVHLENBQUY7QUFBNUMsR0FiRSxDQWVGO0FBQ0EsTUFBSUEsSUFBSU4sRUFBUixFQUFZOztBQUVaO0FBQ0EsS0FBRTs7QUFFRDtBQUNBO0FBQ0EsS0FBRUksRUFBRUMsS0FBS0MsQ0FBTCxHQUFTQyxDQUFYLENBQUY7O0FBRUE7QUFDQTtBQUNBLG1CQUFLVixDQUFMLEVBQVFDLENBQVIsRUFBV0MsRUFBWCxFQUFlTyxDQUFmLEVBQWtCTCxDQUFsQixFQUFxQkMsRUFBckIsRUFBeUJDLEVBQXpCLEVBQTZCTCxDQUE3QixFQUFnQ0MsRUFBaEMsRUFBb0NPLENBQXBDO0FBRUEsR0FWRCxRQVVRLENBQUMsa0JBQUlSLENBQUosRUFBT0MsRUFBUCxFQUFXTyxDQUFYLEVBQWNMLENBQWQsRUFBaUJDLEVBQWpCLEVBQXFCQyxFQUFyQixDQVZUO0FBYUEsRUFoQ0QsUUFnQ1EsSUFoQ1I7QUFrQ0EiLCJmaWxlIjoiX2Rpdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9zdWIgfSBmcm9tICcuLi9zdWInIDtcbmltcG9ydCB7IF9sdCB9IGZyb20gJy4uLy4uL2NvbXBhcmUnIDtcblxuLyoqXG4gKiBDb21wdXRlcyBxdW90aWVudCBhbmQgcmVtYWluZGVyIG9mIHR3byBiaWcgZW5kaWFuIGFycmF5cy5cbiAqIDxwPlxuICogQ29tcHV0ZXMgcXVvdGllbnQgYW5kIHJlbWFpbmRlciBvZiB0d28gYmlnIGVuZGlhbiBhcnJheXNcbiAqIHVzaW5nIGxvbmcgZGl2aXNpb24gYWxnb3JpdGhtICh0aGUgb25lIHRlYWNoZWQgaW5cbiAqIGV1cm9wZWFuIHByaW1hcnkgc2Nob29scykuXG4gKlxuICogLyFcXCBUaGlzIGFsZ29yaXRobSBtb2RpZmllcyBpdHMgZmlyc3Qgb3BlcmFuZC5cbiAqXG4gKiBIWVAgOiBxIGlzIGF0IGxlYXN0IGFzIGxhcmdlIGFzIHJcbiAqICAgICAgIGIgaXMgbm90IHplcm9cbiAqXG4gKiBAcGFyYW0ge2ludH0geCB0aGUgcmFkaXhcbiAqIEBwYXJhbSB7YXJyYXl9IHIgZGl2aWRlbmQgYW5kIHJlbWFpbmRlclxuICogQHBhcmFtIHtpbnR9IHJpIHIgbGVmdFxuICogQHBhcmFtIHtpbnR9IHJqIHIgcmlnaHRcbiAqIEBwYXJhbSB7YXJyYXl9IGIgZGl2aXNvclxuICogQHBhcmFtIHtpbnR9IGJpIGIgbGVmdFxuICogQHBhcmFtIHtpbnR9IGJqIGIgcmlnaHRcbiAqIEBwYXJhbSB7YXJyYXl9IHEgcXVvdGllbnQsIG11c3QgYmUgMCBpbml0aWFsaXplZFxuICogQHBhcmFtIHtpbnR9IHFpIHEgbGVmdFxuICovXG5cbi8vIC8hXFwgVGhlcmUgYXJlIGltcGxpY2l0IGh5cG90aGVzZXNcbi8vICAgICBtYWRlIG9uIHRoZSBzaXplIG9mIHRoZSBvcGVyYW5kcy5cbi8vICAgICBTaG91bGQgY2xhcmlmeS5cblxuZXhwb3J0IGZ1bmN0aW9uIF9kaXYgKCB4ICwgciAsIHJpICwgcmogLCBiICwgYmkgLCBiaiAsIHEgLCBxaSApIHtcblxuXHR2YXIgaywgdCA9IHJpICsgMTtcblxuXHRkbyB7XG5cblx0XHQvLyB0cmltIGxlYWRpbmcgemVyb3Ncblx0XHQvLyAgICAgLSBtYXliZSBjb3VsZCB0cnkgdG8gcHV0IHRoaXMgcHJvY2VkdXJlIGluc2lkZSB0aGUgX3N1YiBsb29wXG5cdFx0Ly8gICAgIC0gb3IgYXNzdW1lIHRoYXQgdGhlIG51bWJlciBpcyB0cmltZWQgYXQgdGhlIGJlZ2luaW5nXG5cdFx0Ly8gICAgICAgYW5kIHB1dCB0aGlzIHN0YXRlbWVudCBhdCB0aGUgZW5kIG9mIHRoZSBtYWluIGxvb3Bcblx0XHR3aGlsZSAocmkgPCByaiAmJiByW3JpXSA9PT0gMCkgKytyaTtcblxuXHRcdC8vIHNlYXJjaCBmb3IgYSByZW1haW5kZXIgYmxvY2sgaW50ZXJ2YWxcblx0XHQvLyBncmVhdGVyIHRoYW4gdGhlIGRpdmlzb3Jcblx0XHQvLyAgICAgLSBtYXliZSBjb3VsZCB0cnkgYmluYXJ5IHNlYXJjaCBvbiB0aGUgX2x0IGZ1bmN0aW9uXG5cdFx0Ly8gICAgIGZvciBhbm90aGVyIGltcGxlbWVudGF0aW9uXG5cdFx0ayA9IHJpICsgMTtcblx0XHR3aGlsZSAoayA8PSByaiAmJiBfbHQociwgcmksIGssIGIsIGJpLCBiaikpICsraztcblxuXHRcdC8vIHJlbWFpbmRlciBzbWFsbGVyIHRoYW4gZGl2aXNvciAtLT4gZW5kXG5cdFx0aWYgKGsgPiByaikgYnJlYWs7XG5cblx0XHQvLyBkaXZpZGUgY3VycmVudCBibG9jayBpbnRlcnZhbCBieSBxdW90aWVudFxuXHRcdGRve1xuXG5cdFx0XHQvLyBpbmNyZW1lbnQgcXVvdGllbnQgYmxvY2sgY29ycmVzcG9uZGluZ1xuXHRcdFx0Ly8gdG8gY3VycmVudCBscyBibG9jayBvZiByZW1haW5kZXIgaW50ZXJ2YWxcblx0XHRcdCsrcVtxaSArIGsgLSB0XTtcblxuXHRcdFx0Ly8gc3VidHJhY3QgZGl2aXNvciBmcm9tIGN1cnJlbnQgcmVtYWluZGVyXG5cdFx0XHQvLyBibG9jayBpbnRlcnZhbFxuXHRcdFx0X3N1Yih4LCByLCByaSwgaywgYiwgYmksIGJqLCByLCByaSwgayk7XG5cblx0XHR9IHdoaWxlKCFfbHQociwgcmksIGssIGIsIGJpLCBiaikpO1xuXG5cblx0fSB3aGlsZSh0cnVlKTtcblxufVxuIl19