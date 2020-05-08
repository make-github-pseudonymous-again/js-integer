/* global BigInt */
/* eslint-disable new-cap, no-new, no-unused-expressions */

const { ZZ } = require('..') ;
var benchmark = require('benchmark');
var crypto = require('crypto');
var bn = require('bn.js');
var bignum;
try {
  bignum = require('bignum');
} catch (err) {
  console.log('Load bignum error: ' + err.message.split('\n')[0]);
}
var sjcl = require('eccjs').sjcl.bn;
var bigi = require('bigi');
var BigInteger = require('js-big-integer').BigInteger;
var JSBI = require('jsbi');
var SilentMattBigInteger = require('biginteger').BigInteger;
var XorShift128Plus = require('xorshift.js').XorShift128Plus;
var benchmarks = [];

var selfOnly = process.env.SELF_ONLY;
var seed = process.env.SEED || crypto.randomBytes(16).toString('hex');
console.log('Seed: ' + seed);
var prng = new XorShift128Plus(seed);

const NFIXTURES = 25;
var fixtures = [];
var findex = 0;
function findexRefresh () {
  if (++findex === fixtures.length) findex = 0;
}

const filter = process.argv[3] ? new RegExp(process.argv[3], 'i') : /./;

const k256 = 'fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f' ;

function add (op, ...args) {
  benchmarks.push({
    name: op,
    start: function start () {
      var suite = new benchmark.Suite();

      console.log('Benchmarking: ' + op);

      Object.keys(fns).forEach(function (name) {
        if (!filter.test(name)) return ;
        if (name === 'BigInt' && typeof BigInt === 'undefined') return ;
        if (name === 'bignum' && bignum === undefined) return ;

        if (!selfOnly || name === '@aureooms/js-integer') {
          const opFn = fns[name][op];
          if (!opFn) return;
          if (!(opFn instanceof Function)) throw new Error(`opFN is not a function: ${opFN}`) ;
          const fixture = fixtures[findex][name];

          if (args.length === 1) {
            const key = op + '-' + args[0];
            const x = fixture.args[args[0]];
            const outs = fixture.outs;
            const testFn = () => outs[key] = opFn(x) ;
            suite.add(name + '#' + key, testFn, {
              onStart: findexRefresh,
              onCycle: findexRefresh
            });
          }
          else if (args.length === 2) {
            const key = op + '-' + args[0] + '-' + args[1];
            const a = fixture.args[args[0]];
            const b = fixture.args[args[1]];
            const outs = fixture.outs;
            const testFn = () => outs[key] = opFn(a, b) ;
            suite.add(name + '#' + key, testFn, {
              onStart: findexRefresh,
              onCycle: findexRefresh
            });
          }
          else throw new Error('Too many args.') ;
        }
      });

      suite
        .on('cycle', function (event) {
          console.log(String(event.target));
        })
        .on('complete', function () {
          console.log('------------------------');
          console.log('Fastest is ' + this.filter('fastest')[0].name);
        })
        .run();

      console.log('========================');
    }
  });
}

function start () {
  var re = process.argv[2] ? new RegExp(process.argv[2], 'i') : /./;

  benchmarks
    .filter(function (b) {
      return re.test(b.name);
    })
    .forEach(function (b) {
      b.start();
    });
}

if (/fast/i.test(process.argv[4])) {
  console.log('Running in fast mode...');
  benchmark.options.minTime = 0.3;
  benchmark.options.maxTime = 1;
  benchmark.options.minSamples = 3;
} else {
  benchmark.options.minTime = 1;
}

