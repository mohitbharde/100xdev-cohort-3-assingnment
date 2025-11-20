const fs = require("fs");
const { Command } = require("commander");
const commander = new Command();
const todos = require("./todo.json");

commander.name("todo")
    .description("add ,delete ,mark as done to todos")
    .version("1.0.1")

commander.command("Add")
    .description("add a new todo")
    .action((data) => {
        let user = data;
        fs.writeFileSync(todos)
    })