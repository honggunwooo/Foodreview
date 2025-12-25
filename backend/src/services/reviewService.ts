import { ReviewModel } from '../models/reviewModel';

export const ReviewService = {
    async getReviews(page: number, limit: number) {
        const offset = (page - 1) * limit;
        return ReviewModel.getAll(limit, offset);
    },

    async createReview(
        title: string,
        content: string,
        rating: number,
        author: string
    ) {
        return ReviewModel.create(title, content, rating, author);
    },

    async deleteReview(id: number) {
        const deleted = await ReviewModel.deleteById(id);
        if (!deleted) {
            throw new Error('Review not found');
        }
        return deleted;
    },
};