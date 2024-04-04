const mongoose = require('mongoose')

//creating schema for submissions aka 'subs'
const SubSchema = new mongoose.Schema({
    dicho: {
        type: String,
        required: true,
    },
    meaning: {
        type: String,
        required: true,
    },
    example: {
        type: String,
        required: true,
    },
    variations: {
        type: String,
        required: false
    },
    comments: {
        type: String,
        required: false,
    },
})

module.exports = mongoose.model('Sub', SubSchema)
