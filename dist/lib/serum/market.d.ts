import { Market, Orderbook } from '@project-serum/serum';
import { PublicKey } from '@solana/web3.js';
import JSBI from 'jsbi';
interface IMarketMeta {
    /** buy or sell side */
    side: 'buy' | 'sell';
    /** indicate that your order is too huge for the market */
    notEnoughLiquidity: boolean;
    /** minimum in amount and the corresponding out amount */
    minimum: {
        in: JSBI;
        out: JSBI;
    };
    /** amount in taken for the trade */
    inAmount: JSBI;
    /** the amount out for the trade */
    outAmount: JSBI;
    /** the total fee amount */
    feeAmount: JSBI;
    /** price impact percentage */
    priceImpactPct: number;
    /** fee percentage */
    feePct: number;
}
export declare function getOutAmountMeta({ market, asks, bids, fromAmount, fromMint, toMint, }: {
    market: Market;
    asks: Orderbook;
    bids: Orderbook;
    fromMint: PublicKey;
    toMint: PublicKey;
    fromAmount: JSBI;
}): IMarketMeta;
export declare function forecastBuy(market: Market, orderbook: Orderbook, pcIn: JSBI, takerFeePct: number): IMarketMeta;
export declare function forecastSell(market: Market, orderbook: Orderbook, coinIn: JSBI, takerFeePct: number): IMarketMeta;
export declare function getL2(orderbook: Orderbook): Generator<[JSBI, JSBI]>;
export {};
