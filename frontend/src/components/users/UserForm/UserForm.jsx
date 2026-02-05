import { useEffect, useState } from "react";
import "./UserForm.css";

const defaultState = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  gender: "",
  status: "Active",
  profile: null
};

const UserForm = ({ initialData, onSubmit, loading }) => {
  const [form, setForm] = useState(defaultState);

  useEffect(() => {
    if (initialData) {
      setForm({ ...initialData, profile: null });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value
    });
  };

  return (
    <form
      className="user-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
    >
      <label>First Name</label>
      <input name="firstName" value={form.firstName} onChange={handleChange} />

      <label>Last Name</label>
      <input name="lastName" value={form.lastName} onChange={handleChange} />

      <label>Email</label>
      <input name="email" value={form.email} onChange={handleChange} />

      <label>Mobile</label>
      <input name="mobile" value={form.mobile} onChange={handleChange} />

      <label>Gender</label>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="gender"
            value="M"
            checked={form.gender === "M"}
            onChange={handleChange}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="F"
            checked={form.gender === "F"}
            onChange={handleChange}
          />
          Female
        </label>
      </div>

      <label>Status</label>
      <select name="status" value={form.status} onChange={handleChange}>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      <label>Profile</label>
      <input type="file" name="profile" onChange={handleChange} />

      <button disabled={loading}>
        {loading ? "Saving..." : "Submit"}
      </button>
    </form>
  );
};

export default UserForm;
