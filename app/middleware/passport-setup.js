const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    done(null, user);
});


passport.use(new GoogleStrategy({
        clientID: "id",
        clientSecret: "secret",
        callbackURL: "http://localhost:5000/google/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
            return cb(null, profile);
    }
));