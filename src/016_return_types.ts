
//inference example
const doubleFunc = (x:number) => x*2

//explicit example
export function toTitle(str:string):string{
    return str.charAt(0).toUpperCase() + str.slice(1)
}


console.log(toTitle("hello"))


function booleanToNumber(flag: boolean): number{
    return flag ? 1 : 0
}

console.log(booleanToNumber(true))


async function loadCountInference(){
    return 1
}

loadCountInference().then(count => console.log(count))