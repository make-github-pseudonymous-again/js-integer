import test from 'ava' ;

import { parse , stringify , mul } from '../../../../src' ;

test ( 'mul handles overflow' , t => {
	const X = '81129639699425365877808850315535' ;
	const expected = '6582018437758576371414942707515558118625242782831331069062336225'
    const x = parse( X ) ;
    const r = mul( x , x ) ;
    t.is( X , stringify( x ) ) ;
    t.is( expected , stringify( r ) ) ;
} )
