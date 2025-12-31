"use strict";
//object shapes -> similar to interfaces
//union types (A|B)
//intersection types (A&B)
const person1 = {
    id: "1",
    address: "123 Main St",
    salary: 1000
};
function nextActionCheck(s) {
    switch (s) {
        case 'loading':
            return 'loading';
        case 'success':
            return 'success';
        case 'error':
            return 'error';
        default:
            return 'default';
    }
}
