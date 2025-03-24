"use client";
import * as React from "react";
import { NavigationMenu } from "./NavigationMenu";
import LoginForm from "./LoginForm";
import { Logo } from "./Logo";

export default function LoginPage() {
  return (
    <main className="relative w-full min-h-screen bg-slate-700">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <NavigationMenu />
      <section className="flex flex-col items-center p-5">
        <h1 className="mt-12 text-4xl font-semibold text-center text-white max-sm:text-3xl">
          Login Page
        </h1>
        <br />
        <div className="overflow-hidden mt-16 h-[111px] rounded-[122px] w-[122px]">
          <Logo />
        </div>
        <LoginForm />
      </section>
    </main>
  );
}
