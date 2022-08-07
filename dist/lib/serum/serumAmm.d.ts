import { Orderbook } from '@project-serum/serum';
import { PublicKey } from '@solana/web3.js';
import { AccountInfoMap, Amm, Quote, QuoteParams, SwapParams } from '../amm';
import { SerumMarket } from '../market';
import { getL2 } from './market';
export declare class SerumAmm implements Amm {
    market: SerumMarket;
    id: string;
    label: "Serum";
    shouldPrefetch: boolean;
    exactOutputSupported: boolean;
    private _orderbooks;
    constructor(market: SerumMarket);
    get orderbooks(): {
        asks: Orderbook;
        bids: Orderbook;
    } | undefined;
    static getL2: typeof getL2;
    getAccountsForUpdate(): PublicKey[];
    update(accountInfoMap: AccountInfoMap): void;
    getQuote({ sourceMint, destinationMint, amount }: QuoteParams): Quote;
    createSwapInstructions(swapParams: SwapParams): import("@solana/web3.js").TransactionInstruction[];
    get reserveTokenMints(): PublicKey[];
}
