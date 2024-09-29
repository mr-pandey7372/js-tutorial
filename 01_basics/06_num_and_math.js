const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

// ********************************** Nums ********************************** //

// ********************** Methods ********************** //

// using toString()
console.log(balance.toString());   // after converting to string, we can use all the string's object.

console.log(balance.toString().length);

// using toFixed()
console.log(balance.toFixed(2));   // => 100.00

// using toPrecision()
const otherNumber = 123.9773
console.log(otherNumber.toPrecision(3));   // rounds off the value given according to the given parameter. => 124


// using toLocaleString()
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));   // represents the value with comma with 'US' standards, for Indian standards => 'en-IN'



// ********************************** Maths ********************************** //

console.log(Math);
console.log(Math.abs(-4));   // change the negative value to positive   => 4
console.log(Math.round(4.6));  // => 5
console.log(Math.ceil(4.6));   // => 5
console.log(Math.floor(4.6));  // => 4
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());    // values between ' 0-1 '
console.log((Math.random()*10)+1);     // for numbers greater than '0'
console.log(Math.floor(Math.random()*10)+1);    // for single value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);    // to convert the range between 10 to 20 we added min in last.