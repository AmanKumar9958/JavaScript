// Some task in JS can't be done instantly but it will be done in some time.
// So we need to wait for that task to complete.

// Example - Like we order anything from online shopping website then we to 
// wait for the delivery of that product, we didn't get the product instantly

// This is called promises.
// A promise is an object that is used to handle asynchronous operations in JavaScript.


// --------------x----------x---------x----------x---------x-----------x------
// There are two parts - creating and consuming
// Creating a promise
const promise1 = new Promise(function(resolve, reject){     //resolve - work done and reject - work not done
    // we can do any async task here...
    // example...
    setTimeout(function(){
        // console.log("Async task is done");
        resolve();  //to print task, when we were consuming the promise
    }, 2000)
});        

// Consuming a promise
promise1.then(function(){           //then is related with "resolve"
    // console.log("Promise consumed");    //it is not printing to print we have to use the resolve method while we were creating the promise
    
})

                            // another way (without creating variable)...
new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log("Hello Aman");
        resolve();
    })
})
.then(function(){
    // console.log("Different way of consuming promise");
    
})

// Promise 2
const promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            userName: 'AmanWebDev24',
            email: 'amancollege04@gmail.com'
        });

    }, 3000)
})
promise2.then(function(user){
    console.log(user);
    
})