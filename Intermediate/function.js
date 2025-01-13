// funciton definition..
function name(){
    let myName = 'My name is Aman Kumar';
    console.log(myName);
}
// function calling..
// name();                 //On directly calling the function then we can't get undefined error in the last..

function name(){
    let myName = 'My name is Aman Kumar';
    console.log(myName);
    // return '04';
}
// console.log(name());    //If we don't use return keyword then on calling name() with console log we will get undefined in the last..

//---------------------------------Function to print table----------------------------------------------------
function printTable(){
    let number = 18;
    for(let i = 1; i<=10; i++){
        // console.log(`${number} * ${i} = ${i*number}`);
    }
}
const print = printTable();


//--------------------------------Function with arguement and parameters--------------------------------------
function greet(username){           //jo function ke andar hota hai use ham paramenter bolte hai..
    // for(let i = 1; i<=5; i++){
    //     console.log(`Good Morning ${username}`);
    // }
    console.log(`Good Morning ${username || 'AmanWebDev'}`);    //agar arguement mai kuchh nhi hoga toh OR wali condiion execute hogi...
}
// greet('Aman');                      //jo function ko call krte wqt dala jata hai use arguement bolte hai..
// greet('Gopal');

function introduction(username, role){
    console.log(`Welcome ${username} and your role is ${role}`);
}
// introduction('Aman', 'WebDev');
// introduction('Gopal', 'Data Analyist');

//---------------------Practice--------------------
function bio(name, age){
    // console.log(`${name} is ${age} years old`);
    // console.log(typeof(name));
}
bio('Aman', 19);

function add(num1, num2){
    // console.log(`The sum is ${num1 + num2}`);
    // console.log(typeof(num1));
    return num1 + num2;
}
// const result = add(2+1, 3+3);
const result = add(add(2,3), add(3,1))
// console.log(result);




function jod(num1, num2){
    sum = num1 + num2;
    return sum;
}
const jawab = jod(1, 2);
// console.log(`Jod ka uttar: ${jawab}`);



// Printing Random number and checking..

function generateRandomNumber(){
    const previousNumber = new Set();

    return function(){
        if(previousNumber.size === 11){
            console.log('All the number have been generated.');
            return;
        }
        let generate;
        do{
            generate = Math.round(Math.random()*10);
        }while(
            previousNumber.has(generate)
        );
        previousNumber.add(generate);

        console.log(`Your Number is: ${generate}`);

        if(generate === 4){
            for(let i=0; i<=5; i++){
                console.log(`🎈🎉🎊🎃`);
            }
        }
        else{
            console.log(`Number not Matched😥`);
        }
        
    }
}
const randomNumberGenerator = generateRandomNumber();
for(let print=0; print<=10; print++){
    // randomNumberGenerator();
}
