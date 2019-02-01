function authenticationMiddleware () {
    return function (req, res, next) {
      if (req.session && req.session.userId) {
        return next()
      }
      res.redirect('/login/facebook')
    }
  }
  
  module.exports = authenticationMiddleware