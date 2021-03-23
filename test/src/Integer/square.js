import test from 'ava' ;
import { ZZ } from "../../../src/index.js" ;

function number ( t , x ) {
	t.is(x*x, ZZ.from(x).isquare().valueOf() ) ;
}

number.title = ( providedTitle , x ) => `${x}^2 = ${x*x}` ;

test( number , -1 ) ;
test( number , 0 ) ;
test( number , 1 ) ;
test( number , 2 ) ;
test( number , 777 ) ;
test( number , -17321983 ) ;
