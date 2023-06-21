const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const path = require('path');
const db = require('./data/db.json');


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200);
    res.send(db);
});

module.exports = app;
