const passport = require('passport');

const initNewsRoutes = (app, Article) => {
    app.get('/news', passport.authenticationMiddleware, (req, res) => {
        if (!req.loggedIn) {
            res.sendStatus(401);
        }
        Article.find().exec((err, arcticles)=>{
            if (err) throw err;
              res.send(arcticles);
          });
    });

   

   /* function getAll() {
      Article.find().exec((err, arcticles)=>{
        if (err) throw err;
          res.send(arcticles);
      });
    }
    
    app.get('/news/:id', (req,res,next) => {
      Article.find({_id:req.params.id}).exec((err,arcticles)=>{
        if (err) throw err;
        res.send(arcticles);
    });
  });
    
  app.post('/news/', (req, res, next)=> {
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
    
    app.put('/news/:id', (req, res, next)=> {
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
    
    app.delete('/news/:id', (req, res, next)=> {
      Article.findByIdAndDelete(req.params.id);
        res.send("Deleted"); 
    });
*/
}

module.exports = initNewsRoutes;