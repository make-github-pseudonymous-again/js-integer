import test from 'ava';

import {DEFAULT_REPRESENTATION_BASE, MAX_BASE} from '../../../src/index.js';

test('DEFAULT_REPRESENTATION_BASE <= MAX_BASE', (t) => {
	t.true(DEFAULT_REPRESENTATION_BASE <= MAX_BASE);
});
