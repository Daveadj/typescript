//inference example
const doubleFunc = (x) => x * 2;
//explicit example
export function toTitle(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(toTitle("hello"));
function booleanToNumber(flag) {
    return flag ? 1 : 0;
}
console.log(booleanToNumber(true));
async function loadCountInference() {
    return 1;
}
loadCountInference().then(count => console.log(count));
