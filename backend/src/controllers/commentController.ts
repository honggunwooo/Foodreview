import { Request, Response, NextFunction } from 'express';
import { CommentService } from '../services/commentService';

export const getComments = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const reviewId = Number(req.query.reviewId);

        if (!reviewId || isNaN(reviewId)) {
            return res.status(400).json({
                message: 'reviewId query parameter is required',
            });
        }

        const comments = await CommentService.getComments(reviewId);
        res.json(comments);
    } catch (err) {
        next(err);
    }
};

export const createComment = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { reviewId, content } = req.body;
        const comment = await CommentService.createComment(reviewId, content);
        res.status(201).json(comment);
    } catch (err) {
        next(err);
    }
};