// --------------------------------------FILTER------------------------------------------------------------
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Displaying numbers greater than 4 by using FILTER METHOD...
const newNum = nums.filter((eachNum) => {
    return eachNum>=4;
    // console.log(eachNum);
})
// console.log(newNum);


// Displaying numbers greater than 4 by using FOREACH METHOD...
const numbers = [];

nums.forEach((eachNumber) => {
    if(eachNumber > 4){
        numbers.push(eachNumber);
    }
})
// console.log(numbers);


// Practice...
const books = [
    {
        title: 'Book one',
        genre: 'Fiction',
        publish: 2000,
        edition: 2004
    },
    {
        title: 'Book two',
        genre: 'Non-fiction',
        publish: 2001,
        edition: 2005
    },
    {
        title: 'Book three',
        genre: 'History',
        publish: 2002,
        edition: 2006
    },
    {
        title: 'Book four',
        genre: 'Science',
        publish: 2003,
        edition: 2007
    },
    {
        title: 'Book six',
        genre: 'Science',
        publish: 2004,
        edition: 2008
    },
    {
        title: 'Book seven',
        genre: 'History',
        publish: 2006,
        edition: 2008
    },
    {
        title: 'Book eight',
        genre: 'Fiction',
        publish: 2004,
        edition: 2012
    },
    {
        title: 'Book nine',
        genre: 'Non-fiction',
        publish: 2004,
        edition: 2009
    }
]

const userBook = books.filter((eachBook) => {
    return eachBook.genre === 'Science';
    return eachBook.title === 'Book four';
    return eachBook.publish >= 2004 && eachBook.genre === 'Fiction';
    return eachBook.edition <= 2009;
})
// console.log(userBook);

// --------------------------------------MAP------------------------------------------------------------
const myMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const a = myMap.map((newNumber) => {
    return newNumber + 100;
})
// console.log(a);

// chaining...
const b = myMap
                .map((newNumber) => newNumber * 10)
                .map((newNumber) => newNumber + 1)
                .filter((newNumber) => newNumber >= 71)
                .map((newNumber) => newNumber - 1)
                .filter((newNumber) => newNumber>90);
// console.log(b);

// --------------------------------------REDUCE------------------------------------------------------------
