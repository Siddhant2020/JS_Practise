// singleton via constructor
Object.create

// object literals
const mySymbol = Symbol("key1");


const User = {
    name:"Siddhant",
    "full name": "Siddhant Ashok",
    [mySymbol]: "myKey1",
    age: 18,
    location: "Pune",
    email: "siddhant@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturdays"]
}

// console.log(User.email);
// console.log(typeof User[mySymbol]);
// console.log(User["full name"]);
// console.log(User["email"]);

User.email = "Siddhantashok@google.com";

// Object.freeze(User);    // freeze the object, changes won't be accepted
// User.email = "Sid@google.com";
// console.log(User);

User.greeting = function(){
    console.log("hello js user");
}

User.greeting2 = function(){
    console.log(`hello js user, ${this.email}`);
}

console.log(User.greeting());
console.log(User.greeting2());

