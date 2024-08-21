// ----------------------------*****************FOR ARRAY*******************----------------------------------------
console.log('This is called shallow copy..');
const myNum1 = [1, 2, 3, 4, 5];
console.log(`Num1: ${myNum1}`);

const myNum2 = myNum1;
console.log(`Num2: ${myNum2}`);

myNum2.push(6);
console.log('After doing changes in myNum2 array');
console.log(`Num1: ${myNum1}`);     //It also get affected..but changes only done in myNum2 but myNum1 also get changed.
console.log(`Num2: ${myNum2}`);     //It also changed..
console.log('Both myNum1 and myNum2 both get changed and this is called SHALLOW COPY');

// To prevent this we can use spread operator...
console.log('This is called deep copy..');
const myNum3 = [...myNum1];
myNum3.push(7, 8);
console.log('After doing changes in myNum3 array');
console.log(`Num1: ${myNum1}`);
console.log(`Num3: ${myNum3}`);
console.log('Changes done in only myNum3 array does not make any changes in myNum1 array');

console.log('--------------------------------*********************************************-----------------------------------');
console.log('This is called shallow copy..');
let intro1 = {
    firstName: 'Aman',
    lastName: 'Kumar'
}
console.log(intro1);

let intro2 = intro1;
intro2.firstName = 'Gopal'  //some changes done..
console.log(intro1);    //After doing changes intro1 also get changed..
console.log(intro2);    //and it also get changed..

// To prevent this we use sperad operator...
console.log('This is called deep copy..');
const intro3 = {...intro1};
intro3.firstName = 'Sohan';
intro3.lastName = 'Baghel';

console.log(intro1);    //This time intro1 doesn't get changed..
console.log(intro3);    //Only intro3 is changed..