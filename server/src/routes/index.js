import { Router } from "express";
import {
  createUser,
  deleteUserById,
  generateNewOTP,
  getUserById,
  getUsers,
  updateUserById,
  verifyOTP,
} from "../controllers/UserController.js";
import { validateToken } from "../middlewares/authMiddleware.js";
import { login, logout } from "../controllers/authController.js";

const router = Router();

// user routes
router.post("/users/create-user", createUser);
router.get("/users/generate-new-otp", generateNewOTP);
router.post("/users/verify-otp", verifyOTP);
router.get("/users/:username", validateToken, getUserById);
router.get("/users", validateToken, getUsers);
router.delete("users/:username", validateToken, deleteUserById);
router.post("/users/:username", validateToken, updateUserById);

// Auth routes
router.post("/login", login);
router.post("/logout", logout);

export default router;
