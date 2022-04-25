import express from 'express';
import { getCabs, postCab, updateCab, deleteCab } from '../controllers/cabs.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getCabs);
router.post('/', auth, postCab);
router.patch('/:id', auth, updateCab);
router.delete('/:id', auth, deleteCab);

export default router;