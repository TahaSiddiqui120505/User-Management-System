import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserListPage.css";

import { fetchUsers, exportUsersCSV, deleteUser } from "../../api/user.api";
import UserTable from "../../components/users/UserTable/UserTable";

const UserListPage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);

  const loadUsers = async () => {
    setLoading(true);
    const res = await fetchUsers({ page, limit: 5, search });
    setUsers(res.data.data.users);
    setPagination(res.data.data.pagination);
    setLoading(false);
  };

  useEffect(() => {
    loadUsers();
  }, [page]);

  const handleExport = async () => {
    const res = await exportUsersCSV();
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const a = document.createElement("a");
    a.href = url;
    a.download = "users.csv";
    a.click();
  };

  return (
    <div className="listing-page">
      {/* Top dark bar */}
      <div className="top-header">
        MERN stack developer practical task
      </div>

      {/* Action row */}
      <div className="action-row">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => { setPage(1); loadUsers(); }}>
            Search
          </button>
        </div>

        <div className="button-section">
          <button className="add-btn" onClick={() => navigate("/users/add")}>
            + Add User
          </button>
          <button className="csv-btn" onClick={handleExport}>
            Export To Csv
          </button>
        </div>
      </div>

      {/* Table */}
      <UserTable
        users={users}
        loading={loading}
        pagination={pagination}
        page={page}
        onPageChange={setPage}
        onView={(id) => navigate(`/users/view/${id}`)}
        onEdit={(id) => navigate(`/users/edit/${id}`)}
        onDelete={async (id) => {
          if (window.confirm("Delete this user?")) {
            await deleteUser(id);
            loadUsers();
          }
        }}
      />
    </div>
  );
};

export default UserListPage;
