/// <reference types="node" />
import { u64 } from '@solana/spl-token';
import { AccountInfo, PublicKey } from '@solana/web3.js';
interface CropperTokenSwapLayout {
    version: number;
    isInitialized: number;
    nonce: number;
    ammId: PublicKey;
    serumProgramId: PublicKey;
    serumMarket: PublicKey;
    tokenProgramId: PublicKey;
    tokenAAccount: PublicKey;
    tokenBAccount: PublicKey;
    poolMint: PublicKey;
    mintA: PublicKey;
    mintB: PublicKey;
}
export declare const CropperTokenSwapLayout: import("@solana/buffer-layout").Structure<CropperTokenSwapLayout>;
export interface CropperState {
    isInitialized: boolean;
    stateOwner: PublicKey;
    feeOwner: PublicKey;
    initialSupply: u64;
    returnFeeNumerator: number;
    fixedFeeNumerator: number;
    feeDenominator: number;
    curveType: number;
    curveParameters: Uint8Array;
}
export interface CropperPoolState {
    programId: PublicKey;
    authority: PublicKey;
    version: number;
    isInitialized: boolean;
    nonce: number;
    ammId: PublicKey;
    serumProgramId: PublicKey;
    serumMarket: PublicKey;
    tokenProgramId: PublicKey;
    tokenAAccount: PublicKey;
    tokenBAccount: PublicKey;
    poolMint: PublicKey;
    mintA: PublicKey;
    mintB: PublicKey;
}
export declare const CROPPER_STATE_ADDRESS: PublicKey;
export declare const accountInfoToCropperPoolState: (address: PublicKey, accountInfo: AccountInfo<Buffer>) => CropperPoolState;
export declare const stateAccountInfoToCropperState: (accountInfo: AccountInfo<Buffer>) => CropperState;
export {};
