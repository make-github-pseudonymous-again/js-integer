"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.bdiv_t = bdiv_t;
function bdiv_t(lt, sub) {

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

	var div = function div(r, ri, rj, b, bi, bj, q, qi) {
		var k,
		    t = ri + 1;

		do {

			// trim leading zeros
			//     - maybe could try to put this procedure inside the sub loop
			//     - or assume that the number is trimed at the begining
			//       and put this statement at the end of the main loop
			while (ri < rj && r[ri] === 0) {
				++ri;
			} // search for a remainder block interval
			// greater than the divisor
			//     - maybe could try binary search on the lt function
			//     for another implementation
			k = ri + 1;
			while (k <= rj && lt(r, ri, k, b, bi, bj)) {
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
				sub(r, ri, k, b, bi, bj, r, ri, k);
			} while (!lt(r, ri, k, b, bi, bj));
		} while (true);
	};

	return div;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8wLWxlZ2FjeS9hcml0aG1ldGljL2Rpdi9kaXYuanMiXSwibmFtZXMiOlsiYmRpdl90IiwibHQiLCJzdWIiLCJkaXYiLCJyIiwicmkiLCJyaiIsImIiLCJiaSIsImJqIiwicSIsInFpIiwiayIsInQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBR2dCQSxNLEdBQUFBLE07QUFBVCxTQUFTQSxNQUFULENBQWlCQyxFQUFqQixFQUFxQkMsR0FBckIsRUFBeUI7O0FBRS9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTs7QUFFQSxLQUFJQyxNQUFNLFNBQU5BLEdBQU0sQ0FBU0MsQ0FBVCxFQUFZQyxFQUFaLEVBQWdCQyxFQUFoQixFQUFvQkMsQ0FBcEIsRUFBdUJDLEVBQXZCLEVBQTJCQyxFQUEzQixFQUErQkMsQ0FBL0IsRUFBa0NDLEVBQWxDLEVBQXFDO0FBQzlDLE1BQUlDLENBQUo7QUFBQSxNQUFPQyxJQUFJUixLQUFLLENBQWhCOztBQUVBLEtBQUc7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFPQSxLQUFLQyxFQUFMLElBQVdGLEVBQUVDLEVBQUYsTUFBVSxDQUE1QjtBQUErQixNQUFFQSxFQUFGO0FBQS9CLElBTkUsQ0FRRjtBQUNBO0FBQ0E7QUFDQTtBQUNBTyxPQUFJUCxLQUFLLENBQVQ7QUFDQSxVQUFPTyxLQUFLTixFQUFMLElBQVdMLEdBQUdHLENBQUgsRUFBTUMsRUFBTixFQUFVTyxDQUFWLEVBQWFMLENBQWIsRUFBZ0JDLEVBQWhCLEVBQW9CQyxFQUFwQixDQUFsQjtBQUEyQyxNQUFFRyxDQUFGO0FBQTNDLElBYkUsQ0FlRjtBQUNBLE9BQUlBLElBQUlOLEVBQVIsRUFBWTs7QUFFWjtBQUNBLE1BQUU7O0FBRUQ7QUFDQTtBQUNBLE1BQUVJLEVBQUVDLEtBQUtDLENBQUwsR0FBU0MsQ0FBWCxDQUFGOztBQUVBO0FBQ0E7QUFDQVgsUUFBSUUsQ0FBSixFQUFPQyxFQUFQLEVBQVdPLENBQVgsRUFBY0wsQ0FBZCxFQUFpQkMsRUFBakIsRUFBcUJDLEVBQXJCLEVBQXlCTCxDQUF6QixFQUE0QkMsRUFBNUIsRUFBZ0NPLENBQWhDO0FBRUEsSUFWRCxRQVVRLENBQUNYLEdBQUdHLENBQUgsRUFBTUMsRUFBTixFQUFVTyxDQUFWLEVBQWFMLENBQWIsRUFBZ0JDLEVBQWhCLEVBQW9CQyxFQUFwQixDQVZUO0FBYUEsR0FoQ0QsUUFnQ1EsSUFoQ1I7QUFrQ0EsRUFyQ0Q7O0FBdUNBLFFBQU9OLEdBQVA7QUFFQSIsImZpbGUiOiJkaXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5leHBvcnQgZnVuY3Rpb24gYmRpdl90IChsdCwgc3ViKXtcblxuXHQvKipcblx0ICogQ29tcHV0ZXMgcXVvdGllbnQgYW5kIHJlbWFpbmRlciBvZiB0d28gYmlnIGVuZGlhbiBhcnJheXMuXG5cdCAqIDxwPlxuXHQgKiBDb21wdXRlcyBxdW90aWVudCBhbmQgcmVtYWluZGVyIG9mIHR3byBiaWcgZW5kaWFuIGFycmF5c1xuXHQgKiB1c2luZyBsb25nIGRpdmlzaW9uIGFsZ29yaXRobSAodGhlIG9uZSB0ZWFjaGVkIGluXG5cdCAqIGV1cm9wZWFuIHByaW1hcnkgc2Nob29scykuXG5cdCAqXG5cdCAqIC8hXFwgVGhpcyBhbGdvcml0aG0gbW9kaWZpZXMgaXRzIGZpcnN0IG9wZXJhbmQuXG5cdCAqXG5cdCAqIEhZUCA6IHEgaXMgYXQgbGVhc3QgYXMgbGFyZ2UgYXMgclxuXHQgKiAgICAgICBiIGlzIG5vdCB6ZXJvXG5cdCAqXG5cdCAqIEBwYXJhbSB7YXJyYXl9IHIgZGl2aWRlbmQgYW5kIHJlbWFpbmRlclxuXHQgKiBAcGFyYW0ge2ludH0gcmkgciBsZWZ0XG5cdCAqIEBwYXJhbSB7aW50fSByaiByIHJpZ2h0XG5cdCAqIEBwYXJhbSB7YXJyYXl9IGIgZGl2aXNvclxuXHQgKiBAcGFyYW0ge2ludH0gYmkgYiBsZWZ0XG5cdCAqIEBwYXJhbSB7aW50fSBiaiBiIHJpZ2h0XG5cdCAqIEBwYXJhbSB7YXJyYXl9IHEgcXVvdGllbnQsIG11c3QgYmUgMCBpbml0aWFsaXplZFxuXHQgKiBAcGFyYW0ge2ludH0gcWkgcSBsZWZ0XG5cdCAqL1xuXG5cdC8vIC8hXFwgVGhlcmUgYXJlIGltcGxpY2l0IGh5cG90aGVzZXNcblx0Ly8gICAgIG1hZGUgb24gdGhlIHNpemUgb2YgdGhlIG9wZXJhbmRzLlxuXHQvLyAgICAgU2hvdWxkIGNsYXJpZnkuXG5cblx0dmFyIGRpdiA9IGZ1bmN0aW9uKHIsIHJpLCByaiwgYiwgYmksIGJqLCBxLCBxaSl7XG5cdFx0dmFyIGssIHQgPSByaSArIDE7XG5cblx0XHRkbyB7XG5cblx0XHRcdC8vIHRyaW0gbGVhZGluZyB6ZXJvc1xuXHRcdFx0Ly8gICAgIC0gbWF5YmUgY291bGQgdHJ5IHRvIHB1dCB0aGlzIHByb2NlZHVyZSBpbnNpZGUgdGhlIHN1YiBsb29wXG5cdFx0XHQvLyAgICAgLSBvciBhc3N1bWUgdGhhdCB0aGUgbnVtYmVyIGlzIHRyaW1lZCBhdCB0aGUgYmVnaW5pbmdcblx0XHRcdC8vICAgICAgIGFuZCBwdXQgdGhpcyBzdGF0ZW1lbnQgYXQgdGhlIGVuZCBvZiB0aGUgbWFpbiBsb29wXG5cdFx0XHR3aGlsZSAocmkgPCByaiAmJiByW3JpXSA9PT0gMCkgKytyaTtcblxuXHRcdFx0Ly8gc2VhcmNoIGZvciBhIHJlbWFpbmRlciBibG9jayBpbnRlcnZhbFxuXHRcdFx0Ly8gZ3JlYXRlciB0aGFuIHRoZSBkaXZpc29yXG5cdFx0XHQvLyAgICAgLSBtYXliZSBjb3VsZCB0cnkgYmluYXJ5IHNlYXJjaCBvbiB0aGUgbHQgZnVuY3Rpb25cblx0XHRcdC8vICAgICBmb3IgYW5vdGhlciBpbXBsZW1lbnRhdGlvblxuXHRcdFx0ayA9IHJpICsgMTtcblx0XHRcdHdoaWxlIChrIDw9IHJqICYmIGx0KHIsIHJpLCBrLCBiLCBiaSwgYmopKSArK2s7XG5cblx0XHRcdC8vIHJlbWFpbmRlciBzbWFsbGVyIHRoYW4gZGl2aXNvciAtLT4gZW5kXG5cdFx0XHRpZiAoayA+IHJqKSBicmVhaztcblxuXHRcdFx0Ly8gZGl2aWRlIGN1cnJlbnQgYmxvY2sgaW50ZXJ2YWwgYnkgcXVvdGllbnRcblx0XHRcdGRve1xuXG5cdFx0XHRcdC8vIGluY3JlbWVudCBxdW90aWVudCBibG9jayBjb3JyZXNwb25kaW5nXG5cdFx0XHRcdC8vIHRvIGN1cnJlbnQgbHMgYmxvY2sgb2YgcmVtYWluZGVyIGludGVydmFsXG5cdFx0XHRcdCsrcVtxaSArIGsgLSB0XTtcblxuXHRcdFx0XHQvLyBzdWJ0cmFjdCBkaXZpc29yIGZyb20gY3VycmVudCByZW1haW5kZXJcblx0XHRcdFx0Ly8gYmxvY2sgaW50ZXJ2YWxcblx0XHRcdFx0c3ViKHIsIHJpLCBrLCBiLCBiaSwgYmosIHIsIHJpLCBrKTtcblxuXHRcdFx0fSB3aGlsZSghbHQociwgcmksIGssIGIsIGJpLCBiaikpO1xuXG5cblx0XHR9IHdoaWxlKHRydWUpO1xuXG5cdH07XG5cblx0cmV0dXJuIGRpdjtcblxufVxuIl19