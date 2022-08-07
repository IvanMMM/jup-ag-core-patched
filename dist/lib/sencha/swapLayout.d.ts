/// <reference types="node" />
import { PublicKey, AccountInfo } from '@solana/web3.js';
import { u64 } from '@solana/spl-token';
interface SenchaSwapLayout {
    discriminator: any;
    factory: PublicKey;
    bump: number;
    index: u64;
    admin: PublicKey;
    token0Reserves: PublicKey;
    token0Mint: PublicKey;
    token0Fees: PublicKey;
    token1Reserves: PublicKey;
    token1Mint: PublicKey;
    token1Fees: PublicKey;
    isPaused: number;
    poolMint: PublicKey;
    tradeFeeKbps: u64;
    withdrawFeeKbps: u64;
    adminTradeFeeKbps: u64;
    adminWithdrawFeeKbps: u64;
}
export declare const SenchaSwapLayout: import("@solana/buffer-layout").Structure<SenchaSwapLayout>;
export interface SenchaPoolState {
    programId: PublicKey;
    isPaused: boolean;
    bump: number;
    ammId: PublicKey;
    token0Reserves: PublicKey;
    token1Reserves: PublicKey;
    token0Mint: PublicKey;
    token1Mint: PublicKey;
    token0Fees: PublicKey;
    token1Fees: PublicKey;
    poolMint: PublicKey;
    tradeFeeKbps: number;
}
export declare const accountInfoToSenchaPoolState: (address: PublicKey, accountInfo: AccountInfo<Buffer>) => SenchaPoolState;
export {};
