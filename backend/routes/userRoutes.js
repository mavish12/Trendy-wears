const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Route for regestering a new user(POST)
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already registered" });
    }
    // const user = await User.create({name, email, password});
    user = new User({ name, email, password });
    await user.save();
    // Create JWT Payload
    const payload = {
      user: {
        id: user._id,
        role: user.role,
      },
    };
    // Sign and return the token along with the user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "30d" },
      (err, token) => {
        if (err) throw err;
        // Send the user and token in response
        res.status(201).json({ message: "User created successfully", user, token });
      }
    );
  } catch (err) {
    res.status(400).json({ message: "Error creating user", err });
  }
});

module.exports = router;
