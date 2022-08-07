import { Layout, Structure } from '@solana/buffer-layout';
import { u64 } from '@solana/spl-token';
import { PublicKey } from '@solana/web3.js';
declare class PublicKeyLayout extends Layout<PublicKey> {
    private layout;
    constructor(property?: string);
    getSpan(b: Uint8Array, offset?: number): number;
    decode(b: Uint8Array, offset?: number): PublicKey;
    encode(src: PublicKey, b: Uint8Array, offset: number): number;
}
/**
 * Layout for a public key
 */
export declare const publicKey: (property: string) => PublicKeyLayout;
declare class U64Layout extends Layout<u64> {
    private layout;
    constructor(span: number | undefined, property: string);
    getSpan(b: Uint8Array, offset?: number): number;
    decode(b: Uint8Array, offset?: number): u64;
    encode(src: u64, b: Uint8Array, offset: number): number;
}
/**
 * Layout for a 64bit unsigned value
 */
export declare const uint64: (property: string) => U64Layout;
export declare const uint128: (property: string) => U64Layout;
export declare const rustEnum: (variants: Structure<any>[], property: string) => import("@solana/buffer-layout").Union;
export {};
