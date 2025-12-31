//partial<T> make all tthe top level field optional

type AddressN8 = {
    line1 : string;
    city: string;
}


type User10 = {
    id: string;
    name : string;
    email? : string;
    address : AddressN8
}

type UserPatch10 = Partial<User10>

const patch10: UserPatch10 = {name:'sam'}
//the partial is shallow
const patch11 : UserPatch10 = {address : {
    line1 : 'line1',
    city: 'ci'
}}


//Required<T> make all top level field requires

type UserAllRequiredN10 = Required<User10>

const userAllPatch1 : UserAllRequiredN10 = {
    id: 'u1',
    name : 'name',
    address : {
        line1 : 'line',
        city : 'city'
    },
    email: 'test'
}


//Readonly<T>

type ReadOnlyUserN10 = Readonly<User10>

const readOnlyUser : ReadOnlyUserN10={
    id: 'u1',
    name : 'name',
    address : {
        line1 : 'line',
        city : 'city'
    },
}

//readOnlyUser.name = 'john' error


//Pick<T,K> keep only some keys

type PublicUserN10 = Pick<User10,'id'|"name">

const publicUser : PublicUserN10 ={
    id: 'u5',
    name : 'same',
    //any other will throw error
}

//Omit<T , K> remove some keys
type UserWithoutEmailN10 = Omit<User10, "email">
const omitUserN10 : UserWithoutEmailN10 ={
     id: 'u1',
    name : 'name',
    address : {
        line1 : 'line',
        city : 'city'
    },
}

//omitUserN10.email //does not exist

//Record<K,V>
type RoleK = 'admin' | 'user' | 'editor'
type RoleCheck = Record<RoleK,User10>


const dirN10 : RoleCheck ={
    admin : {
         id: 'u1',
    name : 'name',
    address : {
        line1 : 'line',
        city : 'city'
    },
    },

     user : {
         id: 'u1',
    name : 'name',
    address : {
        line1 : 'line',
        city : 'city'
    },
    },

     editor : {
         id: 'u1',
    name : 'name',
    address : {
        line1 : 'line',
        city : 'city'
    },
    }
}



