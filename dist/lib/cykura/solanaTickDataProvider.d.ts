/// <reference types="bn.js" />
/// <reference types="node" />
import { CyclosCore, TickDataProvider, PoolVars } from '@jup-ag/cykura-sdk';
import * as anchor from '@project-serum/anchor';
import { IdlAccounts } from '@project-serum/anchor';
import { AccountInfo, PublicKey } from '@solana/web3.js';
import JSBI from 'jsbi';
export declare type TickBitmapState = IdlAccounts<CyclosCore>['tickBitmapState'];
export declare type TickState = IdlAccounts<CyclosCore>['tickState'];
export declare class SolanaTickDataProvider implements TickDataProvider {
    program: anchor.Program<CyclosCore>;
    pool: PoolVars;
    bitmapCache: Map<number, {
        address: PublicKey;
        word: anchor.BN;
    }>;
    tickCache: Map<number, {
        address: PublicKey;
        liquidityNet: JSBI;
    }>;
    accountsToFetch: {
        bitmaps: PublicKey[];
        ticks: PublicKey[];
    };
    constructor(program: anchor.Program<CyclosCore>, pool: PoolVars);
    /**
     * Caches ticks and bitmap accounts near the current price
     * @param tickCurrent The current pool tick
     * @param tickSpacing The pool tick spacing
     */
    eagerLoadCache(tickCurrent: number, tickSpacing: number): Promise<void>;
    /**
     * Return accounts to cache and returns early if there is insufficient data
     * @param tickCurrent The current pool tick
     * @param tickSpacing The pool tick spacing
     */
    lazyLoadAccountsToCache(tickCurrent: number, tickSpacing: number): PublicKey[];
    getTick(tick: number): {
        address: anchor.web3.PublicKey;
        liquidityNet: JSBI;
    };
    getTickAddress(tick: number): Promise<anchor.web3.PublicKey>;
    getTickAddressSync(tick: number): anchor.web3.PublicKey;
    getBitmapAddress(wordPos: number): Promise<anchor.web3.PublicKey>;
    getBitmapAddressSync(wordPos: number): anchor.web3.PublicKey;
    /**
     * Fetches the cached bitmap for the word
     * @param wordPos
     */
    getBitmap(wordPos: number): {
        address: anchor.web3.PublicKey;
        word: anchor.BN;
    };
    /**
     * Finds the next initialized tick in the given word. Fetched bitmaps are saved in a
     * cache for quicker lookups in future.
     * @param tick The current tick
     * @param lte Whether to look for a tick less than or equal to the current one, or a tick greater than or equal to
     * @param tickSpacing The tick spacing for the pool
     * @returns
     */
    nextInitializedTickWithinOneWord(tick: number, lte: boolean, tickSpacing: number): [number, boolean, number, number, PublicKey];
    updateCachedAccountInfos(accountInfoMap: Map<string, AccountInfo<Buffer> | null>): void;
}
