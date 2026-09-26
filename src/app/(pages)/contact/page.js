"use client"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-indigo-500 selection:text-white">
      <main>
        {/* Section 1: Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-12 lg:pt-28 lg:pb-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950/0 to-slate-950/0 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6">
              <span>Get in Touch</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
              We are here to help <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Your Business</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal">
              Have questions about our authentication platform or need a custom enterprise solution? Reach out to our team.
            </p>
          </div>
        </section>

        {/* Section 2: Contact Form & Info Section */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: Contact Form */}
            <div className="bg-slate-900/60 border border-slate-800/80 p-8 sm:p-10 rounded-2xl shadow-2xl backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-slate-100 mb-2">Send us a message</h3>
              <p className="text-sm text-slate-400 mb-8">Fill out the form below and we will get back to you within 24 hours.</p>
              
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Your Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Nizam Uddin" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="name@example.com" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="Write your message here..." 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3.5 rounded-xl text-sm transition shadow-lg shadow-indigo-600/30 transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Column: Contact Details & Info Cards */}
            <div className="space-y-8 lg:py-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-4">Contact Information</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Whether you have questions about pricing, implementation, or enterprise features, our team is ready to answer all your queries.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-slate-900/40 border border-slate-800/80 p-5 rounded-xl">
                  <div className="h-10 w-10 rounded-lg bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Our Office</h4>
                    <p className="text-sm text-slate-400 mt-1">123 Innovation Drive, Tech City, Silicon Valley, CA</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-slate-900/40 border border-slate-800/80 p-5 rounded-xl">
                  <div className="h-10 w-10 rounded-lg bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold shrink-0">
                    📧
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Email Us</h4>
                    <p className="text-sm text-slate-400 mt-1">support@authplatform.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-slate-900/40 border border-slate-800/80 p-5 rounded-xl">
                  <div className="h-10 w-10 rounded-lg bg-pink-600/10 border border-pink-500/20 flex items-center justify-center text-pink-400 font-bold shrink-0">
                    📞
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Call Us</h4>
                    <p className="text-sm text-slate-400 mt-1">+1 (555) 019-2834</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}