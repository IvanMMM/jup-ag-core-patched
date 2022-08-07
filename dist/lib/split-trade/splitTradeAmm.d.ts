import { PublicKey } from '@solana/web3.js';
import { AccountInfoMap, Amm, Quote, QuoteParams, SwapParams } from '../amm';
import { SerumMarket } from '../market';
export declare class SplitTradeAmm implements Amm {
    firstAmm: Amm;
    secondAmm: Amm;
    reserveTokenMints: PublicKey[];
    market: SerumMarket | null;
    shouldPrefetch: boolean;
    exactOutputSupported: boolean;
    private portion1;
    private portion2;
    constructor(firstAmm: Amm, secondAmm: Amm, reserveTokenMints: PublicKey[]);
    static getAmmIdsFromSplitTradeAmmId(id: string): string[];
    static create(firstAmm: Amm, secondAmm: Amm): SplitTradeAmm | undefined;
    setPortions(portion1: number, portion2: number): void;
    get id(): string;
    get label(): string;
    getAccountsForUpdate(): never[];
    update(_accountInfoMap: AccountInfoMap): void;
    getQuote(quoteParams: QuoteParams): Quote;
    createSwapInstructions(swapParams: SwapParams): import("@solana/web3.js").TransactionInstruction[];
}
