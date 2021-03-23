import test from 'ava' ;

import { randint } from '@aureooms/js-random' ;
import { ValueError } from '@aureooms/js-error' ;

import { ZZ , MIN_NUMBER , MAX_NUMBER } from "../../../src/index.js" ;

function macro ( t , number ) {
	const integer = ZZ.from(number) ;
	t.is(number.toString(), integer.toString());
	t.is(number, integer.toNumber());
}

macro.title = ( providedTitle , number ) => `toNumber: ${number}` ;

function throws ( t , string , plus ) {
	const integer = ZZ.from(string).addn(plus) ;
	t.is(string, integer.subn(plus).toString()) ;
	t.throws(() => integer.toNumber(), { instanceOf: ValueError }) ;
}

throws.title = ( providedTitle , string ) => `toNumber: ${string} throws` ;

const tested = new Set() ;
const N = 100 ;

const once = x => {
	tested.add(x) ;
	test( macro , x ) ;
}

once(0);
once(1);
once(-1);
once(MIN_NUMBER);
once(MAX_NUMBER);
once(MIN_NUMBER+1);
once(MAX_NUMBER-1);

while ( tested.size < N ) {
	const number = randint(MIN_NUMBER, MAX_NUMBER + 1) ;
	if ( tested.has(number) ) continue ;
	once(number) ;
}

test( throws , MAX_NUMBER.toString() , +1 ) ;
test( throws , MIN_NUMBER.toString() , -1 ) ;
