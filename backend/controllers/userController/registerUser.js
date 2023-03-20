
asyncHandler = require('express-async-handler')
const users = require('../../models/userModel')
const generateToken = require('../../config/generateToken')


const registerUser = asyncHandler(async(req, res)=>{
    // fetching the form data 
    const {name , email, password, pic} = req.body
    
    // checking if any detail is missing?
    if( !name || !email || !password){
        res.status(400)
        throw new Error("Please enter all the details");
    }

    // checking if a user already exists or not
    const userExists = await users.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error(`User with email ${email} already exists. Try again with different credentials`)
    }

    // creating a new user 
    const user = await users.create({name, email, password, pic})
    if(user){
        res.status(201).json({
            _id : user._id,
            name : user.name,
            email : user.email,
            pic : user.pic,
            token: generateToken(user._id.toJSON())

        })
    }
    else{
        res.status(400)
        throw new Error("Failed to create new user")
    }



});

module.exports = registerUser