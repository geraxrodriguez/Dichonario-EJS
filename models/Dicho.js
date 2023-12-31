const mongoose = require('mongoose')

const DichoSchema = new mongoose.Schema({
    dicho: {
        type: String,
        required: true,
    },
    actual: {
        type: String,
        required: true,
    },
    literal: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Dicho', DichoSchema)
// {
//     "_id": {"$oid":"6577e7c6849d5fdde1e00d62"},
//     "dicho": "darle vuelo a la hilacha",
//     "actual": "to allow a desire to come true",
//     "literal": "give flight to the thread"
// }