/// <reference types="node" />
import { u64 } from '@solana/spl-token';
import { AccountInfo, PublicKey } from '@solana/web3.js';
export declare const FEE_DENOMINATOR: number;
interface MercurialSwapLayout {
    version: number;
    isInitialized: number;
    nonce: number;
    amplificationCoefficient: u64;
    feeNumerator: u64;
    adminFeeNumerator: u64;
    tokenAccountsLength: number;
    precisionFactor: u64;
    precisionMultiplierA: u64;
    precisionMultiplierB: u64;
    precisionMultiplierC: u64;
    precisionMultiplierD: u64;
    tokenAccountA: PublicKey;
    tokenAccountB: PublicKey;
    tokenAccountC: PublicKey;
    tokenAccountD: PublicKey;
}
export declare const MercurialSwapLayout: import("@solana/buffer-layout").Structure<MercurialSwapLayout>;
export interface MercurialSwapLayoutState {
    programId: PublicKey;
    authority: PublicKey;
    isInitialized: boolean;
    nonce: number;
    ammId: PublicKey;
    amplificationCoefficient: number;
    feeNumerator: number;
    tokenAccountsLength: number;
    precisionFactor: number;
    precisionMultipliers: number[];
    tokenAccounts: PublicKey[];
}
export declare const accountInfoToMercurialSwapLayout: (address: PublicKey, accountInfo: AccountInfo<Buffer>) => MercurialSwapLayoutState;
export {};
