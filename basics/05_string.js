const name = "Abhimanyu"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Abhimanyu-Pandey-ueiagdh')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// ******************************* Methods ******************************* //
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(8));
// console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-9,4)   // start from back, we can pass negative values too.
// console.log(anotherString);     

const newStringOne = "   Abhimanyu    "
console.log(newStringOne);       // =>     Abhimanyu     
console.log(newStringOne.trim());     // trim removes the white spaces plus line terminators   => Abhimanyu

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'));   // => true

console.log(gameName.split('-'));   // => splits the string in 3


