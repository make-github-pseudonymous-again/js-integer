import test from 'ava' ;

import { ZZ , $0 , $1 , $_1 } from '../../../src' ;

test( '$0 == ZZ.$0' , t => { t.true($0().eq(ZZ.$0())) ; } ) ;
test( '$1 == ZZ.$1' , t => { t.true($1().eq(ZZ.$1())) ; } ) ;
test( '$_1 == ZZ.$_1' , t => { t.true($_1().eq(ZZ.$_1())) ; } ) ;
