// start writing from here
const express = require("express");
const app = express();
const user = require("./routes/user");
const todo = require("./routes/todo");
const env = require("dotenv");

env.config();
const Port = process.env.PORT;
app.use(express.json());

app.use(user);
app.use(todo);

app.listen(Port, () => { console.log(`app is listen at port no ${Port}`) });