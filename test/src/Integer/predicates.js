import test from 'ava' ;
import { ZZ } from '../../../src' ;

test( 'ZZ.$0().isnonzero()' , t => { t.is( ZZ.$0().isnonzero() , false  ) ; } ) ;
test( 'ZZ.$1().isnonzero()' , t => { t.is( ZZ.$1().isnonzero() , true ) ; } ) ;

test( 'ZZ.from(-2).isnonzero()' , t => { t.is( ZZ.from(-2).isnonzero() , true ) ; } ) ;
test( 'ZZ.from(-1).isnonzero()' , t => { t.is( ZZ.from(-1).isnonzero() , true ) ; } ) ;
test( 'ZZ.from(0).isnonzero()'  , t => { t.is( ZZ.from(0).isnonzero()  , false  ) ; } ) ;
test( 'ZZ.from(-0).isnonzero()' , t => { t.is( ZZ.from(-0).isnonzero() , false  ) ; } ) ;
test( 'ZZ.from(1).isnonzero()'  , t => { t.is( ZZ.from(1).isnonzero()  , true ) ; } ) ;
test( 'ZZ.from(2).isnonzero()'  , t => { t.is( ZZ.from(2).isnonzero()  , true ) ; } ) ;

test( 'ZZ.from("-2").isnonzero()' , t => { t.is( ZZ.from("-2").isnonzero() , true ) ; } ) ;
test( 'ZZ.from("-1").isnonzero()' , t => { t.is( ZZ.from("-1").isnonzero() , true ) ; } ) ;
test( 'ZZ.from("0").isnonzero()'  , t => { t.is( ZZ.from("0").isnonzero()  , false  ) ; } ) ;
test( 'ZZ.from("-0").isnonzero()' , t => { t.is( ZZ.from("-0").isnonzero() , false  ) ; } ) ;
test( 'ZZ.from("1").isnonzero()'  , t => { t.is( ZZ.from("1").isnonzero()  , true ) ; } ) ;
test( 'ZZ.from("2").isnonzero()'  , t => { t.is( ZZ.from("2").isnonzero()  , true ) ; } ) ;
