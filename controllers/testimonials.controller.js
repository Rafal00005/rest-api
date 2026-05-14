const Testimonial = require('../models/testimonial.model');

exports.getAll = async (req, res) => {
	try {
		const testimonials = await Testimonial.find();
		res.json(testimonials);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

exports.getRandom = async (req, res) => {
	try {
		const count = await Testimonial.countDocuments();
		const randomIndex = Math.floor(Math.random() * count);
		const testimonial = await Testimonial.findOne().skip(randomIndex);
		res.json(testimonial);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

exports.getById = async (req, res) => {
	try {
		const id = req.params.id;
		const testimonial = await Testimonial.findById(id);
		if (!testimonial) return res.status(404).json({ message: 'Not found' });
		res.json(testimonial);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

exports.post = async (req, res) => {
	try {
		const { author, text } = req.body;
		if (!author || !text)
			return res.status(400).json({ message: 'Author and text are required' });
		const newTestimonial = new Testimonial({ author, text });
		await newTestimonial.save();
		res.status(201).json({ message: 'OK' });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

exports.put = async (req, res) => {
	try {
		const id = req.params.id;
		const { author, text } = req.body;
		if (!author || !text)
			return res.status(400).json({ message: 'Author and text are required' });
		await Testimonial.findByIdAndUpdate(id, { author, text });
		res.json({ message: 'OK' });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

exports.delete = async (req, res) => {
	try {
		const id = req.params.id;
		await Testimonial.findByIdAndDelete(id);
		res.json({ message: 'OK' });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};
