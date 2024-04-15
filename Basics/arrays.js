// // array

// const myArr = [0,1,2,3,4,5];
// const myHearos = ["shatiMan", "nagraj"]

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[2])

// // Array methods

// myArr.push(6);
// myArr.push(7);
// console.log(myArr)
// console.log(typeof myArr)

// myArr.pop();
// console.log(myArr)

// myArr.unshift(9);
// console.log(myArr)

// myArr.shift();
// console.log(myArr)
// slice doesn't change the original array , splice changes the original array

// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]

// // const allHeros = marvel_heros.concat(dc_heros);
// // marvel_heros.push(dc_heros)
// const all_heros = [...marvel_heros, ...dc_heros]    //spread operator

// console.log(all_heros);

const another_array = [1,2,3, [4,5,6], 7, [ 6,7, [4,5]]]

// const usable_another_array = another_array.flat(Infinity);  //converts 2d or 3d array to 1d array or flat array (pass depth as an arguemnt 1 or 2 or 3 else pass Infinity)
// console.log(usable_another_array)


// console.log(Array.isArray(another_array));
console.log(Array.isArray("Siddhant"));
console.log(Array.from("Siddhant"));
console.log(Array.from({name:"Siddhant", age:57})); // intersting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));