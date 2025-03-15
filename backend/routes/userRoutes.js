const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { userMiddleware } = require("../middleware/authMiddleware");

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
        res
          .status(201)
          .json({ message: "User created successfully", user, token });
      }
    );
  } catch (err) {
    res.status(400).json({ message: "Error creating user", err });
  }
});

// Route for Logging In existing user(POST)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // Check if the email and password are provided
  if (!email && !password) {
    return res
      .status(400)
      .json({ message: "Plese enter your Email and Password" });
  } else if (!email) {
    return res.status(400).json({ message: "Please enter your Email" });
  } else if (!password) {
    return res.status(400).json({ message: "Please enter your Password" });
  }

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatchedPassword = await user.matchPassword(password);
    if(!isMatchedPassword){
        return res.status(400).json({ message: "Invalid Password" });
    }

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
          res.json({ message: "User created successfully", user, token });
        }
      );
  } catch {
    res.status(500).json({ message: "Error logging in user" });
  }
});

// Get the loggedIn user profile(GET)
router.get("/profile", userMiddleware, async (req, res) =>{
    res.json(req.user) //This is getting assigned in the middleware
})
module.exports = router;
