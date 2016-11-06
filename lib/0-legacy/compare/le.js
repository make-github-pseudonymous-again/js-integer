"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.le_t = le_t;


/**
 * Wrapper for a comparison operator that returns true iff
 * _a_ is less or equal to _b_.
 */

function le_t(cmp) {
  return function (a, ai, aj, b, bi, bj) {
    return cmp(a, ai, aj, b, bi, bj) <= 0;
  };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWxlZ2FjeS9jb21wYXJlL2xlLmpzIl0sIm5hbWVzIjpbImxlX3QiLCJjbXAiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIl0sIm1hcHBpbmdzIjoiOzs7OztRQU9nQkEsSSxHQUFBQSxJOzs7QUFMaEI7Ozs7O0FBS08sU0FBU0EsSUFBVCxDQUFlQyxHQUFmLEVBQW1CO0FBQ3pCLFNBQU8sVUFBVUMsQ0FBVixFQUFhQyxFQUFiLEVBQWlCQyxFQUFqQixFQUFxQkMsQ0FBckIsRUFBd0JDLEVBQXhCLEVBQTRCQyxFQUE1QixFQUFnQztBQUN0QyxXQUFPTixJQUFJQyxDQUFKLEVBQU9DLEVBQVAsRUFBV0MsRUFBWCxFQUFlQyxDQUFmLEVBQWtCQyxFQUFsQixFQUFzQkMsRUFBdEIsS0FBNkIsQ0FBcEM7QUFDQSxHQUZEO0FBR0EiLCJmaWxlIjoibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLyoqXG4gKiBXcmFwcGVyIGZvciBhIGNvbXBhcmlzb24gb3BlcmF0b3IgdGhhdCByZXR1cm5zIHRydWUgaWZmXG4gKiBfYV8gaXMgbGVzcyBvciBlcXVhbCB0byBfYl8uXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxlX3QgKGNtcCl7XG5cdHJldHVybiBmdW5jdGlvbiAoYSwgYWksIGFqLCBiLCBiaSwgYmopIHtcblx0XHRyZXR1cm4gY21wKGEsIGFpLCBhaiwgYiwgYmksIGJqKSA8PSAwO1xuXHR9O1xufVxuIl19