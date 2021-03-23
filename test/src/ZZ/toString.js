import test from 'ava' ;
import { ZZ } from "../../../src/index.js" ;

test( 'ZZ.toString()' , t => { t.is( ZZ.toString() , 'Integer Ring' ) ; } ) ;
