import { Block } from "./block.js"
export class blockChain{
    //store the block in array
blockChain=[]


constructor(hash,previousHash,data,nonce){//intialize value
   //generate the gesis block
   //if the array is empty
   if(this.blockChain.length==0)
   this.blockChain.push(new Block("hash","previusHash",0,"gensis block"))
   //add new block
        }

//add function
addBlock(){
//get the hash of the prevoius block
const previousblock = this.blockChain[this.blockChain.length - 1]
//get the data 
const previousHash = this.previousblock //علشان نخزن البلوك كامل 
//add new block
this.blockChain.push(new Block("hash",previousHash,0,"gensis block"))
//mine 
}
//print the blockchain
print(){
console.log(this.blockChain)
}
}