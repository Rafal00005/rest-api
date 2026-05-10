const Seat = require('../models/seat.model');

exports.getAll = async (req, res) => {
	const seats = await Seat.find();
	res.json(seats);
};

exports.getRandom = async (req, res) => {
	const count = await Seat.countDocuments();
	const randomIndex = Math.floor(Math.random() * count);
	const seat = await Seat.findOne().skip(randomIndex);
	res.json(seat);
};

exports.getById = async (req, res) => {
	const id = req.params.id;
	const seat = await Seat.findById(id);
	res.json(seat);
};

exports.post = async (req, res) => {
	const { day, seat, client, email } = req.body;
	const alreadyTaken = await Seat.findOne({ seat, day });
	if (alreadyTaken) {
		return res.status(409).json({ message: 'The slot is already taken...' });
	}
	const newSeat = new Seat({ day, seat, client, email });
	await newSeat.save();
	res.json({ message: 'OK' });
};

exports.put = async (req, res) => {
	const id = req.params.id;
	const { day, seat, client, email } = req.body;
	await Seat.findByIdAndUpdate(id, { day, seat, client, email });
	res.json({ message: 'OK' });
};

exports.delete = async (req, res) => {
	const id = req.params.id;
	await Seat.findByIdAndDelete(id);
	res.json({ message: 'OK' });
};
