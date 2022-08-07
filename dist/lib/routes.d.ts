/// <reference types="node" />
import { AccountInfo, Connection, PublicKey } from '@solana/web3.js';
import { MarketInfo } from './market';
import { TokenRouteSegments } from './types';
import { Amm, SwapMode } from './amm';
import JSBI from 'jsbi';
export interface TransactionFeeInfo {
    signatureFee: number;
    openOrdersDeposits: number[];
    ataDeposits: number[];
    totalFeeAndDeposits: number;
    minimumSOLForTransaction: number;
}
export interface RouteInfo {
    marketInfos: MarketInfo[];
    inAmount: JSBI;
    outAmount: JSBI;
    amount: JSBI;
    otherAmountThreshold: JSBI;
    swapMode: SwapMode;
    priceImpactPct: number;
    getDepositAndFee: () => Promise<TransactionFeeInfo | undefined>;
}
declare type MarketsCache = Array<Omit<AccountInfo<Buffer>, 'data' | 'owner'> & {
    data: [string, 'base64'];
    owner: string;
    pubkey: string;
}>;
export declare const fetchMarketCache: (url: string) => Promise<MarketsCache>;
/** For testing purposes when api does not have the new pools */
export declare function fetchExtraKeyedAccountInfos(connection: Connection, pks: PublicKey[]): Promise<{
    executable: boolean;
    owner: PublicKey;
    lamports: number;
    data: Buffer;
    rentEpoch?: number | undefined;
    pubkey: PublicKey;
}[]>;
export declare function getAllAmms(connection: Connection, marketsCache: MarketsCache): Promise<Amm[]>;
export declare function ammCrossProtocolPairs(arr: Amm[], callback: (a: Amm, b: Amm) => void): void;
export declare function getTokenRouteSegments(amms: Amm[]): TokenRouteSegments;
export declare type Route = {
    amms: Amm[];
    mints: PublicKey[];
};
export declare function computeInputRouteSegments({ inputMint, outputMint, tokenRouteSegments, intermediateTokens, swapMode, onlyDirectRoutes, }: {
    inputMint: string;
    outputMint: string;
    tokenRouteSegments: TokenRouteSegments;
    intermediateTokens?: string[];
    swapMode: SwapMode;
    onlyDirectRoutes?: boolean;
}): TokenRouteSegments;
export declare function computeRouteMap(tokenRouteSegments: TokenRouteSegments, intermediateTokens?: string[], onlyDirectRoutes?: boolean): Map<string, string[]>;
interface SplitTradeRequiredParams {
    hasSerumOpenOrderInstruction: boolean;
}
export declare function isSplitSetupRequired(marketInfos: MarketInfo[], { hasSerumOpenOrderInstruction }: SplitTradeRequiredParams): {
    needSetup: boolean;
    needCleanup: boolean;
};
export declare function isPlatformFeeSupported(swapMode: SwapMode, amms: Amm[]): boolean;
export declare function getRouteInfoUniqueId(routeInfo: RouteInfo): string;
export {};
