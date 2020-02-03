const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('../configs/mongoose_connection');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setUpWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setUpWebSocket(server);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(process.env.PORT || 3333);