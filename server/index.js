import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';

import userRouter from './routes/users.js';
import authRouter from './routes/auth.js';

const app = express();

// middlewares
dotenv.config();
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

// routes
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log('Connection established with MongoDB.');

  app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
  });
});
