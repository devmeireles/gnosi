const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

const catalogue = require('./app/routes/catalogue');
const categories = require('./app/routes/category');

app.use(catalogue);
app.use(categories);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get('*', (req, res) => {
  res.status(404).send(
    {
      success: false,
    },
  );
});

module.exports = app;
