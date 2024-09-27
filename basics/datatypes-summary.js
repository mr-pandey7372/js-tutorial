//  Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
 
console.log(id === anotherId);  

const bigNumber = 34539872157893721n  // to make it big integer



// Reference (Non- Primitive)

// types: Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
// ************************ Object ************************ //
let myObj = {
    name:"abhimanyu",
    age: 20,
}

// ************************ Function ************************ //
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);
 