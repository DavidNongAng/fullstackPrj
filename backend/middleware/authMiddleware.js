const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandler(async(req, res, next)=> {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){ //checks if the token starts with "Bearer", because that's how it's formatted.
        try{
            // Get token from header
            token = req.headers.authorization.split(' ')[1]; //splits the token from the "Bearer" part.

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET); 

            // Get user from token
            req.user = await User.findById(decoded.id).select('-password'); //it won't return the password.

            next();
        }catch(err){
            console.log(err);
            res.status(401);
            throw new Error('Not authorized, token failed!');
        }
    }

    if(!token){
        res.status(401);
        throw new Error('Not authorized, no toekn..');
    }
})
//Bearer abcdefg...



module.exports = {
    protect
}