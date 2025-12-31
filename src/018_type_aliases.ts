//object shapes -> similar to interfaces
//union types (A|B)
//intersection types (A&B)

type Person1 = {
    id: string;
    address : string;
    salary : number;
}

const person1 : Person1 = {
    id: "1",
    address: "123 Main St",
    salary: 1000
}

type Status = "loading" | "success" | "error";

function nextActionCheck(s : Status) : string{
    switch (s){
        case 'loading':
            return 'loading'
        case 'success':
            return 'success'
        case 'error':
            return 'error'
        default:
            return 'default'
    }
}


type ToMerge1 = {price : number}
type ToMerge2 = {stock : number}

type merged = Person1 & ToMerge1 & ToMerge2


