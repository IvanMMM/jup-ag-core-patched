/// <reference types="node" />
import { AccountInfoMap, Amm, Quote, QuoteParams, SwapParams } from '../amm';
import { AccountInfo, PublicKey, TransactionInstruction } from '@solana/web3.js';
import Decimal from 'decimal.js';
export declare class CremaAmm implements Amm {
    id: string;
    label: string;
    shouldPrefetch: boolean;
    exactOutputSupported: boolean;
    private ticks;
    private poolState;
    constructor(address: PublicKey, accountInfo: AccountInfo<Buffer>);
    getAccountsForUpdate(): PublicKey[];
    update(accountInfoMap: AccountInfoMap): void;
    getQuote({ sourceMint, amount }: QuoteParams): Quote;
    preSwapA(amountIn: Decimal): {
        amountOut: Decimal;
        amountUsed: Decimal;
        feeUsed: Decimal;
        afterPrice: Decimal;
        afterLiquity: Decimal;
        impact: Decimal;
        revert: boolean;
    };
    preSwapB(amountIn: Decimal): {
        amountOut: Decimal;
        amountUsed: Decimal;
        feeUsed: Decimal;
        afterPrice: Decimal;
        afterLiquity: Decimal;
        impact: Decimal;
        revert: boolean;
    };
    createSwapInstructions(swapParams: SwapParams): TransactionInstruction[];
    get reserveTokenMints(): PublicKey[];
}
