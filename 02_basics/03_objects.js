// singleton   => Object.create , by contructor method

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"Abhimanyu",
    [mySym] : "myKey1",   // symbol
    "full name" : "Abhimanyu Pandey",
    age: 20,
    location : "Bhubaneswar",
    email : "abhimanyu@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// how to access the values
console.log(JsUser.name);
console.log(JsUser["name"]);   // to access the key given in string
console.log(JsUser["full name"]);  // key and value are in string => so the access is done using array string
console.log(typeof JsUser[mySym]);    // to access the symbol datatype, create the data type, and use the '[]' to denote the key in object

JsUser.email = "abhimanyu@gmail.com"
console.log(JsUser.email);
Object.freeze(JsUser)     // to freeze an object => changes can't be done after freeze
JsUser.email = "abhimanyu@microsoft.com"
console.log(JsUser.email);

JsUser.greeting = function() {
    console.log("Hello Js Users");  
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js Users, ${this.name}`);   // => this to access the objects
}

console.log(JsUser.greeting);   // => [Function (anonymous)]
console.log(JsUser.greeting());   // =>  Hello Js Users

console.log(JsUser.greetingTwo());
