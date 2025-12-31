"use strict";
//<T extends x>
//<T> constrains T so that certain shapes are allowed
//key constains <k extends keyof T> k must be a key of T
function lenN4(xN4) {
    return xN4.length;
}
console.log(lenN4([1, 2, 3, 4]));
console.log(lenN4("Hello"));
console.log(lenN4({ length: 10, tag: "array" }));
// console.log(lenN4(1)); //1 doesn't have a length property
