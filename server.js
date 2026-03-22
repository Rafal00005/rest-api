const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const testimonialsRoutes = require('./routes/testimonials.routes');
const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

app.use('/api', testimonialsRoutes);
app.use('/api', concertsRoutes);
app.use('/api', seatsRoutes);

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.get('/{*path}', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.use((req, res) => {
	res.status(404).json({ message: 'Not found...' });
});

app.listen(process.env.PORT || 8000, () => {
	console.log('Server is running on port: 8000');
});
