const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const passport = require('passport');
require('../util/db/mongoose');
require('../passport/setup');

const auth = require('../routes/auth');

const app = express();
const PORT = process.env.PORT || 8000;

// BodyParser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Express Session
app.use(
  session({
    secret: 'cacacasdcscfcssfc',
    resave: true,
    saveUninitialized: true,
    // Set up MongoStore to save sessions
    store: new MongoStore({ mongooseConnection: mongoose.connection, collection: 'sessions' }),
  }),
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/auth', auth);

app.get('/', (req, res) => {
  res.send('hello world');
});

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
