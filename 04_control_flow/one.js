// if statement

// if(true){
//      // execute
// }
// if(false){
//      // don't execute
// }

// const isUserLoggedIn = true

// if(2 == "2"){
//     console.log("executed");
    
// }

// comparision operator  :-  <, >, <=, >=, ==, !=, === (also check type), !==

// const temperature = 41
// if(temperature < 50){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }

// *************************** Scope *************************** //
// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);   
// }

// var:- scope is completely global

// const balance = 1000
// if(balance > 500) console.log("test");

// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900) {
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy courses");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}

