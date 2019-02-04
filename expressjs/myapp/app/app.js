const path = require('path');
const createError = require('http-errors');
const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/news');
const session = require('express-session');
//const MongoStore  = require('connect-mongo');


const app = express();

const Article = require('./arcticle')(mongoose);
const User = require('./user')(mongoose);

require('./auth').initPassport(app, User);



app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));



app.get('/', function(req, res) {
  res.send('hello world');
});

require('./news').init(app, Article);

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
