// Immediately Invoked Function Expression (IIFE)

// function chai() {
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);       // this is the correct syntax by adding the paranthesis
})();


// () function definition , () execution.....    "due to the pollution of global scope, we use iife."

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
} )('hitesh')   