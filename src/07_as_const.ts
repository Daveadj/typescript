
//lock the values
const ROLES = ["admin","user","guest"] as const

//derive a union from the array
type Role = (typeof ROLES)[number]

function setRole(r : Role){
    console.log(r)
}

setRole("admin")