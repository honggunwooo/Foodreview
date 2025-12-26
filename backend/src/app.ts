import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import reviewRoutes from './routes/reviewRoutes';
import commentRoutes from './routes/commentRoutes';

const app = express();

app.use(
    morgan('dev', {
        skip: (req) =>
            req.url.includes('.well-known') || req.url === '/favicon.ico',
    })
);

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/reviews', reviewRoutes);
app.use('/api/comments', commentRoutes);

export default app;