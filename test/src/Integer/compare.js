import test from 'ava';

import {ZZ} from '../../../src/index.js';

test('compare', (t) => {
	t.is(ZZ.from(-1).cmpn(1), -1);
	t.true(ZZ.from(-1).ltn(1));
	t.true(ZZ.from(-1).gtn(-2));
	t.true(ZZ.from(-1).len(1));
	t.true(ZZ.from(-1).len(-1));
	t.true(ZZ.from(7).gen(3));
	t.true(ZZ.from(13).eqn(13));
	t.true(ZZ.from(13).nen(14));
});
