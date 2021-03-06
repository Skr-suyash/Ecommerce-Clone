const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
require('../util/db/mongoose');
require('../passport/setup');

const auth = require('../routes/auth');
const userRouter = require('../routes/user');

const app = express();
const PORT = process.env.PORT || 8000;

// BodyParser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS Middleware
app.use(cors());

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

// Routers
app.use('/api/auth', auth);
app.use('/api/user', userRouter);

// Routes
app.get('/', (req, res) => {
  res.send('hello world');
});

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
