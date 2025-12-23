// src/models/commentModel.ts
import { pool } from '../config/database';

export const CommentModel = {
    findByReviewId: async (reviewId: number) => {
        const { rows } = await pool.query(
        `
        SELECT *
        FROM comments
        WHERE review_id = $1
        ORDER BY created_at ASC
        `,
        [reviewId]
        );
        return rows;
    },

    create: async (reviewId: number, content: string) => {
        const { rows } = await pool.query(
        `
        INSERT INTO comments (review_id, content)
        VALUES ($1, $2)
        RETURNING *
        `,
        [reviewId, content]
        );
        return rows[0];
    },
};