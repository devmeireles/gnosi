/* eslint-disable no-console */
const dotenv = require('dotenv');

dotenv.config();

const environment = process.env.NODE_ENV;
const port = process.env.PORT;

const app = require('./app.js');

app.listen(port, () => {
  if (environment === 'development') {
    console.log(`App listening at http://localhost:${port}`);
  }
});
