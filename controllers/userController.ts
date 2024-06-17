import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import User from '../models/UserModel';
import { NotFoundError } from '../errors/customErrors';

export const getCurrentUser = async (req: Request, res: Response) => {
  const user = await User.findOne({ _id: req.currentUser!.userId });
  if (!user) {
    throw new NotFoundError('User Not Found');
  }
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const updateUser = async (req: Request, res: Response) => {
  const newUser = { ...req.body };

  delete newUser.password;

  await User.findByIdAndUpdate(req.currentUser!.userId, newUser);

  res.status(StatusCodes.OK).json({ msg: 'update user' });
};
