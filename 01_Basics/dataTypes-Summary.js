// Primitive Data Types
// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const Id = Symbol('123')
const anotherId = Symbol('123')
console.log(Id == anotherId);

const bigNumber = 4138418374981238189231n

// Reference Data Types (Not Primitive) 
// Arrays, Objects, Functions

const heros = ["superman" , "shaktimaan" , "doga"]

let myObj = {
    name: "Daksh",
    age: 20,
}

const myFunction = function() {
    console.log("Hello World!!");
} 

console.log(typeof myFunction);
console.log(typeof Id);

