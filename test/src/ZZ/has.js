import test from 'ava';

import {ZZ} from '../../../src/index.js';

const has = (t, x) => t.true(ZZ.has(x));
has.title = (providedTitle, x) => `ZZ contains ${x.toString()}.`;

const hasnot = (t, x) => t.false(ZZ.has(x));
hasnot.title = (providedTitle, x) =>
	`ZZ does not contain ${JSON.stringify(x)}.`;

test(has, -1);
test(has, 0);
test(has, 1);

test(has, ZZ.from(-1234));

test(has, ZZ.from('98213037479498473209740509327409327492744596398574'));
test(has, ZZ.from('-98213037479849847320974050937409327492744596398574'));

test(has, ZZ.from('3b', 16));

test(hasnot, '98213037479498473209740509327409327492744596398574');
test(hasnot, '-98213037479849847320974050937409327492744596398574');

test(hasnot, '0');
test(hasnot, 'ff');
test(hasnot, 'fdsalkjflsakjfd');

test(hasnot, []);
test(hasnot, {});
test(hasnot, '');
test(hasnot, false);
test(hasnot, true);
test(hasnot, 0.1);
test(hasnot, -0.5);
test(hasnot, Math.PI);
test(hasnot, Math.E);
