// var c = 300;
// let a = 300;
// if (true) {
//     let a = 10;
//     const b = 20;
//     // var c = 30;
//     console.log("Inner : " + a);
// }

// console.log(a);


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];    
// }
// console.log(b);
// console.log(c);     // c is out of scope and still giving the output at console


// function one(){
//     const username = "siddhant";

//     function two(){
//         const website = "youtube";
//         console.log(username);
//     }
//     // console.log(website);

//     two();
// }

// one();

/**********************interesting ***************/

// console.log(addone(5)); //  function executes if called before implementation
// //Function
// function addone(num){
//     return num + 1;
// }


// // console.log(addTwo(5)); // expression throws error if called before implementation (Hoisting)
// //Expression
// const addTwo = function(num){
    // return num +2
// }

// console.log(addTwo(5));  // expression executes if called before implementation