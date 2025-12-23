import { pool } from '../config/database';

export const ReviewModel = {
    findAll: async () => {
        const { rows } = await pool.query(
            `SELECT * FROM reviews ORDER BY created_at DESC`
        );
        return rows;
    },

    create: async (
        title: string,
        content: string,
        rating: number,
        author: string
    ) => {
        const { rows } = await pool.query(
        `
        INSERT INTO reviews (title, content, rating, author)
        VALUES ($1, $2, $3, $4)
        RETURNING *
        `,
        [title, content, rating, author]
        );
        return rows[0];
    },
};