var mongoose = require('mongoose');

var cardSchema = new mongoose.Schema({

    id: String,
    username: String,
    repo: String,
    color: String,
    icon: Number

});
module.exports  = mongoose.model("githubcards", cardSchema);