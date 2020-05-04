import test from 'ava' ;
import { parse , stringify , imuln } from '../../../../src' ;

function macro ( t , A , B , C ) {
    const a = parse( A ) ;
    const c = imuln( a , B ) ;
    t.is( stringify( a ) , C ) ;
    t.is( stringify( c ) , C ) ;
}

macro.title = ( _ , A , B , C ) => `imuln(${A},${B}) = ${C}` ;

test( macro , '1' , 1 , '1' ) ;
test( macro , '-1' , 1 , '-1' ) ;
test( macro , '1' , -1 , '-1' ) ;
test( macro , '-1' , -1 , '1' ) ;
test( macro , '1' , 3 , '3' ) ;
test( macro , '-1' , 3 , '-3' ) ;
test( macro , '1' , -3 , '-3' ) ;
test( macro , '-1' , -3 , '3' ) ;
test( macro , '1' , 7 , '7' ) ;
test( macro , '-1' , 7 , '-7' ) ;
test( macro , '1' , -7 , '-7' ) ;
test( macro , '-1' , -7 , '7' ) ;
test( macro , '1' , 9 , '9' ) ;
test( macro , '-1' , 9 , '-9' ) ;
test( macro , '1' , -9 , '-9' ) ;
test( macro , '-1' , -9 , '9' ) ;
test( macro , '1' , 11 , '11' ) ;
test( macro , '-1' , 11 , '-11' ) ;
test( macro , '1' , -11 , '-11' ) ;
test( macro , '-1' , -11 , '11' ) ;
test( macro , '1' , 17 , '17' ) ;
test( macro , '-1' , 17 , '-17' ) ;
test( macro , '1' , -17 , '-17' ) ;
test( macro , '-1' , -17 , '17' ) ;
test( macro , '1' , 22 , '22' ) ;
test( macro , '-1' , 22 , '-22' ) ;
test( macro , '1' , -22 , '-22' ) ;
test( macro , '-1' , -22 , '22' ) ;
test( macro , '1' , 24 , '24' ) ;
test( macro , '-1' , 24 , '-24' ) ;
test( macro , '1' , -24 , '-24' ) ;
test( macro , '-1' , -24 , '24' ) ;
test( macro , '1' , 27 , '27' ) ;
test( macro , '-1' , 27 , '-27' ) ;
test( macro , '1' , -27 , '-27' ) ;
test( macro , '-1' , -27 , '27' ) ;
test( macro , '1' , 29 , '29' ) ;
test( macro , '-1' , 29 , '-29' ) ;
test( macro , '1' , -29 , '-29' ) ;
test( macro , '-1' , -29 , '29' ) ;
test( macro , '1' , 1234 , '1234' ) ;
test( macro , '-1' , 1234 , '-1234' ) ;
test( macro , '1' , -1234 , '-1234' ) ;
test( macro , '-1' , -1234 , '1234' ) ;
test( macro , '1' , 5678 , '5678' ) ;
test( macro , '-1' , 5678 , '-5678' ) ;
test( macro , '1' , -5678 , '-5678' ) ;
test( macro , '-1' , -5678 , '5678' ) ;
test( macro , '1' , 1073741824 , '1073741824' ) ;
test( macro , '-1' , 1073741824 , '-1073741824' ) ;
test( macro , '1' , -1073741824 , '-1073741824' ) ;
test( macro , '-1' , -1073741824 , '1073741824' ) ;
test( macro , '1' , 51676101935731 , '51676101935731' ) ;
test( macro , '-1' , 51676101935731 , '-51676101935731' ) ;
test( macro , '1' , -51676101935731 , '-51676101935731' ) ;
test( macro , '-1' , -51676101935731 , '51676101935731' ) ;
test( macro , '3' , 1 , '3' ) ;
test( macro , '-3' , 1 , '-3' ) ;
test( macro , '3' , -1 , '-3' ) ;
test( macro , '-3' , -1 , '3' ) ;
test( macro , '3' , 3 , '9' ) ;
test( macro , '-3' , 3 , '-9' ) ;
test( macro , '3' , -3 , '-9' ) ;
test( macro , '-3' , -3 , '9' ) ;
test( macro , '3' , 7 , '21' ) ;
test( macro , '-3' , 7 , '-21' ) ;
test( macro , '3' , -7 , '-21' ) ;
test( macro , '-3' , -7 , '21' ) ;
test( macro , '3' , 9 , '27' ) ;
test( macro , '-3' , 9 , '-27' ) ;
test( macro , '3' , -9 , '-27' ) ;
test( macro , '-3' , -9 , '27' ) ;
test( macro , '3' , 11 , '33' ) ;
test( macro , '-3' , 11 , '-33' ) ;
test( macro , '3' , -11 , '-33' ) ;
test( macro , '-3' , -11 , '33' ) ;
test( macro , '3' , 17 , '51' ) ;
test( macro , '-3' , 17 , '-51' ) ;
test( macro , '3' , -17 , '-51' ) ;
test( macro , '-3' , -17 , '51' ) ;
test( macro , '3' , 22 , '66' ) ;
test( macro , '-3' , 22 , '-66' ) ;
test( macro , '3' , -22 , '-66' ) ;
test( macro , '-3' , -22 , '66' ) ;
test( macro , '3' , 24 , '72' ) ;
test( macro , '-3' , 24 , '-72' ) ;
test( macro , '3' , -24 , '-72' ) ;
test( macro , '-3' , -24 , '72' ) ;
test( macro , '3' , 27 , '81' ) ;
test( macro , '-3' , 27 , '-81' ) ;
test( macro , '3' , -27 , '-81' ) ;
test( macro , '-3' , -27 , '81' ) ;
test( macro , '3' , 29 , '87' ) ;
test( macro , '-3' , 29 , '-87' ) ;
test( macro , '3' , -29 , '-87' ) ;
test( macro , '-3' , -29 , '87' ) ;
test( macro , '3' , 1234 , '3702' ) ;
test( macro , '-3' , 1234 , '-3702' ) ;
test( macro , '3' , -1234 , '-3702' ) ;
test( macro , '-3' , -1234 , '3702' ) ;
test( macro , '3' , 5678 , '17034' ) ;
test( macro , '-3' , 5678 , '-17034' ) ;
test( macro , '3' , -5678 , '-17034' ) ;
test( macro , '-3' , -5678 , '17034' ) ;
test( macro , '3' , 1073741824 , '3221225472' ) ;
test( macro , '-3' , 1073741824 , '-3221225472' ) ;
test( macro , '3' , -1073741824 , '-3221225472' ) ;
test( macro , '-3' , -1073741824 , '3221225472' ) ;
test( macro , '3' , 51676101935731 , '155028305807193' ) ;
test( macro , '-3' , 51676101935731 , '-155028305807193' ) ;
test( macro , '3' , -51676101935731 , '-155028305807193' ) ;
test( macro , '-3' , -51676101935731 , '155028305807193' ) ;
test( macro , '7' , 1 , '7' ) ;
test( macro , '-7' , 1 , '-7' ) ;
test( macro , '7' , -1 , '-7' ) ;
test( macro , '-7' , -1 , '7' ) ;
test( macro , '7' , 3 , '21' ) ;
test( macro , '-7' , 3 , '-21' ) ;
test( macro , '7' , -3 , '-21' ) ;
test( macro , '-7' , -3 , '21' ) ;
test( macro , '7' , 7 , '49' ) ;
test( macro , '-7' , 7 , '-49' ) ;
test( macro , '7' , -7 , '-49' ) ;
test( macro , '-7' , -7 , '49' ) ;
test( macro , '7' , 9 , '63' ) ;
test( macro , '-7' , 9 , '-63' ) ;
test( macro , '7' , -9 , '-63' ) ;
test( macro , '-7' , -9 , '63' ) ;
test( macro , '7' , 11 , '77' ) ;
test( macro , '-7' , 11 , '-77' ) ;
test( macro , '7' , -11 , '-77' ) ;
test( macro , '-7' , -11 , '77' ) ;
test( macro , '7' , 17 , '119' ) ;
test( macro , '-7' , 17 , '-119' ) ;
test( macro , '7' , -17 , '-119' ) ;
test( macro , '-7' , -17 , '119' ) ;
test( macro , '7' , 22 , '154' ) ;
test( macro , '-7' , 22 , '-154' ) ;
test( macro , '7' , -22 , '-154' ) ;
test( macro , '-7' , -22 , '154' ) ;
test( macro , '7' , 24 , '168' ) ;
test( macro , '-7' , 24 , '-168' ) ;
test( macro , '7' , -24 , '-168' ) ;
test( macro , '-7' , -24 , '168' ) ;
test( macro , '7' , 27 , '189' ) ;
test( macro , '-7' , 27 , '-189' ) ;
test( macro , '7' , -27 , '-189' ) ;
test( macro , '-7' , -27 , '189' ) ;
test( macro , '7' , 29 , '203' ) ;
test( macro , '-7' , 29 , '-203' ) ;
test( macro , '7' , -29 , '-203' ) ;
test( macro , '-7' , -29 , '203' ) ;
test( macro , '7' , 1234 , '8638' ) ;
test( macro , '-7' , 1234 , '-8638' ) ;
test( macro , '7' , -1234 , '-8638' ) ;
test( macro , '-7' , -1234 , '8638' ) ;
test( macro , '7' , 5678 , '39746' ) ;
test( macro , '-7' , 5678 , '-39746' ) ;
test( macro , '7' , -5678 , '-39746' ) ;
test( macro , '-7' , -5678 , '39746' ) ;
test( macro , '7' , 1073741824 , '7516192768' ) ;
test( macro , '-7' , 1073741824 , '-7516192768' ) ;
test( macro , '7' , -1073741824 , '-7516192768' ) ;
test( macro , '-7' , -1073741824 , '7516192768' ) ;
test( macro , '7' , 51676101935731 , '361732713550117' ) ;
test( macro , '-7' , 51676101935731 , '-361732713550117' ) ;
test( macro , '7' , -51676101935731 , '-361732713550117' ) ;
test( macro , '-7' , -51676101935731 , '361732713550117' ) ;
test( macro , '9' , 1 , '9' ) ;
test( macro , '-9' , 1 , '-9' ) ;
test( macro , '9' , -1 , '-9' ) ;
test( macro , '-9' , -1 , '9' ) ;
test( macro , '9' , 3 , '27' ) ;
test( macro , '-9' , 3 , '-27' ) ;
test( macro , '9' , -3 , '-27' ) ;
test( macro , '-9' , -3 , '27' ) ;
test( macro , '9' , 7 , '63' ) ;
test( macro , '-9' , 7 , '-63' ) ;
test( macro , '9' , -7 , '-63' ) ;
test( macro , '-9' , -7 , '63' ) ;
test( macro , '9' , 9 , '81' ) ;
test( macro , '-9' , 9 , '-81' ) ;
test( macro , '9' , -9 , '-81' ) ;
test( macro , '-9' , -9 , '81' ) ;
test( macro , '9' , 11 , '99' ) ;
test( macro , '-9' , 11 , '-99' ) ;
test( macro , '9' , -11 , '-99' ) ;
test( macro , '-9' , -11 , '99' ) ;
test( macro , '9' , 17 , '153' ) ;
test( macro , '-9' , 17 , '-153' ) ;
test( macro , '9' , -17 , '-153' ) ;
test( macro , '-9' , -17 , '153' ) ;
test( macro , '9' , 22 , '198' ) ;
test( macro , '-9' , 22 , '-198' ) ;
test( macro , '9' , -22 , '-198' ) ;
test( macro , '-9' , -22 , '198' ) ;
test( macro , '9' , 24 , '216' ) ;
test( macro , '-9' , 24 , '-216' ) ;
test( macro , '9' , -24 , '-216' ) ;
test( macro , '-9' , -24 , '216' ) ;
test( macro , '9' , 27 , '243' ) ;
test( macro , '-9' , 27 , '-243' ) ;
test( macro , '9' , -27 , '-243' ) ;
test( macro , '-9' , -27 , '243' ) ;
test( macro , '9' , 29 , '261' ) ;
test( macro , '-9' , 29 , '-261' ) ;
test( macro , '9' , -29 , '-261' ) ;
test( macro , '-9' , -29 , '261' ) ;
test( macro , '9' , 1234 , '11106' ) ;
test( macro , '-9' , 1234 , '-11106' ) ;
test( macro , '9' , -1234 , '-11106' ) ;
test( macro , '-9' , -1234 , '11106' ) ;
test( macro , '9' , 5678 , '51102' ) ;
test( macro , '-9' , 5678 , '-51102' ) ;
test( macro , '9' , -5678 , '-51102' ) ;
test( macro , '-9' , -5678 , '51102' ) ;
test( macro , '9' , 1073741824 , '9663676416' ) ;
test( macro , '-9' , 1073741824 , '-9663676416' ) ;
test( macro , '9' , -1073741824 , '-9663676416' ) ;
test( macro , '-9' , -1073741824 , '9663676416' ) ;
test( macro , '9' , 51676101935731 , '465084917421579' ) ;
test( macro , '-9' , 51676101935731 , '-465084917421579' ) ;
test( macro , '9' , -51676101935731 , '-465084917421579' ) ;
test( macro , '-9' , -51676101935731 , '465084917421579' ) ;
test( macro , '11' , 1 , '11' ) ;
test( macro , '-11' , 1 , '-11' ) ;
test( macro , '11' , -1 , '-11' ) ;
test( macro , '-11' , -1 , '11' ) ;
test( macro , '11' , 3 , '33' ) ;
test( macro , '-11' , 3 , '-33' ) ;
test( macro , '11' , -3 , '-33' ) ;
test( macro , '-11' , -3 , '33' ) ;
test( macro , '11' , 7 , '77' ) ;
test( macro , '-11' , 7 , '-77' ) ;
test( macro , '11' , -7 , '-77' ) ;
test( macro , '-11' , -7 , '77' ) ;
test( macro , '11' , 9 , '99' ) ;
test( macro , '-11' , 9 , '-99' ) ;
test( macro , '11' , -9 , '-99' ) ;
test( macro , '-11' , -9 , '99' ) ;
test( macro , '11' , 11 , '121' ) ;
test( macro , '-11' , 11 , '-121' ) ;
test( macro , '11' , -11 , '-121' ) ;
test( macro , '-11' , -11 , '121' ) ;
test( macro , '11' , 17 , '187' ) ;
test( macro , '-11' , 17 , '-187' ) ;
test( macro , '11' , -17 , '-187' ) ;
test( macro , '-11' , -17 , '187' ) ;
test( macro , '11' , 22 , '242' ) ;
test( macro , '-11' , 22 , '-242' ) ;
test( macro , '11' , -22 , '-242' ) ;
test( macro , '-11' , -22 , '242' ) ;
test( macro , '11' , 24 , '264' ) ;
test( macro , '-11' , 24 , '-264' ) ;
test( macro , '11' , -24 , '-264' ) ;
test( macro , '-11' , -24 , '264' ) ;
test( macro , '11' , 27 , '297' ) ;
test( macro , '-11' , 27 , '-297' ) ;
test( macro , '11' , -27 , '-297' ) ;
test( macro , '-11' , -27 , '297' ) ;
test( macro , '11' , 29 , '319' ) ;
test( macro , '-11' , 29 , '-319' ) ;
test( macro , '11' , -29 , '-319' ) ;
test( macro , '-11' , -29 , '319' ) ;
test( macro , '11' , 1234 , '13574' ) ;
test( macro , '-11' , 1234 , '-13574' ) ;
test( macro , '11' , -1234 , '-13574' ) ;
test( macro , '-11' , -1234 , '13574' ) ;
test( macro , '11' , 5678 , '62458' ) ;
test( macro , '-11' , 5678 , '-62458' ) ;
test( macro , '11' , -5678 , '-62458' ) ;
test( macro , '-11' , -5678 , '62458' ) ;
test( macro , '11' , 1073741824 , '11811160064' ) ;
test( macro , '-11' , 1073741824 , '-11811160064' ) ;
test( macro , '11' , -1073741824 , '-11811160064' ) ;
test( macro , '-11' , -1073741824 , '11811160064' ) ;
test( macro , '11' , 51676101935731 , '568437121293041' ) ;
test( macro , '-11' , 51676101935731 , '-568437121293041' ) ;
test( macro , '11' , -51676101935731 , '-568437121293041' ) ;
test( macro , '-11' , -51676101935731 , '568437121293041' ) ;
test( macro , '17' , 1 , '17' ) ;
test( macro , '-17' , 1 , '-17' ) ;
test( macro , '17' , -1 , '-17' ) ;
test( macro , '-17' , -1 , '17' ) ;
test( macro , '17' , 3 , '51' ) ;
test( macro , '-17' , 3 , '-51' ) ;
test( macro , '17' , -3 , '-51' ) ;
test( macro , '-17' , -3 , '51' ) ;
test( macro , '17' , 7 , '119' ) ;
test( macro , '-17' , 7 , '-119' ) ;
test( macro , '17' , -7 , '-119' ) ;
test( macro , '-17' , -7 , '119' ) ;
test( macro , '17' , 9 , '153' ) ;
test( macro , '-17' , 9 , '-153' ) ;
test( macro , '17' , -9 , '-153' ) ;
test( macro , '-17' , -9 , '153' ) ;
test( macro , '17' , 11 , '187' ) ;
test( macro , '-17' , 11 , '-187' ) ;
test( macro , '17' , -11 , '-187' ) ;
test( macro , '-17' , -11 , '187' ) ;
test( macro , '17' , 17 , '289' ) ;
test( macro , '-17' , 17 , '-289' ) ;
test( macro , '17' , -17 , '-289' ) ;
test( macro , '-17' , -17 , '289' ) ;
test( macro , '17' , 22 , '374' ) ;
test( macro , '-17' , 22 , '-374' ) ;
test( macro , '17' , -22 , '-374' ) ;
test( macro , '-17' , -22 , '374' ) ;
test( macro , '17' , 24 , '408' ) ;
test( macro , '-17' , 24 , '-408' ) ;
test( macro , '17' , -24 , '-408' ) ;
test( macro , '-17' , -24 , '408' ) ;
test( macro , '17' , 27 , '459' ) ;
test( macro , '-17' , 27 , '-459' ) ;
test( macro , '17' , -27 , '-459' ) ;
test( macro , '-17' , -27 , '459' ) ;
test( macro , '17' , 29 , '493' ) ;
test( macro , '-17' , 29 , '-493' ) ;
test( macro , '17' , -29 , '-493' ) ;
test( macro , '-17' , -29 , '493' ) ;
test( macro , '17' , 1234 , '20978' ) ;
test( macro , '-17' , 1234 , '-20978' ) ;
test( macro , '17' , -1234 , '-20978' ) ;
test( macro , '-17' , -1234 , '20978' ) ;
test( macro , '17' , 5678 , '96526' ) ;
test( macro , '-17' , 5678 , '-96526' ) ;
test( macro , '17' , -5678 , '-96526' ) ;
test( macro , '-17' , -5678 , '96526' ) ;
test( macro , '17' , 1073741824 , '18253611008' ) ;
test( macro , '-17' , 1073741824 , '-18253611008' ) ;
test( macro , '17' , -1073741824 , '-18253611008' ) ;
test( macro , '-17' , -1073741824 , '18253611008' ) ;
test( macro , '17' , 51676101935731 , '878493732907427' ) ;
test( macro , '-17' , 51676101935731 , '-878493732907427' ) ;
test( macro , '17' , -51676101935731 , '-878493732907427' ) ;
test( macro , '-17' , -51676101935731 , '878493732907427' ) ;
test( macro , '22' , 1 , '22' ) ;
test( macro , '-22' , 1 , '-22' ) ;
test( macro , '22' , -1 , '-22' ) ;
test( macro , '-22' , -1 , '22' ) ;
test( macro , '22' , 3 , '66' ) ;
test( macro , '-22' , 3 , '-66' ) ;
test( macro , '22' , -3 , '-66' ) ;
test( macro , '-22' , -3 , '66' ) ;
test( macro , '22' , 7 , '154' ) ;
test( macro , '-22' , 7 , '-154' ) ;
test( macro , '22' , -7 , '-154' ) ;
test( macro , '-22' , -7 , '154' ) ;
test( macro , '22' , 9 , '198' ) ;
test( macro , '-22' , 9 , '-198' ) ;
test( macro , '22' , -9 , '-198' ) ;
test( macro , '-22' , -9 , '198' ) ;
test( macro , '22' , 11 , '242' ) ;
test( macro , '-22' , 11 , '-242' ) ;
test( macro , '22' , -11 , '-242' ) ;
test( macro , '-22' , -11 , '242' ) ;
test( macro , '22' , 17 , '374' ) ;
test( macro , '-22' , 17 , '-374' ) ;
test( macro , '22' , -17 , '-374' ) ;
test( macro , '-22' , -17 , '374' ) ;
test( macro , '22' , 22 , '484' ) ;
test( macro , '-22' , 22 , '-484' ) ;
test( macro , '22' , -22 , '-484' ) ;
test( macro , '-22' , -22 , '484' ) ;
test( macro , '22' , 24 , '528' ) ;
test( macro , '-22' , 24 , '-528' ) ;
test( macro , '22' , -24 , '-528' ) ;
test( macro , '-22' , -24 , '528' ) ;
test( macro , '22' , 27 , '594' ) ;
test( macro , '-22' , 27 , '-594' ) ;
test( macro , '22' , -27 , '-594' ) ;
test( macro , '-22' , -27 , '594' ) ;
test( macro , '22' , 29 , '638' ) ;
test( macro , '-22' , 29 , '-638' ) ;
test( macro , '22' , -29 , '-638' ) ;
test( macro , '-22' , -29 , '638' ) ;
test( macro , '22' , 1234 , '27148' ) ;
test( macro , '-22' , 1234 , '-27148' ) ;
test( macro , '22' , -1234 , '-27148' ) ;
test( macro , '-22' , -1234 , '27148' ) ;
test( macro , '22' , 5678 , '124916' ) ;
test( macro , '-22' , 5678 , '-124916' ) ;
test( macro , '22' , -5678 , '-124916' ) ;
test( macro , '-22' , -5678 , '124916' ) ;
test( macro , '22' , 1073741824 , '23622320128' ) ;
test( macro , '-22' , 1073741824 , '-23622320128' ) ;
test( macro , '22' , -1073741824 , '-23622320128' ) ;
test( macro , '-22' , -1073741824 , '23622320128' ) ;
test( macro , '22' , 51676101935731 , '1136874242586082' ) ;
test( macro , '-22' , 51676101935731 , '-1136874242586082' ) ;
test( macro , '22' , -51676101935731 , '-1136874242586082' ) ;
test( macro , '-22' , -51676101935731 , '1136874242586082' ) ;
test( macro , '24' , 1 , '24' ) ;
test( macro , '-24' , 1 , '-24' ) ;
test( macro , '24' , -1 , '-24' ) ;
test( macro , '-24' , -1 , '24' ) ;
test( macro , '24' , 3 , '72' ) ;
test( macro , '-24' , 3 , '-72' ) ;
test( macro , '24' , -3 , '-72' ) ;
test( macro , '-24' , -3 , '72' ) ;
test( macro , '24' , 7 , '168' ) ;
test( macro , '-24' , 7 , '-168' ) ;
test( macro , '24' , -7 , '-168' ) ;
test( macro , '-24' , -7 , '168' ) ;
test( macro , '24' , 9 , '216' ) ;
test( macro , '-24' , 9 , '-216' ) ;
test( macro , '24' , -9 , '-216' ) ;
test( macro , '-24' , -9 , '216' ) ;
test( macro , '24' , 11 , '264' ) ;
test( macro , '-24' , 11 , '-264' ) ;
test( macro , '24' , -11 , '-264' ) ;
test( macro , '-24' , -11 , '264' ) ;
test( macro , '24' , 17 , '408' ) ;
test( macro , '-24' , 17 , '-408' ) ;
test( macro , '24' , -17 , '-408' ) ;
test( macro , '-24' , -17 , '408' ) ;
test( macro , '24' , 22 , '528' ) ;
test( macro , '-24' , 22 , '-528' ) ;
test( macro , '24' , -22 , '-528' ) ;
test( macro , '-24' , -22 , '528' ) ;
test( macro , '24' , 24 , '576' ) ;
test( macro , '-24' , 24 , '-576' ) ;
test( macro , '24' , -24 , '-576' ) ;
test( macro , '-24' , -24 , '576' ) ;
test( macro , '24' , 27 , '648' ) ;
test( macro , '-24' , 27 , '-648' ) ;
test( macro , '24' , -27 , '-648' ) ;
test( macro , '-24' , -27 , '648' ) ;
test( macro , '24' , 29 , '696' ) ;
test( macro , '-24' , 29 , '-696' ) ;
test( macro , '24' , -29 , '-696' ) ;
test( macro , '-24' , -29 , '696' ) ;
test( macro , '24' , 1234 , '29616' ) ;
test( macro , '-24' , 1234 , '-29616' ) ;
test( macro , '24' , -1234 , '-29616' ) ;
test( macro , '-24' , -1234 , '29616' ) ;
test( macro , '24' , 5678 , '136272' ) ;
test( macro , '-24' , 5678 , '-136272' ) ;
test( macro , '24' , -5678 , '-136272' ) ;
test( macro , '-24' , -5678 , '136272' ) ;
test( macro , '24' , 1073741824 , '25769803776' ) ;
test( macro , '-24' , 1073741824 , '-25769803776' ) ;
test( macro , '24' , -1073741824 , '-25769803776' ) ;
test( macro , '-24' , -1073741824 , '25769803776' ) ;
test( macro , '24' , 51676101935731 , '1240226446457544' ) ;
test( macro , '-24' , 51676101935731 , '-1240226446457544' ) ;
test( macro , '24' , -51676101935731 , '-1240226446457544' ) ;
test( macro , '-24' , -51676101935731 , '1240226446457544' ) ;
test( macro , '27' , 1 , '27' ) ;
test( macro , '-27' , 1 , '-27' ) ;
test( macro , '27' , -1 , '-27' ) ;
test( macro , '-27' , -1 , '27' ) ;
test( macro , '27' , 3 , '81' ) ;
test( macro , '-27' , 3 , '-81' ) ;
test( macro , '27' , -3 , '-81' ) ;
test( macro , '-27' , -3 , '81' ) ;
test( macro , '27' , 7 , '189' ) ;
test( macro , '-27' , 7 , '-189' ) ;
test( macro , '27' , -7 , '-189' ) ;
test( macro , '-27' , -7 , '189' ) ;
test( macro , '27' , 9 , '243' ) ;
test( macro , '-27' , 9 , '-243' ) ;
test( macro , '27' , -9 , '-243' ) ;
test( macro , '-27' , -9 , '243' ) ;
test( macro , '27' , 11 , '297' ) ;
test( macro , '-27' , 11 , '-297' ) ;
test( macro , '27' , -11 , '-297' ) ;
test( macro , '-27' , -11 , '297' ) ;
test( macro , '27' , 17 , '459' ) ;
test( macro , '-27' , 17 , '-459' ) ;
test( macro , '27' , -17 , '-459' ) ;
test( macro , '-27' , -17 , '459' ) ;
test( macro , '27' , 22 , '594' ) ;
test( macro , '-27' , 22 , '-594' ) ;
test( macro , '27' , -22 , '-594' ) ;
test( macro , '-27' , -22 , '594' ) ;
test( macro , '27' , 24 , '648' ) ;
test( macro , '-27' , 24 , '-648' ) ;
test( macro , '27' , -24 , '-648' ) ;
test( macro , '-27' , -24 , '648' ) ;
test( macro , '27' , 27 , '729' ) ;
test( macro , '-27' , 27 , '-729' ) ;
test( macro , '27' , -27 , '-729' ) ;
test( macro , '-27' , -27 , '729' ) ;
test( macro , '27' , 29 , '783' ) ;
test( macro , '-27' , 29 , '-783' ) ;
test( macro , '27' , -29 , '-783' ) ;
test( macro , '-27' , -29 , '783' ) ;
test( macro , '27' , 1234 , '33318' ) ;
test( macro , '-27' , 1234 , '-33318' ) ;
test( macro , '27' , -1234 , '-33318' ) ;
test( macro , '-27' , -1234 , '33318' ) ;
test( macro , '27' , 5678 , '153306' ) ;
test( macro , '-27' , 5678 , '-153306' ) ;
test( macro , '27' , -5678 , '-153306' ) ;
test( macro , '-27' , -5678 , '153306' ) ;
test( macro , '27' , 1073741824 , '28991029248' ) ;
test( macro , '-27' , 1073741824 , '-28991029248' ) ;
test( macro , '27' , -1073741824 , '-28991029248' ) ;
test( macro , '-27' , -1073741824 , '28991029248' ) ;
test( macro , '27' , 51676101935731 , '1395254752264737' ) ;
test( macro , '-27' , 51676101935731 , '-1395254752264737' ) ;
test( macro , '27' , -51676101935731 , '-1395254752264737' ) ;
test( macro , '-27' , -51676101935731 , '1395254752264737' ) ;
test( macro , '29' , 1 , '29' ) ;
test( macro , '-29' , 1 , '-29' ) ;
test( macro , '29' , -1 , '-29' ) ;
test( macro , '-29' , -1 , '29' ) ;
test( macro , '29' , 3 , '87' ) ;
test( macro , '-29' , 3 , '-87' ) ;
test( macro , '29' , -3 , '-87' ) ;
test( macro , '-29' , -3 , '87' ) ;
test( macro , '29' , 7 , '203' ) ;
test( macro , '-29' , 7 , '-203' ) ;
test( macro , '29' , -7 , '-203' ) ;
test( macro , '-29' , -7 , '203' ) ;
test( macro , '29' , 9 , '261' ) ;
test( macro , '-29' , 9 , '-261' ) ;
test( macro , '29' , -9 , '-261' ) ;
test( macro , '-29' , -9 , '261' ) ;
test( macro , '29' , 11 , '319' ) ;
test( macro , '-29' , 11 , '-319' ) ;
test( macro , '29' , -11 , '-319' ) ;
test( macro , '-29' , -11 , '319' ) ;
test( macro , '29' , 17 , '493' ) ;
test( macro , '-29' , 17 , '-493' ) ;
test( macro , '29' , -17 , '-493' ) ;
test( macro , '-29' , -17 , '493' ) ;
test( macro , '29' , 22 , '638' ) ;
test( macro , '-29' , 22 , '-638' ) ;
test( macro , '29' , -22 , '-638' ) ;
test( macro , '-29' , -22 , '638' ) ;
test( macro , '29' , 24 , '696' ) ;
test( macro , '-29' , 24 , '-696' ) ;
test( macro , '29' , -24 , '-696' ) ;
test( macro , '-29' , -24 , '696' ) ;
test( macro , '29' , 27 , '783' ) ;
test( macro , '-29' , 27 , '-783' ) ;
test( macro , '29' , -27 , '-783' ) ;
test( macro , '-29' , -27 , '783' ) ;
test( macro , '29' , 29 , '841' ) ;
test( macro , '-29' , 29 , '-841' ) ;
test( macro , '29' , -29 , '-841' ) ;
test( macro , '-29' , -29 , '841' ) ;
test( macro , '29' , 1234 , '35786' ) ;
test( macro , '-29' , 1234 , '-35786' ) ;
test( macro , '29' , -1234 , '-35786' ) ;
test( macro , '-29' , -1234 , '35786' ) ;
test( macro , '29' , 5678 , '164662' ) ;
test( macro , '-29' , 5678 , '-164662' ) ;
test( macro , '29' , -5678 , '-164662' ) ;
test( macro , '-29' , -5678 , '164662' ) ;
test( macro , '29' , 1073741824 , '31138512896' ) ;
test( macro , '-29' , 1073741824 , '-31138512896' ) ;
test( macro , '29' , -1073741824 , '-31138512896' ) ;
test( macro , '-29' , -1073741824 , '31138512896' ) ;
test( macro , '29' , 51676101935731 , '1498606956136199' ) ;
test( macro , '-29' , 51676101935731 , '-1498606956136199' ) ;
test( macro , '29' , -51676101935731 , '-1498606956136199' ) ;
test( macro , '-29' , -51676101935731 , '1498606956136199' ) ;
test( macro , '1234' , 1 , '1234' ) ;
test( macro , '-1234' , 1 , '-1234' ) ;
test( macro , '1234' , -1 , '-1234' ) ;
test( macro , '-1234' , -1 , '1234' ) ;
test( macro , '1234' , 3 , '3702' ) ;
test( macro , '-1234' , 3 , '-3702' ) ;
test( macro , '1234' , -3 , '-3702' ) ;
test( macro , '-1234' , -3 , '3702' ) ;
test( macro , '1234' , 7 , '8638' ) ;
test( macro , '-1234' , 7 , '-8638' ) ;
test( macro , '1234' , -7 , '-8638' ) ;
test( macro , '-1234' , -7 , '8638' ) ;
test( macro , '1234' , 9 , '11106' ) ;
test( macro , '-1234' , 9 , '-11106' ) ;
test( macro , '1234' , -9 , '-11106' ) ;
test( macro , '-1234' , -9 , '11106' ) ;
test( macro , '1234' , 11 , '13574' ) ;
test( macro , '-1234' , 11 , '-13574' ) ;
test( macro , '1234' , -11 , '-13574' ) ;
test( macro , '-1234' , -11 , '13574' ) ;
test( macro , '1234' , 17 , '20978' ) ;
test( macro , '-1234' , 17 , '-20978' ) ;
test( macro , '1234' , -17 , '-20978' ) ;
test( macro , '-1234' , -17 , '20978' ) ;
test( macro , '1234' , 22 , '27148' ) ;
test( macro , '-1234' , 22 , '-27148' ) ;
test( macro , '1234' , -22 , '-27148' ) ;
test( macro , '-1234' , -22 , '27148' ) ;
test( macro , '1234' , 24 , '29616' ) ;
test( macro , '-1234' , 24 , '-29616' ) ;
test( macro , '1234' , -24 , '-29616' ) ;
test( macro , '-1234' , -24 , '29616' ) ;
test( macro , '1234' , 27 , '33318' ) ;
test( macro , '-1234' , 27 , '-33318' ) ;
test( macro , '1234' , -27 , '-33318' ) ;
test( macro , '-1234' , -27 , '33318' ) ;
test( macro , '1234' , 29 , '35786' ) ;
test( macro , '-1234' , 29 , '-35786' ) ;
test( macro , '1234' , -29 , '-35786' ) ;
test( macro , '-1234' , -29 , '35786' ) ;
test( macro , '1234' , 1234 , '1522756' ) ;
test( macro , '-1234' , 1234 , '-1522756' ) ;
test( macro , '1234' , -1234 , '-1522756' ) ;
test( macro , '-1234' , -1234 , '1522756' ) ;
test( macro , '1234' , 5678 , '7006652' ) ;
test( macro , '-1234' , 5678 , '-7006652' ) ;
test( macro , '1234' , -5678 , '-7006652' ) ;
test( macro , '-1234' , -5678 , '7006652' ) ;
test( macro , '1234' , 1073741824 , '1324997410816' ) ;
test( macro , '-1234' , 1073741824 , '-1324997410816' ) ;
test( macro , '1234' , -1073741824 , '-1324997410816' ) ;
test( macro , '-1234' , -1073741824 , '1324997410816' ) ;
test( macro , '1234' , 51676101935731 , '63768309788692054' ) ;
test( macro , '-1234' , 51676101935731 , '-63768309788692054' ) ;
test( macro , '1234' , -51676101935731 , '-63768309788692054' ) ;
test( macro , '-1234' , -51676101935731 , '63768309788692054' ) ;
test( macro , '5678' , 1 , '5678' ) ;
test( macro , '-5678' , 1 , '-5678' ) ;
test( macro , '5678' , -1 , '-5678' ) ;
test( macro , '-5678' , -1 , '5678' ) ;
test( macro , '5678' , 3 , '17034' ) ;
test( macro , '-5678' , 3 , '-17034' ) ;
test( macro , '5678' , -3 , '-17034' ) ;
test( macro , '-5678' , -3 , '17034' ) ;
test( macro , '5678' , 7 , '39746' ) ;
test( macro , '-5678' , 7 , '-39746' ) ;
test( macro , '5678' , -7 , '-39746' ) ;
test( macro , '-5678' , -7 , '39746' ) ;
test( macro , '5678' , 9 , '51102' ) ;
test( macro , '-5678' , 9 , '-51102' ) ;
test( macro , '5678' , -9 , '-51102' ) ;
test( macro , '-5678' , -9 , '51102' ) ;
test( macro , '5678' , 11 , '62458' ) ;
test( macro , '-5678' , 11 , '-62458' ) ;
test( macro , '5678' , -11 , '-62458' ) ;
test( macro , '-5678' , -11 , '62458' ) ;
test( macro , '5678' , 17 , '96526' ) ;
test( macro , '-5678' , 17 , '-96526' ) ;
test( macro , '5678' , -17 , '-96526' ) ;
test( macro , '-5678' , -17 , '96526' ) ;
test( macro , '5678' , 22 , '124916' ) ;
test( macro , '-5678' , 22 , '-124916' ) ;
test( macro , '5678' , -22 , '-124916' ) ;
test( macro , '-5678' , -22 , '124916' ) ;
test( macro , '5678' , 24 , '136272' ) ;
test( macro , '-5678' , 24 , '-136272' ) ;
test( macro , '5678' , -24 , '-136272' ) ;
test( macro , '-5678' , -24 , '136272' ) ;
test( macro , '5678' , 27 , '153306' ) ;
test( macro , '-5678' , 27 , '-153306' ) ;
test( macro , '5678' , -27 , '-153306' ) ;
test( macro , '-5678' , -27 , '153306' ) ;
test( macro , '5678' , 29 , '164662' ) ;
test( macro , '-5678' , 29 , '-164662' ) ;
test( macro , '5678' , -29 , '-164662' ) ;
test( macro , '-5678' , -29 , '164662' ) ;
test( macro , '5678' , 1234 , '7006652' ) ;
test( macro , '-5678' , 1234 , '-7006652' ) ;
test( macro , '5678' , -1234 , '-7006652' ) ;
test( macro , '-5678' , -1234 , '7006652' ) ;
test( macro , '5678' , 5678 , '32239684' ) ;
test( macro , '-5678' , 5678 , '-32239684' ) ;
test( macro , '5678' , -5678 , '-32239684' ) ;
test( macro , '-5678' , -5678 , '32239684' ) ;
test( macro , '5678' , 1073741824 , '6096706076672' ) ;
test( macro , '-5678' , 1073741824 , '-6096706076672' ) ;
test( macro , '5678' , -1073741824 , '-6096706076672' ) ;
test( macro , '-5678' , -1073741824 , '6096706076672' ) ;
test( macro , '5678' , 51676101935731 , '293416906791080618' ) ;
test( macro , '-5678' , 51676101935731 , '-293416906791080618' ) ;
test( macro , '5678' , -51676101935731 , '-293416906791080618' ) ;
test( macro , '-5678' , -51676101935731 , '293416906791080618' ) ;
test( macro , '1073741824' , 1 , '1073741824' ) ;
test( macro , '-1073741824' , 1 , '-1073741824' ) ;
test( macro , '1073741824' , -1 , '-1073741824' ) ;
test( macro , '-1073741824' , -1 , '1073741824' ) ;
test( macro , '1073741824' , 3 , '3221225472' ) ;
test( macro , '-1073741824' , 3 , '-3221225472' ) ;
test( macro , '1073741824' , -3 , '-3221225472' ) ;
test( macro , '-1073741824' , -3 , '3221225472' ) ;
test( macro , '1073741824' , 7 , '7516192768' ) ;
test( macro , '-1073741824' , 7 , '-7516192768' ) ;
test( macro , '1073741824' , -7 , '-7516192768' ) ;
test( macro , '-1073741824' , -7 , '7516192768' ) ;
test( macro , '1073741824' , 9 , '9663676416' ) ;
test( macro , '-1073741824' , 9 , '-9663676416' ) ;
test( macro , '1073741824' , -9 , '-9663676416' ) ;
test( macro , '-1073741824' , -9 , '9663676416' ) ;
test( macro , '1073741824' , 11 , '11811160064' ) ;
test( macro , '-1073741824' , 11 , '-11811160064' ) ;
test( macro , '1073741824' , -11 , '-11811160064' ) ;
test( macro , '-1073741824' , -11 , '11811160064' ) ;
test( macro , '1073741824' , 17 , '18253611008' ) ;
test( macro , '-1073741824' , 17 , '-18253611008' ) ;
test( macro , '1073741824' , -17 , '-18253611008' ) ;
test( macro , '-1073741824' , -17 , '18253611008' ) ;
test( macro , '1073741824' , 22 , '23622320128' ) ;
test( macro , '-1073741824' , 22 , '-23622320128' ) ;
test( macro , '1073741824' , -22 , '-23622320128' ) ;
test( macro , '-1073741824' , -22 , '23622320128' ) ;
test( macro , '1073741824' , 24 , '25769803776' ) ;
test( macro , '-1073741824' , 24 , '-25769803776' ) ;
test( macro , '1073741824' , -24 , '-25769803776' ) ;
test( macro , '-1073741824' , -24 , '25769803776' ) ;
test( macro , '1073741824' , 27 , '28991029248' ) ;
test( macro , '-1073741824' , 27 , '-28991029248' ) ;
test( macro , '1073741824' , -27 , '-28991029248' ) ;
test( macro , '-1073741824' , -27 , '28991029248' ) ;
test( macro , '1073741824' , 29 , '31138512896' ) ;
test( macro , '-1073741824' , 29 , '-31138512896' ) ;
test( macro , '1073741824' , -29 , '-31138512896' ) ;
test( macro , '-1073741824' , -29 , '31138512896' ) ;
test( macro , '1073741824' , 1234 , '1324997410816' ) ;
test( macro , '-1073741824' , 1234 , '-1324997410816' ) ;
test( macro , '1073741824' , -1234 , '-1324997410816' ) ;
test( macro , '-1073741824' , -1234 , '1324997410816' ) ;
test( macro , '1073741824' , 5678 , '6096706076672' ) ;
test( macro , '-1073741824' , 5678 , '-6096706076672' ) ;
test( macro , '1073741824' , -5678 , '-6096706076672' ) ;
test( macro , '-1073741824' , -5678 , '6096706076672' ) ;
test( macro , '1073741824' , 1073741824 , '1152921504606846976' ) ;
test( macro , '-1073741824' , 1073741824 , '-1152921504606846976' ) ;
test( macro , '1073741824' , -1073741824 , '-1152921504606846976' ) ;
test( macro , '-1073741824' , -1073741824 , '1152921504606846976' ) ;
test( macro , '1073741824' , 51676101935731 , '55486791949681734713344' ) ;
test( macro , '-1073741824' , 51676101935731 , '-55486791949681734713344' ) ;
test( macro , '1073741824' , -51676101935731 , '-55486791949681734713344' ) ;
test( macro , '-1073741824' , -51676101935731 , '55486791949681734713344' ) ;
test( macro , '51676101935731' , 1 , '51676101935731' ) ;
test( macro , '-51676101935731' , 1 , '-51676101935731' ) ;
test( macro , '51676101935731' , -1 , '-51676101935731' ) ;
test( macro , '-51676101935731' , -1 , '51676101935731' ) ;
test( macro , '51676101935731' , 3 , '155028305807193' ) ;
test( macro , '-51676101935731' , 3 , '-155028305807193' ) ;
test( macro , '51676101935731' , -3 , '-155028305807193' ) ;
test( macro , '-51676101935731' , -3 , '155028305807193' ) ;
test( macro , '51676101935731' , 7 , '361732713550117' ) ;
test( macro , '-51676101935731' , 7 , '-361732713550117' ) ;
test( macro , '51676101935731' , -7 , '-361732713550117' ) ;
test( macro , '-51676101935731' , -7 , '361732713550117' ) ;
test( macro , '51676101935731' , 9 , '465084917421579' ) ;
test( macro , '-51676101935731' , 9 , '-465084917421579' ) ;
test( macro , '51676101935731' , -9 , '-465084917421579' ) ;
test( macro , '-51676101935731' , -9 , '465084917421579' ) ;
test( macro , '51676101935731' , 11 , '568437121293041' ) ;
test( macro , '-51676101935731' , 11 , '-568437121293041' ) ;
test( macro , '51676101935731' , -11 , '-568437121293041' ) ;
test( macro , '-51676101935731' , -11 , '568437121293041' ) ;
test( macro , '51676101935731' , 17 , '878493732907427' ) ;
test( macro , '-51676101935731' , 17 , '-878493732907427' ) ;
test( macro , '51676101935731' , -17 , '-878493732907427' ) ;
test( macro , '-51676101935731' , -17 , '878493732907427' ) ;
test( macro , '51676101935731' , 22 , '1136874242586082' ) ;
test( macro , '-51676101935731' , 22 , '-1136874242586082' ) ;
test( macro , '51676101935731' , -22 , '-1136874242586082' ) ;
test( macro , '-51676101935731' , -22 , '1136874242586082' ) ;
test( macro , '51676101935731' , 24 , '1240226446457544' ) ;
test( macro , '-51676101935731' , 24 , '-1240226446457544' ) ;
test( macro , '51676101935731' , -24 , '-1240226446457544' ) ;
test( macro , '-51676101935731' , -24 , '1240226446457544' ) ;
test( macro , '51676101935731' , 27 , '1395254752264737' ) ;
test( macro , '-51676101935731' , 27 , '-1395254752264737' ) ;
test( macro , '51676101935731' , -27 , '-1395254752264737' ) ;
test( macro , '-51676101935731' , -27 , '1395254752264737' ) ;
test( macro , '51676101935731' , 29 , '1498606956136199' ) ;
test( macro , '-51676101935731' , 29 , '-1498606956136199' ) ;
test( macro , '51676101935731' , -29 , '-1498606956136199' ) ;
test( macro , '-51676101935731' , -29 , '1498606956136199' ) ;
test( macro , '51676101935731' , 1234 , '63768309788692054' ) ;
test( macro , '-51676101935731' , 1234 , '-63768309788692054' ) ;
test( macro , '51676101935731' , -1234 , '-63768309788692054' ) ;
test( macro , '-51676101935731' , -1234 , '63768309788692054' ) ;
test( macro , '51676101935731' , 5678 , '293416906791080618' ) ;
test( macro , '-51676101935731' , 5678 , '-293416906791080618' ) ;
test( macro , '51676101935731' , -5678 , '-293416906791080618' ) ;
test( macro , '-51676101935731' , -5678 , '293416906791080618' ) ;
test( macro , '51676101935731' , 1073741824 , '55486791949681734713344' ) ;
test( macro , '-51676101935731' , 1073741824 , '-55486791949681734713344' ) ;
test( macro , '51676101935731' , -1073741824 , '-55486791949681734713344' ) ;
test( macro , '-51676101935731' , -1073741824 , '55486791949681734713344' ) ;
test( macro , '51676101935731' , 51676101935731 , '2670419511272061205254504361' ) ;
test( macro , '-51676101935731' , 51676101935731 , '-2670419511272061205254504361' ) ;
test( macro , '51676101935731' , -51676101935731 , '-2670419511272061205254504361' ) ;
test( macro , '-51676101935731' , -51676101935731 , '2670419511272061205254504361' ) ;
test( macro , '717897987691852588770249' , 1 , '717897987691852588770249' ) ;
test( macro , '-717897987691852588770249' , 1 , '-717897987691852588770249' ) ;
test( macro , '717897987691852588770249' , -1 , '-717897987691852588770249' ) ;
test( macro , '-717897987691852588770249' , -1 , '717897987691852588770249' ) ;
test( macro , '717897987691852588770249' , 3 , '2153693963075557766310747' ) ;
test( macro , '-717897987691852588770249' , 3 , '-2153693963075557766310747' ) ;
test( macro , '717897987691852588770249' , -3 , '-2153693963075557766310747' ) ;
test( macro , '-717897987691852588770249' , -3 , '2153693963075557766310747' ) ;
test( macro , '717897987691852588770249' , 7 , '5025285913842968121391743' ) ;
test( macro , '-717897987691852588770249' , 7 , '-5025285913842968121391743' ) ;
test( macro , '717897987691852588770249' , -7 , '-5025285913842968121391743' ) ;
test( macro , '-717897987691852588770249' , -7 , '5025285913842968121391743' ) ;
test( macro , '717897987691852588770249' , 9 , '6461081889226673298932241' ) ;
test( macro , '-717897987691852588770249' , 9 , '-6461081889226673298932241' ) ;
test( macro , '717897987691852588770249' , -9 , '-6461081889226673298932241' ) ;
test( macro , '-717897987691852588770249' , -9 , '6461081889226673298932241' ) ;
test( macro , '717897987691852588770249' , 11 , '7896877864610378476472739' ) ;
test( macro , '-717897987691852588770249' , 11 , '-7896877864610378476472739' ) ;
test( macro , '717897987691852588770249' , -11 , '-7896877864610378476472739' ) ;
test( macro , '-717897987691852588770249' , -11 , '7896877864610378476472739' ) ;
test( macro , '717897987691852588770249' , 17 , '12204265790761494009094233' ) ;
test( macro , '-717897987691852588770249' , 17 , '-12204265790761494009094233' ) ;
test( macro , '717897987691852588770249' , -17 , '-12204265790761494009094233' ) ;
test( macro , '-717897987691852588770249' , -17 , '12204265790761494009094233' ) ;
test( macro , '717897987691852588770249' , 22 , '15793755729220756952945478' ) ;
test( macro , '-717897987691852588770249' , 22 , '-15793755729220756952945478' ) ;
test( macro , '717897987691852588770249' , -22 , '-15793755729220756952945478' ) ;
test( macro , '-717897987691852588770249' , -22 , '15793755729220756952945478' ) ;
test( macro , '717897987691852588770249' , 24 , '17229551704604462130485976' ) ;
test( macro , '-717897987691852588770249' , 24 , '-17229551704604462130485976' ) ;
test( macro , '717897987691852588770249' , -24 , '-17229551704604462130485976' ) ;
test( macro , '-717897987691852588770249' , -24 , '17229551704604462130485976' ) ;
test( macro , '717897987691852588770249' , 27 , '19383245667680019896796723' ) ;
test( macro , '-717897987691852588770249' , 27 , '-19383245667680019896796723' ) ;
test( macro , '717897987691852588770249' , -27 , '-19383245667680019896796723' ) ;
test( macro , '-717897987691852588770249' , -27 , '19383245667680019896796723' ) ;
test( macro , '717897987691852588770249' , 29 , '20819041643063725074337221' ) ;
test( macro , '-717897987691852588770249' , 29 , '-20819041643063725074337221' ) ;
test( macro , '717897987691852588770249' , -29 , '-20819041643063725074337221' ) ;
test( macro , '-717897987691852588770249' , -29 , '20819041643063725074337221' ) ;
test( macro , '717897987691852588770249' , 1234 , '885886116811746094542487266' ) ;
test( macro , '-717897987691852588770249' , 1234 , '-885886116811746094542487266' ) ;
test( macro , '717897987691852588770249' , -1234 , '-885886116811746094542487266' ) ;
test( macro , '-717897987691852588770249' , -1234 , '885886116811746094542487266' ) ;
test( macro , '717897987691852588770249' , 5678 , '4076224774114338999037473822' ) ;
test( macro , '-717897987691852588770249' , 5678 , '-4076224774114338999037473822' ) ;
test( macro , '717897987691852588770249' , -5678 , '-4076224774114338999037473822' ) ;
test( macro , '-717897987691852588770249' , -5678 , '4076224774114338999037473822' ) ;
test( macro , '717897987691852588770249' , 1073741824 , '770837094750179348605289078194176' ) ;
test( macro , '-717897987691852588770249' , 1073741824 , '-770837094750179348605289078194176' ) ;
test( macro , '717897987691852588770249' , -1073741824 , '-770837094750179348605289078194176' ) ;
test( macro , '-717897987691852588770249' , -1073741824 , '770837094750179348605289078194176' ) ;
test( macro , '717897987691852588770249' , 51676101935731 , '37098169591420333175287767861722867019' ) ;
test( macro , '-717897987691852588770249' , 51676101935731 , '-37098169591420333175287767861722867019' ) ;
test( macro , '717897987691852588770249' , -51676101935731 , '-37098169591420333175287767861722867019' ) ;
test( macro , '-717897987691852588770249' , -51676101935731 , '37098169591420333175287767861722867019' ) ;