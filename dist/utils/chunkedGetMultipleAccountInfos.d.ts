/// <reference types="node" />
import { AccountInfo, Connection } from '@solana/web3.js';
export declare function chunkedGetMultipleAccountInfos(connection: Connection, pks: string[], batchChunkSize?: number, maxAccountsChunkSize?: number): Promise<Array<AccountInfo<Buffer> | null>>;
