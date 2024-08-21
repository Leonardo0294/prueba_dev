// backend/routes/progressRoutes.js
import express from 'express';
import { getProgressByUserId, updateProgress } from '../controllers/progressController.js';

const router = express.Router();

router.get('/:userId', getProgressByUserId);
router.put('/:userId', updateProgress);

export default router;
