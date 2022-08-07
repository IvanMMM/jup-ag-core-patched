import { Connection, PublicKey, Transaction, TransactionResponse, TransactionSignature } from '@solana/web3.js';
declare type ResponseMeta = NonNullable<TransactionResponse['meta']>;
declare type ReponseTransaction = TransactionResponse['transaction'];
export declare function extractTokenBalanceChangeFromTransaction(meta: ResponseMeta, transaction: ReponseTransaction, tokenAccountAddress: PublicKey): number | undefined;
export declare function extractSOLChangeFromTransaction(meta: ResponseMeta, transaction: ReponseTransaction, user: PublicKey): number;
export declare function getWritableKeys(transaction: Transaction): PublicKey[];
export declare function getTokenBalanceChangesFromTransactionResponse({ txid, inputMint, outputMint, user, sourceAddress, destinationAddress, transactionResponse, hasWrappedSOL, }: {
    txid: TransactionSignature;
    inputMint: PublicKey;
    outputMint: PublicKey;
    user: PublicKey;
    sourceAddress: PublicKey;
    destinationAddress: PublicKey;
    transactionResponse: TransactionResponse | null;
    hasWrappedSOL: boolean;
}): number[];
export declare function pollForConfirmedTransaction(connection: Connection, txid: TransactionSignature): Promise<TransactionResponse | null>;
export declare function getUnixTs(): number;
/**
 * awaits confirmation while resending the transaction periodically
 *
 * Our RPC node settings
 * solana_send_leader_count: 8
 * solana_send_retry_ms: 15000
 **/
export declare function transactionSenderAndConfirmationWaiter(connection: Connection, signedTransaction: Transaction, timeout?: number, // 2 minutes, (sendInterval * sendRetries) = 80_000 + extra wait 40_000
pollInterval?: number, sendInterval?: number, sendRetries?: number): Promise<{
    txid: TransactionSignature;
    transactionResponse: TransactionResponse | null;
}>;
export declare function getSignature(transaction: Transaction): string;
export {};
