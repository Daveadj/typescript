"use strict";
function sumAllNumbers(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sumAllNumbers(1, 2, 3, 4));
//Tuple rest
function makeRange(...args) {
    const [start, end, step = 1] = args;
    const out = [];
    for (let n = start; n <= end; n += step)
        out.push(n);
    return out;
}
console.log(makeRange(1, 5));
function draw(x, y) {
    console.log(x, y);
}
const points = [10, 20];
//draw(...points) //not a fixed [number,number]tuple
const pointFixed = [1, 5];
draw(...pointFixed);
