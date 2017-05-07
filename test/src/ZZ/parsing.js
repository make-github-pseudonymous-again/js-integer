import test from 'ava' ;

import { ZZ } from '../../../src' ;

test( 'parsing' , t => {

	t.is( ZZ.from('zz', 36).toString(36) , 'zz' ) ;
	//t.is( ZZ.from('0x3b').toString(16) , '3b' ) ;
	t.is( ZZ.from(ZZ.from(5).digits(3), 3).toString() , '5' ) ;
	t.is( ZZ.from(Math.pow(7, 7)).toString() , '823543' ) ;
	t.is( ZZ.from(-7 & 0xff).toString() , '249' ) ;
	t.is( ZZ.from(true).toString() , '1' ) ;
	t.is( ZZ.from(false).toString() , '0' ) ;
	t.is( ZZ.from(1===0).toString() , '0' ) ;
	t.is( ZZ.from('+10').toString() , '10' ) ;

} ) ;
