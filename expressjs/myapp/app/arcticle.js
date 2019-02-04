const Article = (mongoose) => {

    let ArticleSchema = mongoose.Schema({
        title: { type: String, index: true },
        content: String,
        author: String,
        _id: mongoose.ObjectId
    });
    return mongoose.model('Article', ArticleSchema);   
}


module.exports = Article;
