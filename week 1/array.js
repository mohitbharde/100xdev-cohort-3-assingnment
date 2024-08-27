// Arrays
// Arrays let you group data together

//const users = ["harkirat", "raman", "diljeet"];
// const tatalUsers = users.length;
// const firstUser = users[0];


// Assignment
// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS
let number = [10, 23, 55, 66, 44, 34, 22, 33, 67, 89, 75, 91];
let evenNumbers = number.filter((n) => {
    return n % 2 == 0;
})

console.log(evenNumbers);

// Array of Objects
// We can have more complex objects, for example an array of objects
const users = [{
    name: "Harkirat",
    age: 21
}, {
    name: "raman",
    age: 22
}
]

const user1 = users[0]
const user1Age = users[0].age
// Assignment
// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

let newUser = users.filter((user) => {
    return user.age > 18
})

console.log(newUser);