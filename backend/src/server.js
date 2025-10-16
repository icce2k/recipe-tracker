import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { connectDB } from './config/db.js';
import recipesRoutes from './routes/recipesRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// app.use(rateLimiter);
app.use('/api/recipes', recipesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT);
  });
});