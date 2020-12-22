const dotenv = require('dotenv');

dotenv.config();

const { env } = process;

module.exports = {
  development: {
    username: env.DEV_DB_USERNAME,
    password: env.DEV_DB_PASSWORD,
    database: env.DEV_DB_NAME,
    host: env.DEV_DB_URL,
    dialect: env.DEV_DB_DIALECT,
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    ssl: true,
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: 'database_test.sqlite',
    dialect: 'sqlite',
    logging: false,
  },
  production: {
    username: env.PROD_DB_USERNAME,
    password: env.PROD_DB_PASSWORD,
    database: env.PROD_DB_NAME,
    host: env.PROD_DB_URL,
    dialect: env.PROD_DB_DIALECT,
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    ssl: true,
  },
};
