import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import cabRoutes from './routes/cabs.js';
import guideRoutes from './routes/guides.js';
import hotelRoutes from './routes/hotels.js';
import ticketRoutes from './routes/tickets.js';
import packageRoutes from './routes/packs.js';
import userRoutes from './routes/users.js';
import cartRoutes from './routes/carts.js';
import orderRoutes from './routes/orders.js';

dotenv.config();

let PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, console.log(`Server running on ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

// Init App
const app = express();

// Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ limit: "30mb", extended: true }));
// parse application/json
app.use(express.json({ limit: "30mb", extended: true }));

app.use(cors());

app.get('/', (req, res) => {
    res.send("Welcome to God's Own Tourism API");
});

// Routes
app.use('/cabs', cabRoutes);

app.use('/guides', guideRoutes);

app.use('/hotels', hotelRoutes);

app.use('/tickets', ticketRoutes);

app.use('/packs', packageRoutes);

app.use('/users', userRoutes);

app.use('/carts', cartRoutes);

app.use('/orders', orderRoutes);