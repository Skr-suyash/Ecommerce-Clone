const express = require('express');
const User = require('../models/Users');

const router = express.Router();
const parseUser = require('../util/auth/parseUser');

router.put('/become-a-seller/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findOneAndUpdate({ _id: id }, { seller: true });
  if (!user) {
    res.status(404).send('No user found with that id');
  } else {
    const parsedUser = parseUser(user);
    res.send(parsedUser);
  }
});

module.exports = router;
