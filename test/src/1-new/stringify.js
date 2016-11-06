import test from 'ava' ;
import { stringify } from '../../../src' ;

test( 'stringify' , t => {

	t.throws( stringify.bind( null , 37 , 37 , [0] , 0 , 1 ) , /not implemented/ ) ;

	t.deepEqual( stringify( 2 , 2 , [ 0 ] , 0 , 1 ) , '0' ) ;
	t.deepEqual( stringify( 2 , 2 , [ 1 ] , 0 , 1 ) , '1' ) ;
	t.deepEqual( stringify( 2 , 2 , [ 1 , 0 ] , 0 , 2 ) , '10' ) ;
	t.deepEqual( stringify( 2 , 2 , [ 1 , 1 ] , 0 , 2 ) , '11' ) ;

	t.deepEqual( stringify( 2 , 2 , [ 1 , 0 , 0 , 1 , 0 , 1 , 0 , 1 , 1 , 1 ] , 0 , 10 ) , '1001010111' ) ;

	t.deepEqual( stringify( 16 , 16 , [ 0 ] , 0 , 1 ) , '0' ) ;
	t.deepEqual( stringify( 16 , 16 , [ 10 ] , 0 , 1 ) , 'a' ) ;
	t.deepEqual( stringify( 16 , 16 , [ 10 , 0 ] , 0 , 2 ) , 'a0' ) ;
	t.deepEqual( stringify( 16 , 16 , [ 10 , 1 ] , 0 , 2 ) , 'a1' ) ;

	t.deepEqual( stringify( 16 , 16 , [ 10 , 0 , 0 , 11 , 0 , 12 , 0 , 13 , 14 , 15 ] , 0 , 10 ) , 'a00b0c0def' ) ;

	t.deepEqual( stringify( 16 , 2 , [ 3 ] , 0 , 1 ) , '11' ) ;
	t.deepEqual( stringify( 2 , 16 , [ 0 , 0 , 1 , 1 ] , 0 , 4 ) , '3' ) ;

	t.deepEqual( stringify( 16 , 2 , [ 1 , 1 ] , 0 , 2 ) , '10001' ) ;
	t.deepEqual( stringify( 2 , 16 , [ 0 , 0 , 0 , 1 , 0 , 0 , 0 , 1 ] , 0 , 8 ) , '11' ) ;

	t.deepEqual( stringify( 10 , 2 , [ 3 ] , 0 , 1 ) , '11' ) ;
	t.deepEqual( stringify( 2 , 10 , [ 0 , 0 , 1 , 1 ] , 1 , 4 ) , '3' ) ;

	t.deepEqual( stringify( 16 , 10 , [ 1 , 0 , 0 ] , 0 , 3 ) , '256' ) ;
	t.deepEqual( stringify( 10 , 16 , [ 0 , 2 , 5 , 6 ] , 1 , 4 ) , '100' ) ;

	t.deepEqual( stringify( 16 , 10 , [ 0 , 15 , 15 ] , 1 , 3 ) , '255' ) ;
	t.deepEqual( stringify( 10 , 16 , [ 2 , 5 , 5 ] , 0 , 3 ) , 'ff' ) ;

	t.deepEqual( stringify( 100 , 16 , [ 2 , 55 ] , 0 , 2 ) , 'ff' ) ;
	t.deepEqual( stringify( 1000 , 16 , [ 255 ] , 0 , 1 ) , 'ff' ) ;
	t.deepEqual( stringify( 10000 , 16 , [ 255 ] , 0 , 1 ) , 'ff' ) ;

	t.deepEqual( stringify( 100 , 16 , [ 18 , 36 , 47 , 58 , 54 , 44 , 93 , 6 , 47 , 20 ] , 0 , 10 ) , 'fedcba9876543210' ) ;

	// Really slow for with current division algorithm
	//t.deepEqual(
		//stringify( 10000 , 36 ,
		//[ 0,312,6485,6500,280,6599,6167,8564,7451,522,8125,564,4362,6409,4355] , 0 , 15
	//) , '1234567890azertyuiopqsdfghjklmwxcvbn' ) ;

	t.deepEqual(
		stringify( 10 , 36 ,
		[ 3,1,2,6,4,8,5,6,5,0,0,0,2,8,0,6,5,9,9,6,1,6,7,8,5,6,4,7,4,5,1,0,5,2,2,8,1,2,5,0,5,6,4,4,3,6,2,6,4,0,9,4,3,5,5] , 0 , 55
	) , '1234567890azertyuiopqsdfghjklmwxcvbn' ) ;

	t.deepEqual( stringify( 10000 , 36 , [ 55 , 3415 ] , 0 , 2 ) , 'bv0n' ) ;

} ) ;
