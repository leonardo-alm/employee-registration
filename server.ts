import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

// routers
import employeeRouter from './routes/employeeRouter';
import authRouter from './routes/authRouter';
import userRouter from './routes/userRouter';


// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware';
import { authenticateUser } from './middleware/authMiddleware';

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cookieParser());
app.use(express.json());

app.use('/api/v1/employees', authenticateUser, employeeRouter);
app.use('/api/v1/users', authenticateUser, userRouter);
app.use('/api/v1/auth', authRouter);

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
