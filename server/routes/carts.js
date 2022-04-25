import express from 'express';
import { getCarts, postCart, updateCart, deleteCart } from '../controllers/carts.js';
import auth from '../middleware/auth.js'

const router = express.Router();

router.get('/', auth, getCarts);
router.post('/', auth, postCart);
router.patch('/:id', auth, updateCart);
router.delete('/:id', auth, deleteCart);

export default router;