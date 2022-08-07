import { Cluster, PublicKey } from '@solana/web3.js';
import { IDL } from './lib/idl/jupiter';
export declare const WRAPPED_SOL_MINT: PublicKey;
export declare const MAINNET_SERUM_DEX_PROGRAM: PublicKey;
export declare const DEVNET_SERUM_DEX_PROGRAM: PublicKey;
export declare const MARKETS_URL: Record<Cluster, string>;
export declare const TOKEN_LIST_URL: Record<Cluster, string>;
export declare const LAMPORTS_PER_SIGNATURE = 5000;
export declare const RAYDIUM_AMM_V4_PROGRAM_ID: PublicKey;
export declare const ALDRIN_SWAP_PROGRAM_ID: PublicKey;
export declare const ALDRIN_SWAP_V2_PROGRAM_ID: PublicKey;
export declare const SABER_ADD_DECIMALS_PROGRAM_ID: PublicKey;
export declare const CROPPER_PROGRAM_ID: PublicKey;
export declare const SENCHA_PROGRAM_ID: PublicKey;
export declare const LIFINITY_PROGRAM_ID: PublicKey;
export declare const CREMA_PROGRAM_ID: PublicKey;
export declare const JUPITER_WALLET: PublicKey;
export declare const MERCURIAL_SWAP_PROGRAM_ID: PublicKey;
export declare const WHIRLPOOL_PROGRAM_ID: PublicKey;
export declare const CYKURA_PROGRAM_ID: PublicKey;
export declare const CYKURA_FACTORY_STATE_ADDRESS: PublicKey;
export declare const MARINADE_PROGRAM_ID: PublicKey;
export declare const STEPN_PROGRAM_ID: PublicKey;
/** Tokens which are fundamental pivot in certain protocols */
export declare const SWAP_PROTOCOL_TOKENS: string[];
interface ErrorDetails {
    code: number;
    name: string;
    msg: string;
}
declare type JUPITER_ERROR_TYPES = 'TransactionNotConfirmed' | 'BalancesNotExtractedProperly' | typeof IDL.errors[number]['name'];
export declare const JUPITER_ERRORS: Record<JUPITER_ERROR_TYPES, ErrorDetails>;
export declare const IS_DEV: boolean;
export declare const MIN_SEGMENT_SIZE_FOR_INTERMEDIATE_MINTS = 100;
export {};
