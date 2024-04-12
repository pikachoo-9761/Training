const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    year: Number,
    isbn: String,
    pages: Number,
    language: String
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book; //default export
// exports.Book = Book; //non default export