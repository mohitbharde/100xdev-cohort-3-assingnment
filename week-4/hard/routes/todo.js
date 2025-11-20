const { Router } = require("express");
const adminMiddleware = require("../middleware/user");
const { Todo } = require("../database/index");
const router = Router();

// todo Routes
router.post('/addTodo', (req, res) => {
    // Implement todo creation logic
    const { id, title, todo, completed, preference } = req.body;
    Todo.insertMany({ id: id, title: title, todo: todo, completed: completed, preference: preference }).then(() => res.status(201).json({ message: "Todo created successfully" }));

});

router.put('/updateTodo', adminMiddleware, async (req, res) => {
    // Implement update todo  logic
    const { title, todo, completed, preference } = req.body;
    const id = req.user._id;
    await Todo.updateOne({ id: id }, { $set: { title: title, todo: todo, completed: completed, preference: preference } });
    res.status(200).json({ message: "Todo updated successfully" });
});

router.delete('/deleteTodo', adminMiddleware, (req, res) => {
    // Implement delete todo logic
    const id = req.user._id;
    Todo.deleteMany({ id: id }).then(() => res.status(200).json({ message: "todo deleted successfully" }));
});

router.delete('deleteTodo/:id', adminMiddleware, (req, res) => {
    // Implement delete todo by id logic
    const id = req.params.id;
    Todo.deleteOne({ _id: id }).then(() => res.status(200).json({ message: "todo deleted successfully" }));
});


router.get('/getTodo', adminMiddleware, (req, res) => {
    // Implement fetching all todo logic
    Todo.find({ id: req.user._id }).then((data) => res.status(200).json({ data: data }));
});

router.get('getTodo/:id', adminMiddleware, (req, res) => {
    // Implement fetching todo by id logic
    Todo.find({ _id: req.params.id }).then((data) => res.status(200).json({ data: data }));
});

module.exports = router;