const path = require('path');
const createError = require('http-errors');
const express = require('express');
const Article = require('./arcticle');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore  = require('connect-mongo')(session);


const app = express();

require('./auth').initPassport(app);

app.get('/', function(req, res) {
  res.send('hello world');
});


app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('profile', { user: req.user });
  });

app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));
/*app.use(session({ 
  secret: 'kuku', 
  resave: true, 
  saveUninitialized: true, 
  store: new MongoStore({url:"mongodb://localhost/users"}),
  autoRemove: 'native'
}));
*/



require('./news').init(app, mongoose, Article);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');





app.use(express.static(path.join(__dirname, 'public')));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
      message: err.message,
      error: {}
  });
});


module.exports = app;
