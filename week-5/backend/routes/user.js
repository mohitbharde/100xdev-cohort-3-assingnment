//  start writing your code from here
const { User, Todo } = require("../db/index");
const z = require("zod");
const express = require("express");
const bcrypt = require("bcrypt");
const authenticationMiddleware = require("../middleware/user")
const env = require("dotenv");
const router = express.Router();
const jwt = require("jsonwebtoken");
env.config();
const JWT_SECRET = process.env.JWT_SECRET;


const validEmail = z.string().email({ message: "invalid email format " });
const validPassword = z.string().min(8, { message: "password length always be greater than or equal to 8" }).max(16, { message: "password length should not be greater than 16" })

router.post("/signup", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        validEmail.parse(email);
        validPassword.parse(password);

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ email, password: hashedPassword });

        if (user) {
            res.status(200).json({ message: "User created successfully", user: user });
        } else {
            res.status(400).json({ message: "Failed to create user" });
        }

    }
    catch (err) {
        res.status(400).json({
            message: "Error while creating user",
            error: err,
        })
    }
});

router.post("/login", async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    try {

        validEmail.parse(email);
        validPassword.parse(password);

        const user = await User.findOne({ email: email });
        const id = user._id;
        //console.log(user);

        if (user) {
            const isValid = bcrypt.compare(password, user.password);
            if (!isValid) {
                res.status(400).json({ message: "Invalid password" });
                return;
            }
            jwt.sign({ email, id }, JWT_SECRET, (err, token) => {
                if (err) {
                    res.status(400).json({ message: "Error while generating token" });
                }
                else {
                    req.headers.authorization = token;
                    res.json({
                        message: "User logged in successfully",
                        token,
                    });
                }
            });

        }
        else {
            res.status(400).json({ message: "Invalid email or password" });
        }

    } catch (err) {
        res.status(400).json({
            message: "error while login ",
            error: err,
        });
    }

});



router.get("/Todos", authenticationMiddleware, async (req, res) => {
    const id = req.user.id;

    //console.log(id);

    try {
        const todos = await Todo.find({ id: id });
        res.json(todos);
    }
    catch (err) {
        console.log(err);
        res.json({
            message: "Error while fetching todos",
        })
    }


});

router.post("/logout", authenticationMiddleware, async (req, res) => {
    const token = req.headers.authorization;

    if (token) {
        req.headers.authorization = null;
        res.json({ message: "User logged out successfully" });
    }
    else {
        res.status(400).json({ message: "Invalid token" });
    }
})

module.exports = router
