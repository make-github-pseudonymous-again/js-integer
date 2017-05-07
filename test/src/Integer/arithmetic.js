import test from 'ava' ;

import { ZZ , ZeroDivisionError } from '../../../src' ;

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

	t.is( a.mod( b ).toString() , '-12' ) ;
	t.is( b.mod( a ).toString() , '-8' ) ;

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

	t.is( a.div( b ).toString() , '-1' ) ;
	t.is( b.div( a ).toString() , '-2' ) ;

	t.is( a.mod( b ).toString() , '-8' ) ;
	t.is( b.mod( a ).toString() , '4' ) ;

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

	t.is( a.div( b ).toString() , '-1' ) ;
	t.is( b.div( a ).toString() , '-2' ) ;

	t.is( a.mod( b ).toString() , '8' ) ;
	t.is( b.mod( a ).toString() , '-4' ) ;

}) ;

test( 'multiply two large numbers' , t => {

	const a = ZZ.from( '2983928392839289387' ) ;
	const b = ZZ.from( '-302940923028393' ) ;

	t.is( a.mul( b ).toString( ) , '-903954021577363596419770144565091' ) ;

}) ;

test( 'simple in-place operations with 12 and 20' , t => {

	const a = ZZ.from( 12 ) ;
	const b = ZZ.from( 20 ) ;

	t.is( a.iadd( b ).toString() , '32' ) ;
	t.is( b.iadd( a ).toString() , '52' ) ;

	t.is( a.isub( b ).toString() , '-20' ) ;
	t.is( b.isub( a ).toString() , '72' ) ;

	t.is( a.imul( b ).toString() , '-1440' ) ;
	t.is( b.imul( a ).toString() , '-103680' ) ;

	t.is( a.idiv( b ).toString() , '0' ) ;
	t.throws( () => b.idiv( a ).toString() , ZeroDivisionError ) ;

	t.is( a.imod( b ).toString() , '0' ) ;
	t.throws( () => b.imod( a ).toString() , ZeroDivisionError ) ;

}) ;

test( 'simple in-place operations with -12 and -20' , t => {

	const a = ZZ.from( -12 ) ;
	const b = ZZ.from( -20 ) ;

	t.is( a.iadd( b ).toString() , '-32' ) ;
	t.is( b.iadd( a ).toString() , '-52' ) ;

	t.is( a.isub( b ).toString() , '20' ) ;
	t.is( b.isub( a ).toString() , '-72' ) ;

	t.is( a.imul( b ).toString() , '-1440' ) ;
	t.is( b.imul( a ).toString() , '103680' ) ;

	t.is( a.idiv( b ).toString() , '-1' ) ;
	t.is( b.idiv( a ).toString() , '-103680' ) ;

	t.is( a.imod( b ).toString() , '-1' ) ;
	t.is( b.imod( a ).toString() , '0' ) ;

}) ;

test( 'simple in-place operations with 12 and -20' , t => {

	const a = ZZ.from(  12 ) ;
	const b = ZZ.from( -20 ) ;

	t.is( a.iadd( b ).toString() , '-8' ) ;
	t.is( b.iadd( a ).toString() , '-28' ) ;

	t.is( a.isub( b ).toString() , '20' ) ;
	t.is( b.isub( a ).toString() , '-48' ) ;

	t.is( a.imul( b ).toString() , '-960' ) ;
	t.is( b.imul( a ).toString() , '46080' ) ;

	t.is( a.idiv( b ).toString() , '-1' ) ;
	t.is( b.idiv( a ).toString() , '-46080' ) ;

	t.is( a.imod( b ).toString() , '-1' ) ;
	t.is( b.imod( a ).toString() , '0' ) ;

}) ;

test( 'simple in-place operations with -12 and 20' , t => {

	const a = ZZ.from( -12 ) ;
	const b = ZZ.from(  20 ) ;

	t.is( a.iadd( b ).toString() , '8' ) ;
	t.is( b.iadd( a ).toString() , '28' ) ;

	t.is( a.isub( b ).toString() , '-20' ) ;
	t.is( b.isub( a ).toString() , '48' ) ;

	t.is( a.imul( b ).toString() , '-960' ) ;
	t.is( b.imul( a ).toString() , '-46080' ) ;

	t.is( a.idiv( b ).toString() , '0' ) ;
	t.throws( ( ) => b.idiv( a ).toString() , ZeroDivisionError ) ;

	t.is( a.imod( b ).toString() , '0' ) ;
	t.throws( ( ) => b.imod( a ).toString() , ZeroDivisionError ) ;

}) ;

test( 'multiply two large numbers in-place' , t => {

	const A = '2983928392839289387' ;
	const B = '-302940923028393' ;

	const a = ZZ.from( A ) ;
	const b = ZZ.from( B ) ;

	t.is( a.imul( b ).toString( ) , '-903954021577363596419770144565091' ) ;
	t.is( a.toString( ) , '-903954021577363596419770144565091' ) ;
	t.is( b.toString( ) , B ) ;

}) ;