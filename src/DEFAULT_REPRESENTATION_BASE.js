import { DEFAULT_DISPLAY_BASE } from './' ;

/*
 * Biggest power of DEFAULT_DISPLAY_BASE whose square holds in a single double
 * with full precision. For working correctly with multiplication algorithms
 * and for fast base DEFAULT_DISPLAY_BASE printing. On older machines with no
 * native doubles, it might be worth to only use ints.
 */
export const DEFAULT_REPRESENTATION_BASE = Math.pow(DEFAULT_DISPLAY_BASE,Math.floor(Math.log(Math.sqrt(Math.pow(2,53)))/Math.log(DEFAULT_DISPLAY_BASE))) ;
