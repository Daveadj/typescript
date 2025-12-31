"use strict";
//Exclude<U,V> remove from U those member assignable to V
//Extract<U, V> keep from U those member assignable to V
//Nonnullabe
function handleEvent(e) {
    console.log(e);
}
function handleEvent2(e) {
    console.log(e);
}
function square(num) {
    return num * 2;
}
square(20);
//square(null) error
