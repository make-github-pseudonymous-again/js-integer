import test from 'ava' ;
import { ZZ } from '../../../src' ;

test( 'ZZ.from(-2).sign()' , t => { t.is( ZZ.from(-2).sign() , -1 ) ; } ) ;
test( 'ZZ.from(-1).sign()' , t => { t.is( ZZ.from(-1).sign() , -1 ) ; } ) ;
test( 'ZZ.from(0).sign()'  , t => { t.is( ZZ.from(0).sign()  ,  0 ) ; } ) ;
test( 'ZZ.from(-0).sign()' , t => { t.is( ZZ.from(-0).sign() ,  0 ) ; } ) ;
test( 'ZZ.from(1).sign()'  , t => { t.is( ZZ.from(1).sign()  ,  1 ) ; } ) ;
test( 'ZZ.from(2).sign()'  , t => { t.is( ZZ.from(2).sign()  ,  1 ) ; } ) ;

test( 'ZZ.from("-2").sign()' , t => { t.is( ZZ.from("-2").sign() , -1 ) ; } ) ;
test( 'ZZ.from("-1").sign()' , t => { t.is( ZZ.from("-1").sign() , -1 ) ; } ) ;
test( 'ZZ.from("0").sign()'  , t => { t.is( ZZ.from("0").sign()  ,  0 ) ; } ) ;
test( 'ZZ.from("-0").sign()' , t => { t.is( ZZ.from("-0").sign() ,  0 ) ; } ) ;
test( 'ZZ.from("1").sign()'  , t => { t.is( ZZ.from("1").sign()  ,  1 ) ; } ) ;
test( 'ZZ.from("2").sign()'  , t => { t.is( ZZ.from("2").sign()  ,  1 ) ; } ) ;
