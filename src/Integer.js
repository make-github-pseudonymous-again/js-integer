
import { DEFAULT_DISPLAY_BASE } from './' ;

import {
	stringify , convert ,
	_alloc , _copy , _zeros ,
	_lt , _jz ,
	_add , _sub , _mul , _div,
} from '@aureooms/js-integer-big-endian' ;

export class Integer {

	constructor ( base , is_negative , limbs ) {
		this.base = base ;
		this.is_negative = is_negative ;
		this.limbs = limbs ;
	}

	toString ( base = DEFAULT_DISPLAY_BASE ) {

		if ( _jz( this.limbs , 0 , this.limbs.length ) ) return '0' ;

		const digits = stringify( this.base , base , this.limbs , 0 , this.limbs.length ) ;

		return this.is_negative ? '-' + digits : digits ;

	}

	add ( other ) {

		if ( this.is_negative !== other.is_negative ) {

			if ( other.is_negative ) return this.sub( other.opposite() ) ;

			else return other.sub( this.opposite() ) ;

		}

		else {

			const result_is_negative = this.is_negative ;
			const r = this.base ;

			const a = this.limbs ;

			let b ;

			if ( other.base === r ) b = other.limbs ;
			else b = convert( other.base , r , other.limbs , 0 , other.limbs.length ) ;

			const c = _zeros( Math.max( a.length , b.length ) + 1 ) ;

			_add( r , a , 0 , a.length , b , 0 , b.length , c , 0 , c.length ) ;

			return new Integer( r , result_is_negative , c ) ;

		}

	}

	sub ( other ) {

		if ( this.is_negative !== other.is_negative ) {

			if ( other.is_negative ) return this.add( other.opposite() ) ;

			else return this.opposite().add( other ).opposite() ;

		}

		else {

			const r = this.base ;
			const a = this.limbs ;

			let b ;

			if ( other.base === r ) b = other.limbs ;
			else b = convert( other.base , r , other.limbs , 0 , other.limbs.length ) ;

			const c = _zeros( Math.max( a.length , b.length ) ) ;

			if ( _lt( a , 0 , a.length , b , 0 , b.length ) ) {

				_sub( r , b , 0 , b.length , a , 0 , a.length , c , 0 , c.length ) ;

				return new Integer( r , ~this.is_negative , c ) ;
			}

			else {

				_sub( r , a , 0 , a.length , b , 0 , b.length , c , 0 , c.length ) ;

				return new Integer( r , this.is_negative , c ) ;

			}

		}

	}

	mul ( other ) {

		const result_is_negative = this.is_negative ^ other.is_negative ;
		const r = this.base ;

		const a = this.limbs ;

		let b ;

		if ( other.base === r ) b = other.limbs ;
		else b = convert( other.base , r , other.limbs , 0 , other.limbs.length ) ;

		const c = _zeros( a.length + b.length ) ;

		_mul( r , a , 0 , a.length , b , 0 , b.length , c , 0 , c.length ) ;

		return new Integer( r , result_is_negative , c ) ;

	}

	pow ( other ) {
		throw 'Integer#pow not implemented yet, waiting for @aureooms/js-integer-big-endian.' ;
	}

	div ( other ) {
		return this.divmod( other )[0] ;
	}

	mod ( other ) {
		return this.divmod( other )[1] ;
	}

	divmod ( other ) {

		const quotient_is_negative = this.is_negative ^ other.is_negative ;
		const r = this.base ;

		// Dividend (& Remainder)
		const D = _alloc( this.limbs.length ) ;
		_copy( this.limbs , 0 , this.limbs.length , D , 0 ) ;

		// Divisor
		let d ;
		if ( other.base === r ) d = other.limbs ;
		else d = convert( other.base , r , other.limbs , 0 , other.limbs.length ) ;

		// Quotient
		const q = _zeros( D.length ) ;

		_div( r , D , 0 , D.length , d , 0 , d.length , q , 0 , q.length ) ;

		return [
			new Integer( r , quotient_is_negative , q ) , // quotient
			new Integer( r , 0 , D )                      // remainder
		] ;

	}

	opposite ( ) {
		return new Integer( this.base , ~this.is_negative , this.limbs ) ;
	}

}
