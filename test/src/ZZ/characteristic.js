import test from 'ava' ;
import { ZZ } from "../../../src/index.js" ;

test( 'ZZ.characteristic()' , t => { t.true( ZZ.characteristic().iszero() ) ; } ) ;
