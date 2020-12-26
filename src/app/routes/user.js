const express = require('express');

const routes = express.Router();

const UserController = require('../controllers/UserController');
const { validateUser } = require('../middlewares/validator/UserValidator');

routes.post('/user/register', validateUser, UserController.create);

module.exports = routes;
