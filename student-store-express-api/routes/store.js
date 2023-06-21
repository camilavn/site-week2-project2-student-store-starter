//create an endpoint for all products and an endpoint for individual products

const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const db = require('../data/db.json');

router.get('/', (req, res) => {
    