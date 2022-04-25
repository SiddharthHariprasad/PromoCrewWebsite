import express from 'express';
import { getTickets, postTicket, updateTicket, deleteTicket } from '../controllers/tickets.js';
import auth from '../middleware/auth.js'; 

const router = express.Router();

router.get('/', getTickets);
router.post('/', auth, postTicket);
router.patch('/:id', auth, updateTicket);
router.delete('/:id', auth, deleteTicket);

export default router;