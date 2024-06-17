import jwt from 'jsonwebtoken';

export const createJWT = (payload: { userId: string, email: string}) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

export const verifyJWT = (token: string) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET!);
  return decoded;
};
