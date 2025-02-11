function Animal(name, eatingBehaviour){
    this.name = name;
    this.eatingBehaviour = eatingBehaviour;
    this.getEatingBehaviour = function(){
        return `${this.name} is an ${this.eatingBehaviour}`;
    };
}

let dog = new Animal("Dog", "Omnivorous");
console.log(dog.getEatingBehaviour());


Animal.prototype.sound = function(){
    return `${this.name} barks`;
}
console.log(dog.sound());