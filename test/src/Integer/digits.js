import test from 'ava' ;

import { ZZ } from "../../../src/index.js" ;

test( 'ZZ.from(3).pow(50).digits()' , t => {
	t.deepEqual(
		ZZ.from(3).pow(50).digits() ,
		[9, 4, 2, 0, 7, 7, 8, 8, 5, 2, 5, 8, 1, 9, 6, 7, 8, 9, 7, 9, 8, 7, 1, 7]
	) ;
} ) ;

test( 'ZZ.from(3).pow(50).bits()' , t => {
	t.deepEqual(
		ZZ.from(3).pow(50).bits() , [1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1,
			1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1,
			0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1,
			0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1]
	) ;
} ) ;

test( 'ZZ.from(3).pow(50).digits(8)' , t => {
	t.deepEqual(
		ZZ.from(3).pow(50).digits(8) ,
		[1, 1, 7, 1, 6, 3, 7, 4, 0, 2, 7, 7, 2, 6, 6, 6, 0, 6, 7, 1, 5, 2, 1, 0, 0, 3, 2]
	) ;
} ) ;

test( 'ZZ.from(3).pow(50).digits(16)' , t => {
	t.deepEqual(
		ZZ.from(3).pow(50).digits(16) ,
		[9, 12, 3, 14, 13, 9, 0, 13, 15, 2, 11, 13, 0, 15, 3, 5, 5, 0, 8, 9]
	) ;
} ) ;

// TODO test side effects of computing digits in an other base
