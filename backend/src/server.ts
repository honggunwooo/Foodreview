import app from './app';
import { connectDB } from './config/database';

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
    console.log(` Server running at http://localhost:${PORT}`);
    console.log(` API base URL: http://localhost:${PORT}/api`);
});