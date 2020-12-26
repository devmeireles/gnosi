const express = require('express');

const routes = express.Router();

const SeasonController = require('../controllers/SeasonController');
const { validateSeason } = require('../middlewares/validator/SeasonValidator');
const { authValidator } = require('../middlewares/Auth');

routes.post('/season', authValidator, validateSeason, SeasonController.create);
routes.get('/season/:id', authValidator, SeasonController.read);
routes.put('/season/:id', authValidator, SeasonController.update);
routes.delete('/season/:id', authValidator, SeasonController.delete);

module.exports = routes;
