import * as CryproJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    static calculateBlcokHash = (
        index: number, 
        previousHash: string, 
        timestamp: number, 
        data: string
    ): string => 
    CryproJS.SHA256(index + previousHash + timestamp + data).toString();

    constructor(
        index: number, 
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
    ){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

// Block.calculateBlcokHash()
const genesisBlock:Block = new Block(0, "21231231", "", "Hello", 123456);
let blockchain: Block[] = [genesisBlock];

const getBlockchain = () : Block[] => blockchain;
const getLatestBlock = () : Block => blockchain[blockchain.length - 1];
const getNewTimeStamp = () : number => Math.round(new Date().getTime() / 1000);

export {};