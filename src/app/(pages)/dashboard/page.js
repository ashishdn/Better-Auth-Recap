import Link from "next/link";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const stats = [
  { label: "Active sessions", value: "03", note: "+1 this week", icon: "◉", color: "indigo" },
  { label: "Security score", value: "98%", note: "Your account is protected", icon: "✳", color: "emerald" },
  { label: "Sign-ins this month", value: "24", note: "All activity looks good", icon: "↗", color: "violet" },
];

const activity = [
  { title: "Successful sign in", detail: "Chrome · Windows", time: "Today, 9:42 AM", status: "Verified" },
  { title: "Password updated", detail: "Your account password was changed", time: "Yesterday, 4:18 PM", status: "Secure" },
  { title: "New session started", detail: "Firefox · macOS", time: "Sep 22, 11:06 AM", status: "Verified" },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function Dashboard() {
  const session = await auth.api.getSession({ headers: await headers() });
  const user = session?.user;

  if (!user) {
    return (
      <div className="relative flex min-h-[calc(100vh-13rem)] items-center justify-center overflow-hidden bg-slate-950 px-4 py-16 text-slate-100 sm:px-6">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(79,70,229,0.18),transparent_55%)]" />
        <section className="relative w-full max-w-xl rounded-3xl border border-slate-800 bg-slate-900/80 p-7 text-center shadow-2xl shadow-indigo-950/30 backdrop-blur sm:p-10">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-8 w-8">
              <path d="M12 3 20 6v6.4c0 4.4-3.2 7.8-8 9.6-4.8-1.8-8-5.2-8-9.6V6l8-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M9.5 11V9.5a2.5 2.5 0 0 1 5 0V11m-6 0h7v5h-7v-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">Your secure space</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Your dashboard is waiting.</h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-400 sm:text-base">
            Sign in to view your account overview, recent activity, and security details—all in one place.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/auth/signin" className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:-translate-y-0.5 hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">
              Sign in to continue <ArrowIcon />
            </Link>
            <Link href="/auth/signup" className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800/70 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-600 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">
              Create an account
            </Link>
          </div>
          <p className="mt-6 text-xs text-slate-500">Your account data stays private and protected.</p>
        </section>
      </div>
    );
  }

  const firstName = user.name?.trim().split(/\s+/)[0] || "there";

  return (
    <div className="min-h-[calc(100vh-13rem)] bg-slate-950 px-4 py-10 text-slate-100 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-indigo-300">Account overview</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Welcome back, {firstName}</h1>
            <p className="mt-2 text-sm text-slate-400">Here&apos;s what&apos;s happening with your account today.</p>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-2 text-xs font-medium text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.65)]" />
            Account protected
          </div>
        </div>

        <section aria-label="Account statistics" className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {stats.map((stat) => (
            <article key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg shadow-black/10 sm:p-6">
              <div className="flex items-start justify-between">
                <p className="text-sm font-medium text-slate-400">{stat.label}</p>
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl border text-lg ${stat.color === "emerald" ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-300" : stat.color === "violet" ? "border-violet-500/20 bg-violet-500/10 text-violet-300" : "border-indigo-500/20 bg-indigo-500/10 text-indigo-300"}`} aria-hidden="true">{stat.icon}</span>
              </div>
              <p className="mt-5 text-3xl font-bold tracking-tight text-white">{stat.value}</p>
              <p className="mt-1 text-xs text-slate-500">{stat.note}</p>
            </article>
          ))}
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(260px,0.8fr)]">
          <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
            <div className="flex items-center justify-between border-b border-slate-800 px-5 py-5 sm:px-6">
              <div>
                <h2 className="font-semibold text-white">Recent activity</h2>
                <p className="mt-1 text-xs text-slate-500">A quick look at your account timeline</p>
              </div>
              <span className="rounded-lg border border-slate-700 bg-slate-950 px-2.5 py-1 text-xs text-slate-400">Last 30 days</span>
            </div>
            <div className="divide-y divide-slate-800/80">
              {activity.map((item) => (
                <div key={item.title} className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-sm text-indigo-300" aria-hidden="true">✓</span>
                    <div>
                      <p className="text-sm font-medium text-slate-200">{item.title}</p>
                      <p className="mt-1 text-xs text-slate-500">{item.detail}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4 pl-12 sm:flex-col sm:items-end sm:gap-1 sm:pl-0">
                    <span className="text-xs text-slate-500">{item.time}</span>
                    <span className="text-xs font-medium text-emerald-400">{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <aside className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-sm font-bold text-white">
                {(user.name?.[0] || user.email?.[0] || "U").toUpperCase()}
              </div>
              <div className="min-w-0">
                <h2 className="truncate text-sm font-semibold text-white">{user.name || "Your account"}</h2>
                <p className="truncate text-xs text-slate-400">{user.email}</p>
              </div>
            </div>
            <div className="mt-6 border-t border-slate-800 pt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Quick links</p>
              <div className="mt-3 space-y-2">
                <Link href="/services" className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-300 transition hover:border-indigo-500/40 hover:text-white">
                  Explore services <ArrowIcon />
                </Link>
                <Link href="/contact" className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-300 transition hover:border-indigo-500/40 hover:text-white">
                  Contact support <ArrowIcon />
                </Link>
              </div>
            </div>
            <div className="mt-5 rounded-xl border border-indigo-500/15 bg-indigo-500/[0.06] p-4">
              <p className="text-sm font-medium text-indigo-200">Keep your account secure</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">Review recent sign-ins and update your password regularly.</p>
            </div>
          </aside>
        </div>
        <p className="mt-6 text-center text-xs text-slate-600">Demo dashboard · Activity and statistics shown here are sample data</p>
      </div>
    </div>
  );
}
