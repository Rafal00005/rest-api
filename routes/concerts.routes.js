const express = require('express');
const router = express.Router();
const concertsController = require('../controllers/concerts.controller');

// get all concerts
router.get('/concerts', concertsController.getAll);

// get random concert
router.get('/concerts/random', concertsController.getRandom);

// get concert by id
router.get('/concerts/:id', concertsController.getById);

// add new concert
router.post('/concerts', concertsController.post);

// update concert
router.put('/concerts/:id', concertsController.put);

// delete concert
router.delete('/concerts/:id', concertsController.delete);

module.exports = router;
