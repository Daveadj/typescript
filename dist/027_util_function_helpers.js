"use strict";
//ReturnType<F>
//Parameters<F>
//InstanceType<Ctor>
//ConstructorParameters<C>
function ExtractUserInfo(id, isExtraInfo = false) {
    return {
        id,
        name: 'sam',
        log: isExtraInfo ? 'details' : undefined
    };
}
const argsInfo = ['i', true];
const resultInfo = ExtractUserInfo(...argsInfo);
class PersonN1 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hi i am this ${this.name}`;
    }
}
const resultInfo1 = ['sam', 29];
const abc = new PersonN1(...resultInfo1);
console.log(abc.greet());
