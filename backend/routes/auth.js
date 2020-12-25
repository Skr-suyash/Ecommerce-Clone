const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
require('../passport/setup')(passport);

const router = express.Router();
const checkAuthenticated = require('../util/auth/checkAuthenticated');
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
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return res.status(500).send(err);
    // Send the requires=d error message
    if (!user) return res.status(400).send(info.message);
    // Initiate login
    req.logIn(user, (loginErr) => {
      if (err) return res.status(500).send(loginErr);
      return res.send(user);
    });
    return null;
  })(req, res, next);
});

router.post('/logout', checkAuthenticated, (req, res) => {
  req.logOut();
  res.redirect('/');
});

module.exports = router;
