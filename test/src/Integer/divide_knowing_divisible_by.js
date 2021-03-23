import test from 'ava' ;

import { ZZ } from "../../../src/index.js" ;

function macro ( t , a , b , q ) {
	const A = ZZ.from(a) ;
	const B = ZZ.from(b) ;
	const Q = A.divide_knowing_divisible_by(B) ;

	t.is(q.toString(), Q.toString()) ;
	t.is(a.toString(), A.toString()) ;
	t.is(b.toString(), B.toString()) ;
}

macro.title = ( providedTitle , a , b , q ) => providedTitle || `${a} divide_knowing_divisible_by ${b} = ${q}` ;

test(macro, 3, 1, 3) ;
test(macro, '123', 3, 41) ;
test(macro, 15, 5, 3) ;
test(macro, 17, 17, 1) ;
test(macro, 18, 6, 3) ;

test(macro,
	'-7244741064308655582166346607524458070674504593046523339005489416933659838435253944103203222937740081100645849',
	'10633823966279326983230456482242756607',
	'-681292175541205709486531011694243236571309860372760091522256581907552807',
)

test(macro,
	'-7244741064308655582166346607524458070674504593046523339005489416933659838435253944103203222937740081100645849',
	'-681292175541205709486531011694243236571309860372760091522256581907552807',
	'10633823966279326983230456482242756607',
)

test(macro,
	'7244741064308655582166346607524458070674504593046523339005489416933659838435253944103203222937740081100645849',
	'-10633823966279326983230456482242756607',
	'-681292175541205709486531011694243236571309860372760091522256581907552807',
)

test(macro,
	'7244741064308655582166346607524458070674504593046523339005489416933659838435253944103203222937740081100645849',
	'-681292175541205709486531011694243236571309860372760091522256581907552807',
	'-10633823966279326983230456482242756607',
)
