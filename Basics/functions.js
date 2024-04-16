// function sayMyName(){
//     console.log("S");
//     console.log("I");
//     console.log("D");
//     console.log("D");
//     console.log("H");
//     console.log("A");
//     console.log("N");
//     console.log("T");

// }

// sayMyName    // gives reference of the funciton
// sayMyName();    // function execution call

// function addTwoNumbers(number1, number2){
//     // console.log(number1 * number2)
//     return number1 + number2
// }

// const result = addTwoNumbers(1,6);

// console.log(`Result ${result}`);

function loginUserMessage(username = "sam"){ //default value is given to the parameter(default parameter)
    // if(username === undefined){
    if(!username){
        console.log("Please enter a username.")
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Siddhant"))
console.log(loginUserMessage())