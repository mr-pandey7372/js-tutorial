// for of loop      --> array specific loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);    
}

// Maps   :-> holds the key-value pair and remember the insertion order of the keys.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
                                           // objects are non-iterable
for (const [key, value] of myObject) {
    // console.log(key, ':-', value);
}

