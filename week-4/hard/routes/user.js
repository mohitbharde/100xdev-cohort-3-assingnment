const express = require("express");
const router = express.Router();
const userMiddleware = require("../middleware/user");
const { User, Todo } = require("../database/index.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const JWT_SECRETE = "12345";



// User Routes
router.post('/signup', async (req, res,) => {
    // Implement user signup logic
    const email = req.body.email;
    const password = req.body.password;

    try {
        const bcryptPassword = await bcrypt.hash(password, 5);

        await User.create({
            email: email,
            password: bcryptPassword,
        }).then(res.status(200).json({
            message: "User created successfully",
        }));

    } catch (e) {
        res.status(520).json({
            message: "Error creating user",
        })
        console.log(e);
        return;
    }
});

router.post('/login', async (req, res,) => {
    // Implement user login logic
    const email = req.body.email;
    const password = req.body.password;

    try {

        const user = await User.findOne({ email: email });
        if (!user) {
            res.status(404).json({
                message: "User not found",
            });
            return;
        }

        const match = await bcrypt.compare(password, user.password);
        if (match) {
            const token = jwt.sign({ user: user.email, _id: user._id }, JWT_SECRETE,);
            req.headers.authorization = token;
            res.json({
                message: "you are login ",
                token: token,
            })
            return;
        }
        else {
            res.status(500).json({
                message: "failed while User logged in",
            });
            return;
        }
    } catch (e) {
        console.log(e);
        res.status(520).json({
            message: "Error logging in user",
            error: e,
        });
        return;
    }

});

router.get('/todos', userMiddleware, async (req, res) => {
    // Implement logic for getting todos for a user
    const todos = await Todo.find({ id: req.user._id }).exec();
    console.log(todos);
    res.json(todos);


});

router.post('/logout', userMiddleware, (req, res) => {
    // Implement logout logic
    const user = req.user;

    console.log(req.headers.authorization);
    res.json({
        user: user.email,
    })

    req.headers.authorization = undefined;

    console.log(req.headers.authorization);
});

module.exports = router