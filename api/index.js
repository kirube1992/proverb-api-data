// 1. Import the 'path' module to help with file paths
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();

// 2. Create the correct path to db.json in the parent directory
const router = jsonServer.router(path.join(__dirname, '../db.json'));

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;
