// For loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Outputs 0 to 4
}

// While loop
let j = 0;
while (j < 5) {
    console.log(j); // Outputs 0 to 4
    j++;
}

//Write a function called sum that finds the sum from 1 to a number

function sum(a) {
    let total = 0;
    for (i = 0; i <= a; i++) {
        total += i;
    }
    return total;
}

console.log(sum(10));