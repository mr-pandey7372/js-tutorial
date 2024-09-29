// array   -> element can be of any type
//  * storing a collection of multiple items under a single variable name.
//  * JavaScript arrays are resizable and can contain a mix of different data types.

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]
const myArr2 = new Array(1,2,3,4)

// console.log(myArr[0]);

// ********************************** Array Methods ********************************** //

// push()
// myArr.push(6)
// myArr.push(7) // adds the element to last
// myArr.pop()   // removes the element from last


// myArr.unshift(9)    // adds the element to first
// myArr.shift()    // removes the element from first

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

const newArr = myArr.join()    // => converts the array to string

// console.log(myArr);
// console.log(typeof newArr);     

// slice and splice
console.log("A ", myArr);

// Slice - slice(): Returns a portion of an array without modifying the original array. It takes two parameters: the start 
// and end indices, and returns a new array.
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

// Splice - splice(): Modifies the original array by adding or removing elements. It takes a start index, the number of 
// elements to remove, and optional elements to insert.
const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);