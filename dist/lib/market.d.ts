import { Market as SerumMarket } from '@project-serum/serum';
import { PublicKey } from '@solana/web3.js';
import { StableSwap } from '@saberhq/stableswap-sdk';
import { Amm } from './amm';
import JSBI from 'jsbi';
export interface Fee {
    amount: JSBI;
    mint: string;
    pct: number;
}
export { SerumMarket, StableSwap };
export interface MarketInfo {
    amm: Amm;
    inputMint: PublicKey;
    outputMint: PublicKey;
    minInAmount?: JSBI;
    minOutAmount?: JSBI;
    inAmount: JSBI;
    outAmount: JSBI;
    notEnoughLiquidity: boolean;
    priceImpactPct: number;
    lpFee: Fee;
    platformFee: Fee;
}
export declare const isValidRoute: (ammA: Amm, ammB: Amm) => boolean;
export declare function isSerumAndRaydium(marketInfos: MarketInfo[]): boolean;
