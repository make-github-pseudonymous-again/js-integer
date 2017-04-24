[@aureooms/js-integer](https://aureooms.github.io/js-integer)
==

<img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Latex_integers.svg" width="864">

Integers for JavaScript.
See [docs](https://aureooms.github.io/js-integer).
Parent is [@aureooms/js-algorithms](https://github.com/aureooms/js-algorithms).

```js
import { ZZ } from '@aureooms/js-integer' ; 
const a = ZZ.from( '2983928392839289387' ) ;
const b = ZZ.from( '-302940923028393' ) ;
a.mul( b ).toString( ) ; // '-903954021577363596419770144565091'
```

[![License](https://img.shields.io/github/license/aureooms/js-integer.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-integer/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-integer.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-integer)
[![Build Status](https://img.shields.io/travis/aureooms/js-integer.svg?style=flat)](https://travis-ci.org/aureooms/js-integer)
[![Coverage Status](https://img.shields.io/coveralls/aureooms/js-integer.svg?style=flat)](https://coveralls.io/r/aureooms/js-integer)
[![Dependencies Status](https://img.shields.io/david/aureooms/js-integer.svg?style=flat)](https://david-dm.org/aureooms/js-integer#info=dependencies)
[![devDependencies Status](https://img.shields.io/david/dev/aureooms/js-integer.svg?style=flat)](https://david-dm.org/aureooms/js-integer#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/aureooms/js-integer.svg?style=flat)](https://codeclimate.com/github/aureooms/js-integer)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-integer.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-integer)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-integer.svg?style=flat)](https://github.com/aureooms/js-integer/issues)
[![Documentation](https://aureooms.github.io/js-integer/badge.svg)](https://aureooms.github.io/js-integer/source.html)

## Children

The current underlying implementation uses big endian order. There is no
alternative for the moment.

  - [x] [@aureooms/js-integer-big-endian](https://github.com/aureooms/js-integer-big-endian)
  - [ ] [@aureooms/js-integer-little-endian](https://github.com/aureooms/js-integer-little-endian)


## Reference

 - [The GNU Multiple Precision Arithmetic Library](https://gmplib.org/)
 - https://gmplib.org/gmp-man-6.0.0a.pdf
 - https://en.wikipedia.org/wiki/Sch%C3%B6nhage%E2%80%93Strassen_algorithm
