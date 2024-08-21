// ------------------Selecting elements-------------------------
const para = document.getElementById('para');
// const para1 = document.getElementsByClassName('para');
// const para2 = document.querySelector('.para');
// const btn = document.getElementById('button');
const myBox = document.getElementById('box');
myBox.style.backgroundColor = 'yellow';

function change(){
    myBox.innerHTML = 'Aman'
    btn.innerText = 'Hello'
    btn.style.backgroundColor = 'yellow'
}

para.addEventListener('mouseover', function(){
    para.innerText = 'My text content is changed by using JavaScript'
})


function turnOnLight(){
    var light = document.getElementById('bulb');
    var btn = document.getElementById('switch');
    var status = document.getElementById('lightStatus');
    var flag = 0;
    btn.addEventListener('click', function(){
        if(flag == 0){
            light.style.backgroundColor = 'yellow'
            btn.innerText = 'OFF';
            status.innerText = 'light is ON'
            status.style.color = 'black';
            flag = 1;
        }
        else{
            light.style.backgroundColor = 'gray'
            btn.innerText = 'ON';
            status.innerText = 'light is OFF'
            status.style.color = 'white';
            flag = 0;
        }
    })
}
turnOnLight();


// ------------------Accessing elements-------------------------
const days = document.querySelector('.week');

                            //Accessing the children
// console.log(days.children[0]);
// console.log(days.children[0].innerHTML);

for(let i = 0; i< days.children.length; i++){
    // console.log(days.children[i].innerHTML);
}
days.children[0].style.color = 'yellow';

// console.log(days.firstElementChild);
// console.log(days.lastElementChild.innerHTML);

                            //Accessing the parent
const weekDay = document.querySelector('.day');
// console.log(weekDay.innerHTML);
// console.log(weekDay.parentElement.innerHTML);
// console.log(weekDay.nextElementSibling.innerHTML);

                            // Child nodes
// console.log(days.childNodes);       //it includes all the text like enter button, comment, etc.


// ------------------Creating elements-------------------------
// const div = document.createElement('div');
// div.className = 'JSDiv';
// div.id = Math.round(Math.random()*10);
// div.innerText = "Aman";
// div.style.padding = "10px";
// div.style.border = "1px solid black"
//adding the element to the page..
// document.body.appendChild(div);

for(let i = 0; i<= 5; i++){
    const div = document.createElement('div');
    div.className = 'JSDiv';
    div.id = Math.round(Math.random()*10);
    div.innerText = "Aman";
    div.style.padding = "10px";
    div.style.border = "1px solid black";
    div.style.boxShadow = "10px 10px 10px gray"
    document.body.appendChild(div);
}