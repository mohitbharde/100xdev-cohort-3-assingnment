"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SigninForm() {
  const router = typeof window !== "undefined" ? useRouter() : null;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const emailIsValid = (value: string) => {
    // simple, permissive email check
    return /^\S+@\S+\.\S+$/.test(value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!emailIsValid(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      // Example: send request to your Next.js API route
      // Replace /api/auth/login with your real endpoint
      const res = await axios.post("http://localhost:3001/signup", {
        username: email,
        password,
      });

      console.log("res of login: ", res.data);
      const data: { message: string; token: string } = res.data;

      if (res.status !== 200) {
        //throw new Error(data?.message || "Login failed. Please try again.");
        setError(data.message);
        return;
      }

      if (router) router.back();
    } catch (err: any) {
      console.log(err);
      setError(err?.response?.data?.message || String(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white p-6">
      <div className="max-w-md w-full bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl shadow-lg p-6">
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-slate-800">
            Welcome back
          </h1>
          <p className="text-sm text-slate-500">Create new account</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {error && (
            <div className="text-sm text-red-700 bg-red-50 border border-red-100 rounded-md p-3">
              {error}
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-300 transition disabled:opacity-50 ${
                  email && !emailIsValid(email)
                    ? "border-red-300"
                    : "border-slate-200"
                }`}
                placeholder="you@company.com"
                aria-invalid={email ? !emailIsValid(email) : undefined}
              />
            </div>
            {email && !emailIsValid(email) && (
              <p className="mt-1 text-xs text-red-600">
                Enter a valid email address.
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700"
            >
              Password
            </label>
            <div className="mt-1 relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition disabled:opacity-50"
                placeholder="Enter your password"
              />

              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-slate-500 hover:text-slate-700 px-2 py-1 rounded"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {password && password.length < 6 && (
              <p className="mt-1 text-xs text-slate-500">
                Password is weak (min 6 characters)
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-medium shadow hover:scale-[1.01] active:scale-99 transition-transform disabled:opacity-60"
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              ) : (
                "Sign in"
              )}
            </button>
          </div>
        </form>

        <footer className="mt-6 text-center text-sm text-slate-500">
          already have an account?{" "}
          <button
            onClick={() => router?.push("/login")}
            className="text-indigo-600 hover:underline"
          >
            Sign in
          </button>
        </footer>
      </div>
    </div>
  );
}
