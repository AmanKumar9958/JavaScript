// Numbers and Maths in JavaScript..

// var score= 400;
// console.log(score)
// console.log(typeof(score))     //Number

// const balance= Number(400);         //This "Number" helps to force to keep the data in number datatype only.
// console.log(balance)
// console.log(typeof(balance))

var newBalance = 2394703733847;
// console.log(typeof(newBalance));     //Number

// console.log(newBalance.toString().length) 
//by using .toString we can temporary convert it into
//a string and then we can use all the function of string easily...

// ---------------------------------*******************-------------------------------------

// console.log(newBalance.toFixed(5));
//by using to fixed function we can set its value after decimal..

// ---------------------------------*******************-------------------------------------
// document.write(newBalance.toPrecision(5));
//It helps in getting the precise value...It rounds off 5 means- counting will start from starting...

// ---------------------------------*******************-------------------------------------

// console.log(newBalance.toLocaleString('en-IN'));
//by using toLocalString it helps to put commas between numbers. 'en-IN means- according to 
//Indian number system..

// ---------------------------------*******************-------------------------------------

                                            // Maths in JavaScript \\

// console.log(Math.abs(-4));   //It converts the -ve values into +ve values (but not vice-versa)...
// console.log(Math.round(4.7))    //It rounds off the value..
// console.log(Math.ceil(4.3));   //It returns the heigh value..
// console.log(Math.floor(4.3));  //It returns the lower value..
// console.log(Math.min(9,2,3,4));  //It returns the minimum value..
// console.log(Math.max(9,2,3,4));  //It returns the maximum value..

// document.write(Math.random())     //Value always lies between 0 to 1..
// document.write(Math.random()*10)
// document.write(Math.round(Math.random()*100))


// function randNum(){
//     document.write(Math.abs(Math.round(Math.random()*10)+1))
// }
// console.log(Math.round(Math.random()*10)+100-100)

const name= prompt("Enter your name");
const number= prompt("Enter you number");

document.write(number.toString.length)