import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative isolate flex flex-1 items-center justify-center overflow-hidden bg-slate-950 px-4 py-20 text-slate-100 sm:px-6 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_35%,rgba(79,70,229,0.18),transparent_55%)]"
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-400/10 sm:h-[36rem] sm:w-[36rem]" />

      <section className="mx-auto w-full max-w-3xl text-center">
        <div className="relative mx-auto mb-9 flex h-44 w-44 items-center justify-center sm:mb-10 sm:h-52 sm:w-52">
          <div className="absolute inset-0 rounded-full border border-indigo-400/15 bg-indigo-500/[0.04] shadow-[0_0_90px_rgba(99,102,241,0.12)]" />
          <div className="absolute inset-4 rounded-full border border-slate-700/70" />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-[1.75rem] border border-indigo-400/25 bg-slate-900 shadow-2xl shadow-indigo-950/60 sm:h-28 sm:w-28">
            <svg
              aria-hidden="true"
              viewBox="0 0 48 48"
              fill="none"
              className="h-12 w-12 text-indigo-300 sm:h-14 sm:w-14"
            >
              <path
                d="M24 5.5 38 11v11.2c0 9.1-5.8 16.1-14 20.3-8.2-4.2-14-11.2-14-20.3V11l14-5.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M18.5 19.5a5.5 5.5 0 0 1 11 0v3h-11v-3Zm-2 3h15v11h-15v-11Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <circle cx="24" cy="28" r="1.5" fill="currentColor" />
              <path d="M24 29.5v2" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <span className="absolute -right-1 top-5 rounded-full border border-indigo-400/20 bg-slate-900 px-3 py-1.5 font-mono text-xs font-semibold tracking-wider text-indigo-300 shadow-lg sm:-right-4">
            404
          </span>
          <span className="absolute -left-2 bottom-8 h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(167,139,250,0.9)] sm:-left-4" />
          <span className="absolute right-5 bottom-2 h-1.5 w-1.5 rounded-full bg-indigo-300/80" />
        </div>

        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-300">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
          AuthPlatform · Page not found
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          This page slipped past security.
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-slate-400 sm:text-lg">
          The link may be broken, or the page may have moved. Let’s get you back to a secure place.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:-translate-y-0.5 hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
              <path d="m8.5 4-6 6 6 6M3 10h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to home
          </Link>
          <Link
            href="/auth/signin"
            className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-600 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Sign in to your account
          </Link>
        </div>

        <p className="mt-10 text-sm text-slate-500">
          Need a hand?{" "}
          <Link href="/contact" className="font-medium text-indigo-300 underline decoration-indigo-300/30 underline-offset-4 transition hover:text-indigo-200">
            Contact our team
          </Link>
        </p>
      </section>
    </main>
  );
}
