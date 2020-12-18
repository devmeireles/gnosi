const express = require('express');

const routes = express.Router();
const CatalogueController = require('../controllers/CatalogueController');
const { validateCatalogue } = require('../middlewares/validator/CatalogueValidator');

routes.get('/catalogue', CatalogueController.index);
routes.post('/catalogue', validateCatalogue, CatalogueController.create);
routes.get('/catalogue/:id', CatalogueController.read);
routes.put('/catalogue/:id', validateCatalogue, CatalogueController.update);
routes.delete('/catalogue/:id', CatalogueController.delete);

module.exports = routes;
