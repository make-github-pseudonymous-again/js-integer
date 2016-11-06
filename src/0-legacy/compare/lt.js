

/**
 * Wrapper for a comparison operator that returns true iff
 * _a_ is less than _b_.
 */

export function lt_t (cmp){
	return function (a, ai, aj, b, bi, bj) {
		return cmp(a, ai, aj, b, bi, bj) < 0;
	};
}
