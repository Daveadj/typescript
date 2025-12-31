

class UserN5 {
    id : string;
    name : string;
    email? : string;
    createdAt: Date = new Date() //init at declaration

    constructor(id : string, name: string, email?:string){
        this.id = id;
        this.name = name;
        if(email) this.email = email
    }
}

const result4 = new UserN5("1",'san')
const result5 = new UserN5("q","jonny","gmail.com")