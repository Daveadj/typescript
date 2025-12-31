"use strict";
//understand what is "type parameter" <T>
function id(x) {
    return x;
}
console.log(id("Hello")); //T is string
console.log(id(1)); //T is number
console.log(id(true)); //T is boolean
function firstGen(arr) {
    return arr[0];
}
console.log(firstGen([1, 2, 3]));
console.log(firstGen(["Hello", "World"]));
