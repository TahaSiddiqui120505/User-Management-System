import User from "../models/user.model.js";

// Create a new user
export const createUser = async (data) => {
  return await User.create(data);
};

// Get users with pagination and search
export const getUsers = async ({ page = 1, limit = 5, search = "" }) => {
  const currentPage = Number(page);
  const pageSize = Number(limit);
  const skip = (currentPage - 1) * pageSize;

  const query = search
    ? {
        $or: [
          { firstName: { $regex: search, $options: "i" } },
          { lastName: { $regex: search, $options: "i" } },
          { email: { $regex: search, $options: "i" } }
        ]
      }
    : {};

  const users = await User.find(query)
    .skip(skip)
    .limit(pageSize)
    .sort({ createdAt: -1 });

  const totalRecords = await User.countDocuments(query);

  return {
    users,
    pagination: {
      totalRecords,
      currentPage,
      totalPages: Math.ceil(totalRecords / pageSize),
      pageSize
    }
  };
};

// Get user by ID
export const getUserById = async (id) => {
  return await User.findById(id);
};

// Update user
export const updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  });
};

// Delete user
export const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};


// Get all users (for CSV export)
export const getAllUsers = async () => {
  return await User.find().sort({ createdAt: -1 });
};
