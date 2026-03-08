import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#0b1020_0%,#111827_40%,#0f172a_100%)] px-4 py-10 sm:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-3xl items-center justify-center">
        <section className="w-full rounded-3xl border border-slate-700/70 bg-slate-900/80 p-8 text-center shadow-2xl shadow-black/30 backdrop-blur sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Welcome
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            To-Do Application
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            Continue by signing in or creating a new account.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/signin"
              className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-105 active:scale-[0.98]"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="rounded-xl border border-slate-600 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Sign Up
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
