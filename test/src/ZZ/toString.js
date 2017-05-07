import test from 'ava' ;
import { ZZ } from '../../../src' ;

test( 'ZZ.toString()' , t => { t.is( ZZ.toString() , 'Integer Ring' ) ; } ) ;
