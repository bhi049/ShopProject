import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();

app.use(express.json()); // allows us to parse JSON data from the request body

app.use("/api/products", productRoutes); // all routes starting with /api/products will be handled by productRoutes

app.listen(5001, () => {
  connectDB();
  console.log('Server is running at http://localhost:5001');
});
