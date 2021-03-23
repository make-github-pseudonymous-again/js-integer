console.time('prepare');
require('@babel/polyfill');
const crypto = require('crypto');
const ArgumentParser = require('argparse').ArgumentParser;
//const itertools = require('@aureooms/js-itertools');
const XorShift128Plus = require('xorshift.js').XorShift128Plus;
const { ZZ } = require('..');
//const BN = require('bn.js');

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
//let x = BigInt('0x'+_x) ;
//const y = BigInt('0x'+_y) ;
//let x = new BN(_x,16) ;
//const y = new BN(_y,16) ;

console.timeEnd('prepare');

console.time('loop');
for (let k = 0; k < N; ++k) {
 //x *= y;
 x.iadd(y);
 x.isub(y);
 //x = x + y;
 //x = x - y;
}
console.timeEnd('loop');

if (Math.random() < 0.0001) console.log(x);
