const Seat = require('../models/seat.model');

exports.getAll = async (req, res) => {
	try {
		const seats = await Seat.find();
		res.json(seats);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

exports.getRandom = async (req, res) => {
	try {
		const count = await Seat.countDocuments();
		const randomIndex = Math.floor(Math.random() * count);
		const seat = await Seat.findOne().skip(randomIndex);
		res.json(seat);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

exports.getById = async (req, res) => {
	try {
		const id = req.params.id;
		const seat = await Seat.findById(id);
		if (!seat) return res.status(404).json({ message: 'Not found' });
		res.json(seat);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

exports.post = async (req, res) => {
	try {
		const { day, seat, client, email } = req.body;
		if (!day || !seat || !client || !email)
			return res.status(400).json({ message: 'All fields are required' });
		const alreadyTaken = await Seat.findOne({ seat, day });
		if (alreadyTaken)
			return res.status(409).json({ message: 'The slot is already taken...' });
		const newSeat = new Seat({ day, seat, client, email });
		await newSeat.save();
		res.status(201).json({ message: 'OK' });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

exports.put = async (req, res) => {
	try {
		const id = req.params.id;
		const { day, seat, client, email } = req.body;
		if (!day || !seat || !client || !email)
			return res.status(400).json({ message: 'All fields are required' });
		await Seat.findByIdAndUpdate(id, { day, seat, client, email });
		res.json({ message: 'OK' });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

exports.delete = async (req, res) => {
	try {
		const id = req.params.id;
		await Seat.findByIdAndDelete(id);
		res.json({ message: 'OK' });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};
