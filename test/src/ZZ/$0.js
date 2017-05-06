import test from 'ava' ;

import { ZZ } from '../../../src' ;

test( '$0' , t => { t.is( ZZ.$0().toString(), '0' ) ; } ) ;
test( '$0.sign()' , t => { t.is( ZZ.$0().sign(), 0 ) ; } ) ;

test( '$0.lt(2)' , t => { t.true ( ZZ.$0().lt( ZZ.from(2) ) ) ; } ) ;
test( '$0.le(2)' , t => { t.true ( ZZ.$0().le( ZZ.from(2) ) ) ; } ) ;
test( '$0.eq(2)' , t => { t.false( ZZ.$0().eq( ZZ.from(2) ) ) ; } ) ;
test( '$0.ge(2)' , t => { t.false( ZZ.$0().ge( ZZ.from(2) ) ) ; } ) ;
test( '$0.gt(2)' , t => { t.false( ZZ.$0().gt( ZZ.from(2) ) ) ; } ) ;

test( '$0.lt(1)' , t => { t.true ( ZZ.$0().lt( ZZ.from(1) ) ) ; } ) ;
test( '$0.le(1)' , t => { t.true ( ZZ.$0().le( ZZ.from(1) ) ) ; } ) ;
test( '$0.eq(1)' , t => { t.false( ZZ.$0().eq( ZZ.from(1) ) ) ; } ) ;
test( '$0.ge(1)' , t => { t.false( ZZ.$0().ge( ZZ.from(1) ) ) ; } ) ;
test( '$0.gt(1)' , t => { t.false( ZZ.$0().gt( ZZ.from(1) ) ) ; } ) ;

test( '$0.lt(0)' , t => { t.false( ZZ.$0().lt( ZZ.from(0) ) ) ; } ) ;
test( '$0.le(0)' , t => { t.true ( ZZ.$0().le( ZZ.from(0) ) ) ; } ) ;
test( '$0.eq(0)' , t => { t.true ( ZZ.$0().eq( ZZ.from(0) ) ) ; } ) ;
test( '$0.ge(0)' , t => { t.true ( ZZ.$0().ge( ZZ.from(0) ) ) ; } ) ;
test( '$0.gt(0)' , t => { t.false( ZZ.$0().gt( ZZ.from(0) ) ) ; } ) ;

test( '$0.lt(-0)' , t => { t.false( ZZ.$0().lt( ZZ.from(-0) ) ) ; } ) ;
test( '$0.le(-0)' , t => { t.true ( ZZ.$0().le( ZZ.from(-0) ) ) ; } ) ;
test( '$0.eq(-0)' , t => { t.true ( ZZ.$0().eq( ZZ.from(-0) ) ) ; } ) ;
test( '$0.ge(-0)' , t => { t.true ( ZZ.$0().ge( ZZ.from(-0) ) ) ; } ) ;
test( '$0.gt(-0)' , t => { t.false( ZZ.$0().gt( ZZ.from(-0) ) ) ; } ) ;

test( '$0.lt("-0")' , t => { t.false( ZZ.$0().lt( ZZ.from("-0") ) ) ; } ) ;
test( '$0.le("-0")' , t => { t.true ( ZZ.$0().le( ZZ.from("-0") ) ) ; } ) ;
test( '$0.eq("-0")' , t => { t.true ( ZZ.$0().eq( ZZ.from("-0") ) ) ; } ) ;
test( '$0.ge("-0")' , t => { t.true ( ZZ.$0().ge( ZZ.from("-0") ) ) ; } ) ;
test( '$0.gt("-0")' , t => { t.false( ZZ.$0().gt( ZZ.from("-0") ) ) ; } ) ;

test( '$0.lt(-1)' , t => { t.false( ZZ.$0().lt( ZZ.from(-1) ) ) ; } ) ;
test( '$0.le(-1)' , t => { t.false( ZZ.$0().le( ZZ.from(-1) ) ) ; } ) ;
test( '$0.eq(-1)' , t => { t.false( ZZ.$0().eq( ZZ.from(-1) ) ) ; } ) ;
test( '$0.ge(-1)' , t => { t.true ( ZZ.$0().ge( ZZ.from(-1) ) ) ; } ) ;
test( '$0.gt(-1)' , t => { t.true ( ZZ.$0().gt( ZZ.from(-1) ) ) ; } ) ;
