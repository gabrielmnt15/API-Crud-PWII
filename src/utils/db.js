const mongoose = require('mongoose')
const mongodbUrl = 'mongodb://127.0.0.1:27017/OAT'

mongoose.connect(mongodbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const db = mongoose.connection

db.on('error', (err) => console.error(`Error: ${err}`))
db.on('connected', (err, res) => console.log('Connected to database'))