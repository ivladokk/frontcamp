const authenticationMiddleware  = () => {
    return function (req, res, next) {
      if (req.session && req.session.UserId) {
        return next()
      }
      res.redirect('/login/facebook')
    }
  }
  
  module.exports = authenticationMiddleware