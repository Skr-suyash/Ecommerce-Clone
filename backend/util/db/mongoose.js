const mongoose = require('mongoose');

const DB_URL = 'mongodb://127.0.0.1:27017/ecommerce-clone';

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  // eslint-disable-next-line no-console
  .then(console.log(`MongoDB Connected on ${DB_URL}`))
  // eslint-disable-next-line no-console
  .catch((err) => console.log(err));
