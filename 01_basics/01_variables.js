const accountId = 144553     // fixed value, can't change the constant variable
let accountEmail = "abhimanyu@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2  // not allowed 

accountEmail = "hc@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope

*/

console.table([accountId,accountEmail, accountPassword, accountCity, accountState]);  // print all the variables in a table format.
