// window -> this = window{}
// node -> this = {}

function setUserName(userName){
    this.userName = userName
}
function createUser(userName, email, password){
    // this.userName = userName;    // we don't use this..
    setUserName.call(userName)   // only reference, to hold this we have to use call() function..
    this.userName = userName
    this.email = email;
    this.password = password;
}

const user1 = new createUser("Aman", "aman@gmail", "123")
console.log(user1);

/*
after calling only email and password is showing not Username..because setUserName createUser()
is not calling the setUserName() function..
to fix this problem we use the call() function..in that function in which we want to call the other function..
*/
