const express = require('express');
const routes = require('./routes/index');
const { products } = require('./data/products.json');
const { icons } = require('./data/icons.json');

const port = process.env.PORT || 8888;
const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    icons: icons,
    products: products
  });
});

app.listen(port, function () {
  console.log(`Our app is running on http://localhost:${port}`);
});
