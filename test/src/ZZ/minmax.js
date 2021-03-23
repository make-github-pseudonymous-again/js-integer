import test from 'ava' ;

import { ZZ } from "../../../src/index.js" ;

test( 'minmax' , t => {

	const a = ZZ.from('1037193691267387921739639472846392869238466298463928649236') ;
	const b = ZZ.from('102833047307209370991273091273') ;
	const c = ZZ.from('-18039809213809128309123702149836492649632832') ;
	const d = ZZ.from(-3) ;

	t.is( a , ZZ.max(a, b) ) ;
	t.is( a , ZZ.max(b, a) ) ;
	t.is( b , ZZ.min(a, b) ) ;
	t.is( b , ZZ.max(b, c) ) ;
	t.is( c , ZZ.min(c, d) ) ;
	t.is( c , ZZ.min(b, c) ) ;
	t.is( d , ZZ.min(b, d) ) ;
	t.is( d , ZZ.max(d, c) ) ;

}) ;
