import { Integer } from './' ;
import { DEFAULT_DISPLAY_BASE } from './' ;
import { parse , convert } from '@aureooms/js-integer-big-endian' ;

export class IntegerRing {

	constructor ( name , base ) {
		this.name = name ;
		this.base = base ;
	}

	characteristic ( ) {
		return this.$0() ;
	}

	from ( object , base = undefined , is_negative = 0 ) {

		if ( object === null || object === undefined ) return this.$0();

		switch ( object.constructor.prototype ) {

			case Number.prototype :
				if ( base !== undefined ) throw 'IntegerRing#from: using the base parameter does not make sense when passing a Number.' ;
				return this.from_number( object , is_negative ) ;

			case String.prototype :
				if ( base === undefined ) base = DEFAULT_DISPLAY_BASE ;
				return this.from_string( object , base , is_negative ) ;

			case Array.prototype :
				if ( base === undefined ) base = this.base ;
				return this.from_digits( object , base , is_negative ) ;

			case Integer.prototype :
				if ( base !== undefined ) throw 'IntegerRing#from: using the base parameter does not make sense when passing an Integer.' ;
				return new Integer( object.base , object.is_negative ^ is_negative , object.limbs ) ;

			default:
				throw `IntegerRing#from cannot handle ${object.constructor.prototype}` ;

		}

	}

	from_number ( number , is_negative = 0 ) {

		if ( number < 0 ) {
			is_negative = ~is_negative ;
			number = -number ;
		}

		const limbs = convert( 0x20000000000000 , this.base , [ number ] , 0 , 1 ) ;

		return new Integer( this.base , is_negative , limbs ) ;

	}

	from_string ( string , base = 10 , is_negative = 0  ) {

		if ( string.length === 0 ) throw 'IntegerRing#from_string cannot parse empty string.' ;

		if ( string[0] === '-' ) return this.from_string( string.slice(1) , base , ~is_negative ) ;

		if ( string[0] === '+' ) return this.from_string( string.slice(1) , base , is_negative ) ;

		const limbs = parse( base , this.base , string ) ;

		return new Integer( this.base , is_negative , limbs ) ;

	}

	from_digits ( digits , base , is_negative ) {

		const limbs = convert( base , this.base , digits.slice().reverse() , 0 , object.length ) ;

		return new Integer( this.base , is_negative , limbs ) ;

	}

	toString ( ) {
		return this.name ;
	}

	stringify ( first , base = DEFAULT_DISPLAY_BASE ) {
		return first.toString( base ) ;
	}

	$0 ( ) {
		return new Integer( this.base , 0 , [ 0 ] ) ;
	}

	$1 ( ) {
		return new Integer( this.base , 0 , [ 1 ] ) ;
	}

	add ( first , second ) {
		return first.add(second) ;
	}

	iadd ( first , second ) {
		return first.iadd(second) ;
	}

	sub ( first , second ) {
		return first.sub(second) ;
	}

	isub ( first , second ) {
		return first.isub(second) ;
	}

	mul ( first , second ) {
		return first.mul(second) ;
	}

	imul ( first , second ) {
		return first.imul(second) ;
	}

	pow ( first , second ) {
		return first.pow(second) ;
	}

	ipow ( first , second ) {
		return first.ipow(second) ;
	}

	div ( first , second ) {
		return first.div(second) ;
	}

	idiv ( first , second ) {
		return first.idiv(second) ;
	}

	mod ( first , second ) {
		return first.mod(second) ;
	}

	imod ( first , second ) {
		return first.imod(second) ;
	}

}
