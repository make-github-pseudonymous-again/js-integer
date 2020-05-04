import test from 'ava' ;

import { ZZ , ZeroDivisionError } from '../../../src' ;

function macro ( t , a , b , q , r ) {
	const A = ZZ.from(a) ;
	const B = ZZ.from(b) ;
	const [Q, R] = A.idivmod(B) ;

	t.is(q.toString(), Q.toString()) ;
	t.is(r.toString(), R.toString()) ;
	t.is(r.toString(), A.toString()) ;
}

macro.title = ( providedTitle , a , b , q , r ) => `${a} idivmod ${b} = [${q}, ${r}]` ;

test( 'x.idivmod(0) throws' , t => { t.throws( () => ZZ.from(-123).idivmod(ZZ.from(0)) , { instanceOf: ZeroDivisionError } )})

test(macro, 3, 2, 1, 1) ;
test(macro, '123', 2, 61, 1) ;
test(macro, 15, 7, 2, 1) ;
test(macro, 17, 7, 2, 3) ;
test(macro, 18, 7, 2, 4) ;
test(macro, 20, 7, 2, 6) ;
test(macro, 21, 7, 3, 0) ;
test(macro, 22, 7, 3, 1) ;
test(macro, 27, 7, 3, 6) ;
