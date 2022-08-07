/// <reference types="node" />
import { Structure } from '@solana/buffer-layout';
import { u64 } from '@solana/spl-token';
import { AccountInfo, PublicKey } from '@solana/web3.js';
import { Percentage } from './percentage';
declare type FeeStructure = {
    traderFee: Percentage;
    ownerFee: Percentage;
};
interface FeeLayout {
    tradeFeeNumerator: u64;
    tradeFeeDenominator: u64;
    ownerTradeFeeNumerator: u64;
    ownerTradeFeeDenominator: u64;
    ownerWithdrawFeeNumerator: u64;
    ownerWithdrawFeeDenominator: u64;
}
interface PoolLayout {
    padding: any;
    lpTokenFreezeVault: PublicKey;
    poolMint: PublicKey;
    baseTokenVault: PublicKey;
    baseTokenMint: PublicKey;
    quoteTokenVault: PublicKey;
    quoteTokenMint: PublicKey;
    poolSigner: PublicKey;
    poolSignerNonce: number;
    authority: PublicKey;
    initializerAccount: PublicKey;
    feeBaseAccount: PublicKey;
    feeQuoteAccount: PublicKey;
    feePoolTokenAccount: PublicKey;
    fees: FeeLayout;
}
export declare const POOL_LAYOUT: Structure<PoolLayout>;
interface PoolV2Layout extends PoolLayout {
    curveType: number;
    curve: PublicKey;
}
export declare const POOL_V2_LAYOUT: Structure<PoolV2Layout>;
interface StableCurveLayout {
    padding: any;
    amp: u64;
}
export declare const STABLE_CURVE_LAYOUT: Structure<StableCurveLayout>;
interface SwapInstructionLayout {
    instruction: any;
    tokens: u64;
    minTokens: u64;
    side: 'bid' | 'ask';
}
export declare const SWAP_INSTRUCTION_LAYOUT: Structure<SwapInstructionLayout>;
export declare function accountInfoToAldrinPoolState(address: PublicKey, accountInfo: AccountInfo<Buffer>): AldrinPoolState;
export interface AldrinPoolState {
    isV2: Boolean;
    address: PublicKey;
    poolMint: PublicKey;
    baseTokenVault: PublicKey;
    baseTokenMint: PublicKey;
    quoteTokenVault: PublicKey;
    quoteTokenMint: PublicKey;
    poolSigner: PublicKey;
    feeBaseAccount: PublicKey;
    feeQuoteAccount: PublicKey;
    feePoolTokenAccount: PublicKey;
    fees: FeeStructure;
    curveType?: number;
    curve?: PublicKey;
}
export {};
