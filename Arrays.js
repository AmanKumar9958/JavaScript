                                                    // ARRAYS
//Write Arrays in square brackets only...[]
//We can store different datatypes under single variable.
//To access its element we have to type the index of the element.
//Shallow - Same reference point---Changes also done in original value.

const myNumArray = [27, 4, 2005];
const myFav = ["Dog", "Fish", "Parrots", "Horse", "Cows"];
const notMyFav = ["Lizards"];

// console.log(myNumArray);

// myNumArray[2] = 2006;    //It helps the change the value of the element
// console.log(myNumArray);
// notMyFav[0] = "Snake";
// console.log(notMyFav);

notMyFav[1] = "Snake";      //It helps to add the value in the existing array.
// console.log(notMyFav);

// console.log(myFav[1]);  //It helps to access the elements of the array.

// console.log(myNumArray.length);    //It helps to find the length of the array.

// myNumArray.push("April")   //It helps to add the element in the last in the array.
// myNumArray.push("Aman")
// console.log(myNumArray);

// myNumArray.pop();             //It removes the last element from the array.      //It makes the change in SAME ARRAY\\
// console.log(myNumArray);

// myNumArray.shift();
// console.log(myNumArray);            //It removes the element from the starting of the array.

// myNumArray.unshift("Aman");      //It adds the element in the starting of the array.     ""BUT PROBLEM --- ALL ELEMENTS INDEXING GET SHIFT""
// console.log(myNumArray);

// console.log(myNumArray.includes(27));   //It check that the given value is included or not.

//console.log(myNumArray.indexOf(4));     //It shows the index of the array.

const myNewNumArray = myNumArray.join();    //It helps to convert a given array into the string.
// console.log(myNewNumArray);
// console.log(typeof myNewNumArray);

// console.log(myNewNumArray.includes(27));

                                                        //Slice and Splice\\

//Slice - Last range is not included and does not change the original array.
//Splice - Last range is included and also change the original array.

let my1array = [9,8,7,6,5,4,3,2,1,0];
// console.log(my1array);

const my2array = my1array.slice(3);   //Upper limit in INCLUDED but lower limit is NOT INCLUDED
// console.log(my1array);
// console.log(my2array);

const my3array = my1array.splice(0,7); //Upper limit is INCLUDED but lower limit is NOT INCLUDED.....and IT ALSO CHANGE THE ORIGINAL ARRAY.
// console.log(my3array);                 //After SPLICING it returns the REMAINING values..
// console.log(my1array);



                                                        //DAY 2\\
const myFriendName = ["Sumit", "Varun"];
// console.log(myFriendName);

const myFavAnimals = ["Dog", "Fish"];
// console.log(myFavAnimals);

// myFriendName.push(myFavAnimals);    //It adds the favAnimal array into the FriendName but as a 5th Element.
// console.log(myFriendName);         //Iska mtlb hai ki jb hm PUSH se add krte hai toh voh as ELEMENT add hota hai..

                                                //CONCAT\\
let allName = myFavAnimals.concat(myFriendName);
// console.log(allName);

                                                //SPREAD\\
const allNewName = [...myFriendName, ...myFavAnimals];  //PROBLEM
// console.log(allNewName);

                                                //FLAT\\
let myNum = [1,2,3,[3,2,1],4,5,6,[6,5,4,[4,5,6]]];      //This is messy array means an array inside an array...
// console.log(myNum);

let myRealNum = myNum.flat(Infinity);       //It change all the messy array into a single array.
// console.log(myRealNum);                     //It converts all the messy arrays into a single array.
                                            //We can provide some numbers also into flat.

                                                //ARRAY CONVERSION\\
// console.log(Array.isArray("Aman"));     //We ask that is "Aman" an array...
// console.log(Array.from("Aman kumar is good boy"));        //It created an array using the string - Aman kumar is a good boy..

let score1 = 100;
let score2 = 200;
let score3 = 300;
// console.log(Array.isArray(score1));     //NOT an array..
// console.log(Array.isArray(score2));     //NOT an array..
// console.log(Array.isArray(score3));     //NOT an array..

// console.log(Array.of(score1, score2, score3));      //Create a new array by using many variables..

                                                    //OF is used when we have many variables.....FROM is used when we have only one string..

let oddNum = ["Aman", "Gopal"];
let evenNum = ["Om", "Kartik"];

let newArray = oddNum.concat(evenNum);
// console.log(newArray);

                                                    //SORT\\

//to sort the number in ascending and descending order we have to make function of any name...
// let compare = (a,b)=>{
//     return a-b                  //in ASCENDING ORDER
// }

// let comp = (a,b)=>{
//     return b-a                    //in DESCENDING ORDER
// }
let num = [9,9,5,8,4,1,4,8,6,8]
// num.sort(comp);                 //It sorts the element according to their first letter 4 ka FOUR will come at first and 5 ka FIVE..
// console.log(num);
num.reverse();                    //It reverse the element of the array.
// console.log(num);

// <--------------------------><---------------------------><------------------------------><--------------------------------><-------------------------------><--->

let myMarks = [39, 29, 47, 70, 34, 45];
let myNewMarks = [22, 44, 55, 66,77];

let myCollegeFriend = ['Sumit', "Krish"];
let myKabaddiFriend = ['Lucky', "Govind", "Bulbul"];

// console.log(myMarks);

// console.log(myMarks.length);

// console.log(myMarks.indexOf(45));

// console.log(myMarks.includes(42));

// myMarks.push(99);                        //---->Add element
// console.log(myMarks);

// myKabaddiFriend.unshift("Pankaj");       //---->ADD element at FIRST

// console.log(myKabaddiFriend);
// myKabaddiFriend.shift();                 //---->REMOVES element from FIRST
// console.log(myKabaddiFriend);

// myMarks.pop();                          //---->Removes last element.
// console.log(myMarks);

                                            // UNSHIFT <---> PUSH
                                            // SHIFT <---> POP

// console.log(myCollegeFriend.concat(myKabaddiFriend));

// console.log(myMarks.reverse());

// console.log(myMarks.concat(myNewMarks));

// console.log(myMarks.includes(45));

// console.log(myMarks);

// console.log(myCollegeFriend.toString().toUpperCase());   //---->> Array to String Conversion and then using string methods on arrays.

// console.log(myCollegeFriend.join(" and "));
// console.log(myKabaddiFriend.join(" <-> "));

// console.log(myMarks.slice(1,3));                          //--->Doesn't make any change in the existing array. It simply take out the elements from the array.

// console.log(myMarks.splice(1,3).concat("Removed Elements"));       //---->Removes the elements and make changes in the existing array..

// console.log(myMarks.concat("Original Array"));
// console.log(myMarks.concat("Array after removing elements"));


// <-------------------><-------------------------><----------------------------><---------------------------><---------------------------------------->

//Map, Filter, Reduce\\
//Loops of Array\\
//Objects\\



// <-------------------><-------------------------><----------------------------><---------------------------><---------------------------------------->
// Map stores the values as key and value pair..
const map = new Map();
map.set('IN', 'India');
map.set('UK', 'United Kingdom')
// console.log(map);


for (const [code, name] of map) {
    // console.log(code, name);     //both key and value
}

for (const [code, name] of map) {
//     console.log(code);           //only key
}



