import { Router } from 'express';
import reviewRoutes from './reviewRoutes';
import commentRoutes from './commentRoutes';
import uploadRoutes from './uploadRoutes';

const router = Router();

router.use('/reviews', reviewRoutes);
router.use('/comments', commentRoutes);
router.use('/uploads', uploadRoutes);

export default router;
