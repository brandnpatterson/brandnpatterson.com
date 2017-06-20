const express = require('express');
const routes = require('./routes/index');
const port = process.env.PORT || 8888;
const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use('/', routes);

app.listen(port, () => {
  console.log(`This app is running on http://localhost:${port}`);
});
