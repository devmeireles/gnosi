const express = require('express');

const routes = express.Router();
const EpisodeController = require('../controllers/EpisodeController');
const { validateEpisode } = require('../middlewares/validator/EpisodeValidator');
const { authValidator } = require('../middlewares/Auth');

routes.post('/episode', authValidator, validateEpisode, EpisodeController.create);
routes.get('/episode/:id', authValidator, EpisodeController.read);
routes.put('/episode/:id', authValidator, validateEpisode, EpisodeController.update);
routes.delete('/episode/:id', authValidator, EpisodeController.delete);

module.exports = routes;
