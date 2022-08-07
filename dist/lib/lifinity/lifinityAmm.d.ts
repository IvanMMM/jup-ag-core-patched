/// <reference types="node" />
import { AccountInfo, PublicKey, TransactionInstruction } from '@solana/web3.js';
import { AccountInfoMap, Amm, Quote, QuoteParams, SwapParams } from '../amm';
export declare class LifinityAmm implements Amm {
    private ammAccountInfo;
    id: string;
    label: "Lifinity";
    shouldPrefetch: boolean;
    exactOutputSupported: boolean;
    private swapState;
    private poolInfo;
    private accountInfos;
    constructor(address: PublicKey, ammAccountInfo: AccountInfo<Buffer>);
    getAccountsForUpdate(): PublicKey[];
    update(accountInfoMap: AccountInfoMap): void;
    getQuote({ sourceMint, amount }: QuoteParams): Quote;
    createSwapInstructions(swapParams: SwapParams): TransactionInstruction[];
    get reserveTokenMints(): PublicKey[];
}
