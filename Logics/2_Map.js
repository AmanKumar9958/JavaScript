// Map creates a new array from the given array.

const names = ["Aman", "Gopal", "Om", "Kartik", "Sunny", "Sumit", "Varun"];

let newNames = names.map((eachName) => {
    return eachName + " ji";
})

console.log("Old name list: ", names);
console.log("New names list: ", newNames);