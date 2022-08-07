/// <reference types="node" />
import { AccountInfo, PublicKey } from '@solana/web3.js';
import { AccountInfoMap, Amm, Quote, QuoteParams, SwapParams } from '../amm';
export declare class WhirlpoolAmm implements Amm {
    private address;
    id: string;
    label: string;
    shouldPrefetch: boolean;
    exactOutputSupported: boolean;
    private whirlpoolData;
    private tickArrays;
    private tickPks;
    private oracle;
    private feePct;
    constructor(address: PublicKey, whirlpoolAccountInfo: AccountInfo<Buffer>);
    getAccountsForUpdate(): PublicKey[];
    update(accountInfoMap: AccountInfoMap): void;
    getQuote({ sourceMint, destinationMint, amount, swapMode }: QuoteParams): Quote;
    createSwapInstructions(swapParams: SwapParams): import("@solana/web3.js").TransactionInstruction[];
    get reserveTokenMints(): any[];
}
