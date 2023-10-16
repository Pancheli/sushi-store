const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const secret = process.env.JWT_SECRET;

export function signToken(payload) {
    return jwt.sign(payload, secret);
}