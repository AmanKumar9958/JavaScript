const xhr = new XMLHttpRequest();
const requestURL = 'https://api.github.com/users/amankumar9958';
xhr.open('GET', requestURL);
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        // const data = this.responseText; //string data type
        // console.log(typeof data);    //string and we need to convert it into the object format
        const data = JSON.parse(xhr.responseText); //object data type "Conversion"
        // console.log(typeof data)     //object data type
        // console.log(data.followers);
        // console.log(data.avatar_url);
        // console.log(data.name);
        // console.log(data.blog);
        // console.log(data.location);
        // console.log(data.created_at);
        const name = document.createElement('h1')
        name.textContent = data.name;
        const main = document.getElementById('main');
        main.appendChild(name)
    }
    
}
xhr.send();

// most of the time the date we get from API is in the string form..