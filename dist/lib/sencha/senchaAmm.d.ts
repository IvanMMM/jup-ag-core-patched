/// <reference types="node" />
import { AccountInfo, PublicKey, TransactionInstruction } from '@solana/web3.js';
import { AccountInfoMap, Amm, Quote, QuoteParams, SwapParams } from '../amm';
import { SenchaPoolState } from './swapLayout';
export declare class SenchaAmm implements Amm {
    id: string;
    label: "Sencha";
    shouldPrefetch: boolean;
    exactOutputSupported: boolean;
    poolState: SenchaPoolState;
    private calculator;
    private tokenAccounts;
    constructor(address: PublicKey, accountInfo: AccountInfo<Buffer>);
    get isPaused(): boolean;
    getAccountsForUpdate(): PublicKey[];
    update(accountInfoMap: AccountInfoMap): void;
    getQuote({ sourceMint, amount }: QuoteParams): Quote;
    createSwapInstructions(swapParams: SwapParams): TransactionInstruction[];
    get reserveTokenMints(): PublicKey[];
}
