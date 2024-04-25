//Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB connected`);
// }
// chai();

//named IIFE
// (function chai(){
//         console.log(`DB connected`);
// })();

//use semicolon at the end with IIFE to prevent the execution exception
//this is to prevent the global scope pollution
//()() //first parenthesis is for function definition and second parenthesis is for function execution. This is called IIFE


//IIFE using arrow function
// (()=>{
//     console.log(`DB connected`);
// })();

// ((name)=>{
//     console.log(`DB connected ${name}`);
// })("siddhant");
