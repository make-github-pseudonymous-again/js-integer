import test from 'ava' ;
import { parse , stringify , mul } from '../../../../src' ;

function macro ( t , A , B , C ) {
    const a = parse( A ) ;
    const b = parse( B ) ;
    const c = mul( a , b ) ;
    t.is( stringify( a ) , A ) ;
    t.is( stringify( b ) , B ) ;
    t.is( stringify( c ) , C ) ;
}

macro.title = ( _ , A , B , C ) => `${A} * ${B} = ${C}` ;

test( macro , '1' , '1' , '1' ) ;
test( macro , '-1' , '1' , '-1' ) ;
test( macro , '1' , '-1' , '-1' ) ;
test( macro , '-1' , '-1' , '1' ) ;
test( macro , '1' , '17' , '17' ) ;
test( macro , '-1' , '17' , '-17' ) ;
test( macro , '1' , '-17' , '-17' ) ;
test( macro , '-1' , '-17' , '17' ) ;
test( macro , '1' , '51676101935731' , '51676101935731' ) ;
test( macro , '-1' , '51676101935731' , '-51676101935731' ) ;
test( macro , '1' , '-51676101935731' , '-51676101935731' ) ;
test( macro , '-1' , '-51676101935731' , '51676101935731' ) ;
test( macro , '1' , '1073741824' , '1073741824' ) ;
test( macro , '-1' , '1073741824' , '-1073741824' ) ;
test( macro , '1' , '-1073741824' , '-1073741824' ) ;
test( macro , '-1' , '-1073741824' , '1073741824' ) ;
test( macro , '1' , '717897987691852588770249' , '717897987691852588770249' ) ;
test( macro , '-1' , '717897987691852588770249' , '-717897987691852588770249' ) ;
test( macro , '1' , '-717897987691852588770249' , '-717897987691852588770249' ) ;
test( macro , '-1' , '-717897987691852588770249' , '717897987691852588770249' ) ;
test( macro , '17' , '1' , '17' ) ;
test( macro , '-17' , '1' , '-17' ) ;
test( macro , '17' , '-1' , '-17' ) ;
test( macro , '-17' , '-1' , '17' ) ;
test( macro , '17' , '17' , '289' ) ;
test( macro , '-17' , '17' , '-289' ) ;
test( macro , '17' , '-17' , '-289' ) ;
test( macro , '-17' , '-17' , '289' ) ;
test( macro , '17' , '51676101935731' , '878493732907427' ) ;
test( macro , '-17' , '51676101935731' , '-878493732907427' ) ;
test( macro , '17' , '-51676101935731' , '-878493732907427' ) ;
test( macro , '-17' , '-51676101935731' , '878493732907427' ) ;
test( macro , '17' , '1073741824' , '18253611008' ) ;
test( macro , '-17' , '1073741824' , '-18253611008' ) ;
test( macro , '17' , '-1073741824' , '-18253611008' ) ;
test( macro , '-17' , '-1073741824' , '18253611008' ) ;
test( macro , '17' , '717897987691852588770249' , '12204265790761494009094233' ) ;
test( macro , '-17' , '717897987691852588770249' , '-12204265790761494009094233' ) ;
test( macro , '17' , '-717897987691852588770249' , '-12204265790761494009094233' ) ;
test( macro , '-17' , '-717897987691852588770249' , '12204265790761494009094233' ) ;
test( macro , '51676101935731' , '1' , '51676101935731' ) ;
test( macro , '-51676101935731' , '1' , '-51676101935731' ) ;
test( macro , '51676101935731' , '-1' , '-51676101935731' ) ;
test( macro , '-51676101935731' , '-1' , '51676101935731' ) ;
test( macro , '51676101935731' , '17' , '878493732907427' ) ;
test( macro , '-51676101935731' , '17' , '-878493732907427' ) ;
test( macro , '51676101935731' , '-17' , '-878493732907427' ) ;
test( macro , '-51676101935731' , '-17' , '878493732907427' ) ;
test( macro , '51676101935731' , '51676101935731' , '2670419511272061205254504361' ) ;
test( macro , '-51676101935731' , '51676101935731' , '-2670419511272061205254504361' ) ;
test( macro , '51676101935731' , '-51676101935731' , '-2670419511272061205254504361' ) ;
test( macro , '-51676101935731' , '-51676101935731' , '2670419511272061205254504361' ) ;
test( macro , '51676101935731' , '1073741824' , '55486791949681734713344' ) ;
test( macro , '-51676101935731' , '1073741824' , '-55486791949681734713344' ) ;
test( macro , '51676101935731' , '-1073741824' , '-55486791949681734713344' ) ;
test( macro , '-51676101935731' , '-1073741824' , '55486791949681734713344' ) ;
test( macro , '51676101935731' , '717897987691852588770249' , '37098169591420333175287767861722867019' ) ;
test( macro , '-51676101935731' , '717897987691852588770249' , '-37098169591420333175287767861722867019' ) ;
test( macro , '51676101935731' , '-717897987691852588770249' , '-37098169591420333175287767861722867019' ) ;
test( macro , '-51676101935731' , '-717897987691852588770249' , '37098169591420333175287767861722867019' ) ;
test( macro , '1073741824' , '1' , '1073741824' ) ;
test( macro , '-1073741824' , '1' , '-1073741824' ) ;
test( macro , '1073741824' , '-1' , '-1073741824' ) ;
test( macro , '-1073741824' , '-1' , '1073741824' ) ;
test( macro , '1073741824' , '17' , '18253611008' ) ;
test( macro , '-1073741824' , '17' , '-18253611008' ) ;
test( macro , '1073741824' , '-17' , '-18253611008' ) ;
test( macro , '-1073741824' , '-17' , '18253611008' ) ;
test( macro , '1073741824' , '51676101935731' , '55486791949681734713344' ) ;
test( macro , '-1073741824' , '51676101935731' , '-55486791949681734713344' ) ;
test( macro , '1073741824' , '-51676101935731' , '-55486791949681734713344' ) ;
test( macro , '-1073741824' , '-51676101935731' , '55486791949681734713344' ) ;
test( macro , '1073741824' , '1073741824' , '1152921504606846976' ) ;
test( macro , '-1073741824' , '1073741824' , '-1152921504606846976' ) ;
test( macro , '1073741824' , '-1073741824' , '-1152921504606846976' ) ;
test( macro , '-1073741824' , '-1073741824' , '1152921504606846976' ) ;
test( macro , '1073741824' , '717897987691852588770249' , '770837094750179348605289078194176' ) ;
test( macro , '-1073741824' , '717897987691852588770249' , '-770837094750179348605289078194176' ) ;
test( macro , '1073741824' , '-717897987691852588770249' , '-770837094750179348605289078194176' ) ;
test( macro , '-1073741824' , '-717897987691852588770249' , '770837094750179348605289078194176' ) ;
test( macro , '717897987691852588770249' , '1' , '717897987691852588770249' ) ;
test( macro , '-717897987691852588770249' , '1' , '-717897987691852588770249' ) ;
test( macro , '717897987691852588770249' , '-1' , '-717897987691852588770249' ) ;
test( macro , '-717897987691852588770249' , '-1' , '717897987691852588770249' ) ;
test( macro , '717897987691852588770249' , '17' , '12204265790761494009094233' ) ;
test( macro , '-717897987691852588770249' , '17' , '-12204265790761494009094233' ) ;
test( macro , '717897987691852588770249' , '-17' , '-12204265790761494009094233' ) ;
test( macro , '-717897987691852588770249' , '-17' , '12204265790761494009094233' ) ;
test( macro , '717897987691852588770249' , '51676101935731' , '37098169591420333175287767861722867019' ) ;
test( macro , '-717897987691852588770249' , '51676101935731' , '-37098169591420333175287767861722867019' ) ;
test( macro , '717897987691852588770249' , '-51676101935731' , '-37098169591420333175287767861722867019' ) ;
test( macro , '-717897987691852588770249' , '-51676101935731' , '37098169591420333175287767861722867019' ) ;
test( macro , '717897987691852588770249' , '1073741824' , '770837094750179348605289078194176' ) ;
test( macro , '-717897987691852588770249' , '1073741824' , '-770837094750179348605289078194176' ) ;
test( macro , '717897987691852588770249' , '-1073741824' , '-770837094750179348605289078194176' ) ;
test( macro , '-717897987691852588770249' , '-1073741824' , '770837094750179348605289078194176' ) ;
test( macro , '717897987691852588770249' , '717897987691852588770249' , '515377520732011331036461129765621272702107522001' ) ;
test( macro , '-717897987691852588770249' , '717897987691852588770249' , '-515377520732011331036461129765621272702107522001' ) ;
test( macro , '717897987691852588770249' , '-717897987691852588770249' , '-515377520732011331036461129765621272702107522001' ) ;
test( macro , '-717897987691852588770249' , '-717897987691852588770249' , '515377520732011331036461129765621272702107522001' ) ;
