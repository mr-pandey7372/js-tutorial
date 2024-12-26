const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// Constructor Function

function User(username, loginCount, isLoggedIn){
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcime ${this.username}`);
    }

    return this
}

const userOne = new User("hitesh", 12, true)   // when we use new keyword an empty object will get created, which is called instance
const userTwo = new User("ChaiAurCode", 11, false)

console.log(userOne);
console.log(userTwo);

// constructor function gets called by new keyword, all arguments get packed
// this keyword inject all the object in the given keyword
// and finally all the things get back to the function

