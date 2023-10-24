const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const secret = process.env.JWT_SECRET;

module.exports = function signToken(payload) {
    return jwt.sign(payload, secret);
}