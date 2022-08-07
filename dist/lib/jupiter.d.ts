import { Cluster, Connection, FeeCalculator, Keypair, PublicKey, Transaction, TransactionSignature } from '@solana/web3.js';
import { RouteInfo } from './routes';
import { MarketInfo } from './market';
import { createInitializeTokenLedgerInstruction } from './jupiterInstruction';
import type { SignerWalletAdapter } from '@solana/wallet-adapter-base';
import { TokenRouteSegments, PlatformFeeAndAccounts, QuoteMintToReferrer } from './types';
import { SerumAmm } from './serum/serumAmm';
import { SaberAmm } from './saber/saberAmm';
import { SplTokenSwapAmm } from './spl-token-swap/splTokenSwapAmm';
import { MercurialAmm } from './mercurial/mercurialAmm';
import { AldrinAmm } from './aldrin/aldrinAmm';
import { RaydiumAmm } from './raydium/raydiumAmm';
import { CropperAmm } from './cropper/cropperAmm';
import { SenchaAmm } from './sencha/senchaAmm';
import { SplitTradeAmm } from './split-trade/splitTradeAmm';
import { TokenMintAddress } from './types';
import { Amm, SwapMode } from './amm';
import { TransactionError } from '@mercurial-finance/optimist';
import { getSaberWrappedDecimalsAmms, SaberAddDecimalsAmm } from './saber/saberAddDecimalsAmm';
import { WhirlpoolAmm } from './whirlpool/whirlpoolAmm';
import { CykuraAmm } from './cykura/cykuraAmm';
import JSBI from 'jsbi';
export declare type SerumOpenOrdersMap = Map<string, PublicKey>;
export { MarketInfo } from './market';
export { getPlatformFeeAccounts } from './fee';
export * from './types';
export { transactionSenderAndConfirmationWaiter } from '../utils/transactionHelpers';
export { RouteInfo, TransactionFeeInfo, getRouteInfoUniqueId } from './routes';
export { getSaberWrappedDecimalsAmms };
export { Amm, AldrinAmm, CykuraAmm, RaydiumAmm, SerumAmm, SaberAmm, SplTokenSwapAmm, MercurialAmm, CropperAmm, SenchaAmm, SaberAddDecimalsAmm, SplitTradeAmm, WhirlpoolAmm, SwapMode, };
export declare type SwapResult = {
    txid: string;
    inputAddress: PublicKey;
    outputAddress: PublicKey;
    inputAmount: number;
    outputAmount: number;
} | {
    error?: TransactionError;
};
export declare type JupiterLoadParams = {
    connection: Connection;
    cluster: Cluster;
    user?: PublicKey | Keypair;
    platformFeeAndAccounts?: PlatformFeeAndAccounts;
    quoteMintToReferrer?: Map<TokenMintAddress, PublicKey>;
    /**
     * If === -1, mean it will not fetch when shouldFetch == false
     * If === 0, mean it will fetch everytime
     */
    routeCacheDuration?: number;
    wrapUnwrapSOL?: boolean;
    marketUrl?: string;
    /**
     * On multi-leg trades, the intermediate tokens is restricted to X top tokens in volume and certain utility tokens (Saber wrapped decimal tokens)
     * This is to reduce the load by having to compute trades through routes that are not so liquid
     */
    restrictIntermediateTokens?: boolean;
    /** See {@link Jupiter.tokenLedger}, default to the standard Jupiter token ledger */
    tokenLedger?: PublicKey;
    /** See {@link Jupiter.shouldLoadSerumOpenOrders}, default to true */
    shouldLoadSerumOpenOrders?: boolean;
};
export declare type OnTransaction = (txid: TransactionSignature, totalTxs: number, txDescription: IConfirmationTxDescription) => void;
export declare type IConfirmationTxDescription = 'SETUP' | 'SWAP' | 'CLEANUP';
declare type ExecuteParams = {
    wallet?: Pick<SignerWalletAdapter, 'sendTransaction' | 'signAllTransactions' | 'signTransaction'>;
    /**
     * Allows to customize control of sending and awaiting confirmation in the single/multi transaction flow
     */
    onTransaction?: OnTransaction;
};
export declare class Jupiter {
    private connection;
    private cluster;
    tokenRouteSegments: TokenRouteSegments;
    private feeCalculator;
    private platformFeeAndAccounts;
    /** Referrer account to collect Serum referrer fees for each given quote mint, the referrer fee is 20% of the Serum protocol fee */
    private quoteMintToReferrer;
    /** route cache duration in ms */
    private routeCacheDuration;
    /** When set to true (default) native SOL is wrapped and wSOL unwrapped in each swap, otherwise it assumes wSOL is funded when it exists */
    private wrapUnwrapSOL;
    /** A token ledger which can be used to track volume as it can be made unique per platform, also alleviates write locks on a single token ledger account */
    private tokenLedger;
    private intermediateTokens;
    /** Perform a getProgramAccounts on user's serum open orders. Recomended to turn off if RPC is slow to perform a gPA */
    private shouldLoadSerumOpenOrders;
    private serumOpenOrdersPromise;
    private user;
    private routeCache;
    constructor(connection: Connection, cluster: Cluster, tokenRouteSegments: TokenRouteSegments, feeCalculator: FeeCalculator, platformFeeAndAccounts: PlatformFeeAndAccounts, 
    /** Referrer account to collect Serum referrer fees for each given quote mint, the referrer fee is 20% of the Serum protocol fee */
    quoteMintToReferrer: QuoteMintToReferrer, 
    /** route cache duration in ms */
    routeCacheDuration: number, 
    /** When set to true (default) native SOL is wrapped and wSOL unwrapped in each swap, otherwise it assumes wSOL is funded when it exists */
    wrapUnwrapSOL: boolean, 
    /** A token ledger which can be used to track volume as it can be made unique per platform, also alleviates write locks on a single token ledger account */
    tokenLedger: PublicKey, intermediateTokens: TokenMintAddress[] | undefined, 
    /** Perform a getProgramAccounts on user's serum open orders. Recomended to turn off if RPC is slow to perform a gPA */
    shouldLoadSerumOpenOrders: boolean);
    /**
     * load performs the necessary async scaffolding of the Jupiter object
     */
    static load({ connection, cluster, user, platformFeeAndAccounts, quoteMintToReferrer, routeCacheDuration, wrapUnwrapSOL, marketUrl, restrictIntermediateTokens, tokenLedger, shouldLoadSerumOpenOrders, }: JupiterLoadParams): Promise<Jupiter>;
    getAccountToAmmMap(): Map<string, Amm>;
    getAmmIdToAmmMap(): Map<string, Amm>;
    getDepositAndFees: ({ marketInfos, userPublicKey, serumOpenOrdersPromise, }: {
        marketInfos: MarketInfo[];
        userPublicKey: PublicKey;
        serumOpenOrdersPromise?: Promise<SerumOpenOrdersMap> | undefined;
    }) => Promise<import("./routes").TransactionFeeInfo>;
    private getDepositAndFeesForUser;
    computeRoutes({ inputMint, outputMint, amount, slippage, feeBps, forceFetch, onlyDirectRoutes, swapMode, filterTopNResult, }: {
        inputMint: PublicKey;
        outputMint: PublicKey;
        amount: JSBI;
        slippage: number;
        feeBps?: number;
        forceFetch?: boolean;
        onlyDirectRoutes?: boolean;
        swapMode?: SwapMode;
        /**
         * filter how many top individual route to be used to compared
         */
        filterTopNResult?: number;
    }): Promise<{
        routesInfos: RouteInfo[];
        cached: boolean;
    }>;
    setUserPublicKey(userPublicKey: Keypair | PublicKey): void;
    /**
     * The token route segments contains all the routes and the market meta information.
     */
    static fetchTokenRouteSegments(connection: Connection, cluster: Cluster, marketUrl?: string): Promise<TokenRouteSegments>;
    /**
     * This generate a routeMap which represents every possible output token mint for a given input token mint.
     * For example, we have SOL to USDC and this pairs have many routings like
     * SOL => USDT
     * USDT => USDC
     * SOL => USDC
     *
     * From here we know that we can have 2 different routing of SOL => USDC.
     * We do single level routing map but for all coins which result in the route map below:
     * SOL => USDT, USDC
     * USDT => SOL
     * USDC => SOL, USDT
     *
     * From this route map we can map out all possible route from one to another by checking the intersection.
     */
    getRouteMap(onlyDirectRoutes?: boolean): Map<string, string[]>;
    /**
     * Query existing open order account, this query is slow.
     * We suggest to fetch this in the background.
     */
    static findSerumOpenOrdersForOwner: ({ userPublicKey, cluster, connection, }: {
        userPublicKey: PublicKey;
        cluster: Cluster;
        connection: Connection;
    }) => Promise<SerumOpenOrdersMap>;
    exchange: (params: {
        routeInfo: RouteInfo;
        /**
         * This will overwrite the default Jupiter.setUser, useful for stateless usage like API
         */
        userPublicKey?: PublicKey;
        /**
         * This will overwrite the default token ledger, useful for stateless usage like API
         */
        tokenLedger?: PublicKey;
        /**
         * This will overwrite the default fee account, useful for stateless usage like API
         */
        feeAccount?: PublicKey;
        /**
         * This will overwrite the default wrapUnwrapSOL, useful for stateless usage like API
         */
        wrapUnwrapSOL?: boolean;
    }) => Promise<{
        transactions: {
            setupTransaction?: Transaction;
            swapTransaction: Transaction;
            cleanupTransaction?: Transaction;
        };
        execute: (params?: ExecuteParams) => Promise<SwapResult>;
    }>;
    /** sign, send and await confirmation for an exchange */
    private executeInternal;
    static getIntermediateTokens(): Promise<string[]>;
    static createInitializeTokenLedgerInstruction: typeof createInitializeTokenLedgerInstruction;
}
