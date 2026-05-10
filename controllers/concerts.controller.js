const Concert = require('../models/concert.model');

exports.getAll = async (req, res) => {
	const concerts = await Concert.find();
	res.json(concerts);
};

exports.getRandom = async (req, res) => {
	const count = await Concert.countDocuments();
	const randomIndex = Math.floor(Math.random() * count);
	const concert = await Concert.findOne().skip(randomIndex);
	res.json(concert);
};

exports.getById = async (req, res) => {
	const id = req.params.id;
	const concert = await Concert.findById(id);
	res.json(concert);
};

exports.post = async (req, res) => {
	const { performer, genre, price, day, image } = req.body;
	const newConcert = new Concert({ performer, genre, price, day, image });
	await newConcert.save();
	res.json({ message: 'OK' });
};

exports.put = async (req, res) => {
	const id = req.params.id;
	const { performer, genre, price, day, image } = req.body;
	await Concert.findByIdAndUpdate(id, { performer, genre, price, day, image });
	res.json({ message: 'OK' });
};

exports.delete = async (req, res) => {
	const id = req.params.id;
	await Concert.findByIdAndDelete(id);
	res.json({ message: 'OK' });
};
