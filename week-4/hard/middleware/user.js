const jwt = require("jsonwebtoken");
const JWT_SECRETE = "12345";

function userMiddleware(req, res, next) {
    // Implement user auth logic
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, JWT_SECRETE, (err, decoded) => {
            if (err) {
                res.status(401).json({
                    status: 401,
                    Message: "unauthorized",
                })
            }
            else {
                req.user = decoded;
                next();
            }
        })
    }
    else {
        res.status(401).json({
            Message: "unauthorized",
        })
    }
}

module.exports = userMiddleware;