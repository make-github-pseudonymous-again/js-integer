import { DEFAULT_DISPLAY_BASE , ZeroDivisionError } from './' ;

import {
	stringify , convert , _trim_positive ,
	_alloc , _copy , _zeros ,
	_jz , _cmp , _eq ,
	add , _sub , _mul , _idivmod , _powd ,
	_increment ,
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

			add( r , a , 0 , a.length , b , 0 , b.length , c , 0 , c.length ) ;

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

			// /!\ _sub needs |c| >= |a| >= |b|

			const r = this.base ;
			const a = this.limbs ;
			const aj = a.length ;
			const ai = _trim_positive( a , 0 , aj ) ;

			if ( ai >= aj ) return other.opposite() ;

			const b = other._limbs_in_base( r ) ;
			const bj = b.length ;
			const bi = _trim_positive( b , 0 , bj ) ;

			if ( bi >= bj ) return this.copy() ;

			if ( _cmp( a , ai , aj , b , bi , bj ) < 0 ) {

				const c = _zeros( bj - bi ) ;

				_sub( r , b , bi , bj , a , ai , aj , c , 0 , c.length ) ;

				return new Integer( r , ~this.is_negative , c ) ;
			}

			else {

				const c = _zeros( aj - ai ) ;

				_sub( r , a , ai , aj , b , bi , bj , c , 0 , c.length ) ;

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

	/**
	 * Computes <code>this</code> raised to the <code>x</code>th power.
	 * <code>x</code> is a double smaller or equal to 2^53.
	 *
	 * @param {Number} x The power to raise <code>this</code> to.
	 * @return {Integer} <code>this ^ x</code>
	 */
	pow ( x ) {

		const is_negative = this.is_negative & x & 1 ? -1 : 0 ;

		const a = this.limbs ;
		const c = _zeros( Math.max( 1 , a.length * x ) ) ;

		_powd( this.base , x , a , 0 , a.length , c , 0 , c.length ) ;

		return new Integer( this.base , is_negative , c ) ;

	}

	ipow ( x ) {
		// TODO optimize but be careful with side effects
		return this.pow(x).move(this);
	}

	square ( ) {
		// TODO optimize but be careful with side effects
		return this.pow(2);
	}

	isquare ( ) {
		// TODO optimize but be careful with side effects
		return this.ipow(2);
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

		if ( other.iszero() ) throw new ZeroDivisionError( 'Integer division by zero' ) ; // optimize

		const quotient_is_negative = this.is_negative ^ other.is_negative ;
		const r = this.base ;

		// The underlying algorithm does not allow leading 0's so we trim them.
		const lj = this.limbs.length ;
		const li =  _trim_positive( this.limbs , 0 , lj ) ;

		// Dividend is 0
		if ( li >= lj ) return [ new Integer( this.base , 0 , [ 0 ] ) , new Integer( this.base , 0 , [ 0 ] ) ] ;

		// Dividend (& Remainder)
		const D = _alloc( lj - li ) ;
		_copy( this.limbs , li , lj , D , 0 ) ;

		// Divisor
		const d = other._limbs_in_base( r ) ;
		const dj = d.length ;
		const di = _trim_positive( d , 0 , dj ) ; // di < dj because d != 0

		// Quotient
		const q = _zeros( D.length ) ;

		_idivmod( r , D , 0 , D.length , d , di , dj , q , 0 , q.length ) ;

		const Q = new Integer( r , quotient_is_negative , q ) ; // quotient
		const R = new Integer( r , 0 , D ) ;                    // remainder

		if ( (this.is_negative || other.is_negative ) && !_jz( D , 0 , D.length ) ) {

			if ( other.is_negative ) {

				if ( !this.is_negative ) {
					_increment( r , q , 0 , q.length ) ;
					R.iadd( other ) ; // TODO optimize
				}

				else {
					R.negate(); // TODO optimize
				}

			}

			else {
				_increment( r , q , 0 , q.length ) ;
				R.negate().iadd( other ) ; // TODO optimize
			}

		}

		return [ Q , R ] ;

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

	bin ( ) {
		return this.toString( 2 ) ;
	}

	oct ( ) {
		return this.toString( 8 ) ;
	}

	hex ( ) {
		return this.toString( 16 ) ;
	}

	digits ( base = DEFAULT_DISPLAY_BASE ) {
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

		// TODO optimize with _trim_positive

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
