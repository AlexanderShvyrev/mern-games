const Game = require("../models/game.model");

module.exports = {
    index: (req,res) => {
        Game.find()
            .then(allGames => res.json(allGames))
            .catch(err => res.json(err))
    },
    create: (req,res) => {
        Game.create(req.body)
        .then(newGame => res.json(newGame))
        .catch(err => res.json(err))
    },
    show: (req,res) => {
        Game.findById({_id:req.params.id})
            .then(oneGame => res.json(oneGame))
            .catch(err => res.json(err))
    },
    update: (req,res) => {
        Game.findByIdAndUpdate({_id:req.params.id},req.body)
            .then(updateGame => res.json(updateGame))
            .catch(err => res.json(err))
    },
    destroy: (req,res) => {
        Game.findByIdAndDelete({_id:req.params.id})
            .then(removed => res.json(removed))
            .catch(err => res.json(err))
    }
}