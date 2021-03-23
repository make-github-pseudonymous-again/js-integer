import test from 'ava' ;
import { parse , stringify , add } from "../../../src/index.js" ;

function macro ( t , A , x , B , y , C , z ) {
    const a = parse( A , x ) ;
    const b = parse( B , y ) ;
    const c = add( a , b ) ;
    t.is( stringify( a , x ) , A ) ;
    t.is( stringify( b , y ) , B ) ;
    t.is( stringify( c , z ) , C ) ;
}

macro.title = ( _ , A , x , B , y , C , z ) => `${A}_${x} + ${B}_${y} = ${C}_${z}` ;

test( macro , 'dead' , 16 , '101010' , 2 , '57047' , 10 ) ;
