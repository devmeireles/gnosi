const express = require('express');

const routes = express.Router();
const CatalogueController = require('../controllers/CatalogueController');
const { validateCatalogue, validateCatalogueCategory } = require('../middlewares/validator/CatalogueValidator');

routes.get('/catalogue', CatalogueController.index);
routes.post('/catalogue/:id/language', CatalogueController.addLanguage);
routes.post('/catalogue/:id/category', validateCatalogueCategory, CatalogueController.addCategory);
routes.post('/catalogue', validateCatalogue, CatalogueController.create);
routes.get('/catalogue/:id', CatalogueController.read);
routes.put('/catalogue/:id', validateCatalogue, CatalogueController.update);
routes.delete('/catalogue/language/:id', CatalogueController.deleteLanguage);
routes.delete('/catalogue/category/:id', CatalogueController.deleteCategory);
routes.delete('/catalogue/:id', CatalogueController.delete);

module.exports = routes;
