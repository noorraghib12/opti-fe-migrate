import React from 'react';

export default function Stats() {
  return (
	  <section className="stats fade-up py-20 px-8 bg-[rgba(229,231,235,0.03)] border-t border-b border-gray-200 border-opacity-20 !z-[10000]" id="stats">
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
  );
}
