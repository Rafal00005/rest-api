const express = require('express');
const router = express.Router();
const testimonialsController = require('../controllers/testimonials.controller');

// get all testimonials
router.get('/testimonials', testimonialsController.getAll);

// get random testimonial
router.get('/testimonials/random', testimonialsController.getRandom);

// get testimonial by id
router.get('/testimonials/:id', testimonialsController.getById);

// add new testimonial
router.post('/testimonials', testimonialsController.post);

// update testimonial
router.put('/testimonials/:id', testimonialsController.put);

// delete testimonial
router.delete('/testimonials/:id', testimonialsController.delete);

module.exports = router;
