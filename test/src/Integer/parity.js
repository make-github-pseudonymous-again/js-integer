import test from 'ava' ;
import { range } from '@aureooms/js-itertools' ;

import { ZZ } from "../../../src/index.js" ;

function even ( t , x ) {
	t.true(x.iseven());
	t.false(x.isodd());
}

even.title = ( providedTitle , x ) => `parity: ${x.toString()} is even` ;

function odd ( t , x ) {
	t.true(x.isodd());
	t.false(x.iseven());
}

odd.title = ( providedTitle , x ) => `parity: ${x.toString()} is odd` ;

test( odd , ZZ.from('123456789') ) ;
test( odd , ZZ.from('987654321') ) ;
test( even , ZZ.from('9876543210') ) ;

test( odd , ZZ.from('ff', 16) ) ;

test( even , ZZ.from(2).pow(1234) ) ;
test( odd , ZZ.from(2).pow(1234).subn(1) ) ;

const N = 100 ;
let x = ZZ.from(-N);

// eslint-disable-next-line no-unused-vars
for ( const _ of range(N) ) {
	test( even , x ) ;
	x = x.addn(1) ;
	test( odd , x ) ;
	x = x.addn(1) ;
}
