// we use getter and setter when we don't want to give access of something to someone...
// like, when someone wants password then how can we show the error message to the user..
// These all things get done by getter and setter..
// When we use getter then we have to use setter..

// get -> when user access and we don't allow access to them..
// set -> storing the values in the database...

                                        // using pre defined..
class user{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    // getter and setter for email..
    get email(){
        return this._email = "I will not show your email..";
    }
    set email(value){
        this._email = value;
    }
    // getter and setter for password..
    get password(){
        // return "your password is not visible to me";
        return this._password.toUpperCase();    // the variable _password must be same in both get and set..
        // user will see the password in uppercase always.
    }
    set password(value){
        // this.password = value;   // gives error of maximum call stack size exceeded..to fix this we use new variable in both get and set..
        this._password = value;     // the variable _password must be same in both get and set..
        // original password will be stored in the database..
    }
}
const user1 = new user("amancollege04@gmail.com", "123abc")
// console.log(user1.password);
// console.log(user1.email);

                                        // using function..

function teacher(name, password){
    this._name = name;
    this._password = password;

    // for name...
    Object.defineProperty(this, 'name', {
        get: function(){
            return this._name = "This is your name.."
        },
        set: function(value){
            this._name = value;
        }
    })
    // for password...
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password = value;
        }
    })
}
const teacher1 = new teacher("Aman", "PASSWORD")
// console.log(teacher1.name);
console.log(teacher1.password);


