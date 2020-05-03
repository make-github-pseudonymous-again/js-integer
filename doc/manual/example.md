# Examples

> More examples in [the test files](https://github.com/aureooms/js-integer/tree/master/test/src).

```js
import { ZZ } from '@aureooms/js-integer' ;

const a = ZZ.from( 'dead' , 16 ) ;
const b = ZZ.from( '101010' , 2 ) ;

const c = a.add(b);
console.log(c.toString()); // 57047
```

**Note**: decimals are not supported in this library.
