import test from 'ava' ;

import { ZZ } from "../../../src/index.js" ;

test( 'ZZ.from(3).pow(50).toString()' , t => { t.is(ZZ.from(3).pow(50).toString() , '717897987691852588770249' ) ; } ) ;
test( 'ZZ.from(3).pow(50).bin()' , t => {
	t.is(
		ZZ.from(3).pow(50).bin() ,
		'10011000000001010101001111110000110110110010111111010000100111011110001111001001'
	) ;
} ) ;
test( 'ZZ.from(3).pow(50).oct()' , t => { t.is(ZZ.from(3).pow(50).oct() , '230012517606662772047361711' ) ; } ) ;
test( 'ZZ.from(3).pow(50).hex()' , t => { t.is(ZZ.from(3).pow(50).hex() , '980553f0db2fd09de3c9' ) ; } ) ;
test( 'ZZ.from(3).pow(50).toJSON()' , t => { t.is(ZZ.from(3).pow(50).toJSON() , '980553f0db2fd09de3c9' ) ; } ) ;

test( 'toString is pure' , t => {
	const x = ZZ.from(10000) ;
	t.is('10000', x.toString(10));
	t.is('10000', x.toString(10));
	t.is('2710', x.toString(16));
	t.is('2710', x.toString(16));
})
