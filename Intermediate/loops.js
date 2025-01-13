// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// for (let, phir startingPoint enter kro; condition enter kro; phir increase hoga ya phir decrease hoga use enter kro)
// for(let aman=6; aman<12; aman++){
//     console.log("Aman Kumar\n");
// }

// If length and index is same then it will become the infinite loop..

//Printing Table
function printtable(){
    let num = parseInt(prompt("Enter Number to print table.."));
    for(table=1; table<=10; table++){
    document.write(num + " x " + table + " = " + num*table + "<br>");
    }
}

//Printing Number
function printNum(){
    let num = parseInt(prompt("Enter the last number to print"));
    for(i=1; i<=num; i++){
    document.write(i, "<br>");
    }
}

// <-------------------><-------------------------><----------------------------><---------------------------><---------------------------------------->
                                            // For of loop (does NOT work with objects)
const name = ['Aman', 'Gopal', 'Om'];
for (const names of name) {
    // console.log(names);
}
const greet = "hello Aman!";
for (const greetOfGreet of greet) {
    // console.log(`each word is ${greetOfGreet}`);
}

// <-------------------><-------------------------><----------------------------><---------------------------><---------------------------------------->
                                            // For in loop (does NOT works with map)
const programming = ['Java', 'C++', 'Python'];
for (const key in programming) {
        // console.log(programming[key]);
}

// <-------------------><-------------------------><----------------------------><---------------------------><---------------------------------------->
                                            // foreach loop
const coding = ['Java', 'Ruby', 'C++', 'C', 'PHP', 'JS'];
coding.forEach(function (lang){     //by using the normal function, lang is the parameter that comes from the coding array.
    // console.log(lang);
})
coding.forEach((lang, index, arr) => {            //By using arrow function.
    // console.log(lang, index, arr);
})


const myCoding = [
    {
        languageName: 'JavaScript',
        fileExtension: 'js'
    },
    {
        languageName: 'Java',
        fileExtension: 'java'
    },
    {
        languageName: 'C++',
        fileExtension: 'cpp'
    },
    {
        languageName: 'Python',
        fileExtension: 'py'
    }
]
myCoding.forEach(fileTypes => {
    // console.log(fileTypes);
    // console.log(fileTypes.languageName);
    // console.log(fileTypes.fileExtension);
})