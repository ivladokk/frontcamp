const express = require('express');
const router = express.Router();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json');
const db = low(adapter);
const lodashId = require('lodash-id');
const { createLogger, format, transports } = require('winston');
const logger = createLogger({
  format: format.combine(
    format.splat(),
    format.simple()
  ),
  transports: [new transports.File({ filename: 'combined.log' })]
});

db._.mixin(lodashId);

router.use(function timeLog(req, res, next) {
  logger.log('info', `Time: ${Date.now()} Request: ${req.method} ${req.baseUrl}`);
  console.log('Time: ', Date.now());
  next();
});

router.get('/', (req, res, next) =>{
  res.send(db.get('news').value());
});

router.get('/:id', (req,res,next) =>{
  let entry = db.get('news').getById(req.params.id).value();
  if (!entry) {
    let error = new Error('No entry');
    return next(error) 
  }
  res.send(entry);
});

router.post('/', (req, res, next)=> {
  if (!req.body.title || !req.body.content || !req.body.author) {
    return next(new Error('Invalid data'));
  }
  let model = {title: req.body.title, content: req.body.content, author:req.body.author};
  let entry = db.get('news').insert(model).write();
  res.send(db.get('news').getById(entry.id).value());
});

router.put('/:id', (req, res, next)=> {
  let entry = db.get('news').getById(req.params.id).value();
  if (!entry) {
    let error = new Error('No entry');
    return next(error) 
  }
  if (!req.body.title || !req.body.content || !req.body.author) {
    return next(new Error('Invalid data'));
  }
  db.get('news').find({id:req.params.id}).assign({title:req.body.title,content: req.body.content, author:req.body.author}).write();
  res.send('Update');
});

router.delete('/:id', (req, res, next)=> {
  let entry = db.get('news').getById(req.params.id).value();
  if (!entry) {
    let error = new Error('No entry');
    return next(error) 
  }
  db.get('news').remove({id:req.params.id}).write();
  res.send('Delete');
});

module.exports = router;
