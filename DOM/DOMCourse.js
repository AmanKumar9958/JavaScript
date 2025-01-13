// example - 1
function changeParaText(){
    let changePara = document.getElementById('myParagraph');
    changePara.textContent = "I am changed!!"
}

// example - 2
let highlight = document.getElementById('highlightFirstCity');
highlight.addEventListener('click', function(){
    let citiesList = document.getElementById('citiesList');
    citiesList.firstElementChild.classList.add('highlight')
})
highlight.addEventListener('dblclick', function(){
    let citiesList = document.getElementById('citiesList');
    citiesList.lastElementChild.classList.add('highlight2')
})

// example - 3
function changeOrder(){
    let coffeeType = document.getElementById('coffeeType')
    coffeeType.textContent = "Espresso";
}

// example - 4
function addNewElement(){
    let shoppingList = document.getElementById('shoppingList');
    let addNewItem = document.createElement('li');
    addNewItem.textContent = 'Wheat';
    shoppingList.appendChild(addNewItem);
}

// example - 5
function removeElement(){
    let list = document.getElementById('taskList');
    // list.lastElementChild.remove();
    list.firstElementChild.remove();
}

// example - 6
let form = document.getElementById('feedbackForm')
form.addEventListener('submit', function(event){
    event.preventDefault();
    let feedbackInput = document.getElementById('feedbackInput').value;
    let displayFeedback = document.getElementById('displayFeedback');
    displayFeedback.textContent = feedbackInput;
    displayFeedback.style.backgroundColor = 'yellow';
    displayFeedback.style.border = '2px solid black';
})

// example - 7
let button = document.getElementById('highlight');
button.addEventListener('click', function(){
    let text = document.getElementById('text');
    text.classList.toggle('highlight');
})