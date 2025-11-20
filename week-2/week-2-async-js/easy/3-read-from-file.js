const fs = require("fs");

fs.readFile("ex.txt", 'utf8', (err, data) => {
    console.log(data);
})


console.log("kya bolte company");

// fs.writeFile("ex.txt", "data likh raha hu ", (err, data) => {
//     console.log("data is written");
// });

console.log("file is readed");