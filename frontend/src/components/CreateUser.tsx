import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CreateUser.css";

//Define CreateUser Component
const CreateUser = () => {
  const [username, setUsername] = useState(""); // initialize Username
  const [password, setPassword] = useState(""); // initialize Password
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});
  const navigate = useNavigate();

  // Validate Inputs
  const validateForm = () => {
    const newErrors: { username?: string; password?: string } = {};

    if (!username.trim()) newErrors.username = "Username is required";
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 chracters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Creating user:", { username, password });
      navigate("/login");
    }
  };

  const handleCancel = () => {
    navigate("/login");
  };

  // Returning the Form
  return (
    <form className="forForm" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <button className="forButton" type="submit">
        Create Account
      </button>
      <button className="forButton" type="button" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
};

export default CreateUser;
