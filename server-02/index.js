const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
passport.use(new GoogleStrategy());

app.listen(5000);

// clientID: 763062955417-lg582de7tjudotpgq90scs3ns5r0uech.apps.googleusercontent.com
// clientSecret: Fl0TFeirP04z0uHEFEMVk4hv
