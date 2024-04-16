// // singleton via constructor
// Object.create

// // object literals
// const mySymbol = Symbol("key1");


// const User = {
//     name:"Siddhant",
//     "full name": "Siddhant Ashok",
//     [mySymbol]: "myKey1",
//     age: 18,
//     location: "Pune",
//     email: "siddhant@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturdays"]
// }

// // console.log(User.email);
// // console.log(typeof User[mySymbol]);
// // console.log(User["full name"]);
// // console.log(User["email"]);

// User.email = "Siddhantashok@google.com";

// // Object.freeze(User);    // freeze the object, changes won't be accepted
// // User.email = "Sid@google.com";
// // console.log(User);

// User.greeting = function(){
//     console.log("hello js user");
// }

// User.greeting2 = function(){
//     console.log(`hello js user, ${this.email}`);
// }

// console.log(User.greeting());
// console.log(User.greeting2());

// objects part 2
// const tinderUser = new Object()  //singleton object
const tinderUser = {}   //non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Samay"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "some@example.com",
    fullName : {
        userFullname : {
            firstName : "Siddhant",
            lastName : "Ashok"
        }
    }
}

console.log(regularUser.fullName?.userFullname.firstName);


const obj1 = {1:"1",2:"2"};
const obj2 = {3:"a",4:"b"};
const obj4 = {5:"a",6:"b"};

// const obj3 = Object.assign({}, obj1, obj2, obj4);

// const obj3 = {...obj1, ...obj2, ...obj4};
// console.log(obj3);

const users = [
    {
        id:1,
        email:"example@yop.com"
    },{

    },{

    }
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLoggedI'));