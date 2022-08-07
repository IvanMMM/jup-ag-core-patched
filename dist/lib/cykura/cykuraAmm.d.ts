/// <reference types="node" />
import { AccountInfo, PublicKey, TransactionInstruction } from '@solana/web3.js';
import { AccountInfoMap, Amm, Quote, QuoteParams, SwapParams } from '../amm';
import { CyclosCore } from '@jup-ag/cykura-sdk';
import { IdlAccounts } from '@project-serum/anchor';
export declare type PoolState = IdlAccounts<CyclosCore>['poolState'];
export declare class CykuraAmm implements Amm {
    private address;
    label: "Cykura";
    id: string;
    shouldPrefetch: boolean;
    exactOutputSupported: boolean;
    private poolState;
    private pool;
    private tickDataProvider;
    private tokens;
    vaults: {
        vault0: PublicKey;
        vault1: PublicKey;
    };
    private swapAccountMetas;
    private feePct;
    private fee;
    constructor(address: PublicKey, accountInfoOrPoolState: AccountInfo<Buffer> | PoolState);
    getAccountsForUpdate(): PublicKey[];
    update(accountInfoMap: AccountInfoMap): void;
    getQuote({ sourceMint, amount }: QuoteParams): Quote;
    createSwapInstructions(swapParams: SwapParams): TransactionInstruction[];
    get reserveTokenMints(): PublicKey[];
}
