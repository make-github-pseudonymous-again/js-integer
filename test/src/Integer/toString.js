import test from 'ava' ;

import { ZZ } from '../../../src' ;

test( 'ZZ.from(3).pow(50).toString()' , t => { t.is(ZZ.from(3).pow(50).toString() , '717897987691852588770249' ) ; } ) ;
test( 'ZZ.from(3).pow(50).bin()' , t => {
	t.is(
		ZZ.from(3).pow(50).bin() ,
		'10011000000001010101001111110000110110110010111111010000100111011110001111001001'
	) ;
} ) ;
test( 'ZZ.from(3).pow(50).oct()' , t => { t.is(ZZ.from(3).pow(50).oct() , '230012517606662772047361711' ) ; } ) ;
test( 'ZZ.from(3).pow(50).hex()' , t => { t.is(ZZ.from(3).pow(50).hex() , '980553f0db2fd09de3c9' ) ; } ) ;

// TODO test side effects of priting in an other base
