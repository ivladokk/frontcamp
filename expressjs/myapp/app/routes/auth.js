const passport = require('passport');

const initAuthRoutes = (app) => {
    app.get("/login/facebook", passport.authenticate("facebook", { scope : ['public_profile', 'email'] }));
    app.get('/login/return', passport.authenticate('facebook', { session: true, scope: ['email'] }), 
    (req, res) => { 
        res.send({ token: req.user }); 
    });
    /*app.get("/login/return", passport.authenticate("facebook", {
        successRedirect : "/",
        failureRedirect : "/500"
    }));*/
}

module.exports = initAuthRoutes;