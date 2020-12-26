const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

const user = require('./app/routes/user');
const auth = require('./app/routes/auth');
const catalogue = require('./app/routes/catalogue');
const category = require('./app/routes/category');
const season = require('./app/routes/season');
const episode = require('./app/routes/episode');
const language = require('./app/routes/language');

app.use(user);
app.use(auth);
app.use(catalogue);
app.use(category);
app.use(season);
app.use(episode);
app.use(language);

app.get('*', (req, res) => {
  res.status(404).send({
    success: false,
  });
});

module.exports = app;
