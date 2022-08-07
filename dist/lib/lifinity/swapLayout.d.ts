/// <reference types="node" />
import { AccountInfo, PublicKey } from '@solana/web3.js';
import { IPoolInfo } from '@jup-ag/lifinity-sdk';
export interface LifinitySwapLayoutState {
    programId: PublicKey;
    authority: PublicKey;
    amm: PublicKey;
    tokenAMint: PublicKey;
    tokenBMint: PublicKey;
    poolMint: PublicKey;
    feeAccount: PublicKey;
    pythAccount: PublicKey;
    pythPcAccount: PublicKey;
    configAccount: PublicKey;
    poolCoinTokenAccount: PublicKey;
    poolCoinMint: PublicKey;
    poolPcTokenAccount: PublicKey;
    poolPcMint: PublicKey;
}
export declare const swapStateToPoolInfo: (state: LifinitySwapLayoutState) => IPoolInfo;
export declare const accountInfoLifinitySwapLayout: (address: PublicKey, accountInfo: AccountInfo<Buffer>) => LifinitySwapLayoutState;
