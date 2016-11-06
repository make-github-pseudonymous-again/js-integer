"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ne_t = ne_t;


/**
 * Wrapper for a comparison operator that returns true iff
 * _a_ is not equal to _b_.
 */

function ne_t(cmp) {
  return function (a, ai, aj, b, bi, bj) {
    return cmp(a, ai, aj, b, bi, bj) !== 0;
  };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWxlZ2FjeS9jb21wYXJlL25lLmpzIl0sIm5hbWVzIjpbIm5lX3QiLCJjbXAiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIl0sIm1hcHBpbmdzIjoiOzs7OztRQU9nQkEsSSxHQUFBQSxJOzs7QUFMaEI7Ozs7O0FBS08sU0FBU0EsSUFBVCxDQUFlQyxHQUFmLEVBQW1CO0FBQ3pCLFNBQU8sVUFBVUMsQ0FBVixFQUFhQyxFQUFiLEVBQWlCQyxFQUFqQixFQUFxQkMsQ0FBckIsRUFBd0JDLEVBQXhCLEVBQTRCQyxFQUE1QixFQUFnQztBQUN0QyxXQUFPTixJQUFJQyxDQUFKLEVBQU9DLEVBQVAsRUFBV0MsRUFBWCxFQUFlQyxDQUFmLEVBQWtCQyxFQUFsQixFQUFzQkMsRUFBdEIsTUFBOEIsQ0FBckM7QUFDQSxHQUZEO0FBR0EiLCJmaWxlIjoibmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLyoqXG4gKiBXcmFwcGVyIGZvciBhIGNvbXBhcmlzb24gb3BlcmF0b3IgdGhhdCByZXR1cm5zIHRydWUgaWZmXG4gKiBfYV8gaXMgbm90IGVxdWFsIHRvIF9iXy5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbmVfdCAoY21wKXtcblx0cmV0dXJuIGZ1bmN0aW9uIChhLCBhaSwgYWosIGIsIGJpLCBiaikge1xuXHRcdHJldHVybiBjbXAoYSwgYWksIGFqLCBiLCBiaSwgYmopICE9PSAwO1xuXHR9O1xufVxuIl19