// src/services/commentService.ts
import { CommentModel } from '../models/commentModel';

export const CommentService = {
    getComments: (reviewId: number) =>
        CommentModel.findByReviewId(reviewId),

    createComment: (reviewId: number, content: string) =>
        CommentModel.create(reviewId, content),
};