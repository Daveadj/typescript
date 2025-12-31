"use strict";
function add(a, b) {
    return a + b;
}
const nums12 = [1, 2, 3];
const doubled = nums12.map(n => n * 2);
console.log(doubled);
function distanceFromOrigin(point) {
    return Math.hypot(point.x, point.y);
}
console.log(distanceFromOrigin({ x: 1, y: 2 }));
