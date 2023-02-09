const jwt = require('jsonwebtoken');
import { Request, Response,NextFunction } from 'express';
import * as dotEnv from "dotenv";
dotEnv.config();

// Middleware for verifying JWT token from cookie
const verifyToken = (req:Request, res:Response, next:NextFunction) => {
  // Get the JWT token from the cookie

  console.log("here in the middleware")
  console.log(req.cookies)
  const token = req.cookies.token;
  if (!token) {
    return res.status(200).json({ message: 'Not authorized' });
  }

  // Verify the JWT token
  try {

    const secret = process.env.JWT_SECRET_KEY ||   'secretKey';
    const decoded = jwt.verify(token, secret);

    console.log("decoded is   " ,decoded);
    // req.email = decoded.email;
    next();
  } catch (err) {
    return res.status(200).json({ message: 'Not authorized' });
  }
};


export {verifyToken};
