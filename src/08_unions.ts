//value -> this or that

function printId(id : string | number){
    if(typeof id === 'string'){
        id.toUpperCase()
    }else{
        id.toFixed(2)
    }
}

//object union
type Admin = {role : "admin"; permissions : string[]}
type Customer = {role : "customer", loyaltyPoints : number}

function describeUser(u : Admin | Customer){
    if(u.role === "admin"){
        console.log("Admin with permissions: ", u.permissions)
    }else{
        console.log("Customer with loyalty points: ", u.loyaltyPoints)
    }
}

function describeUserWithInOperator(u: Admin|Customer){
    if('permissions' in u){
        console.log("Admin with permissions: ", u.permissions)
    }else{
        console.log("Customer with loyalty points: ", u.loyaltyPoints)
    }
}



//array of union and union of arrays

const arrOfUnion: (string | number) [] = ["a",1,"b",2]

const unionOfArrays: string[] | number[] = Math.random() > 0.5 ? [1,2,3] : ["a","b","c"]