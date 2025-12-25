import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes';
import reviewRoutes from './routes/reviewRoutes';

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

app.use('/api', routes);

export default app;