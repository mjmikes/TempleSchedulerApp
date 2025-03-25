"use client";
import * as React from "react";

export const LoginForm: React.FC = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{width: 300}}
    >
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
      <div className="">
        <button
          type="submit"
          className="btn btn-secondary mb-5"
        >
          Login
        </button>
        <br/>
        <button
          type="button"
          className="btn btn-outline-secondary mb-2"
        >
          Forgot Password?
        </button>
        <br/>
        <button
          type="button"
          className="btn btn-outline-secondary mb-2"
        >
          New User?
        </button>
      </div>
    </form>
  );
};
