import { TransactionResponse, TransactionSignature } from '@solana/web3.js';
export declare function validateTransactionResponse({ txid, transactionResponse, }: {
    txid: string;
    transactionResponse: TransactionResponse | null;
}): Promise<{
    txid: TransactionSignature;
    transactionResponse: TransactionResponse | null;
}>;
