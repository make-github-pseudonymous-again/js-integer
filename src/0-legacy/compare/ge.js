

/**
 * Wrapper for a comparison operator that returns true iff
 * _a_ is greater or equal to _b_.
 */

export function ge_t (cmp){
	return function (a, ai, aj, b, bi, bj) {
		return cmp(a, ai, aj, b, bi, bj) >= 0;
	};
}
