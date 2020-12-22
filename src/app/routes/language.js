const express = require('express');

const routes = express.Router();

const LanguageController = require('../controllers/LanguageController');
const { validateLanguage } = require('../middlewares/validator/LanguageValidator');

routes.get('/language', LanguageController.index);
routes.post('/language', validateLanguage, LanguageController.create);
routes.get('/language/:id', LanguageController.read);
routes.put('/language/:id', LanguageController.update);
routes.delete('/language/:id', LanguageController.delete);

module.exports = routes;
