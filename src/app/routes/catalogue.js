const express = require('express');

const routes = express.Router();
const CatalogueController = require('../controllers/CatalogueController');

routes.get('/catalogue', CatalogueController.index);

module.exports = routes;
