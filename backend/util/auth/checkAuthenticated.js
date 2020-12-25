module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.status(404).send('Please Login to Continue');
};
