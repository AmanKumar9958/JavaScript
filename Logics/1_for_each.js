// ForEach is used to print the single elements from the given array..


const names = ["Aman", "Gopal", "Om", "Kartik", "Sunny", "Sumit", "Varun"];

names.forEach((eachName) => {
    if(eachName === 'Aman'){
        console.log(`${eachName}, wrote this whole code..`);
    }
    else{
        console.log(eachName)
    }
})