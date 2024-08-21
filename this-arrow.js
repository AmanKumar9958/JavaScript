// This is used to define the current context of the code in a specific scope.
const user = {
    username: "Aman",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the site👋`);
        console.log(this);
    }
}
// user.welcomeMessage();
// user.username = "Gopal"
// user.welcomeMessage();
// console.log(this);


function prac(){
    let username = "Dog"
    console.log(this.username);
}
// prac();

// Arrow functions are the another way to write the functions.
// In arrow function if we start a new scope then we have to use the return keyword.
const say = hello => {
    console.log('My name is Aman');
}
// say();


//write a program to add two numbers using arrow functions **but we can't use this keyword with the arrow functions.
const add = (num1, num2) => {
    // console.log(num1 + num2);
    return num1 + num2;
}
add(1,2)
console.log(add(1,2));


function sub (a, b){
    // console.log(`The answer is ${a-b}`);
}
sub(5,1)