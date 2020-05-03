import { Integer } from './Integer' ;
import { MAX_BASE } from './_limits' ;

export function _from_number ( number ) {
	const x = number >= 0 ? number : -number ;
	const is_negative = number >= 0 ? 0 : -1 ;
	return x < MAX_BASE ?
		new Integer( MAX_BASE , is_negative , [ x ] ) :
		new Integer( MAX_BASE , is_negative , [ x / MAX_BASE | 0 , x % MAX_BASE ] ) ;
}
