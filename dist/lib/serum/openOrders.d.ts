import { Connection, PublicKey } from '@solana/web3.js';
import { SerumMarket } from '../market';
import { Instruction } from '../../utils/instruction';
export declare type MarketToOpenOrdersAddress = Map<string, PublicKey>;
export declare function getOrCreateOpenOrdersAddress(connection: Connection, user: PublicKey, serumMarket: SerumMarket, marketToOpenOrdersAddress?: MarketToOpenOrdersAddress): Promise<(Instruction & {
    address: PublicKey;
}) | undefined>;
