const numbers = [1,2,3]

const total = numbers.reduce((acc, curval) => {
    console.log(`${acc} ${curval}`)
    return acc + curval;
}, 2);

console.log(total);