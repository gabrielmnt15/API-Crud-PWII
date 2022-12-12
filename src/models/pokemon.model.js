const mongoose = require('mongoose')

const pokemonSchema = mongoose.Schema({
    Number: {
        type: Number,
        required: true,
    },
    Name: {
        type: String,
        required: true
    },
    MainType: {
        type: String,
        required: true
    },
    SecondType: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Pokemon', pokemonSchema)