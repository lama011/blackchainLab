export class Block{//to tell other file that i want to get a data out of it
    data
    nonce
    previousHash
    hash

    constructor(hash,previousHash,data,nonce){//intialize value
this.hash=hash;
this.previousHash=previousHash;
this.data=data;
this.nonce=nonce;
    }
    print(){
        console.log(this.data)
        console.log(this.nonce)
    }
}
