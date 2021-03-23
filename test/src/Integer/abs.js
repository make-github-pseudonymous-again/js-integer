import test from 'ava';
import {ZZ} from '../../../src/index.js';

function macro(t, x) {
	t.is(x.toString().replace(/-/, ''), ZZ.from(x).iabs().toString());
}

macro.title = (providedTitle, x) => `${x}^2 = ${x * x}`;

test(macro, -1);
test(macro, 0);
test(macro, 1);
test(macro, 2);
test(macro, 777);
test(macro, -17321983);

test(macro, '-729482732476982648726149821745982176489127458124719264742194');
test(macro, '62393657923765943267853265893279658365');
