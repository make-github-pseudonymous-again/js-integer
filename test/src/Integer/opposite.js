import test from 'ava' ;
import { ZZ } from '../../../src' ;

test( 'ZZ.$0().opposite()' , t => { t.is( ZZ.$0().opposite().toString() , '0' ) ; } ) ;
test( 'ZZ.$1().opposite()' , t => { t.is( ZZ.$1().opposite().toString() , '-1' ) ; } ) ;

test( 'ZZ.from(-2).opposite()' , t => { t.is( ZZ.from(-2).opposite().toString() , '2'  ) ; } ) ;
test( 'ZZ.from(-1).opposite()' , t => { t.is( ZZ.from(-1).opposite().toString() , '1'  ) ; } ) ;
test( 'ZZ.from(0).opposite()'  , t => { t.is( ZZ.from(0).opposite().toString()  , '0'  ) ; } ) ;
test( 'ZZ.from(-0).opposite()' , t => { t.is( ZZ.from(-0).opposite().toString() , '0'  ) ; } ) ;
test( 'ZZ.from(1).opposite()'  , t => { t.is( ZZ.from(1).opposite().toString()  , '-1' ) ; } ) ;
test( 'ZZ.from(2).opposite()'  , t => { t.is( ZZ.from(2).opposite().toString()  , '-2' ) ; } ) ;

test( 'ZZ.from("-2").opposite()' , t => { t.is( ZZ.from("-2").opposite().toString() , '2'  ) ; } ) ;
test( 'ZZ.from("-1").opposite()' , t => { t.is( ZZ.from("-1").opposite().toString() , '1'  ) ; } ) ;
test( 'ZZ.from("0").opposite()'  , t => { t.is( ZZ.from("0").opposite().toString()  , '0'  ) ; } ) ;
test( 'ZZ.from("-0").opposite()' , t => { t.is( ZZ.from("-0").opposite().toString() , '0'  ) ; } ) ;
test( 'ZZ.from("1").opposite()'  , t => { t.is( ZZ.from("1").opposite().toString()  , '-1' ) ; } ) ;
test( 'ZZ.from("2").opposite()'  , t => { t.is( ZZ.from("2").opposite().toString()  , '-2' ) ; } ) ;

test( 'ZZ.from(3).pow(100).opposite()' , t => {
	t.is(
		ZZ.from(3).pow(100).opposite().toString() ,
		'-515377520732011331036461129765621272702107522001'
	) ;
} ) ;
