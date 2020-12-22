const express = require('express');

const routes = express.Router();

const SeasonController = require('../controllers/seasonController');

// routes.get('/season', SeasonController.index);
routes.post('/season', SeasonController.create);
// routes.get('/season/:id', SeasonController.read);
// routes.put('/season/:id', SeasonController.update);
// routes.delete('/season/:id', SeasonController.delete);

module.exports = routes;
