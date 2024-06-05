const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index');

const app = express();
const server = createServer(app);
const io = new Server(server, {
    connectionStateRecovery: {},
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT']
}));

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/', routes);

io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});


module.exports = server;
