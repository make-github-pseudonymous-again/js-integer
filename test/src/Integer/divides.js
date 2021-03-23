import test from 'ava';
import {ZZ, ZeroDivisionError} from '../../../src/index.js';

function macro(t, a, b, expected) {
	t.is(expected, ZZ.from(a).divides(ZZ.from(b)));
}

macro.title = (providedTitle, a, b, expected) =>
	expected ? `${a} divides ${b}` : `${a} does not divide ${b}`;

test('zero.divides(x) throws', (t) => {
	t.throws(() => ZZ.$0().divides(ZZ.from(1)), {instanceOf: ZeroDivisionError});
});

test(macro, 2, 4, true);
test(macro, 7, 14, true);
test(macro, 1, '290843274237498327402783497239472937493274092479327', true);
test(macro, -1, '290843274237498327402783497239472937493274092479327', true);
test(macro, 1, '-290843274237498327402783497239472937493274092479327', true);
test(macro, -1, '-290843274237498327402783497239472937493274092479327', true);

test(macro, 2, 3, false);
test(macro, 4, 2, false);
