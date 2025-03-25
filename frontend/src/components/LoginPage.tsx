"use client";
//import { StatusBar } from "./StatusBar";
import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  return (
    <main className="w-100">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      {/* <StatusBar /> */}
      <section className="flex flex-col items-center p-5">
        <h1 className="mt-12 text-4xl font-semibold text-center text-black max-sm:text-3xl">
          Login Page
        </h1>
        <div className="">
          <img src="/white_church_logo.jpeg" alt="Chruch Logo" style={{height:"300px"}}/>
        </div>
        <LoginForm />
      </section>
    </main>
  );
}
