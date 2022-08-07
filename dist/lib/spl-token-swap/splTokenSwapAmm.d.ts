/// <reference types="node" />
import { AccountInfo, PublicKey } from '@solana/web3.js';
import { AccountInfoMap, Amm, Quote, QuoteParams, SwapParams } from '../amm';
import { TokenSwapConstantProduct, TokenSwapStable } from '@jup-ag/math';
export declare class SplTokenSwapAmm implements Amm {
    label: string;
    id: string;
    shouldPrefetch: boolean;
    exactOutputSupported: boolean;
    private tokenSwapState;
    private curveType;
    private tokenAccounts;
    calculator: TokenSwapConstantProduct | TokenSwapStable;
    constructor(address: PublicKey, swapStateAccountInfo: AccountInfo<Buffer>, label: string);
    getAccountsForUpdate(): PublicKey[];
    update(accountInfoMap: AccountInfoMap): void;
    getQuote({ sourceMint, amount }: QuoteParams): Quote;
    createSwapInstructions(swapParams: SwapParams): import("@solana/web3.js").TransactionInstruction[];
    get reserveTokenMints(): PublicKey[];
}
