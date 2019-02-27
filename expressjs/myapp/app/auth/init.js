const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;
const authenticationMiddleware = require('./authenticationMiddleware')
const mongoose = require('mongoose');


passport.serializeUser(function (user, done) {
  done(null, user.UserId)
  })
  
passport.deserializeUser(function (id, done) {
      User.findById(id, function(err, user) {
        done(err, user);
    });
  })


const initPassport = (app, User)=> {
    passport.use(new Strategy({
        clientID: "1366496793493275",
        clientSecret: "c9d52c006c5884a9b4f8a54056a56b1e",
        callbackURL: 'http://localhost:3000/login/return'
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOne({ 'UserId' : profile.id }, function(err, user) {
          if (err)
              return done(err);
          if (user) {
              return done(null, user); 
          } else {
              let newUser = new User({
                _id: new mongoose.Types.ObjectId(),
                UserName: profile.displayName,
                UserId: profile.id
              });
              
              newUser.save(function(err) {
                  if (err)
                      throw err;
                  return done(null, newUser);
              });
          }
        });
      }));

      app.use(passport.initialize());
      app.use(passport.session());

      passport.authenticationMiddleware = authenticationMiddleware;
}

module.exports = initPassport;