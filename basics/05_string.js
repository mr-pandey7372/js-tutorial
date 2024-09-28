// const name = "Abhimanyu"
// const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   // => follow 'backtick' to write the code 

// const gameName = new String('Abhimanyu-Pandey-ueiagdh')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// // ******************************* Methods ******************************* //
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(8));
// console.log(gameName.indexOf('y'));

// const newString = gameName.substring(0,4)
// console.log(newString);

// const anotherString = gameName.slice(-9,4)   // start from back, we can pass negative values too.
// console.log(anotherString);     

// const newStringOne = "   Abhimanyu    "
// console.log(newStringOne);       // =>     Abhimanyu     
// console.log(newStringOne.trim());     // trim removes the white spaces plus line terminators   => Abhimanyu

// const url = "https://hitesh.com/hitesh%20choudhary"
// console.log(url.replace('%20','-'));

// console.log(url.includes('hitesh'));   // => true

// console.log(gameName.split('-'));   // => splits the string in 3


// ******************************* Practicing Methods ******************************* //

// Using blink()
const contentString = "Hello, world";
console.log(contentString.blink());   // create the HTML code.   => <blink>Hello, world</blink>

// Using anchor()
console.log(contentString.anchor("name"));  // create the HTML anchor tag  => <a name="hello">Hello, world</a>

// Using at()
console.log(contentString.at(4));   // returns the value at any index => "o"

// Using big()
console.log(contentString.big());    // return the html code => <big>Hello, world</big>

// Using bold()
console.log(contentString.bold());   // convert it in html code => <b>Hello, world</b>

// Using charCodeAt()
console.log(contentString.charCodeAt(2));  // return the character/asci code at a given index.

// Using codePointAt()
console.log(contentString.codePointAt(4));   // A non-negative integer representing the code point value of the character at the given index

// Using concat()
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
lo
