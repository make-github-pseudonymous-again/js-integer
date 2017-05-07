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
