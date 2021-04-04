const express = require('express');
const helmet = require('helmet');
const router = require('./recipes-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/recipes', router);

server.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to Recipes API"
    });
});

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
});

module.exports = server;