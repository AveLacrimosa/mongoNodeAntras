const Book = require('../models/Book')

const createBook = async (req, res) => {
    if (!req.body.title || !req.body.author || !req.body.publishDate) res.status(404).send("Not Found")

    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        publishDate: req.body.publishDate
    })

    const result = await book.save()
    res.status(200).send(result)
}

const getBook = async (req, res) => {
    const book = await Book
        .find()
        
    res.status(200).json(book)
}

// const deleteBook = async (req, res) => {
//     const book = await Book.findById(req.params.id)
//     if (!book) res.status(404).send("Not Found")
//     console.log("found")
    
//     res.status(200).json(book)
// }

module.exports = { createBook, getBook }