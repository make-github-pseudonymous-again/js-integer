import test from 'ava' ;

import { ZZ } from '../../../src' ;

test( 'compare' , t => {

	t.is( ZZ.from(-1).cmp(ZZ.from(1)) , -1 ) ;

} ) ;
