const User = (mongoose)=>{
    let UserSchema = mongoose.Schema({
        UserName: { type: String, index: true },
        UserId: String,
        _id: mongoose.ObjectId
    });
    return mongoose.model('User', UserSchema);
}

module.exports = User;