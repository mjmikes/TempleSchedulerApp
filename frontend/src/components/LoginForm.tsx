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
      className="flex flex-col gap-8 items-center mt-8 w-full max-w-[296px] max-sm:max-w-[90%]"
    >
      <div className="flex items-center px-4 py-0 w-full rounded bg-neutral-100 h-[58px] max-sm:h-[50px]">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="text-lg text-black border-[none] bg-transparent w-full outline-none"
          aria-label="Username"
        />
      </div>
      <div className="flex items-center px-4 py-0 w-full rounded bg-neutral-100 h-[58px] max-sm:h-[50px]">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-lg text-black border-[none] bg-transparent w-full outline-none"
          aria-label="Password"
        />
      </div>
      <button
        type="submit"
        className="px-6 py-2 mt-6 text-base text-black rounded cursor-pointer bg-neutral-100 border-[none] hover:bg-neutral-200 transition-colors"
      >
        Login
      </button>
      <button
        type="button"
        className="px-4 py-2 text-base text-black rounded cursor-pointer bg-neutral-100 hover:bg-neutral-200 transition-colors w-full text-center"
      >
        Forgot Password?
      </button>
      <button
        type="button"
        className="px-4 py-2 text-base text-black rounded cursor-pointer bg-neutral-100 hover:bg-neutral-200 transition-colors w-full text-center"
      >
        New User?
      </button>
    </form>
  );
};
