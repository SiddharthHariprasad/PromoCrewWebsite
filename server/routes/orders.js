import express from 'express';
import { getOrders, postOrder, updateOrder, deleteOrder } from '../controllers/orders.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getOrders);
router.post('/', auth, postOrder);
router.patch('/:id', auth, updateOrder);
router.delete('/:id', auth, deleteOrder);

export default router;