
import { DEFAULT_DISPLAY_BASE } from './' ;

import {
	stringify , convert ,
	_alloc , _copy , _zeros ,
	_jz , _cmp ,
	_add , _sub , _mul , _div ,
} from '@aureooms/js-integer-big-endian' ;

export class Integer {

	constructor ( base , is_negative , limbs ) {
		this.base = base ;
		this.is_negative = is_negative ;
		this.limbs = limbs ;
	}

	move ( other ) {
		other.base = this.base ;
		other.is_negative = this.is_negative ;
		other.limbs = this.limbs ;
		return other ;
	}

	copy ( ) {
		return new Integer( this.base , this.is_negative , this.limbs ) ;
	}

	_limbs_in_base ( base ) {
		if ( this.base === base ) return this.limbs ;
		else return convert( this.base , base , this.limbs , 0 , this.limbs.length ) ;
	}

	toString ( base = DEFAULT_DISPLAY_BASE ) {

		if ( this.iszero( ) ) return '0' ;

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

			const b = other._limbs_in_base( r ) ;

			const c = _zeros( Math.max( a.length , b.length ) + 1 ) ;

			_add( r , a , 0 , a.length , b , 0 , b.length , c , 0 , c.length ) ;

			return new Integer( r , result_is_negative , c ) ;

		}

	}

	iadd ( other ) {
		// TODO optimize but be careful with side effects
		return this.add(other).move(this);
	}

	sub ( other ) {

		if ( this.is_negative !== other.is_negative ) {

			if ( other.is_negative ) return this.add( other.opposite() ) ;

			else return this.opposite().add( other ).opposite() ;

		}

		else {

			const r = this.base ;
			const a = this.limbs ;

			const b = other._limbs_in_base( r ) ;

			const c = _zeros( Math.max( a.length , b.length ) ) ;

			if ( _cmp( a , 0 , a.length , b , 0 , b.length ) < 0 ) {

				_sub( r , b , 0 , b.length , a , 0 , a.length , c , 0 , c.length ) ;

				return new Integer( r , ~this.is_negative , c ) ;
			}

			else {

				_sub( r , a , 0 , a.length , b , 0 , b.length , c , 0 , c.length ) ;

				return new Integer( r , this.is_negative , c ) ;

			}

		}

	}

	isub ( other ) {
		// TODO optimize but be careful with side effects
		return this.sub(other).move(this);
	}

	mul ( other ) {

		const result_is_negative = this.is_negative ^ other.is_negative ;
		const r = this.base ;

		const a = this.limbs ;

		const b = other._limbs_in_base( r ) ;

		const c = _zeros( a.length + b.length ) ;

		_mul( r , a , 0 , a.length , b , 0 , b.length , c , 0 , c.length ) ;

		return new Integer( r , result_is_negative , c ) ;

	}

	imul ( other ) {
		// TODO optimize but be careful with side effects
		return this.mul(other).move(this);
	}

	pow ( other ) {
		throw 'Integer#pow not implemented yet, waiting for @aureooms/js-integer-big-endian.' ;
	}

	ipow ( other ) {
		// TODO optimize but be careful with side effects
		return this.pow(other).move(this);
	}

	div ( other ) {
		return this.divmod( other )[0] ;
	}

	idiv ( other ) {
		// TODO optimize but be careful with side effects
		return this.div(other).move(this);
	}

	mod ( other ) {
		return this.divmod( other )[1] ;
	}

	imod ( other ) {
		// TODO optimize but be careful with side effects
		return this.mod(other).move(this);
	}

	divmod ( other ) {

		const quotient_is_negative = this.is_negative ^ other.is_negative ;
		const r = this.base ;

		// Dividend (& Remainder)
		const D = _alloc( this.limbs.length ) ;
		_copy( this.limbs , 0 , this.limbs.length , D , 0 ) ;

		// Divisor
		const d = other._limbs_in_base( r ) ;

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

	negate ( ) {
		// TODO optimize but be careful with side effects
		return this.opposite().move(this);
	}

	sign ( ) {
		return this.iszero() ? 0 : this.is_negative ? -1 : 1 ;
	}

	iszero ( ) {
		return _jz( this.limbs , 0 , this.limbs.length ) ;
	}

	isone ( ) {
		if ( this.is_negative ) return false ;
		return _eq( this.limbs , 0 , this.limbs.length , [ 1 ] , 0 , 1 ) ;
	}

	nonzero ( ) {
		return !this.iszero();
	}

	binary ( ) {
		return this.toString( 2 ) ;
	}

	digits ( base = this.base ) {
		return convert( this.base , base , this.limbs , 0 , this.limbs.length ).reverse( ) ;
	}

	bits ( ) {
		return this.digits( 2 ) ;
	}

	divides ( other ) {
		return other.mod( this ).iszero( ) ;
	}

	divide_knowing_divisible_by ( other ) {
		return this.div( other ) ;
	}

	cmp ( other ) {

		if ( this.iszero( ) ) {
			if ( other.iszero( ) )        return  0 ;
			else if ( other.is_negative ) return  1 ;
			else                          return -1 ;
		}

		if ( this.is_negative < other.is_negative ) return -1 ;
		if ( this.is_negative > other.is_negative ) return  1 ;

		const a = this.limbs ;
		const b = other._limbs_in_base( this.base ) ;

		return _cmp( a , 0 , a.length , b , 0 , b.length ) ;

	}

	eq ( other ) {
		return this.cmp( other ) === 0 ;
	}

	ge ( other ) {
		return this.cmp( other ) >= 0 ;
	}

	gt ( other ) {
		return this.cmp( other ) > 0 ;
	}

	le ( other ) {
		return this.cmp( other ) <= 0 ;
	}

	lt ( other ) {
		return this.cmp( other ) < 0 ;
	}

	ne ( other ) {
		return this.cmp( other ) !== 0 ;
	}

}
