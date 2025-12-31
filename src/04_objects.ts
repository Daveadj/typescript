
//email? : string -> email may be absent, if present it will be a string
//it is not the same as email: string | undefined
type User = {
    id: number; //required
    name: string; //required
    email?: string; //optional(could be absent)
    readonly createdAt: Date; //cannot be reassigned
}


const user1 : User= {id : 1,name:'dave',createdAt: new Date()}

type Count = {[k: string] : number}

type Count1 = Record<"likes" | "views"|"shares",number>


const c1 : Count = {whatever : 1}
const c2 : Count1 = {likes : 1,views: 2,shares: 3}