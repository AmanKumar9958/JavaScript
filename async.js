                    // Learning Async JS
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


                        // Task - 1
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

                            // Project - 1
function project1(){
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
    if(!interval){
        interval = setInterval(changeBgColor, 1000)
    }
}

// stop changing the background color of the body
const stopChangingBackgroundColor = function(){
    clearInterval(interval)
    interval = null;
}

// click event listener on start button...
startChanging.addEventListener('click', startChangingBackgroundColor);
stopChanging.addEventListener('click', stopChangingBackgroundColor)
}
project1()
                            
                            // Project - 2
function project2(){
    const insert = document.getElementById('insert');
    window.addEventListener("keydown", (e) => {
        insert.innerHTML = `
        <div class="color">
            <table>
                <tr>
                    <td>Key</td>
                    <td>Key Code</td>
                    <td>Code</td>
                </tr>
                <tr>
                    <td>${e.key === ' '? 'Space': e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
        `;
    })
}
project2();