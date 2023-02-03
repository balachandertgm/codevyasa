const jwt = require("jsonwebtoken");
const { responseJSONFormat } = require("../util");
const TOKEN_KEY = "CODEVYASAASSESSMENT";

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.params.token || req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send(responseJSONFormat(false, "A token is required for authentication"));
    }

    try {
        const decoded = jwt.verify(token, TOKEN_KEY);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send(responseJSONFormat(false, "Invalid Token"));
    }
    return next();
}
module.exports = verifyToken;
