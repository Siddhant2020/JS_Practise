const promiseOne = new Promise((resolve, reject) => {
    //Do an async Task
    //DB calls, cryptography, network calls
    setTimeout(() => {
        console.log('Async task 1 is compelete');
        resolve();
    },4000);
});

promiseOne.then(() => {
    console.log('Promise 1 consumed')
});

// --------------------

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('async task 2');
        resolve();
    }, 3000)
}).then(() => {
    console.log('async 2 resolved');
});

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve({username:"siddhant", email:"sid@example.com"});
    },2000);    
});

promiseThree.then((user)=>{
    console.log(user)
});

const promiseFourth = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({username : "siddhant", password : "123"});
        }else{
            reject('ERROR: Something went wrong');
        }
    },1000);
});


promiseFourth
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username)
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log('The promise is either resolved or rejected');
});

const promiseFifth = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({username : "Javascript", password : "123"});
        }else{
            reject('ERROR: JS went wrong');
        }
    },5000);
});

async function consumePromiseFifth(){
    try {        
        const response = await promiseFifth;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

consumePromiseFifth();


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/siddhant2020');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(`E : ${error}`);
//     }
// }

// getAllUsers();

fetch('https://api.github.com/users/siddhant2020')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});