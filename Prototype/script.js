// JavaScript's default behavior is prototypal behavior.
// This prototypal behavior helps to use inheritance, this, new in JS.
// Array is a part of Object.
// String is also a part of Object.
// Function is also a Object and function as well as.

// Prototypal behavior means it goes in detail in detail (Array -> Object -> NULL), NULL is the final.
// So, if we want to add a property to Array, we can add it to Object


// this is a keyword in JavaScript, it's used to show the current context of the function.

// ----------------------------Understanding New keyword-----------------------------------------
function userScore(username, score){
    this.username = username;   //both username is same that's why we use this to show it's current context
    this.score = score;
}

// we can create may properties using prototype keyword...
userScore.prototype.increase = function(){
    this.score ++;
}
userScore.prototype.print = function(){
    console.log(`Username: ${this.username} & Score: ${this.score}`);
}
// we can create an object using new keyword.
// let user1 = userScore('Aman', 100);  //if we don't use 'new' keyword then we will get error 'can not read properties'

let user1 = new userScore('Aman', 100);
user1.print();  // Username: Aman & Score: 100

let user2 = new userScore('Gopal', 30);
user2.increase();
user2.print();  // Username: Gopal & Score: 31(increased)

// ----------------------------Understanding Prototype-----------------------------------------

// OBJECT -> Function
//        -> Array
//        -> String
// Function, Array and String are all the part of the Object.
// It means if create any function for object then it will be accessible for all of them..
// Prototype is a keyword in JavaScript, it's used to add properties to the object.
// Prototype is a property of the object.
// Prototype is a function that returns an object.

let myName = "Aman";
let myAnotherName = "Aman     ";
// console.log(myName.length);  // 4
// console.log(myAnotherName.length);  // 9, but name's length is 4
// console.log(myAnotherName.trim().length);  // 4, but it's not a right approach, we are learning

// we can use trim() function but if we have so many strings then we can't use .trim().length everywhere.
// therefor we will create a method to solve this problem..

let myHeros = ["SpiderMan", "Hulk", "SuperMan"];
let heroPower = {
    SpiderMan: 'Web',
    Hulk: 'Strength',
    SuperMan: 'Flight',
}
// Creating a 'aman()' function for object and this will be available in all, because everyone is a child of object...
Object.prototype.aman = function(){
    console.log("Hello, I am Aman");
}
// Creating a 'JS()' function for Array and this will NOT be accessible in all but ONLY accessible in Array only...
Array.prototype.JS = function(){
    console.log("Hello, JavaScript");
}
// Accessing this prototype from object...
// heroPower.aman();   // Hello, I am Aman, accessing on object
// myHeros.aman();        // Hello, I am Aman, accessing on array

// Accessing this prototype form Array....
// So, theoretically Array prototype will be accessible on array and NOT on Object
// myHeros.JS();  // Hello, JavaScript, accessing on array
// heroPower.JS(); // Error




// ----------------------------Understanding Inheritance-----------------------------------------

const player = {
    name: "Aman",
    age: 19,
}
const friend = {
    haveFriend: true
}
const facility = {
    coach: true,
    gym: false,
    ground: true,
    // __proto__: friend   // accessing the friend object features in this..
}


/*
see we have default features of object in all the objects that we have created...
but if created any other feature in the object player then it will not accessible in any other object..
*/

// to use the features of other object in any other object we use __proto__

// player.__proto__ = facility;    // "player" can have all the features of "facility" object..
// to access other objects we have two ways... 1. Declare inside the object or 2. outside the object..

// but these methods are old...
// we have a new method to access the features of other object...
Object.setPrototypeOf(player, facility);    //(jismai use krna hai, jiska use krna hai)...
// now we can access the features of facility object in player object...



// -------------------------Moving to length problem by space in string--------------------------

let mySting = "This is my laptop     ";
// console.log(text.length);  // 22- With space, 17- Without space

Object.prototype.trueLength = function(){
    finalLength = this.trim().length;
    console.log(`True Length: ${finalLength}`);
}
// console.log(mySting.length);     //22 (with space)
// mySting.trueLength();  // 17 (without space)
// "Aman      ".trueLength();  // 4