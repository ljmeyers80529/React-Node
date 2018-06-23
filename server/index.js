const express = require('express');

const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./modles/user');

mongoose.connect(keys.MONGODB_URI);

require('./services/passport'); // nothing is exported.

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/routes')(app); // calls the arrow function to forword the app object to the routes file.

app.listen(3000);