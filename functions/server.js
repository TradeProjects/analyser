// functions/server.js

const express = require('express');
const server = require('../server/server.js');

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/.netlify/functions/server', server);

module.exports = app;
