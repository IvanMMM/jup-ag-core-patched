import BN from 'bn.js';
/**
 * Compute a linear fee base on liquidity amount.
 * fee(0) = max fee -> fee(x >= target) = min fee
 *
 * @param {number} lpMinFeeBasisPoints
 * @param {number} lpMaxFeeBasisPoints
 * @param {BN} lpLiquidityTarget
 * @param {BN} lamportsAvailable
 * @param {BN} lamportsToObtain
 */
export declare function unstakeNowFeeBp(lpMinFeeBasisPoints: number, lpMaxFeeBasisPoints: number, lpLiquidityTarget: BN, lamportsAvailable: BN, lamportsToObtain: BN): number;
/**
 * Returns `amount` * `numerator` / `denominator`.
 * BN library we use does not handle fractions, so the value is `floored`
 *
 * @param {BN} amount
 * @param {BN} numerator
 * @param {BN} denominator
 */
export declare function proportionalBN(amount: BN, numerator: BN, denominator: BN): BN;
