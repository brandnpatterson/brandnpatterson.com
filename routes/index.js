const express = require('express');
const router = express.Router();

const { about } = require('../data/about.json');
const { icons } = require('../data/icons.json');
const { products } = require('../data/products.json');

router.get('/', (req, res) => {
  res.render('index', {
    about: about,
    icons: icons,
    products: products
  });
});

module.exports = router;
