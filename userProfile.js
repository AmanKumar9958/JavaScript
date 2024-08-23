var card = document.getElementById('card');
var userImage = document.getElementById('userImg');
var userName = document.getElementById('userName');
var userFollowers = document.getElementById('followers');
var userLocation = document.getElementById('location');
var userProfileCreationDate = document.getElementById('profileDate');
var remove = document.getElementById('remove');
var add = document.getElementById('add');
var userStatus = document.getElementById('status');

const xhr = new XMLHttpRequest();
const requestURL = 'https://api.github.com/users/amankumar9958';
xhr.open('GET', requestURL, true);
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        const data = JSON.parse(xhr.responseText);
        userName.textContent = data.name;
        userImage.src = data.avatar_url;
        userFollowers.textContent = `Followers: ${data.followers}`;
        userLocation.textContent = `Location: ${data.location}`
        userProfileCreationDate.textContent = `Created at: ${data.created_at}`
    }
}
xhr.send();

add.addEventListener('click', function(){
    var check = 0;
    if(check == 0){
        userStatus.style.color = 'green';
        userStatus.textContent = 'Friends';
        remove.style.display = 'none';
        add.textContent = 'Remove';
        check = 1;
    }
    else{
        add.textContent = 'Add Friend';
        userStatus.textContent = 'Stranger'
        check = 0;
    }
})

remove.addEventListener('click', function(){
    remove.style.display = 'none';
    add.style.display = 'none';
    userStatus.style.display = 'none'
})