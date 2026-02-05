import * as userService from "../services/user.service.js";
import { successResponse, errorResponse } from "../utils/apiResponse.js";
import { Parser } from "json2csv";

// Create a new user
export const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    successResponse(res, user, "User created successfully");
  } catch (error) {
    errorResponse(res, error.message);
  }
};

// Get users with pagination and search
export const getUsers = async (req, res) => {
  try {
    const result = await userService.getUsers(req.query);
    successResponse(res, result);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

// Get user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);

    if (!user) {
      return errorResponse(res, "User not found", 404);
    }

    successResponse(res, user);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

// Update user
export const updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);

    if (!user) {
      return errorResponse(res, "User not found", 404);
    }

    successResponse(res, user, "User updated successfully");
  } catch (error) {
    errorResponse(res, error.message);
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  try {
    const user = await userService.deleteUser(req.params.id);

    if (!user) {
      return errorResponse(res, "User not found", 404);
    }

    successResponse(res, null, "User deleted successfully");
  } catch (error) {
    errorResponse(res, error.message);
  }
};

// Export users to CSV
export const exportUsersToCSV = async (req, res) => {
  try {
    const users = await userService.getAllUsers();

    const fields = [
      "firstName",
      "lastName",
      "email",
      "mobile",
      "gender",
      "status"
    ];

    const parser = new Parser({ fields });
    const csv = parser.parse(users);

    res.header("Content-Type", "text/csv");
    res.attachment("users.csv");
    res.send(csv);
  } catch (error) {
    errorResponse(res, error.message);
  }
};
