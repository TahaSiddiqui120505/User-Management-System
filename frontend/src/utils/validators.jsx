export const validateUser = (data) => {
  if (!data.firstName || data.firstName.length < 2) {
    return "First name must be at least 2 characters";
  }

  if (!data.lastName || data.lastName.length < 2) {
    return "Last name must be at least 2 characters";
  }

  if (!data.email) {
    return "Email is required";
  }

  const emailRegex =
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!emailRegex.test(data.email)) {
    return "Invalid email address";
  }

  if (!/^[0-9]{10}$/.test(data.mobile)) {
    return "Mobile number must be 10 digits";
  }

  if (!data.gender) {
    return "Gender is required";
  }

  return null;
};
