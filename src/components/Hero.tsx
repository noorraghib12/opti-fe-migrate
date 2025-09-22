import React from 'react';

export default function Hero() {
  return (
    <section className="hero pt-[150px] px-8 pb-[100px] text-center relative min-h-screen flex items-center">
      <div className="hero-container max-w-[1400px] mx-auto w-full">
        <h1 className="hero-title text-2xl font-black mb-8 uppercase tracking-[3px] leading-tight">
          <span className="hero-nexus inline-block">NEXUS</span>
          <span className="hero-flow inline-block ml-1">FLOW</span>
        </h1>
        <p className="hero-subtitle text-xl text-gray-400 mb-12 max-w-3xl mx-auto font-light opacity-90 bg-gradient-to-br from-gray-400 to-gray-200 bg-clip-text text-transparent">
          The quantum leap in team collaboration. Connect minds, sync realities, achieve impossible.
        </p>
        <div className="hero-buttons flex justify-center items-center gap-6">
          <a href="#" className="btn-primary bg-gradient-to-tr from-cyan-400 to-purple-700 text-[#0f051a] py-5 px-12 border-none no-underline font-extrabold uppercase tracking-[2px] relative overflow-hidden transition-all duration-300 [clip-path:polygon(20px_0%,_100%_0%,_calc(100%_-_20px)_100%,_0%_100%)]">Initialize System</a>
          <a href="#" className="btn-secondary w-full max-w-xs border-2 border-cyan-400 text-cyan-400 py-5 px-12 no-underline font-extrabold uppercase tracking-[2px] transition-all duration-300 [clip-path:polygon(20px_0%,_100%_0%,_calc(100%_-_20px)_100%,_0%_100%)]">View Documentation</a>
        </div>
      </div>
    </section>
  );
}
