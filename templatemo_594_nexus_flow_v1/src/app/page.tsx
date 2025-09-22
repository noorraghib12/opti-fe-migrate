export default function HomePage() {
  return (
    <main id="top" className="relative min-h-screen">
      {/* Enhanced Background Elements */}
      <div className="cyber-bg fixed top-0 left-0 w-full h-full bg-[#0f051a] overflow-hidden z-[-5]">
        <div className="cyber-gradient absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,255,0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(255,0,255,0.15)_0%,transparent_50%),radial-gradient(circle_at_40%_80%,rgba(124,58,237,0.15)_0%,transparent_50%),radial-gradient(circle_at_60%_20%,rgba(249,115,22,0.15)_0%,transparent_50%)] animate-[gradientRotate_30s_linear_infinite] blur-[40px]" />
        <div className="matrix-rain hidden" id="matrixRain" />
      </div>

      <div className="particles opacity-50 fixed inset-0 z-[-3]" id="particlesContainer" />
      <div className="data-streams hidden fixed inset-0 z-[-3]" id="dataStreams" />

      <div className="orb orb1 fixed w-[300px] h-[300px] bg-cyan-400 top-[10%] left-[-150px] blur-[100px] opacity-30 z-[-4]" />
      <div className="orb orb2 fixed w-[400px] h-[400px] bg-[#ff00ff] bottom-[10%] right-[-200px] blur-[100px] opacity-30 z-[-4]" />
      <div className="orb orb3 fixed w-[250px] h-[250px] bg-purple-700 top-1/2 left-1/2 blur-[100px] opacity-30 z-[-4]" />

      <div className="grid-overlay fixed top-0 left-0 w-full h-full z-[-2]">
        <div className="grid-lines absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[length:50px_50px] animate-[gridMove_20s_linear_infinite]" />
        <div className="grid-glow absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,0,255,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(255,0,255,0.03)_2px,transparent_2px)] bg-[length:100px_100px] animate-[gridMove_30s_linear_infinite_reverse]" />
      </div>

      <div className="scanlines fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]" />
      <div className="noise-overlay hidden" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[10000] bg-[rgba(15,15,35,0.9)] backdrop-blur-[20px] border-b border-[rgba(229,231,235,0.2)] transition-all duration-300">
        <div className="nav-container flex flex-row items-center gap-0 max-w-[1400px] mx-auto px-8 py-4">
          <a href="#top" className="logo text-[1.8rem] font-bold text-cyan-400 relative cursor-pointer no-underline inline-block transition-all duration-300 ease-in-out [text-shadow:0_0_20px_#00ffff]">
            NexusFlow
          </a>
          <ul className="nav-links hidden md:flex list-none gap-10 ml-auto mr-8">
            <li><a href="#features" className="uppercase text-xs tracking-wider text-gray-400 hover:text-cyan-400 transition">Features</a></li>
            <li><a href="#pricing" className="uppercase text-xs tracking-wider text-gray-400 hover:text-cyan-400 transition">Pricing</a></li>
            <li><a href="#stats" className="uppercase text-xs tracking-wider text-gray-400 hover:text-cyan-400 transition">Stats</a></li>
            <li><a href="#contact" className="uppercase text-xs tracking-wider text-gray-400 hover:text-cyan-400 transition">Contact</a></li>
          </ul>
          <div className="nav-bottom flex-none hidden md:block">
            <a href="#" className="cyber-button py-3 px-6 text-sm bg-gradient-to-tr from-cyan-400 to-purple-700 text-[#0f051a] font-extrabold uppercase tracking-[2px] [clip-path:polygon(15px_0%,_100%_0%,_calc(100%_-_15px)_100%,_0%_100%)]">Access Terminal</a>
          </div>
          <button className="mobile-menu-button block md:hidden ml-4" id="mobileMenuBtn">
            <div className="hamburger relative w-[25px] h-[20px] m-auto">
              <span className="block absolute h-[2px] w-full bg-cyan-400 left-0 top-0" />
              <span className="block absolute h-[2px] w-full bg-cyan-400 left-0 top-[9px]" />
              <span className="block absolute h-[2px] w-full bg-cyan-400 left-0 top-[18px]" />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="mobile-menu-overlay fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 z-[9998] opacity-0 invisible transition-all duration-300 ease" id="mobileMenuOverlay" />
      <div className="mobile-menu fixed top-[78px] right-0 w-[90%] max-w-none h-[calc(100vh-78px)] bg-[#0f051a] z-[9999] translate-x-full transition-transform duration-400" id="mobileMenu">
        <div className="mobile-menu-header p-6 flex items-center justify-between border-b border-white/10">
          <a href="#top" className="mobile-menu-logo text-[1.5rem] font-bold text-cyan-400 inline-block transition-all duration-300 ease-linear [text-shadow:0_0_15px_#00ffff] no-underline">NexusFlow</a>
          <button className="mobile-menu-close bg-none border-none text-cyan-400 text-[1.5rem] cursor-pointer w-[30px] h-[30px] flex items-center justify-center transition-all duration-300 ease-linear" id="mobileMenuClose">✕</button>
        </div>
        <div className="mobile-menu-cta p-6 border-b border-white/10">
          <a href="#" className="cyber-button py-3 px-6 text-sm bg-gradient-to-tr from-cyan-400 to-purple-700 text-[#0f051a] font-extrabold uppercase tracking-[2px] block text-center [clip-path:polygon(15px_0%,_100%_0%,_calc(100%_-_15px)_100%,_0%_100%)]">Access Terminal</a>
        </div>
        <nav className="mobile-menu-nav p-0 flex-grow">
          <ul className="list-none m-0 p-0">
            <li><a href="#features" className="block px-8 py-6 border-b border-white/10 text-gray-400 uppercase tracking-wide">Features</a></li>
            <li><a href="#pricing" className="block px-8 py-6 border-b border-white/10 text-gray-400 uppercase tracking-wide">Pricing</a></li>
            <li><a href="#stats" className="block px-8 py-6 border-b border-white/10 text-gray-400 uppercase tracking-wide">Stats</a></li>
            <li><a href="#contact" className="block px-8 py-6 text-gray-400 uppercase tracking-wide">Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="hero pt-[150px] px-8 pb-[100px] text-center relative min-h-screen flex items-center">
        <div className="hero-container max-w-[1400px] mx-auto w-full">
          <h1 className="hero-title text-2xl font-black mb-8 uppercase tracking-[3px] leading-tight">
            <span className="hero-nexus inline-block">NEXUS</span>
            <span className="hero-flow inline-block ml-1">FLOW</span>
          </h1>
          <p className="hero-subtitle text-xl text-gray-400 mb-12 max-w-3xl mx-auto font-light opacity-90 bg-gradient-to-br from-gray-400 to-gray-200 bg-clip-text text-transparent">
            The quantum leap in team collaboration. Connect minds, sync realities, achieve impossible.
          </p>
          <div className="hero-buttons flex flex-col items-center gap-6">
            <a href="#" className="btn-primary bg-gradient-to-tr from-cyan-400 to-purple-700 text-[#0f051a] py-5 px-12 border-none no-underline font-extrabold uppercase tracking-[2px] relative overflow-hidden transition-all duration-300 [clip-path:polygon(20px_0%,_100%_0%,_calc(100%_-_20px)_100%,_0%_100%)]">Initialize System</a>
            <a href="#" className="btn-secondary w-full max-w-xs border-2 border-cyan-400 text-cyan-400 py-5 px-12 no-underline font-extrabold uppercase tracking-[2px] transition-all duration-300 [clip-path:polygon(20px_0%,_100%_0%,_calc(100%_-_20px)_100%,_0%_100%)]">View Documentation</a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats fade-up py-20 px-8 bg-cyan-50 bg-opacity-5 border-t border-b border-gray-200 border-opacity-20" id="stats">
        <div className="stats-container max-w-[1400px] mx-auto">
          <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="stat-item relative">
              <span className="stat-number text-6xl font-extrabold bg-gradient-to-br from-cyan-400 to-purple-700 bg-clip-text text-transparent block mb-2 filter drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]">50K+</span>
              <span className="stat-label text-[1.1rem] text-gray-400 uppercase tracking-[1px]">Active Users</span>
            </div>
            <div className="stat-item relative">
              <span className="stat-number text-6xl font-extrabold bg-gradient-to-br from-cyan-400 to-purple-700 bg-clip-text text-transparent block mb-2 filter drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]">99.9%</span>
              <span className="stat-label text-[1.1rem] text-gray-400 uppercase tracking-[1px]">Uptime</span>
            </div>
            <div className="stat-item relative">
              <span className="stat-number text-6xl font-extrabold bg-gradient-to-br from-cyan-400 to-purple-700 bg-clip-text text-transparent block mb-2 filter drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]">500M+</span>
              <span className="stat-label text-[1.1rem] text-gray-400 uppercase tracking-[1px]">Tasks Processed</span>
            </div>
            <div className="stat-item relative">
              <span className="stat-number text-6xl font-extrabold bg-gradient-to-br from-cyan-400 to-purple-700 bg-clip-text text-transparent block mb-2 filter drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]">180+</span>
              <span className="stat-label text-[1.1rem] text-gray-400 uppercase tracking-[1px]">Countries</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features fade-up py-[120px] px-8 relative" id="features">
        <div className="features-container max-w-[1400px] mx-auto">
          <div className="section-header text-center mb-20">
            <h2 className="section-title text-3xl font-extrabold text-cyan-400 uppercase tracking-wider mb-4 relative shadow-[0_0_20px_rgba(0,255,255,0.5)]">Core Systems</h2>
            <p className="section-subtitle text-[1.2rem] text-gray-400 max-w-[600px] mx-auto">Advanced modules designed for maximum efficiency and seamless integration</p>
          </div>

          <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: "⚡", title: "Quantum Processing", text: "Experience lightning-fast data processing with our quantum-inspired algorithms that handle complex workflows in microseconds." },
              { icon: "🔮", title: "Neural Networks", text: "AI-powered decision making that learns from your team's patterns and optimizes collaboration in real-time." },
              { icon: "🌐", title: "Holographic Interface", text: "Immersive 3D workspace that transcends traditional boundaries, bringing remote teams into a shared reality." },
              { icon: "🛡️", title: "Quantum Encryption", text: "Military-grade security protocols with quantum encryption that makes your data literally impossible to breach." },
              { icon: "🚀", title: "Hyperdrive Sync", text: "Instantaneous synchronization across all devices and platforms with zero latency, no matter the distance." },
              { icon: "🎯", title: "Mind Reading Analytics", text: "Predictive analytics so advanced, it anticipates your team's needs before they even know what they need." },
            ].map((f) => (
              <div key={f.title} className="feature-card bg-[rgba(229,231,235,0.03)] border border-[rgba(229,231,235,0.2)] p-12 relative transition-all duration-400 backdrop-blur-[10px] [clip-path:polygon(20px_0%,_100%_0%,_100%_calc(100%_-_20px),_calc(100%_-_20px)_100%,_0%_100%,_0%_20px)]">
                <div className="feature-icon w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-700 flex items-center justify-center mb-8 text-2xl shadow-[0_0_30px_rgba(0,255,255,0.5)] [clip-path:polygon(15px_0%,_100%_0%,_100%_calc(100%_-_15px),_calc(100%_-_15px)_100%,_0%_100%,_0%_15px)]">
                  <span>{f.icon}</span>
                </div>
                <h3 className="text-[1.5rem] font-bold text-cyan-400 uppercase tracking-wider mb-4">{f.title}</h3>
                <p className="text-gray-400 leading-7">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing fade-up py-[120px] px-8" id="pricing">
        <div className="pricing-container max-w-[1400px] mx-auto">
          <div className="section-header text-center mb-20">
            <h2 className="section-title text-3xl font-extrabold text-cyan-400 uppercase tracking-wider mb-4 relative shadow-[0_0_20px_rgba(0,255,255,0.5)]">Access Levels</h2>
            <p className="section-subtitle text-[1.2rem] text-gray-400 max-w-[600px] mx-auto">Choose your gateway to the future of collaboration</p>
          </div>

          <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            {/* Initiate */}
            <div className="pricing-card bg-[rgba(229,231,235,0.03)] border border-[rgba(229,231,235,0.2)] p-12 text-center relative transition-all duration-400 backdrop-blur-[10px] [clip-path:polygon(30px_0%,100%_0%,100%_calc(100%_-_30px),calc(100%_-_30px)_100%,0%_100%,0%_30px)]">
              <div className="plan-name text-2xl font-bold text-cyan-400 uppercase tracking-widest mb-8 shadow-[0_0_15px_rgba(0,255,255,0.5)]">Initiate</div>
              <div className="plan-price text-4xl font-black text-white mb-2.5 shadow-[0_0_20px_#00ffff]">$49</div>
              <div className="plan-period text-gray-400 mb-12 uppercase tracking-wide">per neural link</div>
              <ul className="plan-features list-none mb-12 text-left">
                <li className="py-4 border-b border-white/10 pl-8 text-gray-400">Basic quantum processing</li>
                <li className="py-4 border-b border-white/10 pl-8 text-gray-400">5 holographic workspaces</li>
                <li className="py-4 border-b border-white/10 pl-8 text-gray-400">Standard encryption</li>
                <li className="py-4 border-b border-white/10 pl-8 text-gray-400">Community support matrix</li>
                <li className="py-4 pl-8 text-gray-400">Reality sync enabled</li>
              </ul>
              <a href="#" className="btn-secondary w-full max-w-xs inline-block border-2 border-cyan-400 text-cyan-400 py-4 px-10 no-underline font-extrabold uppercase tracking-[2px] transition-all duration-300 [clip-path:polygon(20px_0%,_100%_0%,_calc(100%_-_20px)_100%,_0%_100%)]">Enter System</a>
            </div>

            {/* Nexus (featured) */}
            <div className="pricing-card featured bg-[rgba(229,231,235,0.03)] border border-[rgba(229,231,235,0.2)] p-12 text-center relative transition-all duration-400 backdrop-blur-[10px] [clip-path:polygon(30px_0%,100%_0%,100%_calc(100%_-_30px),calc(100%_-_30px)_100%,0%_100%,0%_30px)] transform-none">
              <div className="plan-name text-2xl font-bold text-cyan-400 uppercase tracking-widest mb-8 shadow-[0_0_15px_rgba(0,255,255,0.5)]">Nexus</div>
              <div className="plan-price text-4xl font-black text-white mb-2.5 shadow-[0_0_20px_#00ffff]">$149</div>
              <div className="plan-period text-gray-400 mb-12 uppercase tracking-wide">per neural link</div>
              <ul className="plan-features list-none mb-12 text-left">
                <li className="py-4 border-b border-white/10 pl-8 text-gray-400">Advanced quantum algorithms</li>
                <li className="py-4 border-b border-white/10 pl-8 text-gray-400">Unlimited holo-workspaces</li>
                <li className="py-4 border-b border-white/10 pl-8 text-gray-400">Quantum encryption fortress</li>
                <li className="py-4 border-b border-white/10 pl-8 text-gray-400">Priority neural support</li>
                <li className="py-4 border-b border-white/10 pl-8 text-gray-400">Mind-reading analytics</li>
                <li className="py-4 pl-8 text-gray-400">Hyperdrive sync protocol</li>
              </ul>
              <a href="#" className="btn-primary inline-block bg-gradient-to-tr from-cyan-400 to-purple-700 text-[#0f051a] py-4 px-10 border-none no-underline font-extrabold uppercase tracking-[2px] transition-all duration-300 [clip-path:polygon(20px_0%,_100%_0%,_calc(100%_-_20px)_100%,_0%_100%)]">Jack In</a>
            </div>

            {/* Transcend */}
            <div className="pricing-card bg-[rgba(229,231,235,0.03)] border border-[rgba(229,231,235,0.2)] p-12 text-center relative transition-all duration-400 backdrop-blur-[10px] [clip-path:polygon(30px_0%,100%_0%,100%_calc(100%_-_30px),calc(100%_-_30px)_100%,0%_100%,0%_30px)]">
              <div className="plan-name text-2xl font-bold text-cyan-400 uppercase tracking-widest mb-8 shadow-[0_0_15px_rgba(0,255,255,0.5)]">Transcend</div>
              <div className="plan-price text-4xl font-black text-white mb-2.5 shadow-[0_0_20px_#00ffff]">$399</div>
              <div className="plan-period text-gray-400 mb-12 uppercase tracking-wide">per neural link</div>
              <ul className="plan-features list-none mb-12 text-left">
                <li className="py-4 border-b border-white/10 pl-8 text-gray-400">Infinite processing power</li>
                <li className="py-4 border-b border-white/10 pl-8 text-gray-400">Custom reality matrices</li>
                <li className="py-4 border-b border-white/10 pl-8 text-gray-400">Temporal encryption layers</li>
                <li className="py-4 border-b border-white/10 pl-8 text-gray-400">Direct neural interface</li>
                <li className="py-4 border-b border-white/10 pl-8 text-gray-400">Predictive consciousness</li>
                <li className="py-4 pl-8 text-gray-400">Quantum entanglement sync</li>
              </ul>
              <a href="#" className="btn-secondary w-full max-w-xs inline-block border-2 border-cyan-400 text-cyan-400 py-4 px-10 no-underline font-extrabold uppercase tracking-[2px] transition-all duration-300 [clip-path:polygon(20px_0%,_100%_0%,_calc(100%_-_20px)_100%,_0%_100%)]">Ascend</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact fade-up py-20 px-4 bg-cyan-50 bg-opacity-5 border-t border-gray-200 border-opacity-20" id="contact">
        <div className="contact-container max-w-[1400px] mx-auto">
          <div className="section-header text-center mb-20">
            <h2 className="section-title text-3xl font-extrabold text-cyan-400 uppercase tracking-wider mb-4 relative shadow-[0_0_20px_rgba(0,255,255,0.5)]">Initialize Contact</h2>
            <p className="section-subtitle text-[1.2rem] text-gray-400 max-w-[600px] mx-auto">Send a transmission through the neural network</p>
          </div>

          <div className="contact-form-wrapper max-w-[600px] mx-auto mt-16">
            <form className="contact-form p-8 bg-[rgba(229,231,235,0.03)] border border-[rgba(229,231,235,0.2)] backdrop-blur-[10px] [clip-path:polygon(30px_0%,100%_0%,100%_calc(100%_-_30px),calc(100%_-_30px)_100%,0%_100%,0%_30px)] shadow-[0_0_30px_rgba(0,255,255,0.1)]">
              <div className="form-group mb-8">
                <label htmlFor="name" className="block text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-2">Neural ID</label>
                <input type="text" id="name" name="name" placeholder="Enter your designation" required className="w-full p-4 bg-cyan-400/5 border border-white/20 text-white placeholder:text-gray-400 [clip-path:polygon(10px_0%,_100%_0%,_100%_calc(100%_-_10px),_calc(100%_-_10px)_100%,_0%_100%,_0%_10px)]" />
              </div>
              <div className="form-group mb-8">
                <label htmlFor="email" className="block text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-2">Quantum Address</label>
                <input type="email" id="email" name="email" placeholder="your.id@nexusflow.com" required className="w-full p-4 bg-cyan-400/5 border border-white/20 text-white placeholder:text-gray-400 [clip-path:polygon(10px_0%,_100%_0%,_100%_calc(100%_-_10px),_calc(100%_-_10px)_100%,_0%_100%,_0%_10px)]" />
              </div>
              <div className="form-group mb-8">
                <label htmlFor="message" className="block text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-2">Transmission</label>
                <textarea id="message" name="message" rows={5} placeholder="Compose your message to the network..." required className="w-full p-4 bg-cyan-400/5 border border-white/20 text-white placeholder:text-gray-400 min-h-[120px] [clip-path:polygon(10px_0%,_100%_0%,_100%_calc(100%_-_10px),_calc(100%_-_10px)_100%,_0%_100%,_0%_10px)]" />
              </div>
              <button type="submit" className="btn-primary btn-submit w-full cursor-pointer text-base mt-4 border-0 transition-all duration-300 bg-gradient-to-tr from-cyan-400 to-purple-700 text-[#0f051a] font-extrabold uppercase tracking-[2px] py-4 [clip-path:polygon(20px_0%,_100%_0%,_calc(100%_-_20px)_100%,_0%_100%)]">Transmit Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer mt-10 pt-10 pb-7 px-4 border-t border-white/20 text-center bg-black/50">
        <div className="footer-content max-w-[1400px] mx-auto">
          <div className="footer-links flex flex-col gap-4 items-center justify-center mb-6">
            <div className="flex flex-wrap items-center justify-center gap-2 text-gray-400 uppercase text-sm tracking-wide">
              <a href="#" className="px-2 hover:text-cyan-400 transition">Privacy Policy</a>
              <span className="footer-separator hidden">•</span>
              <a href="#" className="px-2 hover:text-cyan-400 transition">Terms of Service</a>
              <span className="footer-separator hidden">•</span>
              <a href="#" className="px-2 hover:text-cyan-400 transition">Documentation</a>
              <span className="footer-separator hidden">•</span>
              <a href="#" className="px-2 hover:text-cyan-400 transition">Contact Support</a>
            </div>
          </div>
          <div className="footer-bottom text-gray-400 text-[0.9rem]">
            <p>&copy; 2025 NexusFlow Systems. All realities reserved.</p>
            <p className="footer-credit text-sm opacity-80 mt-2">
              Brought to you by
              {" "}
              <a href="https://templatemo.com" target="_blank" rel="noopener nofollow" className="text-cyan-400 font-semibold hover:underline">TemplateMo</a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
