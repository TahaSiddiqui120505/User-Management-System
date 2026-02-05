import { Routes, Route, Navigate } from "react-router-dom";
import UserListPage from "../pages/UserListPage/UserListPage";
import UserFormPage from "../pages/UserFormPage/UserFormPage";
import UserViewPage from "../pages/UserViewPage/UserViewPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/users" />} />

      <Route path="/users" element={<UserListPage />} />
      <Route path="/users/add" element={<UserFormPage />} />
      <Route path="/users/edit/:id" element={<UserFormPage />} />
      <Route path="/users/view/:id" element={<UserViewPage />} />
    </Routes>
  );
};

export default AppRoutes;
