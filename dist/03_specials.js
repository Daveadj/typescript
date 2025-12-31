"use strict";
//strictNullChecks
// let title : string = "typescript";
// title = undefined
let title = "typescript";
title = undefined;
//void: function doesn't return a useful value
function log(msg) {
    console.log(msg);
}
//never returns
function fail(msg) {
    throw new Error(msg);
}
//DO NOT USE ANY TRY TO IGNORE IF POSSIBLE
const valueAny = JSON.parse('{"x": 1}');
valueAny.notThere.toFixed(2); //this compiles but can break at runtime
