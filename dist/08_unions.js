"use strict";
//value -> this or that
function printId(id) {
    if (typeof id === 'string') {
        id.toUpperCase();
    }
    else {
        id.toFixed(2);
    }
}
function describeUser(u) {
    if (u.role === "admin") {
        console.log("Admin with permissions: ", u.permissions);
    }
    else {
        console.log("Customer with loyalty points: ", u.loyaltyPoints);
    }
}
function describeUserWithInOperator(u) {
    if ('permissions' in u) {
        console.log("Admin with permissions: ", u.permissions);
    }
    else {
        console.log("Customer with loyalty points: ", u.loyaltyPoints);
    }
}
//array of union and union of arrays
const arrOfUnion = ["a", 1, "b", 2];
const unionOfArrays = Math.random() > 0.5 ? [1, 2, 3] : ["a", "b", "c"];
