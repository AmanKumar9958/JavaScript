const number = [1, 2, 3, 4, 5];
const initialValue = 0;    // we can declare the initial value here also or we can add in the last of the function..


// In reduce we have to pass there values -> accumulator, currentValue, initialValue..
// It takes array of values and reduce it into the single value..
const myTotal = number.reduce(function(acc, currentVal){
    console.log(`accumulator: ${acc} and Current Value ${currentVal}`);
    return acc + currentVal;
}, initialValue)
console.log(`Total: ${myTotal}`);


const shoppingCart = [
    {
        itemName: "JS Course",
        price: 399
    },
    {
        itemName: "Python Course",
        price: 499
    },
    {
        itemName: "Mobile App Development Course",
        price: 2999
    },
    {
        itemName: "Data Science Course",
        price: 3000
    }
]

const priceToPay = shoppingCart.reduce(function(acc, item){
    return acc + item.price;
}, 0)
console.log(priceToPay)