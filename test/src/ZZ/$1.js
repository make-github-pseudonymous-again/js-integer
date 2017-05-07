import test from 'ava' ;

import { ZZ } from '../../../src' ;

test( '$1' , t => { t.is( ZZ.$1().toString(), '1' ) ; } ) ;
test( '$1.sign()' , t => { t.is( ZZ.$1().sign(), 1 ) ; } ) ;

test( '$1.lt(2)' , t => { t.true ( ZZ.$1().lt( ZZ.from(2) ) ) ; } ) ;
test( '$1.le(2)' , t => { t.true ( ZZ.$1().le( ZZ.from(2) ) ) ; } ) ;
test( '$1.eq(2)' , t => { t.false( ZZ.$1().eq( ZZ.from(2) ) ) ; } ) ;
test( '$1.ge(2)' , t => { t.false( ZZ.$1().ge( ZZ.from(2) ) ) ; } ) ;
test( '$1.gt(2)' , t => { t.false( ZZ.$1().gt( ZZ.from(2) ) ) ; } ) ;
test( '$1.ne(2)' , t => { t.true ( ZZ.$1().ne( ZZ.from(2) ) ) ; } ) ;

test( '$1.lt(1)' , t => { t.false( ZZ.$1().lt( ZZ.from(1) ) ) ; } ) ;
test( '$1.le(1)' , t => { t.true ( ZZ.$1().le( ZZ.from(1) ) ) ; } ) ;
test( '$1.eq(1)' , t => { t.true ( ZZ.$1().eq( ZZ.from(1) ) ) ; } ) ;
test( '$1.ge(1)' , t => { t.true ( ZZ.$1().ge( ZZ.from(1) ) ) ; } ) ;
test( '$1.gt(1)' , t => { t.false( ZZ.$1().gt( ZZ.from(1) ) ) ; } ) ;
test( '$1.ne(1)' , t => { t.false( ZZ.$1().ne( ZZ.from(1) ) ) ; } ) ;

test( '$1.lt(0)' , t => { t.false( ZZ.$1().lt( ZZ.from(0) ) ) ; } ) ;
test( '$1.le(0)' , t => { t.false( ZZ.$1().le( ZZ.from(0) ) ) ; } ) ;
test( '$1.eq(0)' , t => { t.false( ZZ.$1().eq( ZZ.from(0) ) ) ; } ) ;
test( '$1.ge(0)' , t => { t.true ( ZZ.$1().ge( ZZ.from(0) ) ) ; } ) ;
test( '$1.gt(0)' , t => { t.true ( ZZ.$1().gt( ZZ.from(0) ) ) ; } ) ;
test( '$1.ne(0)' , t => { t.true ( ZZ.$1().ne( ZZ.from(0) ) ) ; } ) ;

test( '$1.lt(-1)' , t => { t.false( ZZ.$1().lt( ZZ.from(-1) ) ) ; } ) ;
test( '$1.le(-1)' , t => { t.false( ZZ.$1().le( ZZ.from(-1) ) ) ; } ) ;
test( '$1.eq(-1)' , t => { t.false( ZZ.$1().eq( ZZ.from(-1) ) ) ; } ) ;
test( '$1.ge(-1)' , t => { t.true ( ZZ.$1().ge( ZZ.from(-1) ) ) ; } ) ;
test( '$1.gt(-1)' , t => { t.true ( ZZ.$1().gt( ZZ.from(-1) ) ) ; } ) ;
test( '$1.ne(-1)' , t => { t.true ( ZZ.$1().ne( ZZ.from(-1) ) ) ; } ) ;
