import { Connection, PublicKey } from '@solana/web3.js';
import { SwapMode } from './amm';
import { RouteInfo, TransactionFeeInfo } from './routes';
import { TokenRouteSegments } from './types';
import JSBI from 'jsbi';
export declare function fetchAccountInfos(connection: Connection, routes: TokenRouteSegments): Promise<void>;
interface GetQuotesParams {
    inputRouteSegment: TokenRouteSegments;
    amount: JSBI;
    inputMint: PublicKey;
    outputMint: PublicKey;
    platformFeeBps: number;
    slippage: number;
    filterTopNResult?: number;
    onlyDirectRoutes?: boolean;
    swapMode: SwapMode;
    getDepositAndFeeForRoute: (params: {
        marketInfos: RouteInfo['marketInfos'];
    }) => Promise<TransactionFeeInfo | undefined>;
}
export declare function processInputRouteSegmentToRoutesInfos({ inputRouteSegment, inputMint, outputMint, amount, getDepositAndFeeForRoute, platformFeeBps, slippage, filterTopNResult, onlyDirectRoutes, swapMode, }: GetQuotesParams): RouteInfo[];
export {};
