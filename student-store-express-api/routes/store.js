//create an endpoint for all products and an endpoint for individual products

const express = require('express');
const router = express.Router();
const db = require('../data/db.json');

router.get('/products', (req, res) => {
  // Retrieve all products
  res.json(db.products);
});

router.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = db.products.find((p) => p.id == productId);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.json(product);
});

module.exports = router;

  
  
  
  
  
  