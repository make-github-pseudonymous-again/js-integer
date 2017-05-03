The code needs a ES2015+ polyfill to work, for example
[babel-polyfill](https://babeljs.io/docs/usage/polyfill).
```js
require( 'babel-polyfill' ) ;
// or
import 'babel-polyfill' ;
```

Then
```js
const integer = require( '@aureooms/js-integer' ) ;
// or
import * as integer from '@aureooms/js-integer' ;
```
