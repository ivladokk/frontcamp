const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');

const { createLogger, format, transports } = require('winston');
const logger = createLogger({
  format: format.combine(
    format.splat(),
    format.simple()
  ),
  transports: [new transports.File({ filename: 'combined.log' })]
});


const initNews = (app, Article) => {

  app.use(function timeLog(req, res, next) {
        logger.log('info', `Time: ${Date.now()} Request: ${req.method} ${req.baseUrl}`);
        console.log('Time: ', Date.now());
        next();
      });
      

      router.get('/', passport.authenticationMiddleware(), getAll);

      function getAll() {
        Article.find().exec((err, arcticles)=>{
          if (err) throw err;
            res.send(arcticles);
        });
      }
      
      router.get('/news/:id', (req,res,next) => {
        Article.find({_id:req.params.id}).exec((err,arcticles)=>{
          if (err) throw err;
          res.send(arcticles);
      });
    });
      
      router.post('/news/', (req, res, next)=> {
        if (!req.body.title || !req.body.content || !req.body.author) {
          return next(new Error('Invalid data'));
        }
      
        let article = new Article({
          _id: new mongoose.Types.ObjectId(),
          title: req.body.title,
          content: req.body.content,
          author: req.body.author
        });
        article.save(err => {
          if (err) throw err;
          res.send(article);
        });
      });
      
      router.put('/news/:id', (req, res, next)=> {
        if (!req.body.title || !req.body.content || !req.body.author) {
          return next(new Error('Invalid data'));
        }      
        let data = {title:req.body.title,content: req.body.content, author:req.body.author};
        Article.findByIdAndUpdate(req.params.id, data)
        .exec((err,arcticles)=>{
          if (err) throw err;
          Article.find({_id:req.params.id}).exec((err,arcticles)=>{
            if (err) throw err;
            res.send(arcticles);
          })      
        });
      });
      
      router.delete('/news/:id', (req, res, next)=> {
        Article.findByIdAndDelete(req.params.id);
          res.send("Deleted"); 
      });

      app.use('/news', router);
  }
  
  module.exports = initNews