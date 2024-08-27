const user = {
    name: "Aman",
    age: 20,
    getUserDetails: function(){
        // console.log("I got these details form DB");
        //console.log(`UserName: ${name}`);   //this will not work because yeh context find nhi kr paa rha hai...
        // console.log(`Username: ${this.name}`);  //this will work
        // console.log(this);
    }
}
// console.log(user.name);
// console.log(user.getUserDetails());

// if we want so many users in the database so by going this way is very difficult....to fix this we have "constructor"...

function userData(username, loginCount, isLoggedIn){
                        //we can declare by creating a new variable....
    // MyName: username;
    // noOfLogin: loginCount;
                        //we can declare by this also...
    this.username = username;
    this.loginCount = loginCount;
    return this;
}
const user1 = userData("Aman Kumar", 10, true);
// console.log(user1);

const user2 = userData("ChaiCode", 20, true);
// console.log(user1);     //after creating user2 our user1 data gets overWrite...
// console.log(user2);  //this prints user2 data but over write the user1 data...



// To avoid this we use "new" keyword...
const user4 = new userData("JS", 100, true)
const user5 = new userData("Python", 1, false)
// console.log(user4);     //values didn't overwrite this time...
console.log(user5.constructor);     //constructor is the details about itself...

