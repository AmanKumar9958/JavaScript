// // Animal is our constructor..
// function Animal(name, eatingBehaviour){
//     this.name = name;
//     this.eatingBehaviour = eatingBehaviour;
//     this.getEatingBehaviour = function(){
//         return `${this.name} is an ${this.eatingBehaviour}`;
//     };
// }

// // Prototype is used to add properties to the object...
// Animal.prototype.sound = function(soundType){
//     return `${this.name} ${soundType}`;
// }

// // Creating an object of Animal
// let dog = new Animal("Dog", "Omnivorous");
// console.log(dog.getEatingBehaviour());
// console.log(dog.sound("Woff!!"));

// // creating another object of Animal - Cow

// let cow = new Animal("Cow", "Herbivorous");
// console.log(cow.getEatingBehaviour());
// console.log(cow.sound("Mow!!"));


// More optimized code..

function Animal(name){
    this.name = name;
    return `This is ${this.name}`;
}

Animal.prototype.sound = function(soundType){
    return `${this.name} ${soundType}`;
}

Animal.prototype.foodType = function(foodType){
    return `${this.name} is an ${foodType}`;
}

let dog = new Animal("Dog");
console.log(dog.sound("Woff!!"));
console.log(dog.foodType("Omnivorous"));

let cow = new Animal("Cow");
console.log(cow.sound("Mow!!"));
console.log(cow.foodType("Herbivorous"));

// Throwing errors..
function car(brand){
    if(!new.target){
        throw new Error("Please use new keyword to create an object");
    }
    this.brand = brand;
}

let car1 = new car("BMW");  // no error
let car2 = car("Ferrari");  // error