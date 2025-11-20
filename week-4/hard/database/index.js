const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/todo')
// Define schemas

const UserSchema = new mongoose.Schema({
    // Schema definition here

    email: { type: String, unique: true },
    password: String,
});

const TodoSchema = new mongoose.Schema({
    // Schema definition here
    id: { type: Schema.Types.ObjectId, ref: "User" },
    title: String,
    todo: String,
    completed: Boolean,
    preference: String,
});

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    User,
    Todo
}