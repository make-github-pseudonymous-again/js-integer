import test from 'ava' ;
import { ZZ } from "../../../src/index.js" ;


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


test( 'ZZ.$_1().ispositive()' , t => { t.is( ZZ.$_1().ispositive() , false ) ; } ) ;
test( 'ZZ.$0().ispositive()' , t => { t.is( ZZ.$0().ispositive() , false  ) ; } ) ;
test( 'ZZ.$1().ispositive()' , t => { t.is( ZZ.$1().ispositive() , true ) ; } ) ;

test( 'ZZ.from(-2).ispositive()' , t => { t.is( ZZ.from(-2).ispositive() , false ) ; } ) ;
test( 'ZZ.from(-1).ispositive()' , t => { t.is( ZZ.from(-1).ispositive() , false ) ; } ) ;
test( 'ZZ.from(0).ispositive()'  , t => { t.is( ZZ.from(0).ispositive()  , false  ) ; } ) ;
test( 'ZZ.from(-0).ispositive()' , t => { t.is( ZZ.from(-0).ispositive() , false  ) ; } ) ;
test( 'ZZ.from(1).ispositive()'  , t => { t.is( ZZ.from(1).ispositive()  , true ) ; } ) ;
test( 'ZZ.from(2).ispositive()'  , t => { t.is( ZZ.from(2).ispositive()  , true ) ; } ) ;

test( 'ZZ.from("-2").ispositive()' , t => { t.is( ZZ.from("-2").ispositive() , false ) ; } ) ;
test( 'ZZ.from("-1").ispositive()' , t => { t.is( ZZ.from("-1").ispositive() , false ) ; } ) ;
test( 'ZZ.from("0").ispositive()'  , t => { t.is( ZZ.from("0").ispositive()  , false  ) ; } ) ;
test( 'ZZ.from("-0").ispositive()' , t => { t.is( ZZ.from("-0").ispositive() , false  ) ; } ) ;
test( 'ZZ.from("1").ispositive()'  , t => { t.is( ZZ.from("1").ispositive()  , true ) ; } ) ;
test( 'ZZ.from("2").ispositive()'  , t => { t.is( ZZ.from("2").ispositive()  , true ) ; } ) ;


test( 'ZZ.$_1().isnegative()' , t => { t.is( ZZ.$_1().isnegative() , true ) ; } ) ;
test( 'ZZ.$0().isnegative()' , t => { t.is( ZZ.$0().isnegative() , false  ) ; } ) ;
test( 'ZZ.$1().isnegative()' , t => { t.is( ZZ.$1().isnegative() , false ) ; } ) ;

test( 'ZZ.from(-2).isnegative()' , t => { t.is( ZZ.from(-2).isnegative() , true ) ; } ) ;
test( 'ZZ.from(-1).isnegative()' , t => { t.is( ZZ.from(-1).isnegative() , true ) ; } ) ;
test( 'ZZ.from(0).isnegative()'  , t => { t.is( ZZ.from(0).isnegative()  , false  ) ; } ) ;
test( 'ZZ.from(-0).isnegative()' , t => { t.is( ZZ.from(-0).isnegative() , false  ) ; } ) ;
test( 'ZZ.from(1).isnegative()'  , t => { t.is( ZZ.from(1).isnegative()  , false ) ; } ) ;
test( 'ZZ.from(2).isnegative()'  , t => { t.is( ZZ.from(2).isnegative()  , false ) ; } ) ;

test( 'ZZ.from("-2").isnegative()' , t => { t.is( ZZ.from("-2").isnegative() , true ) ; } ) ;
test( 'ZZ.from("-1").isnegative()' , t => { t.is( ZZ.from("-1").isnegative() , true ) ; } ) ;
test( 'ZZ.from("0").isnegative()'  , t => { t.is( ZZ.from("0").isnegative()  , false  ) ; } ) ;
test( 'ZZ.from("-0").isnegative()' , t => { t.is( ZZ.from("-0").isnegative() , false  ) ; } ) ;
test( 'ZZ.from("1").isnegative()'  , t => { t.is( ZZ.from("1").isnegative()  , false ) ; } ) ;
test( 'ZZ.from("2").isnegative()'  , t => { t.is( ZZ.from("2").isnegative()  , false ) ; } ) ;


