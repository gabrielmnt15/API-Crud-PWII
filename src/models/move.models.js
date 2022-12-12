const mongoose = require('mongoose')

const moveSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Category: {
        type: String,
        required: true
    },
    Type: {
        type: String,
        required: true
    },
    Power: {
        type: Number,
        required: false
    },
    Accuracy: {
        type: Number,
        required: false
    },
    PP: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Move', moveSchema)