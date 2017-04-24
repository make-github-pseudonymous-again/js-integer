import test from 'ava' ;

import { ZZ } from '../../src' ;

test( 'simple operations with 12 and 20' , t => {

	const a = ZZ.from( 12 ) ;
	const b = ZZ.from( 20 ) ;

	t.is( a.add( b ).toString() , '32' ) ;
	t.is( b.add( a ).toString() , '32' ) ;

	t.is( a.sub( b ).toString() , '-8' ) ;
	t.is( b.sub( a ).toString() , '8' ) ;

	t.is( a.mul( b ).toString() , '240' ) ;
	t.is( b.mul( a ).toString() , '240' ) ;

	t.is( a.div( b ).toString() , '0' ) ;
	t.is( b.div( a ).toString() , '1' ) ;

	t.is( a.mod( b ).toString() , '12' ) ;
	t.is( b.mod( a ).toString() , '8' ) ;

}) ;

test( 'simple operations with -12 and -20' , t => {

	const a = ZZ.from( -12 ) ;
	const b = ZZ.from( -20 ) ;

	t.is( a.add( b ).toString() , '-32' ) ;
	t.is( b.add( a ).toString() , '-32' ) ;

	t.is( a.sub( b ).toString() , '8' ) ;
	t.is( b.sub( a ).toString() , '-8' ) ;

	t.is( a.mul( b ).toString() , '240' ) ;
	t.is( b.mul( a ).toString() , '240' ) ;

	t.is( a.div( b ).toString() , '0' ) ;
	t.is( b.div( a ).toString() , '1' ) ;

	t.is( a.mod( b ).toString() , '12' ) ;
	t.is( b.mod( a ).toString() , '8' ) ;

}) ;

test( 'simple operations with 12 and -20' , t => {

	const a = ZZ.from(  12 ) ;
	const b = ZZ.from( -20 ) ;

	t.is( a.add( b ).toString() , '-8' ) ;
	t.is( b.add( a ).toString() , '-8' ) ;

	t.is( a.sub( b ).toString() , '32' ) ;
	t.is( b.sub( a ).toString() , '-32' ) ;

	t.is( a.mul( b ).toString() , '-240' ) ;
	t.is( b.mul( a ).toString() , '-240' ) ;

	t.is( a.div( b ).toString() , '0' ) ;
	t.is( b.div( a ).toString() , '-1' ) ;

	t.is( a.mod( b ).toString() , '12' ) ;
	t.is( b.mod( a ).toString() , '8' ) ;

}) ;

test( 'simple operations with -12 and 20' , t => {

	const a = ZZ.from( -12 ) ;
	const b = ZZ.from(  20 ) ;

	t.is( a.add( b ).toString() , '8' ) ;
	t.is( b.add( a ).toString() , '8' ) ;

	t.is( a.sub( b ).toString() , '-32' ) ;
	t.is( b.sub( a ).toString() , '32' ) ;

	t.is( a.mul( b ).toString() , '-240' ) ;
	t.is( b.mul( a ).toString() , '-240' ) ;

	t.is( a.div( b ).toString() , '0' ) ;
	t.is( b.div( a ).toString() , '-1' ) ;

	t.is( a.mod( b ).toString() , '12' ) ;
	t.is( b.mod( a ).toString() , '8' ) ;

}) ;

test( 'multiply two large numbers' , t => {

	const a = ZZ.from( '2983928392839289387' ) ;
	const b = ZZ.from( '-302940923028393' ) ;

	t.is( a.mul( b ).toString( ) , '-903954021577363596419770144565091' ) ;

}) ;
