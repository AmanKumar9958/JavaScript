// Static keywords are used to define static methods and properties in a class.
// Static methods are called without creating an object of the class.
// Static can be variables and functions.
// We can't call them by creating objects.
// Static methods can be called using the class name.

class Calculator{
    static add(a, b){
        return a+b;
    }
}

let addition = new Calculator();
// addition.add(2,3); // Error: addition.add is not a function because add function is an static function..

// calling static function using class name
console.log(Calculator.add(2,3)); // 5