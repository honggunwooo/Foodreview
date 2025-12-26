import { ReviewModel } from '../models/reviewModel';

export const ReviewService = {
    getReviews() {
        return ReviewModel.getAll();
    },

    createReview(
        title: string,
        content: string,
        rating: number,
        author: string,
        imageUrl?: string
    ) {
        return ReviewModel.create(title, content, rating, author, imageUrl);
    },
};