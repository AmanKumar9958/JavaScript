// Creating Object..
const user = {
  name: "Aman",
  age: 19,
  course: "BCA",
  favLang: "WebDev",
  address: {            //object inside an object..
    city: 'New Delhi',
    pin: 110044,
    moreInfo: {
        population: 10398,
        area: '209 Sq KM'
    }
  }
};
// Adding extra things..
user.mobileNumber = 9958414968;
// console.log(user.address.city);

// Changing the values of the objects..
user.name = "Gopal";
user.age = 17;

// creating another object..
const user2 = {
  name: "Rohan",
  age: 17,
};
// Matching the values..
// console.log(user.name === user2.name);


// Practice

const ILikeToEat = {
    fruits: {
        apple:{
            price: '100/Kg',
            season: 'all'
        },
        mango: {
            price: '80/Kg',
            season: 'Summer'
        },
        banana:{
            price: '40/Dozen',
            season: 'all'
        },
        grapes:{
            price: '50/kg',
            season: 'winter'
        }
    },
    vegetable:{
        tori:{
            price: '20/Kg',
            season: 'Summer'
        },
        palk:{
            price: '20/kg',
            season: 'Winter'
        },
        kheera:{
            price: '10/Kg',
            season: 'All'
        },
        loki:{
            price: '30/kg',
            season: 'All'
        }
    }
}
// console.log(ILikeToEat.fruits.mango.price);

// ------------------------------------------Deletion in the object..--------------------------------------------
delete user.favLang;
// console.log(user.favLang);      //--> output = 'undefined' -->> favlang is deleted


// ---------------------------------------------Freeze and Seal in objects-------------------------------------
Object.seal(user2);         //prevents to add more things but we can MODIFY the EXISTING data..
// user2.class = '12th pass';
// delete user2.age
// user2.name = 'Sohan';
// console.log(user2);

Object.freeze(user2);           //Prevents to add or modify anything..
// user2.name = 'Sohan';
// user2.class = '12th Pass';
// console.log(user2);

// console.log("Aman Kumar");

const collegeData = {
    books: {
        book1:{
        }
    },
    sportsItems: {
        indoor:{
            game1: "Carrom",
            game2: "Ludo"
        },
        outdoor:{
            game1: "Cricket",
            game2: "Kabaddi"
        }
    },
    stationaryItems: {
        item1: "Pen",
        item2: "Chalk"
    }
}
console.log(collegeData.sportsItems.indoor);