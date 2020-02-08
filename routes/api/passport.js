var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../../models");

passport.use(new LocalStrategy(
  {
    usernameField: "userName"
  },
  function(userName, passWord, done) {
    db.User.findOne({
      where: {
        userName: userName
      }
    }).then(function(dbUser) {
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect userName."
        });
      }
      else if (!dbUser.validPassword(passWord)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      return done(null, dbUser);
    });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;