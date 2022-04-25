import express from 'express';
import { getGuides, postGuide, updateGuide,deleteGuide } from '../controllers/guides.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getGuides);
router.post('/', auth, postGuide);
router.patch('/:id', auth, updateGuide);
router.delete('/:id', auth, deleteGuide);

export default router;