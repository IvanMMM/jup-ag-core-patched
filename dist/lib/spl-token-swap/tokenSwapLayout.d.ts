/// <reference types="node" />
import { u64 } from '@solana/spl-token';
import { AccountInfo, PublicKey } from '@solana/web3.js';
export interface TokenSwapState {
    address: PublicKey;
    programId: PublicKey;
    tokenProgramId: PublicKey;
    poolToken: PublicKey;
    feeAccount: PublicKey;
    authority: PublicKey;
    tokenAccountA: PublicKey;
    tokenAccountB: PublicKey;
    mintA: PublicKey;
    mintB: PublicKey;
    tradeFeeNumerator: u64;
    tradeFeeDenominator: u64;
    ownerTradeFeeNumerator: u64;
    ownerTradeFeeDenominator: u64;
    ownerWithdrawFeeNumerator: u64;
    ownerWithdrawFeeDenominator: u64;
    curveType: number;
    curveParameters: Uint8Array;
    poolNonce?: u64;
}
export declare function accountInfoToTokenSwapState(address: PublicKey, tokenSwapAccountInfo: AccountInfo<Buffer>): TokenSwapState;
