import test from 'ava' ;
import { parse , stringify , div } from '../../../../src' ;

function macro ( t , A , B , C ) {
    const a = parse( A ) ;
    const b = parse( B ) ;
    const c = div( a , b ) ;
    t.is( stringify( a ) , A ) ;
    t.is( stringify( b ) , B ) ;
    t.is( stringify( c ) , C ) ;
}

macro.title = ( _ , A , B , C ) => `${A} / ${B} = ${C}` ;

test( macro , '1' , '1' , '1' ) ;
test( macro , '-1' , '1' , '-1' ) ;
test( macro , '1' , '-1' , '-1' ) ;
test( macro , '-1' , '-1' , '1' ) ;
test( macro , '1' , '17' , '0' ) ;
test( macro , '-1' , '17' , '-1' ) ;
test( macro , '1' , '-17' , '-1' ) ;
test( macro , '-1' , '-17' , '0' ) ;
test( macro , '1' , '51676101935731' , '0' ) ;
test( macro , '-1' , '51676101935731' , '-1' ) ;
test( macro , '1' , '-51676101935731' , '-1' ) ;
test( macro , '-1' , '-51676101935731' , '0' ) ;
test( macro , '1' , '1073741824' , '0' ) ;
test( macro , '-1' , '1073741824' , '-1' ) ;
test( macro , '1' , '-1073741824' , '-1' ) ;
test( macro , '-1' , '-1073741824' , '0' ) ;
test( macro , '1' , '717897987691852588770249' , '0' ) ;
test( macro , '-1' , '717897987691852588770249' , '-1' ) ;
test( macro , '1' , '-717897987691852588770249' , '-1' ) ;
test( macro , '-1' , '-717897987691852588770249' , '0' ) ;
test( macro , '17' , '1' , '17' ) ;
test( macro , '-17' , '1' , '-17' ) ;
test( macro , '17' , '-1' , '-17' ) ;
test( macro , '-17' , '-1' , '17' ) ;
test( macro , '17' , '17' , '1' ) ;
test( macro , '-17' , '17' , '-1' ) ;
test( macro , '17' , '-17' , '-1' ) ;
test( macro , '-17' , '-17' , '1' ) ;
test( macro , '17' , '51676101935731' , '0' ) ;
test( macro , '-17' , '51676101935731' , '-1' ) ;
test( macro , '17' , '-51676101935731' , '-1' ) ;
test( macro , '-17' , '-51676101935731' , '0' ) ;
test( macro , '17' , '1073741824' , '0' ) ;
test( macro , '-17' , '1073741824' , '-1' ) ;
test( macro , '17' , '-1073741824' , '-1' ) ;
test( macro , '-17' , '-1073741824' , '0' ) ;
test( macro , '17' , '717897987691852588770249' , '0' ) ;
test( macro , '-17' , '717897987691852588770249' , '-1' ) ;
test( macro , '17' , '-717897987691852588770249' , '-1' ) ;
test( macro , '-17' , '-717897987691852588770249' , '0' ) ;
test( macro , '51676101935731' , '1' , '51676101935731' ) ;
test( macro , '-51676101935731' , '1' , '-51676101935731' ) ;
test( macro , '51676101935731' , '-1' , '-51676101935731' ) ;
test( macro , '-51676101935731' , '-1' , '51676101935731' ) ;
test( macro , '51676101935731' , '17' , '3039770702101' ) ;
test( macro , '-51676101935731' , '17' , '-3039770702102' ) ;
test( macro , '51676101935731' , '-17' , '-3039770702102' ) ;
test( macro , '-51676101935731' , '-17' , '3039770702101' ) ;
test( macro , '51676101935731' , '51676101935731' , '1' ) ;
test( macro , '-51676101935731' , '51676101935731' , '-1' ) ;
test( macro , '51676101935731' , '-51676101935731' , '-1' ) ;
test( macro , '-51676101935731' , '-51676101935731' , '1' ) ;
test( macro , '51676101935731' , '1073741824' , '48127' ) ;
test( macro , '-51676101935731' , '1073741824' , '-48128' ) ;
test( macro , '51676101935731' , '-1073741824' , '-48128' ) ;
test( macro , '-51676101935731' , '-1073741824' , '48127' ) ;
test( macro , '51676101935731' , '717897987691852588770249' , '0' ) ;
test( macro , '-51676101935731' , '717897987691852588770249' , '-1' ) ;
test( macro , '51676101935731' , '-717897987691852588770249' , '-1' ) ;
test( macro , '-51676101935731' , '-717897987691852588770249' , '0' ) ;
test( macro , '1073741824' , '1' , '1073741824' ) ;
test( macro , '-1073741824' , '1' , '-1073741824' ) ;
test( macro , '1073741824' , '-1' , '-1073741824' ) ;
test( macro , '-1073741824' , '-1' , '1073741824' ) ;
test( macro , '1073741824' , '17' , '63161283' ) ;
test( macro , '-1073741824' , '17' , '-63161284' ) ;
test( macro , '1073741824' , '-17' , '-63161284' ) ;
test( macro , '-1073741824' , '-17' , '63161283' ) ;
test( macro , '1073741824' , '51676101935731' , '0' ) ;
test( macro , '-1073741824' , '51676101935731' , '-1' ) ;
test( macro , '1073741824' , '-51676101935731' , '-1' ) ;
test( macro , '-1073741824' , '-51676101935731' , '0' ) ;
test( macro , '1073741824' , '1073741824' , '1' ) ;
test( macro , '-1073741824' , '1073741824' , '-1' ) ;
test( macro , '1073741824' , '-1073741824' , '-1' ) ;
test( macro , '-1073741824' , '-1073741824' , '1' ) ;
test( macro , '1073741824' , '717897987691852588770249' , '0' ) ;
test( macro , '-1073741824' , '717897987691852588770249' , '-1' ) ;
test( macro , '1073741824' , '-717897987691852588770249' , '-1' ) ;
test( macro , '-1073741824' , '-717897987691852588770249' , '0' ) ;
test( macro , '717897987691852588770249' , '1' , '717897987691852588770249' ) ;
test( macro , '-717897987691852588770249' , '1' , '-717897987691852588770249' ) ;
test( macro , '717897987691852588770249' , '-1' , '-717897987691852588770249' ) ;
test( macro , '-717897987691852588770249' , '-1' , '717897987691852588770249' ) ;
test( macro , '717897987691852588770249' , '17' , '42229293393638387574720' ) ;
test( macro , '-717897987691852588770249' , '17' , '-42229293393638387574721' ) ;
test( macro , '717897987691852588770249' , '-17' , '-42229293393638387574721' ) ;
test( macro , '-717897987691852588770249' , '-17' , '42229293393638387574720' ) ;
test( macro , '717897987691852588770249' , '51676101935731' , '13892262782' ) ;
test( macro , '-717897987691852588770249' , '51676101935731' , '-13892262783' ) ;
test( macro , '717897987691852588770249' , '-51676101935731' , '-13892262783' ) ;
test( macro , '-717897987691852588770249' , '-51676101935731' , '13892262782' ) ;
test( macro , '717897987691852588770249' , '1073741824' , '668594602208447' ) ;
test( macro , '-717897987691852588770249' , '1073741824' , '-668594602208448' ) ;
test( macro , '717897987691852588770249' , '-1073741824' , '-668594602208448' ) ;
test( macro , '-717897987691852588770249' , '-1073741824' , '668594602208447' ) ;
test( macro , '717897987691852588770249' , '717897987691852588770249' , '1' ) ;
test( macro , '-717897987691852588770249' , '717897987691852588770249' , '-1' ) ;
test( macro , '717897987691852588770249' , '-717897987691852588770249' , '-1' ) ;
test( macro , '-717897987691852588770249' , '-717897987691852588770249' , '1' ) ;
