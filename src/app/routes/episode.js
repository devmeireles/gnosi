const express = require('express');

const routes = express.Router();
const EpisodeController = require('../controllers/EpisodeController');
const { validateEpisode } = require('../middlewares/validator/EpisodeValidator');

routes.post('/episode', validateEpisode, EpisodeController.create);
routes.get('/episode/:id', EpisodeController.read);
routes.put('/episode/:id', validateEpisode, EpisodeController.update);
routes.delete('/episode/:id', EpisodeController.delete);

module.exports = routes;
