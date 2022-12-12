const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const db = require('./src/utils/db')
const pokemonRouter = require('./src/routes/pokemons.route')
const moveRouter = require('./src/routes/moves.route')
const port = 3000;

app.use(bodyParser.json())

//Pokémon Routes
app.use('/api/v1/pokemons', pokemonRouter)


app.listen(port, () => {
    console.log(`Listening on the port ${port}`);    
})