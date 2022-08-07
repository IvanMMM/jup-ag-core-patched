/// <reference types="node" />
import { u64 } from '@solana/spl-token';
import { AccountInfo, PublicKey } from '@solana/web3.js';
import { AccountInfoMap, Amm, Quote, QuoteParams, SwapParams } from '../amm';
declare type SerumMarketKeys = {
    serumBids: PublicKey;
    serumAsks: PublicKey;
    serumEventQueue: PublicKey;
    serumCoinVaultAccount: PublicKey;
    serumPcVaultAccount: PublicKey;
    serumVaultSigner: PublicKey;
};
declare type SerumMarketKeysString = Record<keyof SerumMarketKeys, string>;
export declare class RaydiumAmm implements Amm {
    ammId: PublicKey;
    id: string;
    label: "Raydium";
    shouldPrefetch: boolean;
    exactOutputSupported: boolean;
    coinMint: PublicKey;
    pcMint: PublicKey;
    status: number;
    serumProgramId: PublicKey;
    serumMarket: PublicKey;
    ammOpenOrders: PublicKey;
    ammTargetOrders: PublicKey;
    poolCoinTokenAccount: PublicKey;
    poolPcTokenAccount: PublicKey;
    serumMarketKeys: SerumMarketKeys;
    coinReserve: u64 | undefined;
    pcReserve: u64 | undefined;
    private feePct;
    private calculator;
    constructor(ammId: PublicKey, ammAccountInfo: AccountInfo<Buffer>, params: SerumMarketKeysString);
    static decodeSerumMarketKeysString(serumProgramId: PublicKey, serumMarket: PublicKey, serumMarketInfo: AccountInfo<Buffer>): SerumMarketKeysString;
    getAccountsForUpdate(): PublicKey[];
    update(accountInfoMap: AccountInfoMap): void;
    private static tokenAmountAccessor;
    getQuote({ sourceMint, amount }: QuoteParams): Quote;
    createSwapInstructions(swapParams: SwapParams): import("@solana/web3.js").TransactionInstruction[];
    get reserveTokenMints(): PublicKey[];
}
export {};
