import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
});

// Get users
export const fetchUsers = (params) => {
  return API.get("/users", { params });
};

// Get user by ID
export const fetchUserById = (id) => {
  return API.get(`/users/${id}`);
};

// Create new user
export const createUser = (data) => {
  return API.post("/users", data);
};

// Update user
export const updateUser = (id, data) => {
  return API.put(`/users/${id}`, data);
};

// Delete user
export const deleteUser = (id) => {
  return API.delete(`/users/${id}`);
};

// Export users as CSV
export const exportUsersCSV = () => {
  return API.get("/users/export/csv", {
    responseType: "blob"
  });
};
