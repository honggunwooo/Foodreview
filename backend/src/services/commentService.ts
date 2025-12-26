import { CommentModel } from '../models/commentModel';

export const CommentService = {
    getComments(reviewId: number) {
        return CommentModel.getByReviewId(reviewId);
    },

    createComment(
        reviewId: number,
        content: string,
        author: string
    ) {
        return CommentModel.create(reviewId, content, author);
    },

    deleteComment(commentId: number) {
        return CommentModel.delete(commentId);
    },
};