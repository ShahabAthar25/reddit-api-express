const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    datePosted: {
        type: Date,
        require: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Posts', memberSchema)