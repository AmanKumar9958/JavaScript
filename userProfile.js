const card = document.getElementById('card');
const userImage = document.getElementById('userImg');
const userName = document.getElementById('userName');
const userFollowers = document.getElementById('followers');
const userLocation = document.getElementById('location');
const userProfileCreationDate = document.getElementById('profileDate');

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