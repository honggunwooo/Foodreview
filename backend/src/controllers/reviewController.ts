import { Request, Response, NextFunction } from 'express';
import { ReviewService } from '../services/reviewService';

export const getReviews = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;

        const reviews = await ReviewService.getReviews(page, limit);
        res.status(200).json(reviews);
    } catch (err) {
        next(err);
    }
};

export const createReview = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { title, content, rating, author } = req.body;

        const review = await ReviewService.createReview(
            title,
            content,
            rating,
            author
        );

        res.status(201).json(review);
    } catch (err) {
        next(err);
    }
};

export const deleteReview = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = Number(req.params.id);

        const deleted = await ReviewService.deleteReview(id);

        res.status(200).json({
            message: 'Review deleted',
            deleted,
        });
    } catch (err) {
        next(err);
    }
};