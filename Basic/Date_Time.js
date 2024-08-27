// started from January 1 1970, and in milliseconds.

// To get start with dates first, we have create a variable and then we assign it Date..
let myDate=new Date();
//console.log(myDate.toString());             //Day, Date with month name, Time with Time Zone.
//console.log(myDate.toLocaleString());       //Date and Time only.
//console.log(myDate.toDateString());         //Day and Date with month name.
//console.log(myDate.toLocaleDateString());   //date only.
//console.log(myDate.toLocaleTimeString());   //Time with AM and PM only.
//console.log(myDate.toTimeString());         //Time with Time zone only.
// console.log(myDate.getHours());             //Show current HOUR only.
// console.log("Current Hour is",myDate.getHours());  
//console.log(myDate.getDate());              //Show current DATE only.
// console.log(myDate.getMonth());             //Show current MONTH only.
//console.log(myDate.getFullYear());          //Show current YEAR only.
//console.log(myDate.getDay());               //Show current DAY only.
//console.log(myDate.getMinutes());           //Show current MINUTE only.
//console.log(myDate.getSeconds());           //Show current SECONDS only.
// console.log(myDate.getTime());
//console.log(myDate.getTime()/1000);                 //Helps to convert in Seconds but in decimal digit also.
// console.log(Math.floor(myDate.getTime()/1000));     //Helps to convert in Seconds with round off digit.
//console.log(typeof myDate);                   //Object

//Declaring New Date---
let myNewCreatedDate = new Date(2023, 11, 3, 5, 30);       //Months starts from 0
// console.log(myNewCreatedDate);
// console.log(myNewCreatedDate.toLocaleString());

let myTimeStamp = Date.now();       //Gives the milliseconds sine January 1 1970
// console.log(myTimeStamp);

// let AmanDate = new Date();
// console.log(AmanDate.setMonth(4));       //Helps to set date, time month, etc.
// console.log(AmanDate.toLocaleString());

// ----------------------------------PRACTICE-----------------------------------------------

let myNewDate = new Date();
// console.log(myNewDate.toString());
// console.log(myNewDate.getDate());
// console.log(myNewDate.getMonth());
// console.log(myNewDate.getFullYear());
// console.log(myNewDate.getHours());
// console.log(myNewDate.getMinutes());
// console.log(myNewDate.getTime());


let pracDate = new Date();
// console.log(pracDate.getDate());
// console.log(pracDate.getMonth());
// console.log(pracDate.getFullYear());



function timeShow(){
    const clock = new Date();
    const hours = clock.getHours();
    const minutes = clock.getMinutes();
    const seconds = clock.getSeconds();
    // const milliseconds = clock.getMilliseconds();
    const display = `${hours}: ${minutes}: ${seconds}`
    console.log(display);
}
setInterval(timeShow, 1000);
timeShow();