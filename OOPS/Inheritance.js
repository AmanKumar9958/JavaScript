class Animal{
    constructor(name, foodType){
        this.name = name;
        this.foodType = foodType;
    }
}

class Dog extends Animal{
    constructor(name, foodType, breed){
        super(name, foodType);  // calling the parent class constructor
        this.breed = breed;
    }
}

let Dog1 = new Dog("Tommy", "Non-Veg", "Labrador");
console.log(Dog1);