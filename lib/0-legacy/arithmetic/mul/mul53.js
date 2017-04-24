"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.bmul53_t = bmul53_t;
exports.lmul53_t = lmul53_t;
/**
 * /!\ BLOCK MULTIPLICATION RESULT MUST HOLD IN THE JAVASCRIPT NUMBER TYPE (DOUBLE i.e. 53 bits)
 *
 * big endian 1 block multiplication
 *
 */

function bmul53_t(r) {

	/**
  * Multiply two blocks, result is put in a 1 or 2 blocks big endian array.
  * aj - ai <= 1, bj - bi <= 1, cj - ci <= 2
  *
  *
  * @param {array} a first operand
  * @param {int} ai a left
  * @param {int} aj a right
  * @param {array} b second operand
  * @param {int} bi b left
  * @param {int} bj b right
  * @param {array} c result, must be 0 initialized
  * @param {int} ci c left
  * @param {int} cj c right
  */

	var mul = function mul(a, ai, aj, b, bi, bj, c, ci, cj) {

		var v;

		// EMPTY CASE
		if (aj <= ai || bj <= bi || cj <= ci) return;

		v = a[ai] * b[bi];
		c[cj - 1] = v % r;

		if (cj > ci + 1) {
			c[cj - 2] = (v - c[cj - 1]) / r;
		}
	};

	return mul;
}

/**
 * /!\ BLOCK MULTIPLICATION RESULT MUST HOLD IN THE JAVASCRIPT NUMBER TYPE (DOUBLE i.e. 53 bits)
 *
 * little endian 1 block multiplication
 *
 */

