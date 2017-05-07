import test from 'ava' ;
import { ZZ } from '../../../src' ;

test( 'ZZ.$0().isone()' , t => { t.is( ZZ.$0().isone() , false ) ; } ) ;
test( 'ZZ.$1().isone()' , t => { t.is( ZZ.$1().isone() , true  ) ; } ) ;

test( 'ZZ.from(-2).isone()' , t => { t.is( ZZ.from(-2).isone() , false ) ; } ) ;
test( 'ZZ.from(-1).isone()' , t => { t.is( ZZ.from(-1).isone() , false ) ; } ) ;
test( 'ZZ.from(0).isone()'  , t => { t.is( ZZ.from(0).isone()  , false ) ; } ) ;
test( 'ZZ.from(-0).isone()' , t => { t.is( ZZ.from(-0).isone() , false ) ; } ) ;
test( 'ZZ.from(1).isone()'  , t => { t.is( ZZ.from(1).isone()  , true  ) ; } ) ;
test( 'ZZ.from(2).isone()'  , t => { t.is( ZZ.from(2).isone()  , false ) ; } ) ;

test( 'ZZ.from("-2").isone()' , t => { t.is( ZZ.from("-2").isone() , false ) ; } ) ;
test( 'ZZ.from("-1").isone()' , t => { t.is( ZZ.from("-1").isone() , false ) ; } ) ;
test( 'ZZ.from("0").isone()'  , t => { t.is( ZZ.from("0").isone()  , false ) ; } ) ;
test( 'ZZ.from("-0").isone()' , t => { t.is( ZZ.from("-0").isone() , false ) ; } ) ;
test( 'ZZ.from("1").isone()'  , t => { t.is( ZZ.from("1").isone()  , true  ) ; } ) ;
test( 'ZZ.from("2").isone()'  , t => { t.is( ZZ.from("2").isone()  , false ) ; } ) ;
