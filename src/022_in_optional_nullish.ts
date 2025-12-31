type InExample1 = {role: "Admin",permissions: string[]}
type InExample2 = {role: "user",expiresAt: Date}

type UserExample = InExample1 | InExample2


function describeUserExample(u: UserExample){
    if("permissions" in u){
        return `Admin ${u.permissions.join(",")}`
    }

    return `User ${u.expiresAt.toISOString()}`
}

console.log(describeUserExample({role:'Admin',permissions: ['read','write']}))


//optional avoid runtimes crashes
//?? and ||
//obj?.a


type ProfileN3={
    name : string;
    contact?:{
        phone?:string;
        email?:string
    }
}

const profile : ProfileN3={name:'John'}

console.log(profile.contact?.phone)



//?? -> uses the right hand default only when the left is null or undefined
//|| -> uses the default when the left is any falsy value (0,"",null,undefined , NaN)

const countFromServerN3 : number | null = 0
const labelFromServerN3 : string | undefined = ""

const aN3 = countFromServerN3 ?? 100 // keeps the 0
const bN3 = labelFromServerN3 ?? "No label" // keeps the empty string

const cN3 = countFromServerN3 || 100 // keeps the 100
const dN3 = labelFromServerN3 || "No label" // keeps the "No label"
