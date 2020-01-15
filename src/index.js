const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('../configs/mongoose_connection');
const routes = require('./routes');
const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(routes);

app.listen(port);