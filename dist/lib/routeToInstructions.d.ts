import { Connection, PublicKey } from '@solana/web3.js';
import { RouteInfo } from './routes';
import { Instruction } from '../utils/instruction';
import { Owner } from '../utils/Owner';
import { PlatformFee } from './types';
import { QuoteMintToReferrer } from '..';
declare type RouteToInstructionsParams = {
    user: Owner;
    tokenLedger: PublicKey;
    openOrdersAddresses: (PublicKey | undefined)[];
    userSourceTokenAccountAddress: PublicKey;
    userIntermediaryTokenAccountAddress: PublicKey | undefined;
    userDestinationTokenAccountAddress: PublicKey;
    routeInfo: RouteInfo;
    platformFee: PlatformFee | undefined;
    quoteMintToReferrer: QuoteMintToReferrer;
};
declare function routeToInstructions({ user, tokenLedger, openOrdersAddresses, userSourceTokenAccountAddress, userIntermediaryTokenAccountAddress, userDestinationTokenAccountAddress, routeInfo, platformFee, quoteMintToReferrer, }: RouteToInstructionsParams): Promise<Instruction>;
export declare const routeAtaInstructions: ({ connection, marketInfos, owner, unwrapSOL, }: {
    connection: Connection;
    marketInfos: RouteInfo['marketInfos'];
    owner: Owner;
    unwrapSOL: boolean;
}) => Promise<{
    userIntermediaryTokenAccountResult: (Instruction & {
        address: PublicKey;
    }) | undefined;
    userDestinationTokenAccountResult: Instruction & {
        address: PublicKey;
    };
}>;
export default routeToInstructions;
