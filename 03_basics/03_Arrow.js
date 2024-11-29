const user = {
    username: "Hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);   // this is used within a current context to refer the variable
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);    // result '{}'   ,     when an engine runs along browser it gives the global object as window.


// function chai(){
//     let username = "hitesh"
//     console.log(this);     // console.log(this.username);  it can not be used in function, it can used in object only.
    
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


// const chai =  () => {       // () => is called as arrow function
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// ******************************** Arrow function ******************************** //

// const addTwo = (num1, num2) => {         // basic arrow function
//     return  num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2         // implicit return, remove the curly bracket

// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "hitesh"})   // passing the object
console.log(addTwo(3,4));

// const myArray = [2,5,3,7,8]

// myArray.forEach()