import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

export const connectDB = async () => {
    try {
        await pool.query('SELECT 1');
        console.log('PostgreSQL connected');
    } catch (err) {
        console.error('DB connection failed', err);
        process.exit(1);
    }
};