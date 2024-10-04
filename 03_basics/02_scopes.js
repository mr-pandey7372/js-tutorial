var c = 100   // this will give the if(statement wala result)
let a = 300    // but this will give the global wala value

if(true) {
    let a = 10      // 
    const b = 20    // as const and let are available till the scope in which they are defined, as it is a block scope
    var c = 30      //   it will print out of scope
}


// console.log(a);
// console.log(b);
// console.log(c);


// ***************** nested scope ***************** //
function one() {
    const username = "hitesh"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);    // accessing this out of scope

    two()
}

// one()

if(true) {
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ********************************** interesting ********************************** //

function addone(num) {
    return num + 1
}

addone(5)


addTwo(5)     // error causes due to storing the function in variable and using it in before execution.
const addTwo = function(num){
    return num + 2
}

addTwo(5)