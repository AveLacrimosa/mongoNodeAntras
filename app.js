require('dotenv').config()
const connectDB = require('./cfg/db')
connectDB()

const express = require("express")
const app = express()
app.use(express.json())

const { createAuthor, getAuthor } = require('./controllers/authorController')
const { createBook, getBook } = require('./controllers/bookController')

app.get('/api/book', getBook)
app.post('/api/author', createAuthor)
app.get('/api/author', getAuthor);
app.post('/api/book', createBook)
app.delete('/api/book', createBook)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`)
})