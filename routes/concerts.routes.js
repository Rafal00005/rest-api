const express = require('express');
const router = express.Router();
const db = require('../db');

// get all concerts
router.get('/concerts', (req, res) => {
	res.json(db.concerts);
});

// get random concert
router.get('/concerts/random', (req, res) => {
	const randomIndex = Math.floor(Math.random() * db.concerts.length);
	res.json(db.concerts[randomIndex]);
});

// get concert by id
router.get('/concerts/:id', (req, res) => {
	const id = req.params.id;
	const concert = db.concerts.find((item) => item.id == id);
	res.json(concert);
});

// add new concert
router.post('/concerts', (req, res) => {
	const { performer, genre, price, day, image } = req.body;
	const newConcert = {
		id: db.concerts.length + 1,
		performer,
		genre,
		price,
		day,
		image,
	};
	db.concerts.push(newConcert);
	res.json({ message: 'OK' });
});

// update concert
router.put('/concerts/:id', (req, res) => {
	const id = req.params.id;
	const { performer, genre, price, day, image } = req.body;
	const concert = db.concerts.find((item) => item.id == id);
	concert.performer = performer;
	concert.genre = genre;
	concert.price = price;
	concert.day = day;
	concert.image = image;
	res.json({ message: 'OK' });
});

// delete concert
router.delete('/concerts/:id', (req, res) => {
	const id = req.params.id;
	const index = db.concerts.findIndex((item) => item.id == id);
	db.concerts.splice(index, 1);
	res.json({ message: 'OK' });
});

module.exports = router;
