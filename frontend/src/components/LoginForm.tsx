"use client";
import * as React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export const LoginForm: React.FC = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    // Simulate successful login (replace this with your actual login logic)
    if (username === "admin" && password === "admin") {
      navigate("/appointments"); // Navigate to appointments on successful login
    } else {
      alert("Incorrect username or password!"); // Alert for incorrect credentials
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: 300 }}>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
          aria-label="Username"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          aria-label="Password"
        />
      </div>
      <button type="submit" className="btn btn-secondary">
        Login
      </button>
      <br />
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => navigate("/forgot-password")}
      >
        Forgot Password
      </button>
      <br />
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => navigate("/create-user")}
      >
        Create Account
      </button>
    </form>
  );
};
