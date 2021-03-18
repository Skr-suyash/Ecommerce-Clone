const express = require('express');
const User = require('../models/Users');

const router = express.Router();

router.put('/become-a-seller/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findOneAndUpdate({ _id: id }, { seller: true });
  if (!user) {
    res.status(404).send('No user found with that id');
  } else {
    const parsedUser = {
      // eslint-disable-next-line no-underscore-dangle
      id: user._id,
      name: user.name,
      email: user.email,
      seller: user.seller,
    };
    res.send(parsedUser);
  }
});

module.exports = router;
