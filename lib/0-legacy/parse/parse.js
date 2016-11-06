'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.parse_t = parse_t;

/**
 * Function template for number parsing.
 * Endianess provided by the iterator function
 * iterator function must be reverse ordered
 *
 * @param {int} f from radix
 * @param {int} t to radix
 * @param {function} iter iterator function
 */

function parse_t(t, f, iter) {

	if (t >= f) {

		if (f > 36) throw 'f > 36 not implemented';

		var z = 0,
		    log = t;
		while (log >= f) {
			if (log % f) break;
			log /= f;
			++z;
		}

		if (log !== 1) throw 'log(f) does not divide log(t) not implemented';

		// immediate log(t) divides log(f)
		return function (s, si, sj, a, ai, aj) {
			var len = sj - si,
			    k = sj - z,
			    n = Math.ceil(len / z);
			var block = function block(i) {
				a[i] = parseInt(s.slice(Math.max(0, k), k + z), f);
				k -= z;
			};

			iter(aj - n, aj, block);
		};
	} else throw 'f > t not implemented';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWxlZ2FjeS9wYXJzZS9wYXJzZS5qcyJdLCJuYW1lcyI6WyJwYXJzZV90IiwidCIsImYiLCJpdGVyIiwieiIsImxvZyIsInMiLCJzaSIsInNqIiwiYSIsImFpIiwiYWoiLCJsZW4iLCJrIiwibiIsIk1hdGgiLCJjZWlsIiwiYmxvY2siLCJpIiwicGFyc2VJbnQiLCJzbGljZSIsIm1heCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFZZ0JBLE8sR0FBQUEsTzs7QUFYaEI7Ozs7Ozs7Ozs7QUFXTyxTQUFTQSxPQUFULENBQW1CQyxDQUFuQixFQUF1QkMsQ0FBdkIsRUFBMkJDLElBQTNCLEVBQWtDOztBQUV4QyxLQUFHRixLQUFLQyxDQUFSLEVBQVU7O0FBRVQsTUFBR0EsSUFBSSxFQUFQLEVBQVcsTUFBTSx3QkFBTjs7QUFFWCxNQUFJRSxJQUFJLENBQVI7QUFBQSxNQUFXQyxNQUFNSixDQUFqQjtBQUNBLFNBQU1JLE9BQU9ILENBQWIsRUFBZTtBQUNkLE9BQUlHLE1BQU1ILENBQVYsRUFBYTtBQUNiRyxVQUFPSCxDQUFQO0FBQ0EsS0FBRUUsQ0FBRjtBQUNBOztBQUVELE1BQUlDLFFBQVEsQ0FBWixFQUFlLE1BQU0sK0NBQU47O0FBRWY7QUFDQSxTQUFPLFVBQVNDLENBQVQsRUFBWUMsRUFBWixFQUFnQkMsRUFBaEIsRUFBb0JDLENBQXBCLEVBQXVCQyxFQUF2QixFQUEyQkMsRUFBM0IsRUFBOEI7QUFDcEMsT0FBSUMsTUFBTUosS0FBS0QsRUFBZjtBQUFBLE9BQW1CTSxJQUFJTCxLQUFLSixDQUE1QjtBQUFBLE9BQStCVSxJQUFJQyxLQUFLQyxJQUFMLENBQVVKLE1BQU1SLENBQWhCLENBQW5DO0FBQ0EsT0FBSWEsUUFBUSxTQUFSQSxLQUFRLENBQVNDLENBQVQsRUFBVztBQUN0QlQsTUFBRVMsQ0FBRixJQUFPQyxTQUFTYixFQUFFYyxLQUFGLENBQVFMLEtBQUtNLEdBQUwsQ0FBUyxDQUFULEVBQVlSLENBQVosQ0FBUixFQUF3QkEsSUFBSVQsQ0FBNUIsQ0FBVCxFQUF5Q0YsQ0FBekMsQ0FBUDtBQUNBVyxTQUFLVCxDQUFMO0FBQ0EsSUFIRDs7QUFLQUQsUUFBS1EsS0FBS0csQ0FBVixFQUFhSCxFQUFiLEVBQWlCTSxLQUFqQjtBQUVBLEdBVEQ7QUFXQSxFQXpCRCxNQTBCSyxNQUFNLHVCQUFOO0FBR0wiLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogRnVuY3Rpb24gdGVtcGxhdGUgZm9yIG51bWJlciBwYXJzaW5nLlxuICogRW5kaWFuZXNzIHByb3ZpZGVkIGJ5IHRoZSBpdGVyYXRvciBmdW5jdGlvblxuICogaXRlcmF0b3IgZnVuY3Rpb24gbXVzdCBiZSByZXZlcnNlIG9yZGVyZWRcbiAqXG4gKiBAcGFyYW0ge2ludH0gZiBmcm9tIHJhZGl4XG4gKiBAcGFyYW0ge2ludH0gdCB0byByYWRpeFxuICogQHBhcmFtIHtmdW5jdGlvbn0gaXRlciBpdGVyYXRvciBmdW5jdGlvblxuICovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlX3QgKCB0ICwgZiAsIGl0ZXIgKSB7XG5cblx0aWYodCA+PSBmKXtcblxuXHRcdGlmKGYgPiAzNikgdGhyb3cgJ2YgPiAzNiBub3QgaW1wbGVtZW50ZWQnO1xuXG5cdFx0dmFyIHogPSAwLCBsb2cgPSB0O1xuXHRcdHdoaWxlKGxvZyA+PSBmKXtcblx0XHRcdGlmIChsb2cgJSBmKSBicmVhaztcblx0XHRcdGxvZyAvPSBmO1xuXHRcdFx0Kyt6O1xuXHRcdH1cblxuXHRcdGlmIChsb2cgIT09IDEpIHRocm93ICdsb2coZikgZG9lcyBub3QgZGl2aWRlIGxvZyh0KSBub3QgaW1wbGVtZW50ZWQnO1xuXG5cdFx0Ly8gaW1tZWRpYXRlIGxvZyh0KSBkaXZpZGVzIGxvZyhmKVxuXHRcdHJldHVybiBmdW5jdGlvbihzLCBzaSwgc2osIGEsIGFpLCBhail7XG5cdFx0XHR2YXIgbGVuID0gc2ogLSBzaSwgayA9IHNqIC0geiwgbiA9IE1hdGguY2VpbChsZW4gLyB6KTtcblx0XHRcdHZhciBibG9jayA9IGZ1bmN0aW9uKGkpe1xuXHRcdFx0XHRhW2ldID0gcGFyc2VJbnQocy5zbGljZShNYXRoLm1heCgwLCBrKSwgayArIHopLCBmKTtcblx0XHRcdFx0ayAtPSB6O1xuXHRcdFx0fTtcblxuXHRcdFx0aXRlcihhaiAtIG4sIGFqLCBibG9jayk7XG5cblx0XHR9O1xuXG5cdH1cblx0ZWxzZSB0aHJvdyAnZiA+IHQgbm90IGltcGxlbWVudGVkJztcblxuXG59XG4iXX0=