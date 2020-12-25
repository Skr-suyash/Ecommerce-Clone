const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
require('../passport/setup')(passport);

const router = express.Router();
const User = require('../models/Users');

// Register route
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  // Hash the passsword
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
  try {
    // Save the user
    await newUser.save();
    res.send(newUser);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Login Route
router.post('/login', async (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return res.send(err);
    // Send the requires error message
    if (!user) return res.send(info.message);
    return res.send(user);
  })(req, res, next);
});

module.exports = router;
