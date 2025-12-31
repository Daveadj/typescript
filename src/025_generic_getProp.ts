type UserN7 ={
    id:string;
    name:string;
    email?:string;
}


function getUserPropN7<T,K extends keyof T>(objN7: T,keyN7:K):T[K]{
    return objN7[keyN7]
}

const uN7 : UserN7 ={
    id:'u1', name:'sam'
}

console.log(getUserPropN7(uN7,'email'));


function setUserPropN7<T,K extends keyof T>(objN7: T,keyN7:K,newVal:T[K]): void{
    objN7[keyN7] = newVal
}


setUserPropN7(uN7,"name",'john')