import test from 'ava' ;

import { parse , stringify } from "../../../src/index.js" ;

const numbers = [
	'0' ,
	'1' ,
	'209802830232092830823' ,
	'8237893478979874398743987489372039820947309874890209382098407' ,
	'9023803289238028329081829018039820380283092380298039283092803928039820' ,
	'-1' ,
	'-209802830232092830823' ,
	'-8237893478979874398743987489372039820947309874890209382098407' ,
	'-9023803289238028329081829018039820380283092380298039283092803928039820' ,
] ;

function macro ( t , number ) {
	const parsed = parse(number, 10, -1) ;
	const unparsed = stringify(parsed.opposite()) ;
	t.is( unparsed , number ) ;
}

macro.title = ( _ , number ) => `stringify(parse(${number})) == ${number}` ;

for ( const number of numbers ) test( macro , number ) ;
