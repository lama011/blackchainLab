//console.log("Hello Blockchain");

//var F1 = 5;
//var F2 = 6;


/*getMultiply(F1,F2);

function getMultiply(num1 ,num2){
   
    return num1 * num2;
}

console.log(getMultiply(5,5));

const multiyply = (num1,num2) => {
    return num1*num2;
}
*/
/*class Person {
constructor(name,age,id){
    this.name = name;
    this.age = age;
    this.id = id;
}
}

let person = new Person("lama",22,"1111");
console.log(person.name);
console.log(person.age);
console.log(person.id);
*/
/*class Block{
    constructor(hash)
}*/
import { Block } from "./block.js";//startin point is the start
import { blockChain } from "./blockChain.js";

//let block1 = new Block("hash","preiviousHash",1,"anydata");
//let block2 = new Block("hash","preiviousHash",2,"anydata");

//console.log(block.data)

//block1.print()
//block2.print()

const block = new blockChain();

block.print();
block.addBlock();