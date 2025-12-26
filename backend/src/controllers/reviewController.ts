import { Request, Response } from 'express';
import { ReviewService } from '../services/reviewService';

// 리뷰 목록 조회
export const getReviews = async (_req: Request, res: Response) => {
    const reviews = await ReviewService.getReviews();
    res.status(200).json(reviews);
};

// 리뷰 생성
export const createReview = async (req: Request, res: Response) => {
    const { title, content, rating, author, imageUrl } = req.body;

    const review = await ReviewService.createReview(
        title,
        content,
        Number(rating),
        author,
        imageUrl
    );

    res.status(201).json(review);
};