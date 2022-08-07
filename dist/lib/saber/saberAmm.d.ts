import { StableSwap } from '@saberhq/stableswap-sdk';
import { PublicKey } from '@solana/web3.js';
import { AccountInfoMap, Amm, Quote, QuoteParams, SwapParams } from '../amm';
export declare class SaberAmm implements Amm {
    private stableSwap;
    id: string;
    label: "Saber";
    shouldPrefetch: boolean;
    exactOutputSupported: boolean;
    private tokenAccounts;
    private calculator;
    constructor(stableSwap: StableSwap);
    getAccountsForUpdate(): PublicKey[];
    update(accountInfoMap: AccountInfoMap): void;
    getQuote({ sourceMint, destinationMint, amount }: QuoteParams): Quote;
    createSwapInstructions(swapParams: SwapParams): import("@solana/web3.js").TransactionInstruction[];
    get reserveTokenMints(): PublicKey[];
}
