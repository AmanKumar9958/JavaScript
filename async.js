// // JS is synchronous language with single threaded.
// // Execute the code line by line.
// // Blocking Code VS Non-Blocking Code.
//     // Blocking Code -> It breaks the flow of the code till our another work is going on.
//     // Non-Blocking Code -> It continues the flow of the code even if our code is doing some another work.
//     // Example -> Reading the file as synchronous make the code Block and does not execute the other code.
//                 // But the reading the file as asynchronous make the code to execute the other lines of code also while the code is reading the file.
//                 // Both of the cases are good but it depends on the situation and type of the work on which type we want to work with.


// // Code
// const h1 = document.querySelector('h1');
// const changeText = function(){
//     h1.innerHTML = 'I am learning React JS';
//     const h3 = document.createElement('h3');
//     h3.innerText = 'Changed by using setTimeOut';
//     document.body.appendChild(h3);
// }
// // const changeMe = setTimeout(changeText, 2000)    //This make the code to execute after 2s

// // If we want to stop the code from changing then...
// document.querySelector('#stop').addEventListener('click', function(){
//     clearTimeout(changeMe);
//     const h2 = document.createElement('h2');
//     h2.innerHTML = 'STOPPED by ClearTimeOut Function';
//     document.body.appendChild(h2);
// })
// By using the clearTimeOut function we stopped the code to get changed..



// setTimeOut
// clearTimeOut
// setInterval
// clearInterval

                    // Project of async JS
// function declared which will change the name after some specific time
// const changeFullName = function(){
//     document.getElementById('status').innerHTML = "I have learned HTML & CSS";
// }
// // start btn which will start the time to change the text
// const start = document.getElementById('start');
// start.addEventListener('click', function(){
//     // const changeMe = setTimeout(changeFullName,3000)
// })
// // stop btn which will stop the time to get the text changed
// const stop = document.getElementById('stop');
// stop.addEventListener('click', function(){
//     // clearTimeout(changeMe)
// })


//                         // Task - 1
// // Selecting the name..
// const printingPress = function(){
//     // document.getElementById('name').innerHTML = "Hello, Aman";
// }
// // Selecting the buttons..
// const startPrint = document.getElementById('startPrint')
// const stopPrint = document.getElementById('stopPrint')

// startPrint.addEventListener('click', function(){
//     const printName = setInterval(console.log('Hello, Aman'), 1000);
    
// })
// stopPrint.addEventListener('click', function(){
//     clearInterval(printName)
// })


// Selecting Buttons
const startChanging = document.getElementById('startBGC');
const stopChanging = document.getElementById('stopBGC');
// Hex code range = 0-9, A-F length is 6

// generating random colors...
const randomColor = function(){
    const hexCode = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hexCode[Math.floor(Math.random() * 16)];
    }
    return color
}

// making variable to store the interval due to scope of functions...
let interval
// changing the background color of the body
const startChangingBackgroundColor = function(){
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    }
    interval = setInterval(changeBgColor, 1000)
}

// stop changing the background color of the body
const stopChangingBackgroundColor = function(){
    clearInterval(interval)
}

// click event listener on start button...
startChanging.addEventListener('click', startChangingBackgroundColor);
stopChanging.addEventListener('click', stopChangingBackgroundColor)