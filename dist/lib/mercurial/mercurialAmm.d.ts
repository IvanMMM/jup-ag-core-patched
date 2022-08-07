/// <reference types="node" />
import { AccountInfo, PublicKey, TransactionInstruction } from '@solana/web3.js';
import { AccountInfoMap, Amm, Quote, QuoteParams, SwapParams } from '../amm';
import { MercurialSwapLayoutState } from './swapLayout';
interface MercurialParams {
    tokenMints: string[];
}
export declare class MercurialAmm implements Amm {
    private params;
    id: string;
    label: string;
    shouldPrefetch: boolean;
    exactOutputSupported: boolean;
    swapLayout: MercurialSwapLayoutState;
    private tokenAccounts;
    private calculator;
    static decodeSwapLayout: (address: PublicKey, accountInfo: AccountInfo<Buffer>) => MercurialSwapLayoutState;
    constructor(address: PublicKey, accountInfo: AccountInfo<Buffer>, params: MercurialParams);
    getAccountsForUpdate(): PublicKey[];
    update(accountInfoMap: AccountInfoMap): void;
    getQuote({ sourceMint, destinationMint, amount }: QuoteParams): Quote;
    createSwapInstructions(swapParams: SwapParams): TransactionInstruction[];
    get reserveTokenMints(): PublicKey[];
}
export {};
