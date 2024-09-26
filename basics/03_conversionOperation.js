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