const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const path = require('path');
const db = require('./data/db.json');

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.status(200).json(db);
});

app.get('/products', (req, res) => {
  res.status(200).json(db.products);
});

app.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = db.products.find((p) => p.id === parseInt(productId));
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

module.exports = app;




