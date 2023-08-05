import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();
const secretKey = process.env.SECRET_KEY;

// Login user
export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Compare the provided password with the hashed password stored in the database
    const isPasswordValid = bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Generate a JSON Web Token (JWT)
    const token = jwt.sign({ id: user._id }, secretKey, {
      expiresIn: "30d",
    });

    // Save the token in the user document
    user.token = token;
    await user.save();

    // Return the token to the client
    res.json({ token, user });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Logout user
export const logout = async (req, res) => {
  // Get the token from the request headers
  const token = req.headers.token;

  if (!token) {
    return res.status(401).json({ error: "Token not provided" });
  }

  try {
    // Verify the token
    const decodedToken = jwt.verify(token, secretKey);

    // Find the user in the database by the decoded token's user ID
    const user = await User.findById(decodedToken.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Clear the token field in the user document
    user.token = "";
    await user.save();

    res.json({ message: "Logged out successfully" });
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
