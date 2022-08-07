/// <reference types="node" />
import { AccountInfo, Connection, PublicKey, TransactionInstruction } from '@solana/web3.js';
import { PlatformFee, QuoteMintToReferrer, TokenMintAddress } from '..';
import { AccountInfo as TokenAccountInfo } from '@solana/spl-token';
import JSBI from 'jsbi';
import type BN from 'bn.js';
export declare enum SwapMode {
    ExactIn = "ExactIn",
    ExactOut = "ExactOut"
}
export interface QuoteParams {
    sourceMint: PublicKey;
    destinationMint: PublicKey;
    amount: JSBI;
    swapMode: SwapMode;
}
export interface Quote {
    notEnoughLiquidity: boolean;
    minInAmount?: JSBI;
    minOutAmount?: JSBI;
    inAmount: JSBI;
    outAmount: JSBI;
    feeAmount: JSBI;
    feeMint: TokenMintAddress;
    feePct: number;
    priceImpactPct: number;
}
export interface SwapParams {
    sourceMint: PublicKey;
    destinationMint: PublicKey;
    userSourceTokenAccount: PublicKey;
    userDestinationTokenAccount: PublicKey;
    userTransferAuthority: PublicKey;
    amount: BN | null;
    otherAmountThreshold: BN;
    swapMode: SwapMode;
    tokenLedger: PublicKey;
    openOrdersAddress?: PublicKey;
    platformFee?: PlatformFee;
    quoteMintToReferrer?: QuoteMintToReferrer;
}
export declare type AccountInfoMap = Map<string, AccountInfo<Buffer> | null>;
export interface Amm {
    label: string;
    id: string;
    reserveTokenMints: PublicKey[];
    shouldPrefetch: boolean;
    exactOutputSupported: boolean;
    getAccountsForUpdate(): PublicKey[];
    update(accountInfoMap: AccountInfoMap): void;
    getQuote(quoteParams: QuoteParams): Quote;
    createSwapInstructions(swapParams: SwapParams): TransactionInstruction[];
}
export declare const mapAddressToAccountInfos: (accountInfoMap: AccountInfoMap, addresses: PublicKey[]) => AccountInfo<Buffer>[];
export declare const tokenAccountsToJSBIs: (tokenAccounts: TokenAccountInfo[]) => JSBI[];
export declare const prefetchAmms: (amms: Amm[], connection: Connection) => Promise<void>;
