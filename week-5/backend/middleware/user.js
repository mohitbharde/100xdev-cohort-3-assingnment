//  start writing from here

const jwt = require("jsonwebtoken");
const env = require("dotenv");
env.config();
const JWT_SECRET = process.env.JWT_SECRET;

function authenticationMiddleware(req, res, next) {
    const token = req.headers.authorization;
    //console.log(token, JWT_SECRET);

    if (token) {
        jwt.verify(token, JWT_SECRET, (err, decode) => {
            if (err) {
                res.status(401).send({ message: "Invalid token", err });
            } else {
                req.user = decode;
                //console.log(decode);
                next();
            }
        })
    }
    else {
        return res.status(401).send({ message: "No token provided" });
    }

}

module.exports = authenticationMiddleware;