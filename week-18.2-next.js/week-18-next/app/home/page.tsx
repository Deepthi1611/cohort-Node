import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/app/lib/db";

async function getCurrentUser() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) {
    redirect("/signin");
  }

  const user = await prisma.user.findUnique({
    where: {
      id: Number(userId),
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  if (!user) {
    redirect("/signin");
  }

  return user;
}

export default async function HomePage() {
  const user = await getCurrentUser();

  return (
    <main className="min-h-screen bg-[linear-gradient(145deg,#05121c_0%,#0f172a_52%,#111827_100%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <section className="overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-slate-900/80 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.22),_transparent_38%),linear-gradient(135deg,rgba(14,165,233,0.18),rgba(15,23,42,0))] p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Home
            </p>
            <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Current User Details
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-300">
              This screen reads the signed-in user from your database and shows
              the stored details from the `User` model.
            </p>
          </div>

          <div className="grid gap-6 p-8 sm:grid-cols-3 sm:p-10">
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                User Id
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">{user.id}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Name
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">{user.name}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Email
              </p>
              <p className="mt-3 break-all text-lg font-semibold text-white">
                {user.email}
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 px-8 py-6 sm:px-10">
            <Link
              href="/signin"
              className="inline-flex rounded-xl border border-slate-600 bg-slate-950/70 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Back to Sign In
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
