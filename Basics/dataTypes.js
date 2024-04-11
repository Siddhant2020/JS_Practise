"use strict"; // treat all JS code as newer version

// alert(3+3); // we are using nodejs, not browser

let name = "siddhant"
let age = 18
let isLoggedin = true

let accountId = Symbol('123')
const anotherId = Symbol('123')

console.log(accountId === anotherId)

const bigNumber = 3423111437474743938287379437394n // postfix n to make it bigInt

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value "representation for empty value"
// undefined => variable is declared but value is not assigned
// symbol => unique


// object

// console.log(typeof undefined); //undefined
// console.log(typeof null); //object
// console.log(typeof name); //object


const heros = ["shaktiman", "naagraj", "doga"];


let obj = {
    name : "Siddhant",
    currentAge : 28
}

console.log(obj)

const myfunction = function (){
    console.log('Hello world')
}

myfunction()

console.log(typeof myfunction)