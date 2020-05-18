const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is required"],
    },
    genre:{
        type: String,
        required:[true,"Genre is required"]
    },
    _console:{
        type: String,
        required:[true,"Console Type is required"]
    },
    studio:{
        type:String,
        required:[true,"Studio is required"]
    }
},{timestamps:true})

const Game = mongoose.model("Game",GameSchema);

module.exports = Game;