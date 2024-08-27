// Function declaration
function greet(name) {
    return "Hello, " + name;
}

// Function call
let message = greet("John"); // "Hello, John"
console.log(message);

function sum(a, b) {
    return a + b;
}

function canVote(age) {
    if (age < 18) return false;

    return true;
}

console.log(sum(1, 3));
console.log(canVote(21));