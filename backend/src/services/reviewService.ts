import { ReviewModel } from '../models/reviewModel';

export const ReviewService = {
    getReviews: () => ReviewModel.findAll(),

    createReview: (
        title: string,
        content: string,
        rating: number,
        author: string
    ) =>
        ReviewModel.create(title, content, rating, author),
};