class user{
    constructor(username){
        this.username = username;
    }
    message(){
        console.log(`Welcome ${this.username}`);        
    }
    static createID(){      // "static is used to not allowing the access for particular work"
        return `123`
    }
}

class teacher extends user{
    constructor(username,subject){
        super(username);
        this.subject = subject;
    }
}

const user1 = new user("Aman")
// console.log(user1.message());
// console.log(user1.createID());       // Now we can't access it because we have used "static"

const user2 = new teacher("Aman", "Chemistry")
// console.log(user2);
// user2.message()
// console.log(user2.createID());       // Now we can't access it because we have used "static"

// static stopped everyone from accessing...
