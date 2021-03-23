# Usage

The code needs a ES2015+ polyfill to work, for example
[regenerator-runtime/runtime](https://babeljs.io/docs/usage/polyfill).
```js
require( 'regenerator-runtime/runtime' ) ;
// or
import 'regenerator-runtime/runtime.js' ;
```

Then
```js
const integer = require( '@aureooms/js-integer' ) ;
// or
import * as integer from '@aureooms/js-integer' ;
```

## Notation

The Notation tries to emulate the notation in [bn.js](https://github.com/indutny/bn.js).

## Instructions

Prefixes/postfixes are put in parens at the of the line.


### Initialization

* [x] `ZZ.from(object, base = undefined, is_negative = 0)` (Base is guessed depending on object type if `undefined`, default is 10.)

### Copying

* [x] `a.clone()` - clone number
* [x] `a.move(b)` - copy `a`'s' properties to `b`

> Note that we plan to be pure in the future.


### Comparison

* [x] `a.cmp(b)` - compare numbers and return `-1` (a `<` b), `0` (a `=` b), or `1` (a `>` b) depending on the comparison result (`cmpn`)
* [x] `a.lt(b)` - `a` less than `b` (`n`)
* [x] `a.le(b)` - `a` less than or equals `b` (`n`)
* [x] `a.gt(b)` - `a` greater than `b` (`n`)
* [x] `a.ge(b)` - `a` greater than or equals `b` (`n`)
* [x] `a.eq(b)` - `a` equals `b` (`n`)


### Integer Arithmetic

* [x] `a.negate()` - negate sign (`ineg` in bn.js)
* [x] `a.opposite()` - negate sign (`neg` in bn.js)
* [x] `a.abs()` - absolute value (`i`)

* [x] `a.add(b)` - addition (`i`, `n`, `in`)
* [x] `a.sub(b)` - subtraction (`i`, `n`, `in`)
* [x] `a.mul(b)` - multiply (`i`, `n`, `in`)
* [x] `a.square()` - square (`i`, `sqr` in bn.js)
* [x] `a.pow(b)` - raise `a` to the power of `b` (`i`, `n`, `in`)

* [x] `[q,r] = a.divmod(b)` - divide (`i`, `n`)
* [x] `q = a.div(b)` - division quotient (`u`, `n`)
* [x] `r = a.mod(b)` - division remained (`u`, `n`) (but no `umodn`)
* [x] `q = a.divround(b)` - rounded division

> In the future, remove in-place operations. They make very little sense except
> in a few exceptional cases like increment/decrement. If the result is too big
> to fit in the original array we will have to resize it to make it fit anyway.
> Maybe little endianess would save the day in that case. Who knows...
> Could use an immutable flag that is set as soon as a shallow copy is made?
> Then all operations could try to run in-place if no shallow copy exists.

### Greatest Common Divisor

* [x] `a.gcd(b)` - GCD
* [x] `a.egcd(b)` - Extended GCD results (`{ gcd: ..., x: ..., y: ..., u: ..., v: ... }`)


### Modular Arithmetic

* [ ] `ZZ(n)` - integers modulo `n`
* [ ] `ZZ(n).get(3)` - `returns the equivalence class [3]_n`
* [ ] `a.add(b)` - no comment
* [ ] `a.sub(b)` - no comment
* [ ] `a.mul(b)` - no comment
* [ ] `a.inv()` - inverse `a` modulo `n`
* [ ] `a.square()` - no comment
* [ ] `a.pow(b)` - no comment


### Bit operations

We should really have two packages:

  - One for immutable, keyable, hashable integers.
  - One for safe in-place word array manipulation.

There are multiple reasons for this:

  - Some bit operations do not really care about endianess
  - It only works efficiently with a radix that is a power of 2

Q: Does it make any sense to have those operations defined for unbounded
integers?

The following will be implemented in a package to come.

* [ ] `a.or(b)` - or (`i`, `u`, `iu`)
* [ ] `a.and(b)` - and (`i`, `u`, `iu`, `andln`) (NOTE: `andln` is going to be replaced with `andn` in future)
* [ ] `a.xor(b)` - xor (`i`, `u`, `iu`)
* [ ] `a.setn(b)` - set specified bit to `1`
* [ ] `a.shln(b)` - shift left (`i`, `u`, `iu`)
* [ ] `a.shrn(b)` - shift right (`i`, `u`, `iu`)
* [ ] `a.testn(b)` - test if specified bit is set
* [ ] `a.maskn(b)` - clear bits with indexes higher or equal to `b` (`i`)
* [ ] `a.bincn(b)` - add `1 << b` to the number
* [ ] `a.notn(w)` - not (for the width specified by `w`) (`i`)

### Test

* [x] `a.sign()` - return -1, 0, 1
* [x] `a.iszero()` - no comments
* [x] `a.isone()` - no comments
* [x] `a.ispositive()` - no comments
* [x] `a.isnegative()` - no comments
* [x] `a.isnonnegative()` - no comments
* [x] `a.isnonpositive()` - no comments
* [x] `a.iseven()` - no comments
* [x] `a.isodd()` - no comments
* [x] `a.divides(b)` - no comments

### Utilities

* [x] `ZZ.has(object)` - returns true if the supplied `object` is an integer.
* [x] `ZZ.max(a, b)` - return `a` if `a` larger than `b`.
* [x] `ZZ.min(a, b)` - return `a` if `a` smaller than `b`.
* [ ] `a.bitLength()` - get number of bits occupied
* [ ] `a.zeroBits()` - return number of less-significant consequent zero bits (example: `1010000` has 4 zero bits)
* [ ] `a.byteLength()` - return number of bytes occupied
* [ ] `a.toTwos(width)` - convert to two's complement representation, where `width` is bit width
* [ ] `a.fromTwos(width)` - convert from two's complement representation, where `width` is the bit width

### Conversion
* [x] `a.toString(base=10)` - convert to base-string (No zero padding, this is up to you)
* [x] `a.bin()` - alias for `a.toString(2)`
* [x] `a.oct()` - alias for `a.toString(8)`
* [x] `a.hex()` - alias for `a.toString(16)`
* [x] `d = a.digits(base=10)` - returns little endian array of digits in given base so that d[0] is the first digit, d[1] the second, etc.
* [x] `a.bin()` - alias for `a.digits(2)`.
* [x] `a.valueOf()` - convert to Javascript Number (limited to 53 bits `toNumber` in bn.js)
* [x] `a.toJSON()` - convert to JSON compatible hex string (alias of `toString(16)`)
* [ ] `a.to(type, endian, length)` - convert to an instance of `type`, which must behave like an `Array` (`toArrayLike` in bn.js)
* [ ] `a.toArray(endian, length)` - convert to byte `Array`, and optionally zero pad to length, throwing if already exceeding
* [ ] `a.toBuffer(endian, length)` - convert to Node.js Buffer (if available). For compatibility with browserify and similar tools, use this instead: `a.toArrayLike(Buffer, endian, length)`
