const mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
    UserName: { type: String, index: true },
    UserId: String,
    _id: mongoose.ObjectId
});

let User = mongoose.model('User', UserSchema);

module.exports = User;
