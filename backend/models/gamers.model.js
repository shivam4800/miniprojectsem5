const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const gamerSchema = new Schema({

    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String , required: true },
    dob: { type: Date, default: Date.now() },
    games: {
        game1: { type: Array },
        game2: { type: Array },
        game3: { type: Array },
    },
    snakegame: { type: Array },
    chess: { type: Array }, 
    tictactoe: {type: Array },
}, {
    timestamps: true,
});

const Gamer = mongoose.model('gamers', gamerSchema);

module.exports = Gamer;