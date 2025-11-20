const express = require("express");
const dotenv = require("dotenv");
const user = require("./routes/user");
const todo = require("./routes/todo")
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(user);
app.use(todo);

app.get("/healthy", (req, res) => res.send("I am Healthy"));

//  start writing your routes here
app.listen(port, () => console.log(`server is running at http://localhost:${port}`));