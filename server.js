const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// import routes
const testimonialsRoutes = require('./routes/testimonials.routes');
const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

// use routes
app.use('/api', testimonialsRoutes);
app.use('/api', concertsRoutes);
app.use('/api', seatsRoutes);

// 404
app.use((req, res) => {
	res.status(404).json({ message: 'Not found...' });
});

app.listen(8000, () => {
	console.log('Server is running on port: 8000');
});
