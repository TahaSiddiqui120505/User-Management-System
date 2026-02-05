import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./UserViewPage.css";

import { fetchUserById } from "../../api/user.api";
import UserViewCard from "../../components/users/UserViewCard/UserViewCard";

const UserViewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserById(id).then((res) => {
      setUser(res.data.data);
    });
  }, [id]);

  return (
    <div className="view-page">
      <div className="view-card-wrapper">
        {user && (
          <UserViewCard
            user={user}
            onBack={() => navigate("/users")}
            onEdit={() => navigate(`/users/edit/${id}`)}
          />
        )}
      </div>
    </div>
  );
};

export default UserViewPage;
