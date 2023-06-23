const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const db = require('../data/db.json');


class Store {
  static getAllProducts() {
    return db.products;
  }

  static getProductById(id) {
    return db.products.find((p) => p.id === id);
  }
}

module.exports = Store;

