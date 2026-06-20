const express = require('express');

const hotelRouter = require('./routes/hotel.router');
const app = express();

app.use(express.json());
const PORT = 3500;;


app.get('/', (req, res) => {
    res.send('Welcome to the Travel App API!');
});

app.use("/api/hotels", hotelRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});