import { PublicKey, TransactionInstruction } from '@solana/web3.js';
import JSBI from 'jsbi';
import { AccountInfoMap, Amm, QuoteParams, SwapParams } from '../amm';
export interface AddDecimals {
    wrapper: PublicKey;
    underlying: PublicKey;
    underlyingDecimals: number;
    wrapperUnderlyingTokens: PublicKey;
    mint: PublicKey;
    decimals: number;
}
export declare function getSaberWrappedDecimalsAmms(): SaberAddDecimalsAmm[];
export declare class WrappedToken {
    addDecimals: AddDecimals;
    multiplier: JSBI;
    constructor(addDecimals: AddDecimals);
    getOutputAmount(inputAmount: JSBI, inputMint: PublicKey): JSBI;
    private calculateDepositOutputAmount;
    private calculateWithdrawOutputAmount;
}
export declare class SaberAddDecimalsAmm implements Amm {
    wrappedToken: WrappedToken;
    id: string;
    label: "Saber (Decimals)";
    shouldPrefetch: boolean;
    exactOutputSupported: boolean;
    constructor(wrappedToken: WrappedToken);
    getAccountsForUpdate(): PublicKey[];
    update(_accountInfoMap: AccountInfoMap): void;
    getQuote({ sourceMint, amount }: QuoteParams): {
        notEnoughLiquidity: boolean;
        inAmount: JSBI;
        outAmount: JSBI;
        feeAmount: JSBI;
        feeMint: string;
        feePct: number;
        priceImpactPct: number;
    };
    createSwapInstructions(swapParams: SwapParams): TransactionInstruction[];
    get reserveTokenMints(): PublicKey[];
}
