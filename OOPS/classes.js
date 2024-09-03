// This comes after ES6 features..

// Making the class - "User"...
// class user{
//     constructor(name, age, email, password){
//         this.name = name;
//         this.age = age;
//         this.email = email;
//         this.password = password;
//     }
//     // encrypting the password - adding some random string to the original password..
//     encryptPassword(){
//         return `${this.password}abc123`
//     }
//     usernameUppercase(){
//         return `${this.name}`.toUpperCase()
//     }
// }
// // Making the user and calling the class..
// const user1 = new user("Aman", 19, "amancollege04@gmail.com", "amancollege@2023")
// // console.log(user1.encryptPassword());   // Print the password with defined string..
// console.log(user1.usernameUppercase());     // Print the name in the uppercase..

// -------------------------x----------------------x-------------------------------------

// Behind the scene...
// using function...
// function user(name, age, email, password){
//     this.name = name;
//     this.age = age;
//     this.email = email;
//     this.password = password;
// }
// user.prototype.encryptPassword = function(){
//     return `${this.password}abc123`
// }
// user.prototype.usernameUppercase = function(){
//     return `${this.name}`.toUpperCase()
// }
// const user2 = new user("Gopal", 18, "educationalpoint73@gmail.com", "educationalpoint1234");
// // console.log(user2.usernameUppercase());
// console.log(user2.encryptPassword());

// -------------------------x----------------------x-------------------------------------

// Inheritance
class user{     // creating user class
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is: ${this.username}`);
    }
}
// "extends" keyword helps us to use the features of other classes also...
class teacher extends user{     // creating teacher class which will include the properties of user class also..
    constructor(username, email, password){
        super(username);        // this "super" keyword help to use the properties and methods of the superclass..
        this.email = email;
        this.password = password;
    }
    addCourses(){
        console.log(`Courses added successfully by ${this.username}`);
    }
}
const user3 = new teacher("Aman", "amancollege04@gmail.com", "amancollege@2023")
// user3.addCourses()
// user3.logMe()    // due to inheritance
const user4 = new user("Brock Lesnar");
// user4.logMe()
// user4.addCourses()   // can't access addCourses()

// checking...
// console.log(user4 instanceof teacher);   // false - made from user class
// console.log(user4 instanceof user);     // true - made from user class

// console.log(user3 instanceof teacher);      // true - made from teacher class
// console.log(user3 instanceof user);         // true - made from teacher class but teacher class inherit the user..


