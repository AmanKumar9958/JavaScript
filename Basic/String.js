//In this practice_5 ---- I have practiced "STRING"


// function string(){
    // let statement = "My name is "
    // let myName = "Aman Kumar";
    // document.write(`This is my name-  ${myName}`);
// }

// const Name = new String("Aman Kumar")
// document.write(Name);
// document.write(Name.includes('Aman'))
// document.write(Name[2]);     // This help to access the single character of the given string which is also known as Key Pair Values.  
// document.write(Name[0]);     // This help to access the single character of the given string which is also known as Key Pair Values.  
// document.write(Name[1]);     // This help to access the single character of the given string which is also known as Key Pair Values.
// document.write(Name[3]);     // This help to access the single character of the given string which is also known as Key Pair Values.  

// document.write(Name.toUpperCase()) // This helps to uppercase the sting.
// document.write(Name.charAt(2)); // This helps to know the position of any character.
// document.write(Name.indexOf('A'));  //This helps to know the numerical position of any Character.

// const newName= Name.replace("Aman", "Gopal") //Helps ins renaming the string
// document.write(newName)
// document.write(newName.includes('Kumar'))

let para = "This is a paragraph about myself. My name is Aman Kumar and I am 19 years old. Currently I am pursuing my BCA course."
// document.write(para)
// document.write(para.toUpperCase())
// document.write(para.toLowerCase())
// document.write(para.includes("Aman"))
// document.write(para.includes('Gopal'))
// let newPara = document.write(para.replace("Aman", "Gopal"));
// let newAge = para.replace('19', '18')
// document.write(newAge)

// document.write(newPara)
// document.write(para.length)
// document.write(para.charAt(126))




// let about = prompt("Enter anything about you");
// document.write(about.length)


// Question1

// var str = prompt("Enter any string or word");
// document.write(typeof(str));
// document.write("Hello");
// document.write(str.length)
// document.write(str.includes("Aman"))

// var str ="Aman Kumar";
// document.write(str);
var email = "amankumar@"
var newStr = email + 9958;
// console.log(newStr);

let myName= "My name is Aman Kumar. ";
let myCourse = "I am a BCA 1st Year Student.";
// console.log(myName.length);

// console.log(myName.indexOf('a'));

// console.log(myName.lastIndexOf('n'));

// console.log(myName.startsWith("r"));

// console.log(myName.endsWith('n'));

// console.log(myName.endsWith('f'));

// console.log(myName.includes('Kumar'));

// console.log(myName.split(myName, 3));        //Reh rha hai

// console.log(myName.replace("Aman", "Gopal"));

// console.log(myName.repeat(3));

// console.log(myName.slice(0,5));

// console.log(myName.concat(myCourse));

// console.log(myName.charAt(5));


                                    //Exercise
//Business Name Generator by combining list of adjective, shop name and other words...
//Adjective ----- crazy, Amazing, fire
//Shop Name ----- Engine, Foods, Garments
//Another words ---- Limited, Hub


                                    //Solution
for(i=0; i<5; i++){
let rand;

//Generating First Name..
rand = Math.random()
let first;
if(rand<0.33){
    first = "Crazy";
}
else if(rand<0.66 && rand>=0.33){
    first = "Amazing";
}
else{
    first = "fire";
}

//Generating Second Name..
rand = Math.random()
let second;
if(rand<0.33){
    second = "Engine";
}
else if(rand<0.66 && rand>=0.33){
    second = "Foods";
}
else{
    second = "Garments";
}

//Generating Third Name..
rand = Math.random()
let third;
if (rand<0.33){
    third = "Limited";
}
else if (rand<0.66 && rand>=0.33){
    third = "Org";
}
else{
    third = "Hub";
}

console.log(`${first} ${second} ${third}`);
}