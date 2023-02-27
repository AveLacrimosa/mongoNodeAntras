const Author = require('../models/Author')

const createAuthor = async (req, res) => {
    if (!req.body.name || !req.body.bio || !req.body.website) res.status(404).send("Not Found")

    const author = new Author({
        name: req.body.name,
        age: req.body.age,
        bio: req.body.bio,
    })

    const result = await author.save()
    res.status(200).send(result)
}

const getAuthor = async (req, res) => {
    const author = await Author
        .find()

    res.status(200).json(author)
}

module.exports = { createAuthor, getAuthor }
