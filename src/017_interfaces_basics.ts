//interface -> name shape for objects

interface User333{
    id: number;
    name: string;
    email?: string;
    readonly createdAt: Date;
}

const user333 : User333 = {
    id: 1,
    name: "John",
    email: "john@example.com",
    createdAt: new Date()
}


interface Admin333 extends User333{
    permissions : string[]
}

const admin333 : Admin333={
    id: 1,
    name: "John",
    email: "john@example.com",
    createdAt: new Date(),
    permissions: ["read", "write", "delete"]
}


interface WithMeta1{
    meta: {
        active : boolean

    }
}


interface AdminWithMetal extends Admin333, WithMeta1{}

const adminWithMeta333 : AdminWithMetal ={
   id: 1,
    name: "John",
    email: "john@example.com",
    createdAt: new Date(),
    permissions: ["read", "write", "delete"],
    meta: {
        active: true
    }
}




