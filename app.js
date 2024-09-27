require('dotenv').config();
const express = require('express');
const routesV1 = require('./src/routes.v1');
const cors = require('cors');
require('./src/db/mongodb/index')

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

global.__basedir = __dirname;

app.use(express.json())

app.get('/', async (req, res) => {
    res.send('Welcome to Contacts!')
});

routesV1(app, '/api');

app.listen(port, () => {
    console.log(`App is listening on port ${port}!`);
});