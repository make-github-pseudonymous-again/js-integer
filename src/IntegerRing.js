import {parse, convert} from '@aureooms/js-integer-big-endian';
import {TypeError, ValueError} from '@aureooms/js-error';

import {Integer} from './Integer.js';
import {DEFAULT_DISPLAY_BASE} from './DEFAULT_DISPLAY_BASE.js';
import {_from_number} from './_from_number.js';

export class IntegerRing {
	constructor(name, base) {
		this.name = name;
		this.base = base;
	}

	characteristic() {
		return this.$0();
	}

	from(object, base = undefined, is_negative = 0) {
		if (object === null || object === undefined) return this.$0();

		switch (object.constructor.prototype) {
			case Number.prototype:
				if (base !== undefined)
					throw new ValueError(
						'IntegerRing#from: using the base parameter does not make sense when passing a Number.',
					);
				return this.from_number(object, is_negative);

			case String.prototype:
				if (base === undefined) base = DEFAULT_DISPLAY_BASE;
				return this.from_string(object, base, is_negative);

			case Array.prototype:
				if (base === undefined) base = this.base;
				return this.from_digits(object, base, is_negative);

			case Boolean.prototype:
				if (base !== undefined)
					throw new ValueError(
						'IntegerRing#from: using the base parameter does not make sense when passing a Boolean.',
					);
				return this.from_number(Number(object), is_negative);

			case Integer.prototype:
				if (base !== undefined)
					throw new ValueError(
						'IntegerRing#from: using the base parameter does not make sense when passing an Integer.',
					);
				return new Integer(
					object.base,
					object.is_negative ^ is_negative,
					object.limbs,
				);

			default:
				throw new TypeError(
					`IntegerRing#from cannot handle ${object.constructor.prototype}`,
				);
		}
	}

	from_number(number, is_negative = 0) {
		const dirty = _from_number(number);

		const limbs = dirty._limbs_in_base(this.base);

		return new Integer(this.base, is_negative ^ dirty.is_negative, limbs);
	}

	from_string(string, base = 10, is_negative = 0) {
		if (string.length === 0)
			throw new ValueError(
				'IntegerRing#from_string cannot parse empty string.',
			);

		if (string[0] === '-')
			return this.from_string(string.slice(1), base, ~is_negative);

		if (string[0] === '+')
			return this.from_string(string.slice(1), base, is_negative);

		const limbs = parse(base, this.base, string);

		if (limbs.length === 1 && limbs[0] === 0) is_negative = 0;

		return new Integer(this.base, is_negative, limbs);
	}

	from_digits(digits, base, is_negative) {
		const limbs = convert(
			base,
			this.base,
			digits.slice().reverse(),
			0,
			digits.length,
		);

		return new Integer(this.base, is_negative, limbs);
	}

	toString() {
		return this.name;
	}

	$0() {
		// TODO Could we use an empty array instead ?
		return new Integer(this.base, 0, [0]);
	}

	$1() {
		return new Integer(this.base, 0, [1]);
	}

	$_1() {
		return new Integer(this.base, -1, [1]);
	}

	has(x) {
		if (x instanceof Integer) return true;
		return Number.isInteger(x);
	}

	min(a, b) {
		return a.le(b) ? a : b;
	}

	max(a, b) {
		return a.ge(b) ? a : b;
	}
}
