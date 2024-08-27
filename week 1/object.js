//Objects
//An object in JavaScript is a collection of key-value pairs, where each key is a string and each value can be any valid JavaScript data type, including another object.

let user = {
    name: "Harkirat",
    age: 19
}

console.log("Harkirats age is " + user.age);

// //Assignment #1
// //Write a function that takes a user as an input and greets them with their name and age
// function greetUser(user) {
//     console.log("Hello, " + user.name + "! You are " + user.age + "old");
// }

// console.log(greetUser({
//     name: "mohit",
//     age: 20,
// }))

// //Assignment #2
// //Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
// function greetUser(user) {
//     if (user.gender === "male") {
//         console.log("Hi Mr. " + user.name + ", your age is " + user.age);
//     } else if (user.gender === "female") {
//         console.log("Hi Mrs. " + user.name + ", your age is " + user.age);
//     }
// }

// console.log(greetUser({
//     name: "mohit",
//     age: 20,
//     gender: "male",
// }))

// //Assignment #3
// //Also tell the user if they are legal to vote or not
function greetUser(user) {
    if (user.gender === "male") {
        let vote = user.age < 18 ? " not legal to vote" : " legal to vote";
        console.log("Hi Mr. " + user.name + ", your age is " + user.age + vote);
    } else if (user.gender === "female") {
        console.log("Hi Mrs. " + user.name + ", your age is " + user.age + vote);
    }
}

console.log(greetUser({
    name: "mohit",
    age: 20,
    gender: "male",
}))


// Object of Objects
// We can have an even more complex object (object of objects)
const user1 = {
    name: "harkirat",
    age: 19,
    address: {
        city: "Delhi",
        country: "India",
        address: "1122 DLF"
    }
}

const city = user1.address.city;
// Assignment
// Create a function that takes an array of objects as input,and returns the users whose age > 18 and are male