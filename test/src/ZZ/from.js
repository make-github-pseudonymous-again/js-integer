import test from 'ava' ;

import { ZZ , ValueError , TypeError , MIN_NUMBER , MAX_NUMBER } from '../../../src' ;

test( 'ZZ.from()' , t => {

	t.is( ZZ.from(null).toString() , '0' ) ;
	t.is( ZZ.from(undefined).toString() , '0' ) ;

	t.is( ZZ.from('zz', 36).toString(36) , 'zz' ) ;
	t.is( ZZ.from('3b', 16).toString(16) , '3b' ) ;
	//t.is( ZZ.from('0x3b').toString(16) , '3b' ) ;
	t.is( ZZ.from(ZZ.from(5).digits(3), 3).toString() , '5' ) ;
	t.is( ZZ.from(Math.pow(7, 7)).toString() , '823543' ) ;
	t.is( ZZ.from(-7 & 0xff).toString() , '249' ) ;
	t.is( ZZ.from(true).toString() , '1' ) ;
	t.is( ZZ.from(false).toString() , '0' ) ;
	t.is( ZZ.from(1===0).toString() , '0' ) ;
	t.is( ZZ.from('+10').toString() , '10' ) ;

	t.is( ZZ.from( [ 0 , 1 ] ).toString() , ZZ.base.toString() ) ;

	t.is( MAX_NUMBER.toString() , ZZ.from(MAX_NUMBER).toString() ) ;
	t.is( MIN_NUMBER.toString() , ZZ.from(MIN_NUMBER).toString() ) ;

	t.is( ZZ.from(ZZ.from(2, undefined, -1).pow(12)).toString(), '4096')
	t.is( ZZ.from(ZZ.from(2, undefined, 0).pow(12)).toString(), '4096')
	t.is( ZZ.from(ZZ.from(2, undefined, -1).pow(11)).toString(), '-2048')
	t.is( ZZ.from(ZZ.from(2, undefined, 0).pow(11)).toString(), '2048')

	t.throws( () => ZZ.from({}) , TypeError ) ;
	t.throws( () => ZZ.from(new Date()) , TypeError ) ;
	t.throws( () => ZZ.from(new Regex()) , TypeError ) ;

	t.throws( () => ZZ.from('') , ValueError ) ;
	t.throws( () => ZZ.from('-') , ValueError ) ;
	t.throws( () => ZZ.from('+') , ValueError ) ;
	t.throws( () => ZZ.from('+---+-+') , ValueError ) ;
	t.throws( () => ZZ.from(1, 2) , ValueError ) ;
	t.throws( () => ZZ.from(true, 2) , ValueError ) ;
	t.throws( () => ZZ.from(ZZ.from(17), 2) , ValueError ) ;

} ) ;
