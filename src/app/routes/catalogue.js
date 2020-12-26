const express = require('express');

const routes = express.Router();
const CatalogueController = require('../controllers/CatalogueController');
const {
  validateCatalogue,
  validateCatalogueCategory,
  validateCatalogueObjective,
} = require('../middlewares/validator/CatalogueValidator');

const { authValidator } = require('../middlewares/Auth');

routes.get('/catalogue', CatalogueController.index);
routes.post('/catalogue/:id/language', authValidator, CatalogueController.addLanguage);
routes.post(
  '/catalogue/:id/objective',
  authValidator,
  validateCatalogueObjective,
  CatalogueController.addObjective
);
routes.post(
  '/catalogue/:id/category',
  authValidator,
  validateCatalogueCategory,
  CatalogueController.addCategory
);
routes.post('/catalogue', authValidator, validateCatalogue, CatalogueController.create);
routes.get('/catalogue/:id', CatalogueController.read);
routes.put('/catalogue/:id', authValidator, validateCatalogue, CatalogueController.update);
routes.delete('/catalogue/objective/:id', authValidator, CatalogueController.deleteObjective);
routes.delete('/catalogue/language/:id', authValidator, CatalogueController.deleteLanguage);
routes.delete('/catalogue/category/:id', authValidator, CatalogueController.deleteCategory);
routes.delete('/catalogue/:id', authValidator, CatalogueController.delete);

module.exports = routes;
