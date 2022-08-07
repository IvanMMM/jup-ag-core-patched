import BN from 'bn.js';
import { PublicKey } from '@solana/web3.js';
export declare const enum ProgramDerivedAddressSeed {
    LIQ_POOL_MINT_AUTHORITY = "liq_mint",
    LIQ_POOL_MSOL_ACCOUNT = "liq_st_sol",
    LIQ_POOL_MSOL_AUTHORITY = "liq_st_sol_authority",
    LIQ_POOL_MSOL_MINT_AUTHORITY = "st_mint",
    LIQ_POOL_SOL_ACCOUNT = "liq_sol",
    RESERVE_ACCOUNT = "reserve",
    UNIQUE_VALIDATOR = "unique_validator"
}
export declare namespace MarinadeStateResponse {
    interface Fee {
        basisPoints: number;
    }
    interface AccountList {
        account: PublicKey;
        itemSize: number;
        count: number;
        newAccount: PublicKey;
        copiedCount: number;
    }
    interface StakeSystem {
        stakeList: AccountList;
        delayedUnstakeCoolingDown: BN;
        stakeDepositBumpSeed: number;
        stakeWithdrawBumpSeed: number;
        slotsForStakeDelta: BN;
        lastStakeDeltaEpoch: BN;
        minStake: BN;
        extraStakeDeltaRuns: number;
    }
    interface ValidatorSystem {
        validatorList: AccountList;
        managerAuthority: PublicKey;
        totalValidatorScore: number;
        totalActiveBalance: BN;
        autoAddValidatorEnabled: number;
    }
    interface LiqPool {
        lpMint: PublicKey;
        lpMintAuthorityBumpSeed: number;
        solLegBumpSeed: number;
        msolLegAuthorityBumpSeed: number;
        msolLeg: PublicKey;
        lpLiquidityTarget: BN;
        lpMaxFee: Fee;
        lpMinFee: Fee;
        treasuryCut: Fee;
        lpSupply: BN;
        lentFromSolLeg: BN;
        liquiditySolCap: BN;
    }
}
export interface MarinadeStateResponse {
    msolMint: PublicKey;
    adminAuthority: PublicKey;
    operationalSolAccount: PublicKey;
    treasuryMsolAccount: PublicKey;
    reserveBumpSeed: number;
    msolMintAuthorityBumpSeed: number;
    rentExemptForTokenAcc: BN;
    rewardFee: MarinadeStateResponse.Fee;
    stakeSystem: MarinadeStateResponse.StakeSystem;
    validatorSystem: MarinadeStateResponse.ValidatorSystem;
    liqPool: MarinadeStateResponse.LiqPool;
    availableReserveBalance: BN;
    msolSupply: BN;
    msolPrice: BN;
    circulatingTicketCount: BN;
    circulatingTicketBalance: BN;
    lentFromReserve: BN;
    minDeposit: BN;
    minWithdraw: BN;
    stakingSolCap: BN;
    emergencyCoolingDown: BN;
}
