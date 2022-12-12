const Move = require('../models/move.models')

const save = async (req, res, next) => {  
    try {
        const data = req.body
        const newMove = new Move(data)
        const savedMove = await newMove.save()
        if(!savedMove) {
            throw new Error('Move could not be saved')
        }
        res.status(201).json({
            message: 'New move created'
        })
        
    } catch(err) {
        next(err)
    }
}

const getAll = async (req, res, next) => {
    try {
        const moves = await Move.find()
        res.status(200).json(moves)
    } catch(err) {
        next(err)
    }
}

const getById = async (req, res, next) => {
    try {
        const id = req.params.id
        const move = await Move.findById(id)
        if(!move) {
            throw new Error(`Move with id ${id} not found`)
        }
        res.status(200).json(move)
    } catch(err) {
        next(err)
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.id
        const data = req.body

        const move = await Move.findById(id)
        if(!move) {
            throw new Error(`Move with id ${id} not found`)
        }

        const newMove = await Move.findByIdAndUpdate(id, data, {new: true})
        res.status(200).json(newMove)
    } catch(err) {
        next(err)
    }
}

const remove = async (req, res, next) => {
    try {
        const id = req.params.id
        const move = await Move.findById(id)
        if(!move) {
            throw new Error(`Move with id ${id} not found`)
        }
        await Move.findByIdAndDelete(id)
        res.status(200).json({message: `Move with id ${id} has deleted`})
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