const fns = {
  BigInt: {
    from10: s => BigInt(s),
    from16: s => BigInt('0x'+s),
    to10: x => x.toString(10),
    to16: x => x.toString(16),
    add: (a,b) => a + b,
    sub: (a,b) => a - b,
    mul: (a,b) => a * b,
    sqr: x => x**2n,
    pow: (a,b) => a**b,
    div: (a,b) => a / b,
    mod: (a, b) => {
      const remainder = a % b;
      return remainder < 0 ? remainder + b : remainer;
    },

    toRed: x => x % k256_BigInt,
    fromRed: x => x,
    sqrm: x => (a**2) % k256_BigInt,
    powm: (a,b) => (a**b) % k256_BigInt,
  } ,
  'bn.js': {
    from10: s => new bn(s, 10),
    from16: s => new bn(s, 16),
    to10: x => x.toString(10),
    to16: x => x.toString(16),
    add: (a,b) => a.add(b),
    sub: (a,b) => a.sub(b),
    mul: (a,b) => a.mul(b),
    sqr: x => x.mul(x),
    pow: (a,b) => a.pow(b),
    div: (a,b) => a.div(b),
    mod: (a,b) => a.mod(b),

    toRed: x => x.toRed(bn.red('k256')),
    fromRed: x => x.fromRed(),
    sqrm: x => x.redSqr(),
    powm: (a,b) => a.redPow(b),
    invm: x => x.redInvm(),

    gcd: (a,b) => a.gcd(b),
    egcd: (a,b) => a.egcd(b),
  } ,
  '@aureooms/js-integer': {
    from10: s => ZZ.from(s, 10),
    from16: s => ZZ.from(s, 16),
    to10: x => x.toString(10),
    to16: x => x.toString(16),
    add: (a,b) => a.add(b),
    sub: (a,b) => a.sub(b),
    mul: (a,b) => a.mul(b),
    sqr: x => x.square(),
    pow: (a,b) => a.pow(b),
    div: (a,b) => a.div(b),
    mod: (a,b) => a.mod(b),

    gcd: (a,b) => a.gcd(b),
    egcd: (a,b) => a.egcd(b),
  } ,

  jsbi: {
    from10: s => JSBI.BigInt(s),
    from16: s => JSBI.BigInt('0x'+s),
    to10: x => x.toString(10),
    to16: x => x.toString(16),
    add: (a,b) => JSBI.add(a, b),
    sub: (a,b) => JSBI.subtract(a, b),
    mul: (a,b) => JSBI.multiply(a, b),
    sqr: x => JSBI.multiply(x, x),
    pow: (a, b) => JSBI.exponentiate(a, b),
    div: (a,b) => JSBI.divide(a, b),
    mod: (a, b) => {
      const remainder = JSBI.remainder(a,b);
      return JSBI.lessThan(remainder,JSBI.BigInt(0))
        ? JSBI.add(remainder,b)
        : remainder;
    },
  },
  yaffle: {
    from10: s => BigInteger.BigInt(s),
    from16: s => BigInteger.BigInt('0x'+s),
    to10: x => x.toString(10),
    to16: x => x.toString(16),
    add: (a,b) => BigInteger.add(a, b),
    sub: (a,b) => BigInteger.subtract(a, b),
    mul: (a,b) => BigInteger.multiply(a, b),
    sqr: x => BigInteger.multiply(x, x),
    pow: (a, b) => BigInteger.exponentiate(a, b),
    div: (a,b) => BigInteger.divide(a, b),
    mod: (a, b) => {
      const remainder = BigInteger.remainder(a,b);
      return BigInteger.lessThan(remainder,BigInteger.BigInt(0))
        ? BigInteger.add(remainder,b)
        : remainder;
    },
  },
  bigi: {
    from10: s => new bigi(s, 10),
    from16: s => new bigi(s, 16),
    to10: x => x.toString(10),
    to16: x => x.toString(16),
    add: (a,b) => a.add(b),
    sub: (a,b) => a.subtract(b),
    mul: (a,b) => a.multiply(b),
    sqr: x => x.square(),
    pow: (a,b) => a.pow(b),
    div: (a,b) => a.divide(b),
    mod: (a,b) => a.remainder(b),

    gcd: (a,b) => a.gcd(b),
  },
  'silentmatt-biginteger': {
    from10: s => SilentMattBigInteger.parse(s, 10),
    from16: s => SilentMattBigInteger.parse(s, 16),
    to10: x => x.toString(10),
    to16: x => x.toString(16),
    add: (a,b) => a.add(b),
    sub: (a,b) => a.subtract(b),
    mul: (a,b) => a.multiply(b),
    sqr: x => x.square(x),
    pow: (a,b) => a.pow(b),
    div: (a,b) => a.quotient(b),
    mod: (a, b) => {
      const remainder = a.remainder(b);
      return remainder.isNegative()
        ? remainder.add(b)
        : remainder;
    },
  },
  bignum: {
    from10: s => new bignum(s, 10),
    from16: s => new bignum(s, 16),
    to10: x => x.toString(10),
    to16: x => x.toString(16).replace(/^0+/, ''),
    add: (a,b) => a.add(b),
    sub: (a,b) => a.sub(b),
    mul: (a,b) => a.mul(b),
    sqr: x => x.mul(x),
    pow: (a,b) => a.pow(b),
    div: (a,b) => a.div(b),
    mod: (a,b) => a.mod(b),
    fromRed: x => x,
    toRed: x => x.mod(k256_bignum),
    powm: (a,b) => a.powm(b, k256_bignum),
    sqrm: x => a.pown(2, k256_bignum),
    invm: x => x.invertm(k256_bignum),
  } ,
  sjcl: {
    from10: undefined,
    from16: s => new sjcl(s),
    to10: undefined,
    to16: x => x.toString().slice(2),
    add: (a,b) => a.add(b),
    sub: (a,b) => a.sub(b),
    mul: (a,b) => a.mul(b),
    sqr: x => x.mul(x),
    pow: (a,b) => a.power(b),
    fromRed: x => x,
    toRed: x => new sjcl.prime.p256k(x),
    invm: x => x.inverseMod(k256_sjcl),
    sqrm: x => x.square().fullReduce(),
  }

} ;

