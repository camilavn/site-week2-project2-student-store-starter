const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const db = require('../data/db.json');


getProd = () => {
    return db.products;
    }

getProdID = (id) => {
    return db.products.find((p) => p.id == id);
    }

module.exports = {
    getProd,
    getProdID
};
