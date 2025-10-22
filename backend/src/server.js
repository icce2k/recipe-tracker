import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { connectDB } from './config/db.js';
import recipesRoutes from './routes/recipesRoutes.js';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json()); // parses JSON bodies: req.body
app.use(rateLimiter);
app.use('/api/recipes', recipesRoutes); // mounts router on the path /api/recipes

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT);
  });
});