// Abstraction: Hiding all the data and showing only the important data to user.

// he class hides the internal details (milk, sugar, and coffee quantities) and 
// provides methods (setMilkAmount(), setSugarAmount(), setCoffeeAmount(), brewCoffee()) to interact with it

class coffeeMachine{
    // private variables..
    #milk = 0;
    #sugar = 0;
    #coffee = 0;

    // constructor
    constructor(milk, sugar, coffee){
        this.#milk = milk;
        this.#sugar = sugar;
        this.#coffee = coffee;
    }
    
    setMilkAmount(milk){
        this.#milk = milk;
    }

    setSugarAmount(sugar){
        this.#sugar = sugar;
    }

    setCoffeeAmount(coffee){
        this.#coffee = coffee;
    }

    brewCoffee(){
        console.log(`Your coffee is ready with ${this.#milk}ml milk, ${this.#sugar}g sugar and ${this.#coffee}g coffee`);
    }
}

let coffeeGlass1 = new coffeeMachine;
coffeeGlass1.setMilkAmount(100);
coffeeGlass1.setSugarAmount(10);
coffeeGlass1.setCoffeeAmount(20);
coffeeGlass1.brewCoffee();
