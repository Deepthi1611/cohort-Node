import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#2563eb33_0,_transparent_48%),radial-gradient(circle_at_bottom_left,_#14b8a633_0,_transparent_42%)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-5xl items-center justify-center">
        <section className="grid w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-black/30 backdrop-blur md:grid-cols-2">
          <div className="hidden bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-10 text-white md:flex md:flex-col md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                Cohort App
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

            <form className="space-y-5">
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
                  placeholder="you@example.com"
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
                  placeholder="••••••••"
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
                className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:brightness-105 active:scale-[0.99]"
              >
                Sign In
              </button>
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
