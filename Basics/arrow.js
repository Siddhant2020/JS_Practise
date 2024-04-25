// const user = {
//     username: "Siddhant",
//     price: 999,

//     welcomeMessage: function(){
//         // console.log(`${this.username}, welcome to website.`)
//         console.log(this)
//     }
// }

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "siddhant";
//     console.log(this);
//     console.log(this.username);
// }

// chai();

// const chai = function (){
//         let username = "siddhant";
//         console.log(this.username);
// }
// chai();

// const chai = () => {
//             let username = "siddhant";
//             console.log(this);
// }

// chai();


//explicit return
// const addTwo = (num1, num2) => {
//     return num1+num2;
// }

//implicit return
// const addTwo = (num1 , num2) => (num1 + num2);

//implicit object return
// const addTwo = (num1, num2) => ({username : "siddhant"});
// console.log(addTwo(1,2));

// console.log(this);

const myArray = [1,2,3,4,5]
let value = 0;
// myArray.forEach(() => ({username:"siddhant"}));
myArray.forEach((x) => {value += x});
console.log(value);
// myArray.forEach(function () {});
