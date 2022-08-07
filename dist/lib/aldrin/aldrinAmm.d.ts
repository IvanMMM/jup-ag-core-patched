/// <reference types="node" />
import { TokenSwapConstantProduct, TokenSwapStable } from '@jup-ag/math';
import { AccountInfo, PublicKey, TransactionInstruction } from '@solana/web3.js';
import { AccountInfoMap, Amm, Quote, QuoteParams, SwapParams } from '../amm';
import { accountInfoToAldrinPoolState, AldrinPoolState } from './poolState';
interface AldrinParams {
    amp?: number;
}
export declare class AldrinAmm implements Amm {
    private params;
    id: string;
    label: "Aldrin";
    shouldPrefetch: boolean;
    exactOutputSupported: boolean;
    poolState: AldrinPoolState;
    private tokenAccounts;
    calculator: TokenSwapConstantProduct | TokenSwapStable;
    constructor(address: PublicKey, accountInfo: AccountInfo<Buffer>, params: AldrinParams);
    static accountInfoToAldrinPoolState: typeof accountInfoToAldrinPoolState;
    static decodeStableCurveAmp(accountInfo: AccountInfo<Buffer>): number;
    getAccountsForUpdate(): PublicKey[];
    update(accountInfoMap: AccountInfoMap): void;
    getQuote({ sourceMint, amount }: QuoteParams): Quote;
    createSwapInstructions(swapParams: SwapParams): TransactionInstruction[];
    get reserveTokenMints(): PublicKey[];
}
export {};
