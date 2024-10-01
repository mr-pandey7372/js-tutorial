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

