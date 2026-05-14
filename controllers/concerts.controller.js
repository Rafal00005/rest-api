const Concert = require('../models/concert.model');

exports.getAll = async (req, res) => {
	try {
		const concerts = await Concert.find();
		res.json(concerts);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

exports.getRandom = async (req, res) => {
	try {
		const count = await Concert.countDocuments();
		const randomIndex = Math.floor(Math.random() * count);
		const concert = await Concert.findOne().skip(randomIndex);
		res.json(concert);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

exports.getById = async (req, res) => {
	try {
		const id = req.params.id;
		const concert = await Concert.findById(id);
		if (!concert) return res.status(404).json({ message: 'Not found' });
		res.json(concert);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

exports.post = async (req, res) => {
	try {
		const { performer, genre, price, day, image } = req.body;
		if (!performer || !genre || !price || !day || !image)
			return res.status(400).json({ message: 'All fields are required' });
		const newConcert = new Concert({ performer, genre, price, day, image });
		await newConcert.save();
		res.status(201).json({ message: 'OK' });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

exports.put = async (req, res) => {
	try {
		const id = req.params.id;
		const { performer, genre, price, day, image } = req.body;
		if (!performer || !genre || !price || !day || !image)
			return res.status(400).json({ message: 'All fields are required' });
		await Concert.findByIdAndUpdate(id, {
			performer,
			genre,
			price,
			day,
			image,
		});
		res.json({ message: 'OK' });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

exports.delete = async (req, res) => {
	try {
		const id = req.params.id;
		await Concert.findByIdAndDelete(id);
		res.json({ message: 'OK' });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};
