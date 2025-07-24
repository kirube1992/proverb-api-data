// api/server.js
const jsonServer = require('json-server');
const server = jsonServer.create();

// Use the original db.json from the project's root directory
const router = jsonServer.router('db.json'); 

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// This makes it work with Vercel
module.exports = server;
