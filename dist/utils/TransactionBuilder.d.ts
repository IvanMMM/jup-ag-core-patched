import { Connection, PublicKey } from '@solana/web3.js';
import { Instruction, TransactionPayload } from './instruction';
import { Owner } from './Owner';
export declare class TransactionBuilder {
    private connection;
    private feePayer;
    private instructions;
    private owner;
    constructor(connection: Connection, feePayer: PublicKey, owner: Owner);
    addInstruction(instruction: Instruction): TransactionBuilder;
    build(recentBlockHash?: string): Promise<TransactionPayload>;
}
