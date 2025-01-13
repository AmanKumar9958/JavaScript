// Filter returns only true and false..so we can't do arithmetic operations..
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sqrNums = number.filter((eachNum) => {
    return eachNum > 5;
})
// console.log(sqrNums);

// another way...
const newNums = [];
number.forEach((num) => {
    if(num > 5){
        newNums.push(num)
    }
})
// console.log(newNums)

const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 9, 10]
const biggerNums = number.filter((bigNum) => {
    return bigNum > 5;
})
console.log(biggerNums);
