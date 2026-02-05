import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  exportUsersToCSV
} from "../controller/userController.js";

const router = express.Router();

// Create user
router.post("/", createUser);

// Get users
router.get("/", getUsers);

// Export users to CSV
router.get("/export/csv", exportUsersToCSV);

// Get single user
router.get("/:id", getUserById);

// Update user
router.put("/:id", updateUser);

// Delete user
router.delete("/:id", deleteUser);

export default router;