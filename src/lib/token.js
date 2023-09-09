import jwt from 'jsonwebtoken';

export const ACCESS_TOKEN_EXPIRED = 60 * 60 * 24 * 7; // expired in 1 week

export const createAccessToken = ({ userId }) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRED,
  });
};
