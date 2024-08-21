const myBox = document.getElementById('myBox');
const body = document.body;
                            // Mouse Events...
myBox.addEventListener('click', function(){
    myBox.style.backgroundColor = 'yellow'
})
myBox.addEventListener('dblclick', function(){
    myBox.style.backgroundColor = 'seaGreen'
})
myBox.addEventListener('mousemove', function(){
    myBox.style.borderRadius = '25px'
})
myBox.addEventListener('mouseleave', event =>{
    myBox.style.borderRadius = '0px'
})
myBox.addEventListener('mouseover', event => {
    myBox.innerHTML = 'Your mouse is on me!!'
})
myBox.addEventListener('mouseleave', event => {
    myBox.innerHTML = 'You removed your mouse from me'
    myBox.style.width = 'fit-content'
})

                            // Keyboard Events...
