//<T extends x>
//<T> constrains T so that certain shapes are allowed
//key constains <k extends keyof T> k must be a key of T

function lenN4<T extends {length: number}>(xN4: T):number{
    return xN4.length
}

console.log(lenN4([1,2,3,4]))
console.log(lenN4("Hello"))
console.log(lenN4({length: 10, tag: "array"}))

// console.log(lenN4(1)); //1 doesn't have a length property


type UserN6 = {id: string; name:string; age?:number}

function userN6Extract<T,K extends keyof T>(arrN4: T[], keyN4:K): Array<T[K]>{
    return arrN4.map(item => item[keyN4])
}

const usersN6 : UserN6[] = [
    {
        id:'1',name:'name1',age:22
    },
    {
        id: '2',name:'name2'
    }
]

console.log(userN6Extract(usersN6,"id"));
