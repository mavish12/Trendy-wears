const jwt = require("jsonwebtoken")
const User = require("../models/User")

// Middleware to protect routes
const userMiddleware = async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.user.id).select("-password"); //Exclude Password
            next();
        }catch(error){
            res.status(401).json({error: "Invalid/Not Authorized token"});
        }
    }else{
        res.status(401).json({error: "No token provided"});
    }
}

module.exports = {userMiddleware}
