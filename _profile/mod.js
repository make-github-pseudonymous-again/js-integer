console.time('prepare');
require('@babel/polyfill');
const crypto = require('crypto');
const ArgumentParser = require('argparse').ArgumentParser;
//const itertools = require('@aureooms/js-itertools');
const XorShift128Plus = require('xorshift.js').XorShift128Plus;
const { THRESHOLD_MUL_TOOM22 , THRESHOLD_DIV_DC } = require('@aureooms/js-integer-big-endian');
const { ZZ , DEFAULT_DISPLAY_BASE , DEFAULT_REPRESENTATION_BASE } = require('..');

const parser = new ArgumentParser();
parser.addArgument(['M'], {defaultValue: 1000, nargs: '?'});
parser.addArgument(['-N'], {defaultValue: 1000});
parser.addArgument(['-s'], {defaultValue: process.env.SEED || crypto.randomBytes(16).toString('hex')});
const args = parser.parseArgs();
const M = args.M;
const N = args.N;
const seed = args.s;

console.log('operand size (bytes):', M);
console.log('number of operations:', N);
console.log('seed:', seed);

const prng = new XorShift128Plus(seed);
const _x = prng.randomBytes(M).toString('hex');
console.log('_x:', _x);
const _y = prng.randomBytes(M).toString('hex');
console.log('_y:', _y);

let x = ZZ.from(_x, 16);
const y = ZZ.from(_y, 16);
x.iadd(y.square());

console.log('limbs x:', x.limbs.length);
console.log('limbs y:', y.limbs.length);
console.log('DEFAULT_DISPLAY_BASE:', DEFAULT_DISPLAY_BASE);
console.log('DEFAULT_REPRESENTATION_BASE:', DEFAULT_REPRESENTATION_BASE);
console.log('THRESHOLD_MUL_TOOM22:', THRESHOLD_MUL_TOOM22);
console.log('THRESHOLD_DIV_DC:', THRESHOLD_DIV_DC);

console.timeEnd('prepare');

console.time('loop');
let z;
for (let k = 0; k < N; ++k) {
 z = x.mod(y);
}
console.timeEnd('loop');

// eslint-disable-next-line no-self-compare
console.log(z.toString(16) === z.toString(16) ? 'OK' : 'ERROR: NOT OK');
