import test from 'ava' ;
import { ZZ } from '../../../src' ;


test( 'ZZ.$0().iszero()' , t => { t.is( ZZ.$0().iszero() , true  ) ; } ) ;
test( 'ZZ.$1().iszero()' , t => { t.is( ZZ.$1().iszero() , false ) ; } ) ;

test( 'ZZ.from(-2).iszero()' , t => { t.is( ZZ.from(-2).iszero() , false ) ; } ) ;
test( 'ZZ.from(-1).iszero()' , t => { t.is( ZZ.from(-1).iszero() , false ) ; } ) ;
test( 'ZZ.from(0).iszero()'  , t => { t.is( ZZ.from(0).iszero()  , true  ) ; } ) ;
test( 'ZZ.from(-0).iszero()' , t => { t.is( ZZ.from(-0).iszero() , true  ) ; } ) ;
test( 'ZZ.from(1).iszero()'  , t => { t.is( ZZ.from(1).iszero()  , false ) ; } ) ;
test( 'ZZ.from(2).iszero()'  , t => { t.is( ZZ.from(2).iszero()  , false ) ; } ) ;

test( 'ZZ.from("-2").iszero()' , t => { t.is( ZZ.from("-2").iszero() , false ) ; } ) ;
test( 'ZZ.from("-1").iszero()' , t => { t.is( ZZ.from("-1").iszero() , false ) ; } ) ;
test( 'ZZ.from("0").iszero()'  , t => { t.is( ZZ.from("0").iszero()  , true  ) ; } ) ;
test( 'ZZ.from("-0").iszero()' , t => { t.is( ZZ.from("-0").iszero() , true  ) ; } ) ;
test( 'ZZ.from("1").iszero()'  , t => { t.is( ZZ.from("1").iszero()  , false ) ; } ) ;
test( 'ZZ.from("2").iszero()'  , t => { t.is( ZZ.from("2").iszero()  , false ) ; } ) ;


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
