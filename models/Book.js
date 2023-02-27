const mongoose = require('mongoose');

const Book = mongoose.model('Book', new mongoose.Schema({
    name: String,
    author: String,
    publishDate: String
}));

module.exports = Book;