//  Primitive  :- Copy of the value

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
 
// console.log(id === anotherId);  

const bigNumber = 34539872157893721n  // to make it big integer



// Reference (Non- Primitive) :- Reference to the same object

// types: Array, Objects, Functions

// ************************ Array ************************ //
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

// console.log(typeof myFunction);
 

// ******************************************************** //
// ************************ Memory ************************ //

// Stack (Primitive), Heap (Non-Primitive)


// ************************ Stack (Primitive) ************************ //
let myYoutubename = "Abhimanyu.com"

let anotherName = myYoutubename
anotherName = "chai Aur Code"

console.log(myYoutubename);
console.log(anotherName);



// ************************ Heap (Non-Primitive) ************************ //
let userOne = {
    email: "user.google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "abhi@google.com"

console.log(userOne.email);
console.log(userTwo.email);

