const express = require('express');

const routes = express.Router();

const SeasonController = require('../controllers/SeasonController');
const { validateSeason } = require('../middlewares/validator/SeasonValidator');

routes.post('/season', validateSeason, SeasonController.create);
routes.get('/season/:id', SeasonController.read);
routes.put('/season/:id', SeasonController.update);
routes.delete('/season/:id', SeasonController.delete);

module.exports = routes;
