const express = require("express");
const User = require("../models/User")
const jwt = require("jsonwebtoken")

const router = express.Router();


// Route for regestering a new user(POST)
router.post("/register", async(req, res) =>{
    const {name, email, password} = req.body;
    
    try{
        const user = await User.create({name, email, password});
        res.status(201).json({message: "User created successfully", user});
    }catch(err){
        res.status(400).json({message: "Error creating user", err});
    }
})

module.exports = router;