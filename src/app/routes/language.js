const express = require('express');

const routes = express.Router();

const LanguageController = require('../controllers/LanguageController');
const { validateLanguage } = require('../middlewares/validator/LanguageValidator');
const { authValidator } = require('../middlewares/Auth');

routes.get('/language', LanguageController.index);
routes.post('/language', authValidator, validateLanguage, LanguageController.create);
routes.get('/language/:id', LanguageController.read);
routes.put('/language/:id', authValidator, LanguageController.update);
routes.delete('/language/:id', authValidator, LanguageController.delete);

module.exports = routes;
