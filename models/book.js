const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create schema
const BookSchema = new Schema({
 name: {
   type: String,
   required: true
 },
  date: {
    type: Date,
    default: Date.now
  }

});
module.exports = Book = mongoose.model('book', BookSchema);