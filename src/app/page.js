import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Navbar Section */}

      <main>
        {/* Section 1: Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-36">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950/0 to-slate-950/0 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
              <span>Secure Authentication v2.0 is Live</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
              Modern Authentication for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Next-Gen Apps</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal">
              Enterprise-grade security, frictionless multi-factor authentication, and lightning-fast session management built for developers.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-8 py-3.5 rounded-xl shadow-xl shadow-indigo-600/30 transition transform hover:-translate-y-0.5">
                Start Free Trial
              </button>
              <button className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium px-8 py-3.5 rounded-xl transition">
                View Documentation
              </button>
            </div>

            {/* Hero Card Preview / Visual */}
            <div className="mt-16 max-w-4xl mx-auto rounded-2xl bg-slate-900/60 border border-slate-800 p-2 shadow-2xl backdrop-blur-xl">
              <div className="rounded-xl bg-slate-950 p-6 sm:p-10 border border-slate-800/80 text-left">
                <div className="flex items-center justify-between pb-6 border-b border-slate-800/60">
                  <div className="flex items-center space-x-3">
                    <div className="h-3 w-3 rounded-full bg-rose-500"></div>
                    <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                    <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">auth-flow.tsx</span>
                </div>
                <div className="mt-6 font-mono text-xs sm:text-sm text-slate-300 space-y-2 overflow-x-auto">
                  <p className="text-indigo-400">
                    import <span className="text-slate-100">&#123; createClient &#125;</span> from <span className="text-emerald-400">&apos;@auth/core&apos;</span>;
                  </p>
                  <p className="text-slate-500">{`// Initialize secure user authentication session`}</p>
                  <p>
                    <span className="text-purple-400">const</span> session = <span className="text-purple-400">await</span> client.auth.verifyToken(&#123; autoRefresh: <span className="text-amber-400">true</span> &#125;);
                  </p>
                  <p className="text-emerald-400">&apos;User authenticated securely&apos;;</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Features Section */}
        <section id="features" className="py-20 bg-slate-900/30 border-y border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-indigo-400 text-sm font-semibold uppercase tracking-wider">Powerful Features</h2>
              <p className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">Everything you need to secure your users</p>
              <p className="mt-4 text-slate-400">Robust authentication workflows engineered for high-scale applications with zero setup friction.</p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-2xl hover:border-indigo-500/50 transition group">
                <div className="h-12 w-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl font-bold mb-6 group-hover:scale-110 transition">
                  🛡️
                </div>
                <h3 className="text-xl font-semibold text-slate-100">Multi-Factor Auth</h3>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                  Support for TOTP authenticators, hardware keys, and SMS/Email verification codes right out of the box.
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-2xl hover:border-indigo-500/50 transition group">
                <div className="h-12 w-12 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-xl font-bold mb-6 group-hover:scale-110 transition">
                  ⚡
                </div>
                <h3 className="text-xl font-semibold text-slate-100">Lightning Fast SSO</h3>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                  Integrate Google, GitHub, Apple, and Microsoft single sign-on with a single line of component code.
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-2xl hover:border-indigo-500/50 transition group">
                <div className="h-12 w-12 rounded-xl bg-pink-600/10 border border-pink-500/20 flex items-center justify-center text-pink-400 text-xl font-bold mb-6 group-hover:scale-110 transition">
                  🔒
                </div>
                <h3 className="text-xl font-semibold text-slate-100">JWT & Session Control</h3>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                  Secure cookie management, automatic token rotation, and instant revocation tools for active sessions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Interactive Demo / Form Section */}
        <section id="demo" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-indigo-400 text-sm font-semibold uppercase tracking-wider">Seamless Experience</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight">Built-in UI Components ready for custom branding</p>
              <p className="mt-4 text-slate-400">
                Stop wasting weeks building login screens. Use our pre-styled, fully accessible auth components that instantly match your application layout.
              </p>
              <ul className="mt-8 space-y-3 text-slate-300 text-sm">
                <li className="flex items-center space-x-3">
                  <span className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">✓</span>
                  <span>Dark & Light mode automatic support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">✓</span>
                  <span>Fully customizable Tailwind classes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">✓</span>
                  <span>Built-in error handling and input validation</span>
                </li>
              </ul>
            </div>

            {/* Mock Auth Form Card */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-xl font-semibold mb-1">Welcome back</h3>
              <p className="text-sm text-slate-400 mb-6">Please enter your details to sign in.</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    disabled 
                    placeholder="name@example.com" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Password</label>
                  <input 
                    type="password" 
                    disabled 
                    placeholder="••••••••" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-400 focus:outline-none"
                  />
                </div>
                <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 rounded-lg text-sm transition shadow-md shadow-indigo-600/20">
                  Sign In to Dashboard
                </button>
              </div>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-800"></div></div>
                <div className="relative flex justify-center text-xs uppercase"><span className="bg-slate-900 px-2 text-slate-500">Or continue with</span></div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-medium py-2.5 rounded-lg text-slate-300 transition">
                  Google
                </button>
                <button className="bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-medium py-2.5 rounded-lg text-slate-300 transition">
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: CTA Banner */}
        <section className="py-20 bg-gradient-to-r from-indigo-950/40 via-purple-950/40 to-slate-950 border-t border-slate-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Ready to secure your application?</h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto text-base">
              Join thousands of developers who trust AuthPlatform for their user identity management. Get started in minutes.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-8 py-3.5 rounded-xl shadow-xl shadow-indigo-600/30 transition">
                Create Free Account
              </button>
            </div>
          </div>
        </section>
      </main>

     
    </div>
  );
}
