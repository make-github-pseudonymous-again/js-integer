import { DEFAULT_DISPLAY_BASE , ZZ } from "./index.js" ;

export function $0 ( ) {
	return ZZ.$0() ;
}

export function $1 ( ) {
	return ZZ.$1() ;
}

export function $_1 ( ) {
	return ZZ.$_1() ;
}

export function parse ( object , base = undefined , is_negative = 0 ) {
	return ZZ.from( object , base , is_negative ) ;
}

export function stringify ( integer , base = DEFAULT_DISPLAY_BASE ) {
	return integer.toString( base ) ;
}

export function add ( first , second ) {
	return first.add(second) ;
}

export function iadd ( first , second ) {
	return first.iadd(second) ;
}

export function sub ( first , second ) {
	return first.sub(second) ;
}

export function isub ( first , second ) {
	return first.isub(second) ;
}

export function mul ( first , second ) {
	return first.mul(second) ;
}

export function imul ( first , second ) {
	return first.imul(second) ;
}

export function pow ( first , second ) {
	return first.pow(second) ;
}

export function ipow ( first , second ) {
	return first.ipow(second) ;
}

export function div ( first , second ) {
	return first.div(second) ;
}

export function idiv ( first , second ) {
	return first.idiv(second) ;
}

export function mod ( first , second ) {
	return first.mod(second) ;
}

export function imod ( first , second ) {
	return first.imod(second) ;
}

export function divmod ( first , second ) {
	return first.divmod(second) ;
}

export function idivmod ( first , second ) {
	return first.idivmod(second) ;
}

export function addn ( first , second ) {
	return first.addn(second) ;
}

export function iaddn ( first , second ) {
	return first.iaddn(second) ;
}

export function subn ( first , second ) {
	return first.subn(second) ;
}

export function isubn ( first , second ) {
	return first.isubn(second) ;
}

export function muln ( first , second ) {
	return first.muln(second) ;
}

export function imuln ( first , second ) {
	return first.imuln(second) ;
}

export function pown ( first , second ) {
	return first.pown(second) ;
}

export function ipown ( first , second ) {
	return first.ipown(second) ;
}

export function divn ( first , second ) {
	return first.divn(second) ;
}

export function idivn ( first , second ) {
	return first.idivn(second) ;
}

export function modn ( first , second ) {
	return first.modn(second) ;
}

export function imodn ( first , second ) {
	return first.imodn(second) ;
}

export function divmodn ( first , second ) {
	return first.divmodn(second) ;
}

export function idivmodn ( first , second ) {
	return first.idivmodn(second) ;
}
