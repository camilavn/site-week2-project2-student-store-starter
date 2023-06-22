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

app.get('/products', (req, res) => {
    res.status(200);
    res.send(db.products);
});

app.get('/products/:id', (req, res) => {    
    const productId = req.params.id;
    const product = db.products.find((p) => p.id === productId);
});

module.exports = app;
