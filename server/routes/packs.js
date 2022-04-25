import express from 'express';
import { getPacks, postPack, updatePack, deletePack } from '../controllers/packs.js';
import auth from '../middleware/auth.js'; 

const router = express.Router();

router.get('/', getPacks);
router.post('/', auth, postPack);
router.patch('/:id', auth, updatePack);
router.delete('/:id', auth, deletePack);

export default router;