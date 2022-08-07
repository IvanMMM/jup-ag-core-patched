import { Instruction } from '../utils/instruction';
import { PublicKey } from '@solana/web3.js';
import { Amm } from './amm';
export declare type Address = string;
export declare type TokenMintAddress = string;
export declare type SetupInstructions = {
    openOrders: ((Instruction & {
        address: PublicKey;
    }) | undefined)[];
    intermediate?: Instruction & {
        address: PublicKey;
    };
    destination: Instruction & {
        address: PublicKey;
    };
};
export declare type TokenRouteSegments = Map<TokenMintAddress, Map<TokenMintAddress, Amm[]>>;
export declare type PlatformFeeAndAccounts = {
    feeBps: number;
    feeAccounts: Map<string, PublicKey>;
};
export declare type PlatformFee = {
    feeBps: number;
    feeAccount: PublicKey;
};
export declare type QuoteMintToReferrer = Map<TokenMintAddress, PublicKey>;
