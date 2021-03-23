import test from 'ava' ;

import { IntegerRing } from "../../../src/index.js" ;

test( 'different bases' , t => {

	const R = new IntegerRing( 'R' , 10 ) ;
	const S = new IntegerRing( 'R' ,  2 ) ;

	const r = R.from( [ 0 , 7 ] ) ;
	const s = S.from( [ 0 , 1 , 1 , 0 , 1 ] ) ;

	t.is( r.cmp(s) ,  1 ) ;
	t.is( r.cmp(r) ,  0 ) ;
	t.is( s.cmp(r) , -1 ) ;
	t.is( s.cmp(s) ,  0 ) ;

} ) ;
