console.time('prepare');
require('@babel/polyfill');
const crypto = require('crypto');
const ArgumentParser = require('argparse').ArgumentParser;
// Const itertools = require('@aureooms/js-itertools');
const XorShift128Plus = require('xorshift.js').XorShift128Plus;
const {ZZ, DEFAULT_DISPLAY_BASE, DEFAULT_REPRESENTATION_BASE} = require('..');
// Const BN = require('bn.js');

const parser = new ArgumentParser();
parser.addArgument(['M'], {defaultValue: 1000, nargs: '?'});
parser.addArgument(['-N'], {defaultValue: 1000});
parser.addArgument(['-s'], {
	defaultValue: process.env.SEED || crypto.randomBytes(16).toString('hex'),
});
const args = parser.parseArgs();
const M = args.M;
const N = args.N;
const seed = args.s;

console.log('operand size (bytes):', M);
console.log('number of operations:', N);
console.log('seed:', seed);

const MAX_PRINT_DIGITS = 79;
const _show = (_x) =>
	_x.length <= MAX_PRINT_DIGITS
		? _x
		: _x.slice(0, (MAX_PRINT_DIGITS - 3) / 2) +
		  '...' +
		  _x.slice(_x.length - (MAX_PRINT_DIGITS - 3) / 2);

const prng = new XorShift128Plus(seed);
const _x = prng.randomBytes(M).toString('hex');
console.log('_x:', _show(_x));
const _y = prng.randomBytes(M).toString('hex');
console.log('_y:', _show(_y));

const x = ZZ.from(_x, 16);
const y = ZZ.from(_y, 16);
// Let x = BigInt('0x'+_x) ;
// const y = BigInt('0x'+_y) ;
// let x = new BN(_x,16) ;
// const y = new BN(_y,16) ;
let z = x;

console.log('limbs x:', x.limbs.length);
console.log('limbs y:', y.limbs.length);
console.log('DEFAULT_DISPLAY_BASE:', DEFAULT_DISPLAY_BASE);
console.log('DEFAULT_REPRESENTATION_BASE:', DEFAULT_REPRESENTATION_BASE);

console.timeEnd('prepare');

console.time('loop');
for (let k = 0; k < N; ++k) {
	// X *= y;
	z = z.add(y);
	z = z.sub(y);
	// X = x + y;
	// x = x - y;
}

console.timeEnd('loop');

// eslint-disable-next-line no-self-compare
console.log(z.toString(16) === z.toString(16) ? 'OK' : 'ERROR: NOT OK');
