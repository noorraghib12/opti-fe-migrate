export default function FeaturesSection(){
  return (
    <section id="features" className="features fade-up py-[120px] px-8 relative">
      <div className="features-container max-w-[1400px] mx-auto">
        <div className="section-header text-center mb-20">
          <h2 className="section-title text-5xl font-extrabold text-[#00ffff] uppercase tracking-[2px] mb-4">Core Systems</h2>
          <p className="section-subtitle text-[1.2rem] text-[#a1a1aa] max-w-[600px] mx-auto">Advanced modules designed for maximum efficiency and seamless integration</p>
        </div>
        <div className="features-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {[
            {icon:'⚡',title:'Quantum Processing',desc:'Experience lightning-fast data processing with our quantum-inspired algorithms that handle complex workflows in microseconds.'},
            {icon:'🔮',title:'Neural Networks',desc:'AI-powered decision making that learns from your team\'s patterns and optimizes collaboration in real-time.'},
            {icon:'🌐',title:'Holographic Interface',desc:'Immersive 3D workspace that transcends traditional boundaries, bringing remote teams into a shared reality.'},
            {icon:'🛡️',title:'Quantum Encryption',desc:'Military-grade security protocols with quantum encryption that makes your data literally impossible to breach.'},
            {icon:'🚀',title:'Hyperdrive Sync',desc:'Instantaneous synchronization across all devices and platforms with zero latency, no matter the distance.'},
            {icon:'🎯',title:'Mind Reading Analytics',desc:'Predictive analytics so advanced, it anticipates your team\'s needs before they even know what they need.'},
          ].map((f,i)=> (
            <div key={i} className="feature-card bg-[rgba(229,231,235,0.03)] border border-[rgba(229,231,235,0.2)] p-12 relative transition-all duration-300 backdrop-blur-[10px] [clip-path:polygon(20px_0%,100%_0%,100%_calc(100%_-_20px),calc(100%_-_20px)_100%,0%_100%,0%_20px)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,255,255,0.2)]">
              <div className="feature-icon w-20 h-20 bg-[linear-gradient(135deg,#00ffff,#7c3aed)] flex items-center justify-center mb-8 text-[2rem] [clip-path:polygon(15px_0%,_100%_0%,_100%_calc(100%_-_15px),_calc(100%_-_15px)_100%,_0%_100%,_0%_15px)] shadow-[0_0_30px_rgba(0,255,255,0.5)]">{f.icon}</div>
              <h3 className="text-xl font-bold text-[#00ffff] uppercase tracking-[1px] mb-4">{f.title}</h3>
              <p className="text-[#a1a1aa] leading-8">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
