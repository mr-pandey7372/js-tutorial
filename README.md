# js-tutorial

// console.log("Abhimanyu") -> print out the value.

# Variables
to store an infromation.

types of variables:-
    1.conts
    2.let
    3.var

    const accountId = 144553     // fixed value, can't change the constant variable
    let accountEmail = "abhimanyu@gmail.com"    // values can be changed
    var accountPassword = "12345"   // values can be changed
    accountCity = "Jaipur"   // values can be changed

    // accountId = 2  // change not allowed 

    accountEmail = "hc@gmail.com"
    accountPassword = "21212121"
    accountCity = "Bengaluru"

    console.log(accountId);     // prints one variable at a time

    /*
    Prefer not to use var
    because of issue in block scope and functional scope

    */



    console.table([accountId,accountEmail, accountPassword, accountCity]);  // print all the variables in a table format.


# Datatypes and ECMA standards
    "use strict";  // treat all js code as newer version (not important as it is by default)


    //  alert(3+3)  // we are using node.js, not a browser

    console.log(3
        +
        3)  // code readability should be high

    console.log("Abhimanyu")


    let name = "abhimanyu"  // string
    let age = 20   // integer
    let isLoggedIn = false   // boolean

    // number => 2 to power 53
    // bigint 
    // string => " "
    // boolean => true/false
    // null => standalone value , representation of an empty value 
    // undefined => value not assigned 
    // symbol => unique 


    // object

    console.log(typeof undefined);   // undefined
    comsole.log(typeof null);  //  object 

# Datatype conversion confusion

    let score = "33"

    console.log(typeof score);
    console.log(typeof(score));

    let valueToNumber = Number(score);
    console.log(valueToNumber);
    console.log(typeof(valueToNumber));

    // "33" => 33
    // "33abc" => NaN
    // true => 1; false => 0

    let isLoggedIn = 1

    let booleanIsLoggedIn = Boolean(isLoggedIn);
    console.log(booleanIsLoggedIn);

    // 1 => true; 0 => false
    // "" => false
    // "abhi" => true

    let someNumber = 53

    let stringNumber = String(someNumber);
    console.log(stringNumber);
    console.log(typeof stringNumber);