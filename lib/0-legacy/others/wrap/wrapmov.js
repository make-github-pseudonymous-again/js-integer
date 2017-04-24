"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.wrapmov = wrapmov;
function wrapmov(fn) {
	return function (a, i, j, b, k) {

		if (i < 0) {
			k -= i;
			i = 0;
		}
		if (k < 0) {
			i -= k;
			k = 0;
		}
		return fn(a, i, j, b, k);
	};
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8wLWxlZ2FjeS9vdGhlcnMvd3JhcC93cmFwbW92LmpzIl0sIm5hbWVzIjpbIndyYXBtb3YiLCJmbiIsImEiLCJpIiwiaiIsImIiLCJrIl0sIm1hcHBpbmdzIjoiOzs7OztRQUVnQkEsTyxHQUFBQSxPO0FBQVQsU0FBU0EsT0FBVCxDQUFrQkMsRUFBbEIsRUFBcUI7QUFDM0IsUUFBTyxVQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXVCOztBQUU3QixNQUFHSCxJQUFJLENBQVAsRUFBUztBQUNSRyxRQUFLSCxDQUFMO0FBQ0FBLE9BQUksQ0FBSjtBQUNBO0FBQ0QsTUFBR0csSUFBSSxDQUFQLEVBQVM7QUFDUkgsUUFBS0csQ0FBTDtBQUNBQSxPQUFJLENBQUo7QUFDQTtBQUNELFNBQU9MLEdBQUdDLENBQUgsRUFBTUMsQ0FBTixFQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZUMsQ0FBZixDQUFQO0FBRUEsRUFaRDtBQWFBIiwiZmlsZSI6IndyYXBtb3YuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBtb3YgKGZuKXtcblx0cmV0dXJuIGZ1bmN0aW9uKGEsIGksIGosIGIsIGspe1xuXG5cdFx0aWYoaSA8IDApe1xuXHRcdFx0ayAtPSBpO1xuXHRcdFx0aSA9IDA7XG5cdFx0fVxuXHRcdGlmKGsgPCAwKXtcblx0XHRcdGkgLT0gaztcblx0XHRcdGsgPSAwO1xuXHRcdH1cblx0XHRyZXR1cm4gZm4oYSwgaSwgaiwgYiwgayk7XG5cblx0fTtcbn1cbiJdfQ==