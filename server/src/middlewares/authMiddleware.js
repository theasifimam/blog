import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const secretKey = process.env.SECRET_KEY;

export const validateToken = (req, res, next) => {
  const token = req.headers.token; // Assuming the token is sent in the "token" header

  if (!token) {
    return res.status(401).json({ error: "Token not provided" });
  }

  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, secretKey);

    // Attach the decoded payload to the request object
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
