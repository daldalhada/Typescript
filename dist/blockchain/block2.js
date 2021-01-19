"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryproJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlcokHash = (index, previousHash, timestamp, data) => CryproJS.SHA256(index + previousHash + timestamp + data).toString();
// Block.calculateBlcokHash()
const genesisBlock = new Block(0, "21231231", "", "Hello", 123456);
let blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
//# sourceMappingURL=block2.js.map