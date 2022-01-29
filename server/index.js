import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';

const app = express();

// middlewares
dotenv.config();
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.get('/', (req, res) => {
  res.json('yes');
});

mongoose.connect(process.env.MONGO_URL, () => {
  console.log('Connection establish with MongoDB.');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
