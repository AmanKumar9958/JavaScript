const number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sqrNum1 = number1.map((num) => {
    return num*num;
})
// console.log(sqrNum1)


// chaining
const number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sqrNum2 = number2
                    .map((nums) => nums * nums)
                    .map((nums) => nums + 10)
                    .filter((nums) => nums > 6*6)
// console.log(sqrNum2)


const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const listSqr = list.map((num) => {
    return num - num
})
console.log(listSqr);
