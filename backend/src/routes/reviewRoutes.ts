import { Router } from 'express';
import {
    getReviews,
    createReview,
    deleteReview,
} from '../controllers/reviewController';

const router = Router();

router.get('/', getReviews);
router.post('/', createReview);
router.delete('/:id', deleteReview);

export default router;