const k256_BigInt = fns.BigInt.from16(k256);
const k256_bignum = fns.bignum.from16(k256);
const k256_sjcl = fns.sjcl.from16(k256);

fns.BigInt.k256 = k256_BigInt ;
fns.bignum.k256 = k256_bignum ;
fns.sjcl.k256 = k256_sjcl ;
fns['bn.js'].k256 = 'k256' ;

function newFixture ( ) {
  const fixture = {};

  const _a32 = prng.randomBytes(32).toString('hex');
  const _b32 = prng.randomBytes(32).toString('hex');
  const _a64 = prng.randomBytes(64).toString('hex');
  const _b64 = prng.randomBytes(64).toString('hex');
  const _a128 = prng.randomBytes(128).toString('hex');
  const _b128 = prng.randomBytes(128).toString('hex');
  const _a256 = prng.randomBytes(256).toString('hex');
  const _b256 = prng.randomBytes(256).toString('hex');
  const _a512 = prng.randomBytes(512).toString('hex');
  const _b512 = prng.randomBytes(512).toString('hex');
  const _a768 = prng.randomBytes(768).toString('hex');
  const _b768 = prng.randomBytes(768).toString('hex');
  const _a1024 = prng.randomBytes(1024).toString('hex');
  const _b1024 = prng.randomBytes(1024).toString('hex');
  const _a2048 = prng.randomBytes(2048).toString('hex');
  const _b2048 = prng.randomBytes(2048).toString('hex');
  const _a4096 = prng.randomBytes(4096).toString('hex');
  const _b4096 = prng.randomBytes(4096).toString('hex');
  const _a8192 = prng.randomBytes(8192).toString('hex');
  const _b8192 = prng.randomBytes(8192).toString('hex');

  const a10base = new bn(_a32, 16).toString(10);
  const a16base = new bn(_b32, 16).toString(16);

  const init = fn => {
    const a32 = fn.from16(_a32);
    const b32 = fn.from16(_b32);
    const a64 = fn.from16(_a64);
    const b64 = fn.from16(_b64);
    const a128 = fn.from16(_a128);
    const b128 = fn.from16(_b128);
    const a256 = fn.from16(_a256);
    const b256 = fn.from16(_b256);
    const a512 = fn.from16(_a512);
    const b512 = fn.from16(_b512);
    const a768 = fn.from16(_a768);
    const b768 = fn.from16(_b768);
    const a1024 = fn.from16(_a1024);
    const b1024 = fn.from16(_b1024);
    const a2048 = fn.from16(_a2048);
    const b2048 = fn.from16(_b2048);
    const a4096 = fn.from16(_a4096);
    const b4096 = fn.from16(_b4096);
    const a8192 = fn.from16(_a8192);
    const b8192 = fn.from16(_b8192);
    const x = fn.from16('2adbeef');
    const as1 = fn.add(fn.sqr(a32), x);
    const am1 = fn.toRed && fn.toRed(a32);
    const pow1 = fn.fromRed && fn.fromRed(am1);
    return {
      a32, b32, a64, b64, a128, b128, a256, b256, a512, b512, a768, b768,
      a1024, b1024, a2048, b2048, a4096, b4096, a8192, b8192,
      as1, am1, pow1, a10base, a16base,
    } ;
  }

  Object.keys(fns).forEach( name => {
    if(!filter.test(name)) return;
    fixture[name] = {};
    fixture[name].args = init(fns[name]);
    fixture[name].outs = {};
  }) ;

  return fixture;

}

