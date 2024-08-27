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

// new is used to create instances of objects from classes or constructor functions, allowing for multiple objects to be created with the same structure and behavior.
// new keyword is also called constructor

function userData(username, loginCount, isLoggedIn){
    
}
