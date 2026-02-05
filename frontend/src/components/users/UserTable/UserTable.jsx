import { useState } from "react";
import "./UserTable.css";

const UserTable = ({
  users,
  loading,
  pagination,
  page,
  onPageChange,
  onView,
  onEdit,
  onDelete
}) => {
  const [openMenu, setOpenMenu] = useState(null);

  if (loading) return <div className="table-card">Loading...</div>;
  if (!users.length) return <div className="table-card">No users found</div>;

  return (
    <div className="table-card">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Profile</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u, i) => (
            <tr key={u._id}>
              <td>{i + 1}</td>

              <td>
                <div className="avatar">
                  {u.firstName?.charAt(0)}
                </div>
              </td>

              <td>{u.firstName}</td>
              <td>{u.email}</td>
              <td>{u.gender}</td>

              <td>
                <select
                  className={`status-pill ${u.status.toLowerCase()}`}
                  value={u.status}
                  disabled
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </td>

              <td className="action-cell">
                <span
                  className="kebab"
                  onClick={() =>
                    setOpenMenu(openMenu === u._id ? null : u._id)
                  }
                >
                  ⋮
                </span>

                {openMenu === u._id && (
                  <div className="menu">
                    <div onClick={() => onView(u._id)}>View</div>
                    <div onClick={() => onEdit(u._id)}>Edit</div>
                    <div onClick={() => onDelete(u._id)}>Delete</div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: pagination.totalPages || 1 }).map((_, i) => (
          <button
            key={i}
            className={page === i + 1 ? "active" : ""}
            onClick={() => onPageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserTable;
