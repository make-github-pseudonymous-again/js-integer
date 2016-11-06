"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lt_t = lt_t;


/**
 * Wrapper for a comparison operator that returns true iff
 * _a_ is less than _b_.
 */

function lt_t(cmp) {
  return function (a, ai, aj, b, bi, bj) {
    return cmp(a, ai, aj, b, bi, bj) < 0;
  };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWxlZ2FjeS9jb21wYXJlL2x0LmpzIl0sIm5hbWVzIjpbImx0X3QiLCJjbXAiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIl0sIm1hcHBpbmdzIjoiOzs7OztRQU9nQkEsSSxHQUFBQSxJOzs7QUFMaEI7Ozs7O0FBS08sU0FBU0EsSUFBVCxDQUFlQyxHQUFmLEVBQW1CO0FBQ3pCLFNBQU8sVUFBVUMsQ0FBVixFQUFhQyxFQUFiLEVBQWlCQyxFQUFqQixFQUFxQkMsQ0FBckIsRUFBd0JDLEVBQXhCLEVBQTRCQyxFQUE1QixFQUFnQztBQUN0QyxXQUFPTixJQUFJQyxDQUFKLEVBQU9DLEVBQVAsRUFBV0MsRUFBWCxFQUFlQyxDQUFmLEVBQWtCQyxFQUFsQixFQUFzQkMsRUFBdEIsSUFBNEIsQ0FBbkM7QUFDQSxHQUZEO0FBR0EiLCJmaWxlIjoibHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLyoqXG4gKiBXcmFwcGVyIGZvciBhIGNvbXBhcmlzb24gb3BlcmF0b3IgdGhhdCByZXR1cm5zIHRydWUgaWZmXG4gKiBfYV8gaXMgbGVzcyB0aGFuIF9iXy5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbHRfdCAoY21wKXtcblx0cmV0dXJuIGZ1bmN0aW9uIChhLCBhaSwgYWosIGIsIGJpLCBiaikge1xuXHRcdHJldHVybiBjbXAoYSwgYWksIGFqLCBiLCBiaSwgYmopIDwgMDtcblx0fTtcbn1cbiJdfQ==