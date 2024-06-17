import { NextFunction, Request, Response } from 'express';
import { UnauthenticatedError } from '../errors/customErrors';
import { verifyJWT } from '../utils/tokenUtils';

interface UserPayload {
  userId: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload,
      cookies?: {
        token: string
      }
    }
  }
}
export const authenticateUser = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError('authentication invalidddd');

  try {
    const { userId, email } = verifyJWT(token) as UserPayload
    req.currentUser = { userId, email };
    next();
  } catch (error) {
    throw new UnauthenticatedError('authentication invalid');
  }
};

