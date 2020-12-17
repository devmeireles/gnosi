const express = require('express');

const routes = express.Router();

const CategoryController = require('../controllers/CategoryController');
const { validateCategory } = require('../middlewares/validator/CategoryValidator');

routes.get('/category', CategoryController.index);
routes.post('/category', validateCategory, CategoryController.create);
routes.get('/category/:id', CategoryController.read);
routes.put('/category/:id', validateCategory, CategoryController.update);
routes.delete('/category/:id', CategoryController.delete);

module.exports = routes;
