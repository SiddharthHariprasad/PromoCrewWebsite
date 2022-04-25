import express from 'express';
import { getHotels, postHotel, updateHotel, deleteHotel } from '../controllers/hotels.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getHotels);
router.post('/', auth, postHotel);
router.patch('/:id', auth, updateHotel);
router.delete('/:id', auth, deleteHotel);

export default router;