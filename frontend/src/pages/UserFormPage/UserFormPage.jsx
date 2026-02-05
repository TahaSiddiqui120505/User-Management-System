import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./UserFormPage.css";

import UserForm from "../../components/users/UserForm/UserForm";
import { createUser, fetchUserById, updateUser } from "../../api/user.api";
import { validateUser } from "../../utils/validators";

const UserFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEdit) {
      fetchUserById(id).then((res) => {
        setInitialData(res.data.data);
      });
    }
  }, [id, isEdit]);

  const handleSubmit = async (data) => {
    const error = validateUser(data);
    if (error) {
      alert(error);
      return;
    }

    try {
      setLoading(true);
      if (isEdit) {
        await updateUser(id, data);
      } else {
        await createUser(data);
      }
      navigate("/users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <h2>Register Your Details</h2>

        <UserForm
          initialData={initialData}
          onSubmit={handleSubmit}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default UserFormPage;
