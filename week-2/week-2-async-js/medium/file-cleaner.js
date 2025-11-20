const fs = require("fs");

fs.writeFile("demo.txt", "hello     world    my    name   is       raman", (err, data) => {
    console.log("data is added");
});

fs.readFile("demo.txt", "utf8", (err, data) => {
    console.log(data);
    let ans = "";
    for (let i = 0; i < data.length; i++) {
        if (data[i] == " ") {
            while (data[i] == " ") {
                i++;
            }
            ans += " ";
        }
        ans += data.charAt(i);
    }
    console.log(ans);
});