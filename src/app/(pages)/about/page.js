export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-indigo-500 selection:text-white">
      <main>
        {/* Section 1: Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950/0 to-slate-950/0 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6">
              <span>About AuthPlatform</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
              Securing the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Digital Identity</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal">
              We are on a mission to simplify authentication and security for developers and businesses worldwide, ensuring frictionless trust for every user.
            </p>
          </div>
        </section>

        {/* Section 2: Core Values Section */}
        <section className="py-20 bg-slate-900/30 border-y border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-indigo-400 text-sm font-semibold uppercase tracking-wider">Our Core Values</h2>
              <p className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">Built on a foundation of trust and innovation</p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-2xl hover:border-indigo-500/50 transition group">
                <div className="h-12 w-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl font-bold mb-6 group-hover:scale-110 transition">
                  🛡️
                </div>
                <h3 className="text-xl font-semibold text-slate-100">Uncompromising Security</h3>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                  Security is not just a feature; it is our core architecture. We protect your user databases with state-of-the-art cryptographic standards.
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-2xl hover:border-indigo-500/50 transition group">
                <div className="h-12 w-12 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-xl font-bold mb-6 group-hover:scale-110 transition">
                  ⚡
                </div>
                <h3 className="text-xl font-semibold text-slate-100">Developer First</h3>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                  हम build tools that developers love to use—clean documentation, intuitive APIs, and zero friction setup.
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-2xl hover:border-indigo-500/50 transition group">
                <div className="h-12 w-12 rounded-xl bg-pink-600/10 border border-pink-500/20 flex items-center justify-center text-pink-400 text-xl font-bold mb-6 group-hover:scale-110 transition">
                  📈
                </div>
                <h3 className="text-xl font-semibold text-slate-100">Scalability at Scale</h3>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                  Whether you have ten users or ten million, our infrastructure scales seamlessly to handle peak authentication loads.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Stats Section */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl">
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">99.99%</div>
              <div className="mt-2 text-sm text-slate-400">Uptime Guaranteed</div>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl">
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">10M+</div>
              <div className="mt-2 text-sm text-slate-400">Secure Logins Daily</div>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl">
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">5,000+</div>
              <div className="mt-2 text-sm text-slate-400">Active Developers</div>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl">
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">24/7</div>
              <div className="mt-2 text-sm text-slate-400">Expert Support</div>
            </div>
          </div>
        </section>

        {/* Section 4: Team / Story CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-950/40 via-purple-950/40 to-[#020617] border-t border-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Built by developers, for developers</h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto text-base">
              Join our growing community and experience next-generation authentication today.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a href="#contact" className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-8 py-3.5 rounded-xl shadow-xl shadow-indigo-600/30 transition">
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}