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

// function loginUserMessage(username = "sam"){ //default value is given to the parameter(default parameter)
//     // if(username === undefined){
//     if(!username){
//         console.log("Please enter a username.")
//         return;
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Siddhant"))
// console.log(loginUserMessage())

// function calculateCartPrice(...num1){       //rest operator    
//     return num1;
// }

// console.log(calculateCartPrice(200,300,400));

const user = {
    username: "Siddhant",
    price: "199"
}

function handleObject(anyObject){
    console.log(`user name is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user);
handleObject({
    username: "sam",
    price: 399
});

const myNewArray = [200,400,100,600];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));

