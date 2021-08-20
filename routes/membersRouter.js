const express = require('express')
const Post = require('../models/posts')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router