let username : string = "alice";
let age : number = 30;
let isAdmin : boolean = false;

const bigNumber : bigint = 9007199254741991n;

// const mixed = bigNmumber + age; // bigInt and number cannot be mixed


const TOKEN : unique symbol = Symbol("token"); // unique symbol type

function yearsToDays(years: number): number {
    return years * 365;
}

console.log(username.toUpperCase())