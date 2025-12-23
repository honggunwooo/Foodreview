// src/routes/commentRoutes.ts
import { Router } from 'express';
import { getComments, createComment } from '../controllers/commentController';

const router = Router();

router.get('/', getComments);      // ✅ 추가
router.post('/', createComment);

export default router;