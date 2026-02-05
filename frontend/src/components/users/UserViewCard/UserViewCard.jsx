import "./UserViewCard.css";

const UserViewCard = ({ user, onBack, onEdit }) => {
  return (
    <div className="profile-card">
      <div className="profile-avatar">
        {user.firstName?.charAt(0)}
      </div>

      <h3 className="profile-name">
        {user.firstName} {user.lastName}
      </h3>

      <div className="profile-info">
        <div>
          <span>Email:</span>
          <span>{user.email}</span>
        </div>

        <div>
          <span>Mobile:</span>
          <span>{user.mobile}</span>
        </div>

        <div>
          <span>Gender:</span>
          <span>{user.gender}</span>
        </div>

        <div>
          <span>Status:</span>
          <span className={`status ${user.status.toLowerCase()}`}>
            {user.status}
          </span>
        </div>
      </div>

      <div className="profile-actions">
        <button onClick={onBack}>Back</button>
        <button className="primary" onClick={onEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default UserViewCard;
