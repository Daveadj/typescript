"use strict";
function getUserPropN7(objN7, keyN7) {
    return objN7[keyN7];
}
const uN7 = {
    id: 'u1', name: 'sam'
};
console.log(getUserPropN7(uN7, 'email'));
function setUserPropN7(objN7, keyN7, newVal) {
    objN7[keyN7] = newVal;
}
setUserPropN7(uN7, "name", 'john');
