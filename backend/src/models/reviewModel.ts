import { pool } from '../config/database';

export const ReviewModel = {
    async getAll(limit: number, offset: number) {
        const result = await pool.query(
            `
        SELECT *
        FROM reviews
        ORDER BY created_at DESC
        LIMIT $1 OFFSET $2
        `,
            [limit, offset]
        );
        return result.rows;
    },

    async create(
        title: string,
        content: string,
        rating: number,
        author: string
    ) {
        const result = await pool.query(
            `
            INSERT INTO reviews (title, content, rating, author)
            VALUES ($1, $2, $3, $4)
            RETURNING *
            `,
            [title, content, rating, author]
        );
        return result.rows[0];
    },

    async deleteById(id: number) {
        const result = await pool.query(
            `
        DELETE FROM reviews
        WHERE id = $1
        RETURNING *
        `,
            [id]
        );
        return result.rows[0]; // 삭제된 데이터
    },
};