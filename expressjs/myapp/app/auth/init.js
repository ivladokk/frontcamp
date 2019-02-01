const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;
const authenticationMiddleware = require('./authenticationMiddleware')


const findUser = (user, cb) => {

}


const initPassport = (app)=> {
    passport.use(new Strategy({
        clientID: "1366496793493275",
        clientSecret: "c9d52c006c5884a9b4f8a54056a56b1e",
        callbackURL: 'http://localhost:3000/return'
      },
      function(accessToken, refreshToken, profile, cb) {
        console.log('okkkk');
        return cb(null, profile);
      }));

      passport.serializeUser(function (user, cb) {
        cb(null, user.displayName)
      })
      
      passport.deserializeUser(function (username, cb) {
        findUser(username, cb)
      })

      passport.authenticationMiddleware = authenticationMiddleware;
      app.use(passport.initialize());
      app.use(passport.session());

      app.get('/login/facebook', passport.authenticate('facebook'));

      app.post('/return', passport.authenticate('facebook', { failureRedirect: '/login' }), function(req, res) {
        res.redirect('/news');
      });
}

module.exports = initPassport;