const parseUser = (user) => {
  const parsedUser = {
    // eslint-disable-next-line no-underscore-dangle
    id: user._id,
    name: user.name,
    email: user.email,
    seller: user.seller,
  };
  return parsedUser;
};

module.exports = parseUser;
