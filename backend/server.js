import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();


app.get("api/products", (req, res) => {
  res.send('Server is running');
});

app.listen(5001, () => {
  console.log('Server is running at http://localhost:5001');
});
