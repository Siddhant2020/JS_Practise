// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2024, 0, 21)
console.log(myCreatedDate.toDateString())

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDate())

newDate.toLocaleString('default', {
    weekday : "long"
})
console.log(newDate)