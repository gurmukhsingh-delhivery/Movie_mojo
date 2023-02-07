import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import * as dotEnv from "dotenv";
dotEnv.config();

// Define the schema for the user model
interface User {
  email: string;
  password: string;
}

// Hash the password before saving to the database
const hashPassword = async (password: string) => {
  const saltRounds = 10;
  password = await bcrypt.hash(password, saltRounds);

  return password;
};

// Validate the password when logging in
const validatePassword = async (inputPassword: string, storedHash: string) => {
  console.log(inputPassword, storedHash);
  return await bcrypt.compare(inputPassword,storedHash);
};

// Generate a JSON Web Token for the user
const generateToken = (user: User) => {
  const secret = process.env.JWT_SECRET_KEY ||   'secretKey';

//   console.log("secret key is  ", secret);
  const options = { expiresIn: '1d' };
  return jwt.sign({ email: user.email}, secret, options);
};

// Verify the JSON Web Token when accessing protected routes
const verifyToken = (token: string) => {
  const secret = process.env.JWT_SECRET_KEY ||   'secretKey';
  return jwt.verify(token, secret) as { email: string };
};

export { hashPassword, validatePassword, generateToken, verifyToken };




