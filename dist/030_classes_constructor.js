"use strict";
class UserN5 {
    id;
    name;
    email;
    createdAt = new Date(); //init at declaration
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        if (email)
            this.email = email;
    }
}
const result4 = new UserN5("1", 'san');
const result5 = new UserN5("q", "jonny", "gmail.com");