test( 'ZZ.$_1().isnonnegative()' , t => { t.is( ZZ.$_1().isnonnegative() , false ) ; } ) ;
test( 'ZZ.$0().isnonnegative()' , t => { t.is( ZZ.$0().isnonnegative() , true  ) ; } ) ;
test( 'ZZ.$1().isnonnegative()' , t => { t.is( ZZ.$1().isnonnegative() , true ) ; } ) ;

test( 'ZZ.from(-2).isnonnegative()' , t => { t.is( ZZ.from(-2).isnonnegative() , false ) ; } ) ;
test( 'ZZ.from(-1).isnonnegative()' , t => { t.is( ZZ.from(-1).isnonnegative() , false ) ; } ) ;
test( 'ZZ.from(0).isnonnegative()'  , t => { t.is( ZZ.from(0).isnonnegative()  , true  ) ; } ) ;
test( 'ZZ.from(-0).isnonnegative()' , t => { t.is( ZZ.from(-0).isnonnegative() , true  ) ; } ) ;
test( 'ZZ.from(1).isnonnegative()'  , t => { t.is( ZZ.from(1).isnonnegative()  , true ) ; } ) ;
test( 'ZZ.from(2).isnonnegative()'  , t => { t.is( ZZ.from(2).isnonnegative()  , true ) ; } ) ;

test( 'ZZ.from("-2").isnonnegative()' , t => { t.is( ZZ.from("-2").isnonnegative() , false ) ; } ) ;
test( 'ZZ.from("-1").isnonnegative()' , t => { t.is( ZZ.from("-1").isnonnegative() , false ) ; } ) ;
test( 'ZZ.from("0").isnonnegative()'  , t => { t.is( ZZ.from("0").isnonnegative()  , true  ) ; } ) ;
test( 'ZZ.from("-0").isnonnegative()' , t => { t.is( ZZ.from("-0").isnonnegative() , true  ) ; } ) ;
test( 'ZZ.from("1").isnonnegative()'  , t => { t.is( ZZ.from("1").isnonnegative()  , true ) ; } ) ;
test( 'ZZ.from("2").isnonnegative()'  , t => { t.is( ZZ.from("2").isnonnegative()  , true ) ; } ) ;


test( 'ZZ.$_1().isnonpositive()' , t => { t.is( ZZ.$_1().isnonpositive() , true ) ; } ) ;
test( 'ZZ.$0().isnonpositive()' , t => { t.is( ZZ.$0().isnonpositive() , true  ) ; } ) ;
test( 'ZZ.$1().isnonpositive()' , t => { t.is( ZZ.$1().isnonpositive() , false ) ; } ) ;

test( 'ZZ.from(-2).isnonpositive()' , t => { t.is( ZZ.from(-2).isnonpositive() , true ) ; } ) ;
test( 'ZZ.from(-1).isnonpositive()' , t => { t.is( ZZ.from(-1).isnonpositive() , true ) ; } ) ;
test( 'ZZ.from(0).isnonpositive()'  , t => { t.is( ZZ.from(0).isnonpositive()  , true  ) ; } ) ;
test( 'ZZ.from(-0).isnonpositive()' , t => { t.is( ZZ.from(-0).isnonpositive() , true  ) ; } ) ;
test( 'ZZ.from(1).isnonpositive()'  , t => { t.is( ZZ.from(1).isnonpositive()  , false ) ; } ) ;
test( 'ZZ.from(2).isnonpositive()'  , t => { t.is( ZZ.from(2).isnonpositive()  , false ) ; } ) ;

test( 'ZZ.from("-2").isnonpositive()' , t => { t.is( ZZ.from("-2").isnonpositive() , true ) ; } ) ;
test( 'ZZ.from("-1").isnonpositive()' , t => { t.is( ZZ.from("-1").isnonpositive() , true ) ; } ) ;
test( 'ZZ.from("0").isnonpositive()'  , t => { t.is( ZZ.from("0").isnonpositive()  , true  ) ; } ) ;
test( 'ZZ.from("-0").isnonpositive()' , t => { t.is( ZZ.from("-0").isnonpositive() , true  ) ; } ) ;
test( 'ZZ.from("1").isnonpositive()'  , t => { t.is( ZZ.from("1").isnonpositive()  , false ) ; } ) ;
test( 'ZZ.from("2").isnonpositive()'  , t => { t.is( ZZ.from("2").isnonpositive()  , false ) ; } ) ;
