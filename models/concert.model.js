const mongoose = require('mongoose');

const concertSchema = new mongoose.Schema({
	performer: String,
	genre: String,
	price: Number,
	day: Number,
	image: String,
});

const Concert = mongoose.model('Concert', concertSchema);

module.exports = Concert;
