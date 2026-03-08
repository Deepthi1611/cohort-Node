"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSignIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/v1/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.message ?? "Sign in failed");
      }

      setSuccess(data.message ?? "Signed in successfully.");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#2563eb33_0,_transparent_48%),radial-gradient(circle_at_bottom_left,_#14b8a633_0,_transparent_42%)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-5xl items-center justify-center">
        <section className="grid w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-black/30 backdrop-blur md:grid-cols-2">
          <div className="hidden bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-10 text-white md:flex md:flex-col md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                To-Do App
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight">
                Welcome back.
                <br />
                Keep building.
              </h1>
              <p className="mt-4 max-w-sm text-sm text-white/90">
                Sign in to continue your learning streak and access your
                personalized dashboard.
              </p>
            </div>
            <p className="text-sm text-white/80">Learn consistently, ship confidently.</p>
          </div>

          <div className="p-7 sm:p-10">
            <div className="mb-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
                Sign in
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Account Login</h2>
              <p className="mt-2 text-sm text-slate-300">
                Enter your credentials to continue.
              </p>
            </div>

            <form onSubmit={handleSignIn} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-slate-200"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-2.5 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-1 block text-sm font-medium text-slate-200"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-2.5 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="inline-flex items-center gap-2 text-slate-300">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-600 bg-slate-900 text-cyan-500 focus:ring-cyan-400/50"
                  />
                  Remember me
                </label>
                <Link href="#" className="text-cyan-300 transition hover:text-cyan-200">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:brightness-105 active:scale-[0.99]"
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </button>

              {error ? <p className="text-sm text-rose-300">{error}</p> : null}
              {success ? <p className="text-sm text-emerald-300">{success}</p> : null}
            </form>

            <p className="mt-6 text-center text-sm text-slate-300">
              New here?{" "}
              <Link
                href="/signup"
                className="font-semibold text-cyan-300 hover:text-cyan-200"
              >
                Create an account
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
