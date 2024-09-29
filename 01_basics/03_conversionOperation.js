let score = "33"

// console.log(typeof score);
// console.log(typeof(score));

let valueToNumber = Number(score);
// console.log(valueToNumber);
// console.log(typeof(valueToNumber));

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "abhi" => true

let someNumber = 53

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);


//  ********************************** Operations ********************************** //

let num = 3
let negnum = -num
// console.log(negnum);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " abhimanyu"

let str3 = str1+str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");    // 
// console.log("1" + 2 + 2);     // 122 , first agrument is string so all it will change all the arguments to string
// console.log(1 + 2 + "2");      // 32  (1+2)=>3 , 2=>2 ==> 32

// console.log((3+4) * 5 % 3);

// console.log(+true);  // => 1
// console.log(+"");    // => 0

let num1, num2, num3

num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

let x = 3;
const y = x++;   // (postfix operation) "x:4, y:3"  , after assigning the value to b it will increment it self, cause const can't be modified

let a = 3;
const b = ++a;   // (prefix operation) "a:4, b:4"   , before assigning the value to b it will increment it self, cause const can't be modified
