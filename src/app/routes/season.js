const express = require('express');

const routes = express.Router();

const SeasonController = require('../controllers/seasonController');
const { validateSeason } = require('../middlewares/validator/SeasonValidator');

// routes.get('/season', SeasonController.index);
routes.post('/season', validateSeason, SeasonController.create);
routes.get('/season/:id', SeasonController.read);
routes.put('/season/:id', SeasonController.update);
routes.delete('/season/:id', SeasonController.delete);

module.exports = routes;
