const express = require('express');

const router = express.Router();
const passport = require('passport');

router.post('/register', (req, res, next) => {
  // eslint-disable-next-line consistent-return
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(400).send({ error: err });
    }
    if (!user) {
      return res.status(400).send({ error: 'User Not Found' });
    }

    req.logIn(user, (loginErr) => {
      if (err) {
        return res.status(400).send({ error: loginErr });
      }
      return res.status(200).json({ succes: `Logged In ${user} and ${info}`});
    });
  })(req, res, next);
});

module.exports = router;