while (fixtures.length < NFIXTURES) fixtures.push(newFixture()) ;

add('from10', 'a10base');
add('from16', 'a16base');
add('to10', 'a32');
add('to16', 'a32');
add('add', 'a32', 'b32');
add('add', 'a768', 'b768');
add('sub', 'a32', 'b32');
add('sub', 'a768', 'b768');

const ALL_OPS = [
  [ 'a32', 'b32' ]  ,
  [ 'a64', 'b64' ] ,
  [ 'a128', 'b128' ] ,
  [ 'a256', 'b256' ] ,
  [ 'a512', 'b512' ] ,
  [ 'a768', 'b768' ] ,
  [ 'a1024', 'b1024' ] ,
  [ 'a2048', 'b2048' ] ,
  [ 'a4096', 'b4096' ] ,
  [ 'a8192', 'b8192' ] ,
] ;

for ( const [ a , b ] of ALL_OPS ) add('mul', a, b) ;
for ( const [ a , b ] of ALL_OPS ) add('div', a, b) ;

add('sqr', 'a32');
add('div', 'as1', 'a32');
add('mod', 'as1', 'a32');
add('sqrm', 'am1');
add('powm', 'am1', 'pow1');
add('invm', 'am1');
add('gcd', 'a32', 'b32');
add('egcd', 'a32', 'b32');

start();


// Forces ALL computations ?
const results = new Array(NFIXTURES) ;
for ( let i = 0; i < NFIXTURES; ++i ) {
  results[i] = {};
  Object.keys(fns).forEach( name => {
    if(!filter.test(name)) return;
    const fn = fns[name];
    const fixture = fixtures[i][name];
    Object.keys(fixture.outs).forEach( key => {
      results[i][key] = results[i][key] || {} ;

      const result = fixture.outs[key] ;
      const str = result instanceof String ? result : fn.to16(result).toLowerCase() ;
      results[i][key][name] = str;
    }) ;
  } ) ;

  for ( const key in results[i] ) {
    const theseResults = results[i][key] ;
    const distinctResults = new Set(Object.values(theseResults));
    if (distinctResults.size !== 1) {
      console.error('DIFFERENT OUTPUTS for', i, key) ;
      console.error(distinctResults) ;
      console.error(i, key, theseResults) ;
      console.error(fixtures[i]) ;
    }
    else {
      console.error(i, key, JSON.stringify(Object.keys(theseResults)), 'OK') ;
    }
  }

}
