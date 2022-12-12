const Pokemon = require('../models/pokemon.model.js')

const save = async (req, res, next) => {  
    try {
        const data = req.body
        const newPokemon = new Pokemon(data)
        const savedPokemon = await newPokemon.save()
        if(!savedPokemon) {
            throw new Error('Pokémon could not be saved')
        }
        res.status(201).json({
            message: 'New pokémon created'
        })
        
    } catch(err) {
        next(err)
    }
}

const getAll = async (req, res, next) => {
    try {
        const pokemons = await Pokemon.find()
        res.status(200).json(pokemons)
    } catch(err) {
        next(err)
    }
}

const getById = async (req, res, next) => {
    try {
        const id = req.params.id
        const pokemon = await Pokemon.findById(id)
        if(!pokemon) {
            throw new Error(`Pokémon with id ${id} not found`)
        }
        res.status(200).json(pokemon)
    } catch(err) {
        next(err)
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.id
        const data = req.body

        const pokemon = await Pokemon.findById(id)
        if(!pokemon) {
            throw new Error(`Pokémon with id ${id} not found`)
        }

        const newPokemon = await Pokemon.findByIdAndUpdate(id, data, {new: true})
        res.status(200).json(newPokemon)
    } catch(err) {
        next(err)
    }
}

const remove = async (req, res, next) => {
    try {
        const id = req.params.id
        const pokemon = await Pokemon.findById(id)
        if(!pokemon) {
            throw new Error(`Pokémon with id ${id} not found`)
        }
        await Pokemon.findByIdAndDelete(id)
        res.status(200).json({message: `Pokémon with id ${id} has deleted`})
    } catch(err) {
        next(err)
    }
}

module.exports = {
    save,
    getAll,
    getById,
    update,
    remove
}