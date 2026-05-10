const Testimonial = require('../models/testimonial.model');

exports.getAll = async (req, res) => {
	const testimonials = await Testimonial.find();
	res.json(testimonials);
};

exports.getRandom = async (req, res) => {
	const count = await Testimonial.countDocuments();
	const randomIndex = Math.floor(Math.random() * count);
	const testimonial = await Testimonial.findOne().skip(randomIndex);
	res.json(testimonial);
};

exports.getById = async (req, res) => {
	const id = req.params.id;
	const testimonial = await Testimonial.findById(id);
	res.json(testimonial);
};

exports.post = async (req, res) => {
	const { author, text } = req.body;
	const newTestimonial = new Testimonial({ author, text });
	await newTestimonial.save();
	res.json({ message: 'OK' });
};

exports.put = async (req, res) => {
	const id = req.params.id;
	const { author, text } = req.body;
	await Testimonial.findByIdAndUpdate(id, { author, text });
	res.json({ message: 'OK' });
};

exports.delete = async (req, res) => {
	const id = req.params.id;
	await Testimonial.findByIdAndDelete(id);
	res.json({ message: 'OK' });
};
