const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
	day: Number,
	seat: Number,
	client: String,
	email: String,
});

const Seat = mongoose.model('Seat', seatSchema);

module.exports = Seat;
