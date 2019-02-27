const authenticationMiddleware  = (req, res, next) => {
    req.loggedIn = !!req.user;
    next();
  }
  
  module.exports = authenticationMiddleware