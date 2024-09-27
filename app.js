require('dotenv').config();
const express = require('express');
const routesV1 = require('./src/routes.v1');
const { run } = require('./src/db/mongodb');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

run().catch(console.dir);

global.__basedir = __dirname;

app.use(express.json())

app.get('/', async (req, res) => {
    res.send('Welcome to Contacts!')
});

routesV1(app, '/api');

app.listen(port, () => {
    console.log(`App is listening on port ${port}!`);
});