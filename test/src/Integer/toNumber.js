import test from 'ava' ;

import { randint } from '@aureooms/js-random' ;
import { ValueError } from '@aureooms/js-error' ;

import { ZZ , MIN_NUMBER , MAX_NUMBER } from '../../../src' ;

function macro ( t , number ) {
	const integer = ZZ.from(number) ;
	t.is(number.toString(), integer.toString());
	t.is(number, integer.toNumber());
}

macro.title = ( providedTitle , number ) => `toNumber: ${number}` ;

function throws ( t , string ) {
	const integer = ZZ.from(string) ;
	t.is(string, integer.toString()) ;
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

while ( tested.size < N ) {
	const number = randint(MIN_NUMBER, MAX_NUMBER + 1) ;
	if ( tested.has(number) ) continue ;
	once(number) ;
}

test( throws , '9007199254740992' ) ;
test( throws , '-9007199254740993' ) ;
