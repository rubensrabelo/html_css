const jwt = require("jsonwebtoken");

const getToken = require("./get-token");

const checktoken = (req, res, next) => {
    if(!req.headers.authorization) return res.status(401).json({ message: "Access denied!"});

    const token = getToken(req);

    if(!token) return res.status(401).json({ message: "Access denied!"});

    try {
        const verified = jwt.verify(token, "nossosecret");
        req.user = verified;
        next();
    } catch(err) {
        res.status(400).json({message: "Token invalid!"});
    }
};

module.exports = checktoken;