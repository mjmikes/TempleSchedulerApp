// src/LoginForm.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
      <button
        type="button"
        onClick={() => navigate("/forgot-password")} // Navigate to Forgot Password page
      >
        Forgot Password?
      </button>
    </form>
  );
};

export default LoginForm;
