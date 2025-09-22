import React from 'react';

export default function Features() {
  const features = [
    { icon: "⚡", title: "Quantum Processing", text: "Experience lightning-fast data processing with our quantum-inspired algorithms that handle complex workflows in microseconds." },
    { icon: "🔮", title: "Neural Networks", text: "AI-powered decision making that learns from your team's patterns and optimizes collaboration in real-time." },
    { icon: "🌐", title: "Holographic Interface", text: "Immersive 3D workspace that transcends traditional boundaries, bringing remote teams into a shared reality." },
    { icon: "🛡️", title: "Quantum Encryption", text: "Military-grade security protocols with quantum encryption that makes your data literally impossible to breach." },
    { icon: "🚀", title: "Hyperdrive Sync", text: "Instantaneous synchronization across all devices and platforms with zero latency, no matter the distance." },
    { icon: "🎯", title: "Mind Reading Analytics", text: "Predictive analytics so advanced, it anticipates your team's needs before they even know what they need." },
  ];

  return (
    <section className="features fade-up py-[120px] px-8 relative !z-[10000]" id="features">
      <div className="features-container max-w-[1400px] mx-auto">
        <div className="section-header text-center mb-20">
          <h2 className="section-title text-3xl font-extrabold text-cyan-400 uppercase tracking-wider mb-4 relative">Core Systems</h2>
          <p className="section-subtitle text-[1.2rem] text-gray-400 max-w-[600px] mx-auto">Advanced modules designed for maximum efficiency and seamless integration</p>
        </div>

        <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((f) => (
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
  );
}
