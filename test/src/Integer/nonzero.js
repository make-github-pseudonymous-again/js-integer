import test from 'ava' ;
import { ZZ } from '../../../src' ;

test( 'ZZ.$0().nonzero()' , t => { t.is( ZZ.$0().nonzero() , false  ) ; } ) ;
test( 'ZZ.$1().nonzero()' , t => { t.is( ZZ.$1().nonzero() , true ) ; } ) ;

test( 'ZZ.from(-2).nonzero()' , t => { t.is( ZZ.from(-2).nonzero() , true ) ; } ) ;
test( 'ZZ.from(-1).nonzero()' , t => { t.is( ZZ.from(-1).nonzero() , true ) ; } ) ;
test( 'ZZ.from(0).nonzero()'  , t => { t.is( ZZ.from(0).nonzero()  , false  ) ; } ) ;
test( 'ZZ.from(-0).nonzero()' , t => { t.is( ZZ.from(-0).nonzero() , false  ) ; } ) ;
test( 'ZZ.from(1).nonzero()'  , t => { t.is( ZZ.from(1).nonzero()  , true ) ; } ) ;
test( 'ZZ.from(2).nonzero()'  , t => { t.is( ZZ.from(2).nonzero()  , true ) ; } ) ;

test( 'ZZ.from("-2").nonzero()' , t => { t.is( ZZ.from("-2").nonzero() , true ) ; } ) ;
test( 'ZZ.from("-1").nonzero()' , t => { t.is( ZZ.from("-1").nonzero() , true ) ; } ) ;
test( 'ZZ.from("0").nonzero()'  , t => { t.is( ZZ.from("0").nonzero()  , false  ) ; } ) ;
test( 'ZZ.from("-0").nonzero()' , t => { t.is( ZZ.from("-0").nonzero() , false  ) ; } ) ;
test( 'ZZ.from("1").nonzero()'  , t => { t.is( ZZ.from("1").nonzero()  , true ) ; } ) ;
test( 'ZZ.from("2").nonzero()'  , t => { t.is( ZZ.from("2").nonzero()  , true ) ; } ) ;
