const user = {
  username : "Siddhant",
  loginCount : 9,
  isSignedIn : true,

  getUserDetails: function(){
    console.log("Got user details from database");
  }
};


// // console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  return this;
}

const userOne = new User("siddhant", 12, true);
const userTwo = new User("ashok", 12, false);
console.log(userTwo);