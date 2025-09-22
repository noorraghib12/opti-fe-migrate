import React from 'react';
import { JSX } from 'react/jsx-runtime';

export default function Hero(): JSX.Element {
  return (
    <section id="home" className="hero">
      <div className="hero-content mt-[120px] max-w-[1000px] mx-auto animate-[heroAppear_2.5s_ease-out]">
        <div className="hero-subtitle">Welcome to the Future</div>
        <h1 className="text-[clamp(2.2rem,6vw,4rem)] mb-[30px] bg-[linear-gradient(135deg,#e0a3ff_0%,#ff69b4_30%,#9370db_60%,#e0a3ff_100%)] bg-[length:300%_300%] bg-clip-text text-transparent font-extrabold leading-[1.1] tracking-[-0.02em] opacity-0 animate-[slideInFromRight_1.2s_ease_0.6s_forwards,modernGradient_8s_ease_0.6s_infinite]">
          NEURAL INTERFACE
        </h1>

        <div className="hero-description">
          <p className="text-[1.2rem] text-[#d1d1d1] leading-[1.7] font-light">
            Experience the convergence of consciousness and technology through quantum-enhanced glassmorphism interfaces. Step into a reality where digital dreams become tangible experiences, transcending the boundaries between mind and machine.
          </p>
        </div>

        <div className="hero-stats md:grid-cols-4 md:gap-10 max-w-[640px] opacity-0 [animation:slideUpStagger_1.2s_ease_1.2s_forwards]">
          <div className="hero-stat bg-[linear-gradient(135deg,rgba(224,163,255,0.06),rgba(255,105,180,0.04))] border border-[rgba(224,163,255,0.15)] rounded-[12px] backdrop-blur-[10px] transition-all duration-400">
            <span className="hero-stat-number block text-[#e0a3ff] mb-2 [text-shadow:0_0_15px_rgba(224,163,255,0.4)]">99.9%</span>
            <span className="hero-stat-label">Neural Sync Rate</span>
          </div>
          <div className="hero-stat bg-[linear-gradient(135deg,rgba(224,163,255,0.06),rgba(255,105,180,0.04))] border border-[rgba(224,163,255,0.15)] rounded-[12px] backdrop-blur-[10px] transition-all duration-400">
            <span className="hero-stat-number block text-[#e0a3ff] mb-2 [text-shadow:0_0_15px_rgba(224,163,255,0.4)]">∞</span>
            <span className="hero-stat-label">Processing Power</span>
          </div>
          <div className="hero-stat bg-[linear-gradient(135deg,rgba(224,163,255,0.06),rgba(255,105,180,0.04))] border border-[rgba(224,163,255,0.15)] rounded-[12px] backdrop-blur-[10px] transition-all duration-400">
            <span className="hero-stat-number block text-[#e0a3ff] mb-2 [text-shadow:0_0_15px_rgba(224,163,255,0.4)]">0.001</span>
            <span className="hero-stat-label">Latency (ms)</span>
          </div>
          <div className="hero-stat bg-[linear-gradient(135deg,rgba(224,163,255,0.06),rgba(255,105,180,0.04))] border border-[rgba(224,163,255,0.15)] rounded-[12px] backdrop-blur-[10px] transition-all duration-400">
            <span className="hero-stat-number block text-[#e0a3ff] mb-2 [text-shadow:0_0_15px_rgba(224,163,255,0.4)]">24/7</span>
            <span className="hero-stat-label">Neural Access</span>
          </div>
        </div>

        <div className="cta-buttons">
          <a href="#features" className="cta-button">Initialize Neural Link</a>
          <a href="#showcase" className="cta-button secondary">Explore Matrix</a>
        </div>
      </div>
    </section>
  );
}