function lmul53_t(r) {

	/**
  * Multiply two blocks, result is put in a 1 or 2 blocks little endian array.
  * aj - ai <= 1, bj - bi <= 1, cj - ci <= 2
  *
  *
  * @param {array} a first operand
  * @param {int} ai a left
  * @param {int} aj a right
  * @param {array} b second operand
  * @param {int} bi b left
  * @param {int} bj b right
  * @param {array} c result, must be 0 initialized
  * @param {int} ci c left
  * @param {int} cj c right
  */

	var mul = function mul(a, ai, aj, b, bi, bj, c, ci, cj) {

		var v;

		// EMPTY CASE
		if (aj <= ai || bj <= bi || cj <= ci) return;

		v = a[ai] * b[bi];
		c[ci] = v % r;

		if (cj > ci + 1) {
			c[ci + 1] = (v - c[ci]) / r;
		}
	};

	return mul;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8wLWxlZ2FjeS9hcml0aG1ldGljL211bC9tdWw1My5qcyJdLCJuYW1lcyI6WyJibXVsNTNfdCIsImxtdWw1M190IiwiciIsIm11bCIsImEiLCJhaSIsImFqIiwiYiIsImJpIiwiYmoiLCJjIiwiY2kiLCJjaiIsInYiXSwibWFwcGluZ3MiOiI7Ozs7O1FBT2dCQSxRLEdBQUFBLFE7UUE2Q0FDLFEsR0FBQUEsUTtBQXBEaEI7Ozs7Ozs7QUFPTyxTQUFTRCxRQUFULENBQW1CRSxDQUFuQixFQUFxQjs7QUFFM0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsS0FBSUMsTUFBTSxTQUFOQSxHQUFNLENBQVNDLENBQVQsRUFBWUMsRUFBWixFQUFnQkMsRUFBaEIsRUFBb0JDLENBQXBCLEVBQXVCQyxFQUF2QixFQUEyQkMsRUFBM0IsRUFBK0JDLENBQS9CLEVBQWtDQyxFQUFsQyxFQUFzQ0MsRUFBdEMsRUFBeUM7O0FBRWxELE1BQUlDLENBQUo7O0FBRUE7QUFDQSxNQUFJUCxNQUFNRCxFQUFOLElBQVlJLE1BQU1ELEVBQWxCLElBQXdCSSxNQUFNRCxFQUFsQyxFQUFzQzs7QUFFdENFLE1BQUlULEVBQUVDLEVBQUYsSUFBUUUsRUFBRUMsRUFBRixDQUFaO0FBQ0FFLElBQUVFLEtBQUcsQ0FBTCxJQUFVQyxJQUFJWCxDQUFkOztBQUVBLE1BQUlVLEtBQUtELEtBQUssQ0FBZCxFQUFpQjtBQUNoQkQsS0FBRUUsS0FBRyxDQUFMLElBQVUsQ0FBQ0MsSUFBSUgsRUFBRUUsS0FBRyxDQUFMLENBQUwsSUFBZ0JWLENBQTFCO0FBQ0E7QUFFRCxFQWREOztBQWdCQSxRQUFPQyxHQUFQO0FBRUE7O0FBRUQ7Ozs7Ozs7QUFPTyxTQUFTRixRQUFULENBQW1CQyxDQUFuQixFQUFxQjs7QUFFM0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsS0FBSUMsTUFBTSxTQUFOQSxHQUFNLENBQVNDLENBQVQsRUFBWUMsRUFBWixFQUFnQkMsRUFBaEIsRUFBb0JDLENBQXBCLEVBQXVCQyxFQUF2QixFQUEyQkMsRUFBM0IsRUFBK0JDLENBQS9CLEVBQWtDQyxFQUFsQyxFQUFzQ0MsRUFBdEMsRUFBeUM7O0FBRWxELE1BQUlDLENBQUo7O0FBRUE7QUFDQSxNQUFJUCxNQUFNRCxFQUFOLElBQVlJLE1BQU1ELEVBQWxCLElBQXdCSSxNQUFNRCxFQUFsQyxFQUFzQzs7QUFFdENFLE1BQUlULEVBQUVDLEVBQUYsSUFBUUUsRUFBRUMsRUFBRixDQUFaO0FBQ0FFLElBQUVDLEVBQUYsSUFBUUUsSUFBSVgsQ0FBWjs7QUFFQSxNQUFJVSxLQUFLRCxLQUFLLENBQWQsRUFBaUI7QUFDaEJELEtBQUVDLEtBQUcsQ0FBTCxJQUFVLENBQUNFLElBQUlILEVBQUVDLEVBQUYsQ0FBTCxJQUFjVCxDQUF4QjtBQUNBO0FBRUQsRUFkRDs7QUFnQkEsUUFBT0MsR0FBUDtBQUVBIiwiZmlsZSI6Im11bDUzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiAvIVxcIEJMT0NLIE1VTFRJUExJQ0FUSU9OIFJFU1VMVCBNVVNUIEhPTEQgSU4gVEhFIEpBVkFTQ1JJUFQgTlVNQkVSIFRZUEUgKERPVUJMRSBpLmUuIDUzIGJpdHMpXG4gKlxuICogYmlnIGVuZGlhbiAxIGJsb2NrIG11bHRpcGxpY2F0aW9uXG4gKlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBibXVsNTNfdCAocil7XG5cblx0LyoqXG5cdCAqIE11bHRpcGx5IHR3byBibG9ja3MsIHJlc3VsdCBpcyBwdXQgaW4gYSAxIG9yIDIgYmxvY2tzIGJpZyBlbmRpYW4gYXJyYXkuXG5cdCAqIGFqIC0gYWkgPD0gMSwgYmogLSBiaSA8PSAxLCBjaiAtIGNpIDw9IDJcblx0ICpcblx0ICpcblx0ICogQHBhcmFtIHthcnJheX0gYSBmaXJzdCBvcGVyYW5kXG5cdCAqIEBwYXJhbSB7aW50fSBhaSBhIGxlZnRcblx0ICogQHBhcmFtIHtpbnR9IGFqIGEgcmlnaHRcblx0ICogQHBhcmFtIHthcnJheX0gYiBzZWNvbmQgb3BlcmFuZFxuXHQgKiBAcGFyYW0ge2ludH0gYmkgYiBsZWZ0XG5cdCAqIEBwYXJhbSB7aW50fSBiaiBiIHJpZ2h0XG5cdCAqIEBwYXJhbSB7YXJyYXl9IGMgcmVzdWx0LCBtdXN0IGJlIDAgaW5pdGlhbGl6ZWRcblx0ICogQHBhcmFtIHtpbnR9IGNpIGMgbGVmdFxuXHQgKiBAcGFyYW0ge2ludH0gY2ogYyByaWdodFxuXHQgKi9cblxuXHR2YXIgbXVsID0gZnVuY3Rpb24oYSwgYWksIGFqLCBiLCBiaSwgYmosIGMsIGNpLCBjail7XG5cblx0XHR2YXIgdjtcblxuXHRcdC8vIEVNUFRZIENBU0Vcblx0XHRpZiAoYWogPD0gYWkgfHwgYmogPD0gYmkgfHwgY2ogPD0gY2kpIHJldHVybjtcblxuXHRcdHYgPSBhW2FpXSAqIGJbYmldO1xuXHRcdGNbY2otMV0gPSB2ICUgcjtcblxuXHRcdGlmIChjaiA+IGNpICsgMSkge1xuXHRcdFx0Y1tjai0yXSA9ICh2IC0gY1tjai0xXSkgLyByO1xuXHRcdH1cblxuXHR9O1xuXG5cdHJldHVybiBtdWw7XG5cbn1cblxuLyoqXG4gKiAvIVxcIEJMT0NLIE1VTFRJUExJQ0FUSU9OIFJFU1VMVCBNVVNUIEhPTEQgSU4gVEhFIEpBVkFTQ1JJUFQgTlVNQkVSIFRZUEUgKERPVUJMRSBpLmUuIDUzIGJpdHMpXG4gKlxuICogbGl0dGxlIGVuZGlhbiAxIGJsb2NrIG11bHRpcGxpY2F0aW9uXG4gKlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBsbXVsNTNfdCAocil7XG5cblx0LyoqXG5cdCAqIE11bHRpcGx5IHR3byBibG9ja3MsIHJlc3VsdCBpcyBwdXQgaW4gYSAxIG9yIDIgYmxvY2tzIGxpdHRsZSBlbmRpYW4gYXJyYXkuXG5cdCAqIGFqIC0gYWkgPD0gMSwgYmogLSBiaSA8PSAxLCBjaiAtIGNpIDw9IDJcblx0ICpcblx0ICpcblx0ICogQHBhcmFtIHthcnJheX0gYSBmaXJzdCBvcGVyYW5kXG5cdCAqIEBwYXJhbSB7aW50fSBhaSBhIGxlZnRcblx0ICogQHBhcmFtIHtpbnR9IGFqIGEgcmlnaHRcblx0ICogQHBhcmFtIHthcnJheX0gYiBzZWNvbmQgb3BlcmFuZFxuXHQgKiBAcGFyYW0ge2ludH0gYmkgYiBsZWZ0XG5cdCAqIEBwYXJhbSB7aW50fSBiaiBiIHJpZ2h0XG5cdCAqIEBwYXJhbSB7YXJyYXl9IGMgcmVzdWx0LCBtdXN0IGJlIDAgaW5pdGlhbGl6ZWRcblx0ICogQHBhcmFtIHtpbnR9IGNpIGMgbGVmdFxuXHQgKiBAcGFyYW0ge2ludH0gY2ogYyByaWdodFxuXHQgKi9cblxuXHR2YXIgbXVsID0gZnVuY3Rpb24oYSwgYWksIGFqLCBiLCBiaSwgYmosIGMsIGNpLCBjail7XG5cblx0XHR2YXIgdjtcblxuXHRcdC8vIEVNUFRZIENBU0Vcblx0XHRpZiAoYWogPD0gYWkgfHwgYmogPD0gYmkgfHwgY2ogPD0gY2kpIHJldHVybjtcblxuXHRcdHYgPSBhW2FpXSAqIGJbYmldO1xuXHRcdGNbY2ldID0gdiAlIHI7XG5cblx0XHRpZiAoY2ogPiBjaSArIDEpIHtcblx0XHRcdGNbY2krMV0gPSAodiAtIGNbY2ldKSAvIHI7XG5cdFx0fVxuXG5cdH07XG5cblx0cmV0dXJuIG11bDtcblxufVxuIl19