// Encapsulation: Encapsulation is an Object Oriented Programming concept that binds together the data and functions
// that manipulate the data, and that keeps both safe from outside interference and misuse. Data encapsulation led to
// the important OOP concept of data hiding.
// To access the data we use different types of methods called getter and setter.

// Encapsulation means restricting direct access to data and only allowing it through methods

class College{
    #name  // private variable
    #id  // private variable

    // constructor
    constructor(name, id){
        this.#name = name;
        this.#id = id;
    }

    // display
    display(){
        console.log(`College Name: ${this.#name}, College ID: ${this.#id}`);
    }

    // getter
    getName(){
        console.log(`College Name: ${this.#name}`);
    }

    // setter
    setName(name, id){
        this.#name = name;
        this.#id = id;
    }
}

let college1 = new College("IITM", 229);
college1.display();
college1.setName("MERI", 128);
college1.display();