/// <reference types="node" />
import { AccountInfo, Connection, PublicKey, TransactionInstruction } from '@solana/web3.js';
import { AccountInfoMap, Amm, Quote, QuoteParams, SwapParams } from '../amm';
import { CropperPoolState } from './swapLayout';
interface CropperParams {
    tokenAFeeAccount: PublicKey;
    tokenBFeeAccount: PublicKey;
    returnFeeNumerator: number;
    fixedFeeNumerator: number;
    feeDenominator: number;
}
export declare class CropperAmm implements Amm {
    private params;
    id: string;
    label: "Cropper";
    shouldPrefetch: boolean;
    exactOutputSupported: boolean;
    poolState: CropperPoolState;
    private tokenAccounts;
    private calculator;
    private feePct;
    static getStateFromStateAccount(connection: Connection): Promise<import("./swapLayout").CropperState>;
    static decodePoolState: (address: PublicKey, accountInfo: AccountInfo<Buffer>) => CropperPoolState;
    constructor(address: PublicKey, accountInfo: AccountInfo<Buffer>, params: CropperParams);
    getAccountsForUpdate(): PublicKey[];
    update(accountInfoMap: AccountInfoMap): void;
    getQuote({ sourceMint, amount }: QuoteParams): Quote;
    createSwapInstructions(swapParams: SwapParams): TransactionInstruction[];
    get reserveTokenMints(): PublicKey[];
}
export {};
