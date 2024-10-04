// ******************************** Functions ******************************** //

// console.log("H");
// console.log("i");
// console.log("t");                 // lengthy process
// console.log("e");
// console.log("s");
// console.log("h");

function myName(){
    console.log("H");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}

// myName   //  reference 
// myName()  // execute 

function addTwoNumbers(number1, number2) {    // passing the definition is called parameters 
    console.log(number1 + number2);       // direct printing the value, not returning the result 
}

// addTwoNumbers(2,3)   // passing the value is called argument      
// const result = addTwoNumbers(2,3) 
// console.log("Result:", result);   // undefined


function addTwoNumbers(number1, number2) {    // passing the definition is called parameters 
    let result1 = number1 + number2
    return result1    
}
const result1 = addTwoNumbers(3, 4)     // passing the result into another variable by return 
// console.log("Result:", result1);


// another 
function addTwoNumbers(number1, number2) {    // passing the definition is called parameters 
    return number1+number2              // helps in storing the value in another variable
}
const result2 = addTwoNumbers(70,89)     // passing the result into another variable by return 
// console.log("Result:", result2);


function loginUserMessage(username) {
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Abhimanyu"));
// console.log(loginUserMessage(""));
console.log(loginUserMessage());    // undefined


// **************** rest operator **************** //
function calculateCardPrice(...num1) {      // "..."  are called spread operator and also rest operator also
    return num1
}
console.log(calculateCardPrice(200, 400, 500));

// declaring function and object
const user = {
    username : "hitesh",
    price : 199
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username : "sam",
    price : 399
})

// arrays 
const myNewArray = [200, 400, 100, 600]    // array function 

function returnSecondValue(getArray) {   // return function
    return getArray
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
