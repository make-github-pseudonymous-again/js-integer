import test from 'ava';

import {ZZ, ZeroDivisionError} from '../../../src/index.js';

function macro(t, a, b, expected) {
	t.is(expected.toString(), ZZ.from(a).divround(ZZ.from(b)).toString());
}

macro.title = (providedTitle, a, b, expected) =>
	`${a} divround ${b} = ${expected}`;

test('x.divround(0) throws', (t) => {
	t.throws(() => ZZ.from(-123).divround(ZZ.from(0)), {
		instanceOf: ZeroDivisionError,
	});
});

test(macro, 3, 2, 2);
test(macro, '123', 2, 62);
test(macro, 15, 7, 2);
test(macro, 17, 7, 2);
test(macro, 18, 7, 3);
test(macro, 20, 7, 3);
test(macro, 21, 7, 3);
test(macro, 22, 7, 3);
test(macro, 27, 7, 4);
