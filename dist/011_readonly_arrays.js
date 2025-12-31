"use strict";
const xss = [1, 2, 34];
const ys = [1, 2, 3, 4, 5];
const yss = [1, 2, 3, 4, 5];
function sum(nums) {
    let s = 0;
    for (const n of nums)
        s += n;
    return s;
}
//you can pass mutable array to a function that expects readonly
console.log(sum(xss));
function sum2(nums) {
    let s = 0;
    for (const n of nums)
        s += n;
    return s;
}
//you can't pass readonly array to a function that expects mutable
// console.log(sum2(ys))
