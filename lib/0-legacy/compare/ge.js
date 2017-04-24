"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ge_t = ge_t;


/**
 * Wrapper for a comparison operator that returns true iff
 * _a_ is greater or equal to _b_.
 */

function ge_t(cmp) {
  return function (a, ai, aj, b, bi, bj) {
    return cmp(a, ai, aj, b, bi, bj) >= 0;
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWxlZ2FjeS9jb21wYXJlL2dlLmpzIl0sIm5hbWVzIjpbImdlX3QiLCJjbXAiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIl0sIm1hcHBpbmdzIjoiOzs7OztRQU9nQkEsSSxHQUFBQSxJOzs7QUFMaEI7Ozs7O0FBS08sU0FBU0EsSUFBVCxDQUFlQyxHQUFmLEVBQW1CO0FBQ3pCLFNBQU8sVUFBVUMsQ0FBVixFQUFhQyxFQUFiLEVBQWlCQyxFQUFqQixFQUFxQkMsQ0FBckIsRUFBd0JDLEVBQXhCLEVBQTRCQyxFQUE1QixFQUFnQztBQUN0QyxXQUFPTixJQUFJQyxDQUFKLEVBQU9DLEVBQVAsRUFBV0MsRUFBWCxFQUFlQyxDQUFmLEVBQWtCQyxFQUFsQixFQUFzQkMsRUFBdEIsS0FBNkIsQ0FBcEM7QUFDQSxHQUZEO0FBR0EiLCJmaWxlIjoiZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLyoqXG4gKiBXcmFwcGVyIGZvciBhIGNvbXBhcmlzb24gb3BlcmF0b3IgdGhhdCByZXR1cm5zIHRydWUgaWZmXG4gKiBfYV8gaXMgZ3JlYXRlciBvciBlcXVhbCB0byBfYl8uXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdlX3QgKGNtcCl7XG5cdHJldHVybiBmdW5jdGlvbiAoYSwgYWksIGFqLCBiLCBiaSwgYmopIHtcblx0XHRyZXR1cm4gY21wKGEsIGFpLCBhaiwgYiwgYmksIGJqKSA+PSAwO1xuXHR9O1xufVxuIl19