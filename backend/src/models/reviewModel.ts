import { pool } from '../config/database';

export const ReviewModel = {
    async getAll() {
        const result = await pool.query(
            'SELECT * FROM reviews ORDER BY created_at DESC'
        );
        return result.rows;
    },

    async create(
        title: string,
        content: string,
        rating: number,
        author: string,
        imageUrl?: string
    ) {
        const result = await pool.query(
        `
        INSERT INTO reviews (title, content, rating, author, imageUrl)
        VALUES ($1, $2, $3, $4)
        RETURNING *
        `,
            [title, content, rating, author, imageUrl ?? null]
        );
        return result.rows[0];
    },
};