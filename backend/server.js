const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const http = require('http');
const mongoose = require('mongoose');
const gameLogic = require('./game-logic');
const socketio = require('socket.io')


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const server = http.createServer(app);
const io = socketio(server);
app.use(cors());

app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established sucessfully");

});
const gamersRouter = require('./routes/gamers');
app.use(bodyParser.json());

app.use('/gamers', gamersRouter);


io.on('connection', client => {
    gameLogic.initializeGame(io, client)
})
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
app.get('/roller', function (req, res) {
    res.sendFile('./webgl/index.html');
});