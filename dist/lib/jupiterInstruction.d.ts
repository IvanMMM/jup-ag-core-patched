import { Market } from '@project-serum/serum';
import { AccountMeta, PublicKey, TransactionInstruction } from '@solana/web3.js';
import BN from 'bn.js';
import type { RaydiumAmm } from './raydium/raydiumAmm';
import { StableSwap } from '@saberhq/stableswap-sdk';
import { AldrinPoolState } from './aldrin/poolState';
import type { TokenSwapState } from './spl-token-swap/tokenSwapLayout';
import { PlatformFee } from './types';
import type { AddDecimals } from './saber/saberAddDecimalsAmm';
import { CropperPoolState } from './cropper/swapLayout';
import { SenchaPoolState } from './sencha/swapLayout';
import { CremaPoolState } from './crema/swapLayout';
import { MercurialSwapLayoutState } from './mercurial/swapLayout';
import { LifinitySwapLayoutState } from './lifinity/swapLayout';
import { MarinadeStateResponse } from './marinade/marinade-state.types';
export declare const JUPITER_PROGRAM_ID_STAGING: PublicKey;
export declare const JUPITER_PROGRAM_ID_PRODUCTION: PublicKey;
export declare const PRODUCTION_TOKEN_LEDGERS: PublicKey[];
export declare const STAGING_TOKEN_LEDGERS: PublicKey[];
export declare const TOKEN_LEDGER: PublicKey;
declare type CreateSwapInstructionParams = {
    sourceMint: PublicKey;
    userSourceTokenAccount: PublicKey;
    userDestinationTokenAccount: PublicKey;
    userTransferAuthority: PublicKey;
    inAmount: BN | null;
    minimumOutAmount: BN;
    tokenLedger: PublicKey;
    platformFee?: PlatformFee;
};
declare type CreateSwapExactOutputInstructionParams = {
    sourceMint: PublicKey;
    userSourceTokenAccount: PublicKey;
    userDestinationTokenAccount: PublicKey;
    userTransferAuthority: PublicKey;
    outAmount: BN;
    maximumInAmount: BN;
    tokenLedger: PublicKey;
    platformFee?: PlatformFee;
};
export declare function createMercurialExchangeInstruction({ swapLayout, userSourceTokenAccount, userDestinationTokenAccount, userTransferAuthority, inAmount, minimumOutAmount, tokenLedger, platformFee, }: {
    swapLayout: MercurialSwapLayoutState;
} & CreateSwapInstructionParams): TransactionInstruction;
export declare function createSerumSwapInstruction({ market, sourceMint, openOrdersAddress, userSourceTokenAccount, userDestinationTokenAccount, userTransferAuthority, inAmount, minimumOutAmount, tokenLedger, platformFee, referrer, }: {
    market: Market;
    openOrdersAddress: PublicKey;
    referrer: PublicKey | undefined;
} & CreateSwapInstructionParams): TransactionInstruction;
export declare function createTokenSwapInstruction({ tokenSwapState, sourceMint, userSourceTokenAccount, userDestinationTokenAccount, userTransferAuthority, inAmount, minimumOutAmount, tokenLedger, platformFee, isStep, }: {
    tokenSwapState: TokenSwapState;
    isStep: boolean;
} & CreateSwapInstructionParams): TransactionInstruction;
export declare function createSenchaSwapInstruction({ poolState, sourceMint, userSourceTokenAccount, userDestinationTokenAccount, userTransferAuthority, inAmount, minimumOutAmount, tokenLedger, platformFee, }: {
    poolState: SenchaPoolState;
} & CreateSwapInstructionParams): TransactionInstruction;
export declare function createCropperSwapInstruction({ poolState, feeAccount, sourceMint, userSourceTokenAccount, userDestinationTokenAccount, userTransferAuthority, inAmount, minimumOutAmount, tokenLedger, platformFee, }: {
    poolState: CropperPoolState;
    feeAccount: PublicKey;
} & CreateSwapInstructionParams): TransactionInstruction;
export declare function createRaydiumSwapInstruction({ raydiumAmm, userSourceTokenAccount, userDestinationTokenAccount, userTransferAuthority, inAmount, minimumOutAmount, tokenLedger, platformFee, }: {
    raydiumAmm: RaydiumAmm;
} & CreateSwapInstructionParams): TransactionInstruction;
export declare function createAldrinSwapInstruction({ poolState, sourceMint, userSourceTokenAccount, userDestinationTokenAccount, userTransferAuthority, inAmount, minimumOutAmount, tokenLedger, platformFee, }: {
    poolState: AldrinPoolState;
} & CreateSwapInstructionParams): TransactionInstruction;
export declare function createAldrinV2SwapInstruction({ poolState, sourceMint, userSourceTokenAccount, userDestinationTokenAccount, curve, userTransferAuthority, inAmount, minimumOutAmount, tokenLedger, platformFee, }: {
    poolState: AldrinPoolState;
    curve: PublicKey;
} & CreateSwapInstructionParams): TransactionInstruction;
export declare function createCremaSwapInstruction({ poolState, sourceMint, userSourceTokenAccount, userDestinationTokenAccount, userTransferAuthority, inAmount, minimumOutAmount, tokenLedger, platformFee, }: {
    poolState: CremaPoolState;
} & CreateSwapInstructionParams): TransactionInstruction;
export declare function createRiskCheckAndFeeInstruction(userDestinationTokenAccount: PublicKey, userTransferAuthority: PublicKey, minimumOutAmount: BN, tokenLedger: PublicKey, platformFee: PlatformFee | undefined): TransactionInstruction;
export declare function createSetTokenLedgerInstruction(tokenLedger: PublicKey, tokenAccountAddress: PublicKey): TransactionInstruction;
export declare function createInitializeTokenLedgerInstruction(tokenLedger: PublicKey, payer: PublicKey): TransactionInstruction;
export declare function createOpenOrdersInstruction(market: Market, userTransferAuthority: PublicKey): [PublicKey, TransactionInstruction];
export declare function createSaberSwapInstruction({ stableSwap, sourceMint, userSourceTokenAccount, userDestinationTokenAccount, userTransferAuthority, inAmount, minimumOutAmount, tokenLedger, platformFee, }: {
    stableSwap: StableSwap;
} & CreateSwapInstructionParams): TransactionInstruction;
export declare function createSaberAddDecimalsDepositInstruction({ addDecimals, userSourceTokenAccount, userDestinationTokenAccount, userTransferAuthority, inAmount, minimumOutAmount, tokenLedger, platformFee, }: {
    addDecimals: AddDecimals;
} & CreateSwapInstructionParams): TransactionInstruction;
export declare function createSaberAddDecimalsWithdrawInstruction({ addDecimals, userSourceTokenAccount, userDestinationTokenAccount, userTransferAuthority, inAmount, minimumOutAmount, tokenLedger, platformFee, }: {
    addDecimals: AddDecimals;
} & CreateSwapInstructionParams): TransactionInstruction;
export declare function createLifinitySwapInstruction({ swapState, sourceMint, userSourceTokenAccount, userDestinationTokenAccount, userTransferAuthority, inAmount, minimumOutAmount, tokenLedger, platformFee, }: {
    swapState: LifinitySwapLayoutState;
} & CreateSwapInstructionParams): TransactionInstruction;
declare type CykuraSwapInstructionArgs = {
    poolAddress: PublicKey;
    inputVault: PublicKey;
    outputVault: PublicKey;
    nextObservationState: PublicKey;
    lastObservationState: PublicKey;
    swapAccountMetas: AccountMeta[];
};
export declare function createCykuraSwapInstruction({ additionalArgs, userSourceTokenAccount, userDestinationTokenAccount, userTransferAuthority, inAmount, minimumOutAmount, tokenLedger, platformFee, }: {
    additionalArgs: CykuraSwapInstructionArgs;
} & CreateSwapInstructionParams): TransactionInstruction;
declare type WhirlpoolSwapInstructionArgs = {
    aToB: boolean;
    whirlpool: PublicKey;
    tokenVaultA: PublicKey;
    tokenVaultB: PublicKey;
    tickArray0: PublicKey;
    tickArray1: PublicKey;
    tickArray2: PublicKey;
    oracle: PublicKey;
};
export declare function createWhirlpoolSwapInstruction({ additionalArgs, userSourceTokenAccount, userDestinationTokenAccount, userTransferAuthority, inAmount, minimumOutAmount, tokenLedger, platformFee, }: {
    additionalArgs: WhirlpoolSwapInstructionArgs;
} & CreateSwapInstructionParams): TransactionInstruction;
declare type MarinadeFinanceDepositInstructionArgs = {
    address: PublicKey;
    marinadeStateResponse: MarinadeStateResponse;
    liqPoolSolLegPda: PublicKey;
    liqPoolMsolLegAuthority: PublicKey;
    reservePda: PublicKey;
    msolMintAuthority: PublicKey;
};
export declare function createMarinadeFinanceDepositInstruction({ additionalArgs, userSourceTokenAccount, userDestinationTokenAccount, userTransferAuthority, inAmount, minimumOutAmount, tokenLedger, platformFee, }: {
    additionalArgs: MarinadeFinanceDepositInstructionArgs;
} & CreateSwapInstructionParams): TransactionInstruction;
declare type MarinadeFinanceLiquidUnstakeInstructionArgs = {
    address: PublicKey;
    marinadeStateResponse: MarinadeStateResponse;
    liqPoolSolLegPda: PublicKey;
};
export declare function createMarinadeFinanceLiquidUnstakeInstruction({ additionalArgs, userSourceTokenAccount, userDestinationTokenAccount, userTransferAuthority, inAmount, minimumOutAmount, tokenLedger, platformFee, }: {
    additionalArgs: MarinadeFinanceLiquidUnstakeInstructionArgs;
} & CreateSwapInstructionParams): TransactionInstruction;
export declare function createWhirlpoolSwapExactOutputInstruction({ additionalArgs, userSourceTokenAccount, userDestinationTokenAccount, userTransferAuthority, outAmount, maximumInAmount, tokenLedger, platformFee, }: {
    additionalArgs: WhirlpoolSwapInstructionArgs;
} & CreateSwapExactOutputInstructionParams): TransactionInstruction;
export {};
