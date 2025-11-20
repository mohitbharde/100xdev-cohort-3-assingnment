//  Create a middleware that logs all incoming requests to the console.

const express = require('express');
const app = express();
let consoleOutput = [];
function logRequests(req, res, next) {
    // write the logic for request log here
    console.log(req.method);
    next();

}

app.use(logRequests);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});

//app.listen(3000);
module.exports = app;
