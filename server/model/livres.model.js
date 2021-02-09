 const mongoose = require('mongoose');

 var livreSchema = mongoose.Schema({
     title: String,
     affiche: String,
     Stock: Boolean,
     synopsis: String,
     date: String
 });

 var Livre = mongoose.model('Livre', livreSchema);
 module.exports = Livre;