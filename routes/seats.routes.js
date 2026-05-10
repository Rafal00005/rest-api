const express = require('express');
const router = express.Router();
const seatsController = require('../controllers/seats.controller');

// get all seats
router.get('/seats', seatsController.getAll);

// get random seat
router.get('/seats/random', seatsController.getRandom);

// get seat by id
router.get('/seats/:id', seatsController.getById);

// add new seat
router.post('/seats', seatsController.post);

// update seat
router.put('/seats/:id', seatsController.put);

// delete seat
router.delete('/seats/:id', seatsController.delete);

module.exports = router;
