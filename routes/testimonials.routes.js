const express = require('express');
const router = express.Router();
const db = require('../db');

// get all testimonials
router.get('/testimonials', (req, res) => {
	res.json(db.testimonials);
});

// get random testimonial
router.get('/testimonials/random', (req, res) => {
	const randomIndex = Math.floor(Math.random() * db.testimonials.length);
	res.json(db.testimonials[randomIndex]);
});

// get testimonial by id
router.get('/testimonials/:id', (req, res) => {
	const id = req.params.id;
	const testimonial = db.testimonials.find((item) => item.id == id);
	res.json(testimonial);
});

// add new testimonial
router.post('/testimonials', (req, res) => {
	const { author, text } = req.body;
	const newTestimonial = { id: db.testimonials.length + 1, author, text };
	db.testimonials.push(newTestimonial);
	res.json({ message: 'OK' });
});

// update testimonial
router.put('/testimonials/:id', (req, res) => {
	const id = req.params.id;
	const { author, text } = req.body;
	const testimonial = db.testimonials.find((item) => item.id == id);
	testimonial.author = author;
	testimonial.text = text;
	res.json({ message: 'OK' });
});

// delete testimonial
router.delete('/testimonials/:id', (req, res) => {
	const id = req.params.id;
	const index = db.testimonials.findIndex((item) => item.id == id);
	db.testimonials.splice(index, 1);
	res.json({ message: 'OK' });
});

module.exports = router;
