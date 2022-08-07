/// <reference types="node" />
import { AccountInfo, PublicKey } from '@solana/web3.js';
import { Amm } from './amm';
export declare function ammFactory(address: PublicKey, accountInfo: AccountInfo<Buffer>, params?: any): Amm | undefined;
