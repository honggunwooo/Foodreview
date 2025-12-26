import { Router } from 'express';
import {
    getComments,
    createComment,
    deleteComment,
} from '../controllers/commentController';

const router = Router();

// 특정 리뷰의 댓글 목록
router.get('/:reviewId', getComments);

// 댓글 작성
router.post('/:reviewId', createComment);

// 댓글 삭제
router.delete('/:commentId', deleteComment);

export default router;