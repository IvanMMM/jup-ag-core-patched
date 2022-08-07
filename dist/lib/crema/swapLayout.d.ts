/// <reference types="node" />
import { AccountInfo, PublicKey } from '@solana/web3.js';
import Decimal from 'decimal.js';
export interface CremaPoolState {
    programId: PublicKey;
    authority: PublicKey;
    version: number;
    isInitialized: boolean;
    nonce: number;
    ammId: PublicKey;
    tokenProgramId: PublicKey;
    tokenAAccount: PublicKey;
    tokenBAccount: PublicKey;
    ticksKey: PublicKey;
    mintA: PublicKey;
    mintB: PublicKey;
    fee: Decimal;
    currentSqrtPrice: Decimal;
    currentLiquity: Decimal;
}
export declare const accountInfoToCremaPoolState: (address: PublicKey, accountInfo: AccountInfo<Buffer>) => CremaPoolState;
