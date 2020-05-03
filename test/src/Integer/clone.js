import test from 'ava' ;
import { ZZ } from '../../../src' ;

test ( 'Integer#copy' , t => {

	const s = '34998403804830' ;

	const a = ZZ.from(s) ;
	const b = a.clone();

	t.is(a.toString(), s);
	t.is(b.toString(), s);

	a.negate();

	t.is(a.toString(), '-'+s);
	t.is(b.toString(), s);

	a.isub(a);

	t.is(a.toString(), '0');
	t.is(b.toString(), s);

	a.iadd(b);

	t.is(a.toString(), s);
	t.is(b.toString(), s);


} ) ;
