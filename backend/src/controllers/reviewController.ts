import { Request, Response, NextFunction } from 'express';
import { ReviewService } from '../services/reviewService';

export const getReviews = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const reviews = await ReviewService.getReviews();
        res.json(reviews);
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

        if (!title || !content || !rating || !author) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

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