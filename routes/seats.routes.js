const express = require('express');
const router = express.Router();
const db = require('../db');

// get all seats
router.get('/seats', (req, res) => {
	res.json(db.seats);
});

// get random seat
router.get('/seats/random', (req, res) => {
	const randomIndex = Math.floor(Math.random() * db.seats.length);
	res.json(db.seats[randomIndex]);
});

// get seat by id
router.get('/seats/:id', (req, res) => {
	const id = req.params.id;
	const seat = db.seats.find((item) => item.id == id);
	res.json(seat);
});

// add new seat
router.post('/seats', (req, res) => {
	const { day, seat, client, email } = req.body;
	const newSeat = { id: db.seats.length + 1, day, seat, client, email };
	db.seats.push(newSeat);
	res.json({ message: 'OK' });
});

// update seat
router.put('/seats/:id', (req, res) => {
	const id = req.params.id;
	const { day, seat, client, email } = req.body;
	const seatItem = db.seats.find((item) => item.id == id);
	seatItem.day = day;
	seatItem.seat = seat;
	seatItem.client = client;
	seatItem.email = email;
	res.json({ message: 'OK' });
});

// delete seat
router.delete('/seats/:id', (req, res) => {
	const id = req.params.id;
	const index = db.seats.findIndex((item) => item.id == id);
	db.seats.splice(index, 1);
	res.json({ message: 'OK' });
});

module.exports = router;
