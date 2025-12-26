import { Request, Response } from 'express';
import { CommentService } from '../services/commentService';

export const getComments = async (req: Request, res: Response) => {
    const reviewId = Number(req.params.reviewId);

    const comments = await CommentService.getComments(reviewId);
    res.status(200).json(comments);
};

export const createComment = async (req: Request, res: Response) => {
    const reviewId = Number(req.params.reviewId);
    const { content, author } = req.body;

    const comment = await CommentService.createComment(
        reviewId,
        content,
        author
    );

    res.status(201).json(comment);
};

export const deleteComment = async (req: Request, res: Response) => {
    const commentId = Number(req.params.commentId);

    await CommentService.deleteComment(commentId);
    res.status(204).send();
};