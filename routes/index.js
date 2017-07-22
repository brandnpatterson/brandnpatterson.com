const express = require('express');
const router = express.Router();

const { icons } = require('../data/icons.json');
const { products } = require('../data/products.json');

router.get('/', (req, res) => {
  res.render('index', {
    icons: icons,
    products: products
  });
});

module.exports = router;
