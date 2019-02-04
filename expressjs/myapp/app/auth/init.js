const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;
const authenticationMiddleware = require('./authenticationMiddleware')
const mongoose = require('mongoose');


passport.serializeUser(function (user, cb) {
    cb(null, user.UserId)
  })
  
  passport.deserializeUser(function (username, cb) {
    cb(null, username)
  })


const initPassport = (app, User)=> {
    passport.use(new Strategy({
        clientID: "1366496793493275",
        clientSecret: "c9d52c006c5884a9b4f8a54056a56b1e",
        callbackURL: 'http://localhost:3000/login/return'
      },
      function(accessToken, refreshToken, profile, cb) {
        let user = new User({
            _id: new mongoose.Types.ObjectId(),
            UserName: profile.displayName,
            UserId: profile.id
          });
        user.save(err=>{if (err) throw err;});
        return cb(null, user);
      }));

      app.use(passport.initialize());
      app.use(passport.session());

      app.get('/login/facebook', passport.authenticate('facebook'));

      app.get('/login/return', passport.authenticate('facebook', { failureRedirect: '/login' }), function(req, res) {
        req.session.UserId = req.user.UserId;
        res.redirect('/news');
      });

      passport.authenticationMiddleware = authenticationMiddleware;
}

module.exports = initPassport;