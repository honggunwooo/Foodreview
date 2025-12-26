import { pool } from '../config/database';

export const CommentModel = {
    async getByReviewId(reviewId: number) {
        const result = await pool.query(
            `
        SELECT *
        FROM comments
        WHERE review_id = $1
        ORDER BY created_at ASC
        `,
            [reviewId]
        );
        return result.rows;
    },

    async create(
        reviewId: number,
        content: string,
        author: string
    ) {
        const result = await pool.query(
        `
        INSERT INTO comments (review_id, content, author)
        VALUES ($1, $2, $3)
      RETURNING *
        `,
            [reviewId, content, author]
        );
        return result.rows[0];
    },

    async delete(commentId: number) {
        await pool.query(
            `DELETE FROM comments WHERE id = $1`,
            [commentId]
        );
    },
};