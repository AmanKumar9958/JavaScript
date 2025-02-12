// Calling the same function name but with different arguement or they perform different work


class vehicle{
    wheel(wheels){
        return `I have ${wheels}`;
    }
}

class car extends vehicle{
    wheel(wheels){
        return `I have ${wheels} wheels`;
    }
}

class bike extends vehicle{
    wheel(wheels){
        return `I have ${wheels} wheels`;
    }
}

class truck extends vehicle{
    wheel(wheels){
        return `I have ${wheels} wheels`;
    }
}

let car1 = new car();
console.log(car1.wheel(4));

let bike1 = new bike();
console.log(bike1.wheel(2));

let truck1 = new truck();
console.log(truck1.wheel(16))