"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eq_t = eq_t;
/**
 * Wrapper for a comparison operator that returns true iff
 * _a_ is equal to _b_.
 */

function eq_t(cmp) {
  return function (a, ai, aj, b, bi, bj) {
    return cmp(a, ai, aj, b, bi, bj) === 0;
  };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWxlZ2FjeS9jb21wYXJlL2VxLmpzIl0sIm5hbWVzIjpbImVxX3QiLCJjbXAiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIl0sIm1hcHBpbmdzIjoiOzs7OztRQUtnQkEsSSxHQUFBQSxJO0FBTGhCOzs7OztBQUtPLFNBQVNBLElBQVQsQ0FBZUMsR0FBZixFQUFtQjtBQUN6QixTQUFPLFVBQVVDLENBQVYsRUFBYUMsRUFBYixFQUFpQkMsRUFBakIsRUFBcUJDLENBQXJCLEVBQXdCQyxFQUF4QixFQUE0QkMsRUFBNUIsRUFBZ0M7QUFDdEMsV0FBT04sSUFBSUMsQ0FBSixFQUFPQyxFQUFQLEVBQVdDLEVBQVgsRUFBZUMsQ0FBZixFQUFrQkMsRUFBbEIsRUFBc0JDLEVBQXRCLE1BQThCLENBQXJDO0FBQ0EsR0FGRDtBQUdBIiwiZmlsZSI6ImVxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXcmFwcGVyIGZvciBhIGNvbXBhcmlzb24gb3BlcmF0b3IgdGhhdCByZXR1cm5zIHRydWUgaWZmXG4gKiBfYV8gaXMgZXF1YWwgdG8gX2JfLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlcV90IChjbXApe1xuXHRyZXR1cm4gZnVuY3Rpb24gKGEsIGFpLCBhaiwgYiwgYmksIGJqKSB7XG5cdFx0cmV0dXJuIGNtcChhLCBhaSwgYWosIGIsIGJpLCBiaikgPT09IDA7XG5cdH07XG59XG4iXX0=