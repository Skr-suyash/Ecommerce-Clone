/* eslint-disable no-shadow */
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/Users');

// Serialize and store in session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

// Passport Local Configuration
module.exports = (passport) => {
  passport.use(
    // eslint-disable-next-line consistent-return
    new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
      // Match user
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false, { message: 'No user found' });
      }

      // Compare the passwords
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (!isMatch) {
          return done(null, false, { message: 'Incorrect Password' });
        }
        // Send the user
        return done(null, user);
      });
    }),
  );
};
