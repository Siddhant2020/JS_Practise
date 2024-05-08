const promiseOne = new Promise((resolve, reject) => {
    //Do an async Task
    //DB calls, cryptography, network calls
    setTimeout(() => {
        console.log('Async task is compelete');
        resolve();
    },2000);
});

promiseOne.then(() => {
    console.log('Promise consumed')
});

// --------------------

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('async task 2');
        resolve();
    }, 1000)
}).then(() => {
    console.log('async 2 resolved');
});

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve({username:"siddhant", email:"sid@example.com"})
    },1000);    
});