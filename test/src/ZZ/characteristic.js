import test from 'ava' ;
import { ZZ } from '../../../src' ;

test( 'ZZ.characteristic()' , t => { t.true( ZZ.characteristic().iszero() ) ; } ) ;
