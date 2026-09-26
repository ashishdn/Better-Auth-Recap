export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-indigo-500 selection:text-white">
      <main>
        {/* Section 1: Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950/0 to-slate-950/0 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6">
              <span>Our Professional Services</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
              Enterprise-Grade Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Secure Applications</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal">
              Explore our comprehensive suite of authentication, identity management, and advanced security services tailored for modern digital platforms.
            </p>
          </div>
        </section>

        {/* Section 2: Services Grid Section */}
        <section className="py-20 bg-slate-900/30 border-y border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-indigo-400 text-sm font-semibold uppercase tracking-wider">What We Offer</h2>
              <p className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">Powerful services designed to protect your ecosystem</p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-2xl hover:border-indigo-500/50 transition group flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl font-bold mb-6 group-hover:scale-110 transition">
                    🔐
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100">Enterprise SSO Integration</h3>
                  <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                    Seamlessly integrate SAML, OAuth 2.0, and OpenID Connect protocols to enable single sign-on across enterprise client applications.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-800/80">
                  <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Secure & Compliant</span>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-2xl hover:border-indigo-500/50 transition group flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-xl font-bold mb-6 group-hover:scale-110 transition">
                    🛡️
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100">Multi-Factor Authentication</h3>
                  <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                    Deploy robust 2FA/MFA workflows including TOTP authenticator apps, biometric verification, and SMS/Email passcodes.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-800/80">
                  <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Zero Trust Security</span>
                </div>
              </div>

              {/* Service Card 3 */}
              <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-2xl hover:border-indigo-500/50 transition group flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-xl bg-pink-600/10 border border-pink-500/20 flex items-center justify-center text-pink-400 text-xl font-bold mb-6 group-hover:scale-110 transition">
                    ⚡
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100">API Security & Token Management</h3>
                  <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                    Advanced JSON Web Token (JWT) rotation, automated session revocation, and secure rate-limiting mechanisms for backend protection.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-800/80">
                  <span className="text-xs font-semibold text-pink-400 uppercase tracking-wider">High Performance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Process / Workflow Section */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-indigo-400 text-sm font-semibold uppercase tracking-wider">How We Work</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight">Simple steps to integrate our services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-2xl">
              <div className="h-10 w-10 mx-auto rounded-full bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold mb-4 border border-indigo-500/30">1</div>
              <h3 className="text-lg font-semibold text-slate-200">Consultation & Audit</h3>
              <p className="mt-2 text-sm text-slate-400">We analyze your existing architecture and identify authentication vulnerabilities.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-2xl">
              <div className="h-10 w-10 mx-auto rounded-full bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold mb-4 border border-indigo-500/30">2</div>
              <h3 className="text-lg font-semibold text-slate-200">Custom Integration</h3>
              <p className="mt-2 text-sm text-slate-400">Our modular components and secure SDKs are plugged seamlessly into your stack.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-2xl">
              <div className="h-10 w-10 mx-auto rounded-full bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold mb-4 border border-indigo-500/30">3</div>
              <h3 className="text-lg font-semibold text-slate-200">Launch & Support</h3>
              <p className="mt-2 text-sm text-slate-400">Go live with confidence backed by 24/7 infrastructure monitoring and expert support.</p>
            </div>
          </div>
        </section>

        {/* Section 4: CTA Banner */}
        <section className="py-20 bg-gradient-to-r from-indigo-950/40 via-purple-950/40 to-[#020617] border-t border-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Ready to elevate your app security?</h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto text-base">
              Get in touch with our security experts to discuss custom enterprise packages.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a href="#contact" className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-8 py-3.5 rounded-xl shadow-xl shadow-indigo-600/30 transition">
                Request a Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}