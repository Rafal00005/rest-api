const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
	author: String,
	text: String,
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial;
