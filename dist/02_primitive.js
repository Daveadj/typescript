"use strict";
let username = "alice";
let age = 30;
let isAdmin = false;
const bigNumber = 9007199254741991n;
// const mixed = bigNmumber + age; // bigInt and number cannot be mixed
const TOKEN = Symbol("token"); // unique symbol type
function yearsToDays(years) {
    return years * 365;
}
console.log(username.toUpperCase());
