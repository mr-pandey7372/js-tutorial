// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);     // convert string to number
// console.log("02" > 1);


// ************************ Avoid ************************ //
console.log(null > 0);      // => false
console.log(null == 0);     // => false
console.log(null >= 0);     // => true , 
// The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number treating as 0. That's why (3) null >= 0 is true and (1) null > 0 is false.


console.log(undefined == 0);   // => false
console.log(undefined > 0);    // => false
console.log(undefined < 0);    // => false
// ************************ Avoid ************************ //



/* strict check  (===)  */
console.log("2"===2);  // => false, cause strict check also check data types.

