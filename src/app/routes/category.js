const express = require('express');

const routes = express.Router();

const CategoryController = require('../controllers/CategoryController');
const { validateCategory } = require('../middlewares/validator/CategoryValidator');

const { authValidator } = require('../middlewares/Auth');

routes.get('/category', CategoryController.index);
routes.post('/category', authValidator, validateCategory, CategoryController.create);
routes.get('/category/:id', authValidator, CategoryController.read);
routes.put('/category/:id', authValidator, validateCategory, CategoryController.update);
routes.delete('/category/:id', authValidator, CategoryController.delete);

module.exports = routes;
