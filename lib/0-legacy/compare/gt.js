"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gt_t = gt_t;


/**
 * Wrapper for a comparison operator that returns true iff
 * _a_ is greater than _b_.
 */

function gt_t(cmp) {
  return function (a, ai, aj, b, bi, bj) {
    return cmp(a, ai, aj, b, bi, bj) > 0;
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWxlZ2FjeS9jb21wYXJlL2d0LmpzIl0sIm5hbWVzIjpbImd0X3QiLCJjbXAiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIl0sIm1hcHBpbmdzIjoiOzs7OztRQU9nQkEsSSxHQUFBQSxJOzs7QUFMaEI7Ozs7O0FBS08sU0FBU0EsSUFBVCxDQUFlQyxHQUFmLEVBQW1CO0FBQ3pCLFNBQU8sVUFBVUMsQ0FBVixFQUFhQyxFQUFiLEVBQWlCQyxFQUFqQixFQUFxQkMsQ0FBckIsRUFBd0JDLEVBQXhCLEVBQTRCQyxFQUE1QixFQUFnQztBQUN0QyxXQUFPTixJQUFJQyxDQUFKLEVBQU9DLEVBQVAsRUFBV0MsRUFBWCxFQUFlQyxDQUFmLEVBQWtCQyxFQUFsQixFQUFzQkMsRUFBdEIsSUFBNEIsQ0FBbkM7QUFDQSxHQUZEO0FBR0EiLCJmaWxlIjoiZ3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLyoqXG4gKiBXcmFwcGVyIGZvciBhIGNvbXBhcmlzb24gb3BlcmF0b3IgdGhhdCByZXR1cm5zIHRydWUgaWZmXG4gKiBfYV8gaXMgZ3JlYXRlciB0aGFuIF9iXy5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ3RfdCAoY21wKXtcblx0cmV0dXJuIGZ1bmN0aW9uIChhLCBhaSwgYWosIGIsIGJpLCBiaikge1xuXHRcdHJldHVybiBjbXAoYSwgYWksIGFqLCBiLCBiaSwgYmopID4gMDtcblx0fTtcbn1cbiJdfQ==