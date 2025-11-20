//  start writing your code from here
const { User, Todo } = require("../db/index")
const authenticationMiddleware = require("../middleware/user")
const express = require("express");
const router = express.Router();


router.post("/createTodo", authenticationMiddleware, async (req, res) => {
    const { title, todo, completed, preference } = req.body;
    const userId = req.user.id;

    try {
        Todo.create({ id: userId, title, todo, completed, preference })
            .then(() => {
                res.status(200).json({ message: "Todo created successfully" });
            })

    } catch (err) {
        //console.log(err);
        res.status(500).json({ message: "Error creating Todo", error: err });
    }


});


router.get("/getTodo:id", authenticationMiddleware, async (req, res) => {
    const userId = req.user.id;
    const id = req.params.id;

    Todo.find({ id: id })
        .then((todo) => {
            res.status(200).json(todo);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error fetching Todos", error: err });
        })
})


router.get("/AllTodos", authenticationMiddleware, async (req, res) => {
    const userId = req.user.id;

    Todo.find()
        .then((todo) => {
            res.status(200).json(todo);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error fetching Todos", error: err });
        })
})

router.put("/updateTodo:id", authenticationMiddleware, async (req, res) => {
    const id = req.params.id;
    const { title, todo, completed, preference } = req.body;
    const userId = req.user.id;

    Todo.updateOne({ _id: id }, { title, todo, completed, preference })
        .then((r) => {
            res.status(200).json({ message: "Todo updated successfully", todo: r });
        })
        .catch((err) => {
            res.status(500).json({ message: "Error updating Todo", error: err });
        })
})

router.delete("/deleteTodo:id", authenticationMiddleware, async (req, res) => {
    const id = req.params.id;

    Todo.deleteOne({ _id: id })
        .then(() => {
            res.status(200).json({ message: "Todo deleted successfully" });
        })
        .catch(() => {
            res.status(500).json({ message: "Error deleting Todo" });
        })

})

module.exports = router;