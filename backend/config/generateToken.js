const jwt = require('jsonwebtoken')
const secret = "i am sahil"
const generateToken = (id)=>{
    return jwt.sign({id}, secret);
}

module.exports = generateToken