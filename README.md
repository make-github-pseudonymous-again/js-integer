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

[![License](https://img.shields.io/github/license/aureooms/js-integer.svg)](https://raw.githubusercontent.com/aureooms/js-integer/master/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-integer.svg)](https://www.npmjs.org/package/@aureooms/js-integer)
[![Build](https://img.shields.io/travis/aureooms/js-integer/master.svg)](https://travis-ci.org/aureooms/js-integer/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-integer.svg)](https://david-dm.org/aureooms/js-integer)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-integer.svg)](https://david-dm.org/aureooms/js-integer?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-integer.svg)](https://github.com/aureooms/js-integer/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-integer.svg)](https://www.npmjs.org/package/@aureooms/js-integer)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-integer.svg)](https://codeclimate.com/github/aureooms/js-integer/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-integer.svg)](https://codeclimate.com/github/aureooms/js-integer/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-integer/master.svg)](https://codecov.io/gh/aureooms/js-integer)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-integer.svg)](https://codeclimate.com/github/aureooms/js-integer/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-integer/badge.svg)](https://aureooms.github.io/js-integer/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-integer)](https://bundlephobia.com/result?p=@aureooms/js-integer)

## Children

The current underlying implementation uses big endian order. There is no
alternative for the moment.

  - [x] [@aureooms/js-integer-big-endian](https://github.com/aureooms/js-integer-big-endian)
  - [ ] [@aureooms/js-integer-little-endian](https://github.com/aureooms/js-integer-little-endian)

## Reference

 - [The GNU Multiple Precision Arithmetic Library](https://gmplib.org/)
 - https://gmplib.org/gmp-man-6.0.0a.pdf
 - https://en.wikipedia.org/wiki/Sch%C3%B6nhage%E2%80%93Strassen_algorithm
 - [Similar work on GitHub](https://github.com/search?l=JavaScript&o=desc&q=bigint&s=stars&type=Repositories)
