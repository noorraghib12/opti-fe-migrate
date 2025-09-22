export default function Features() {
  const features = [
    {
      icon: '🧠',
      title: 'Neural Processing',
      text:
        'Advanced AI-driven interfaces that adapt to your consciousness patterns, creating personalized digital experiences that evolve with your neural pathways.',
      bg: '/images/templatemo-neural-01.jpg',
    },
    {
      icon: '⚡',
      title: 'Quantum Speed',
      text:
        'Instantaneous data processing through quantum tunneling algorithms, delivering response times that exist outside conventional spacetime constraints.',
      bg: '/images/templatemo-neural-02.jpg',
    },
    {
      icon: '🌐',
      title: 'Dimensional Sync',
      text:
        'Seamless synchronization across multiple reality layers, ensuring your digital presence remains consistent throughout parallel dimensions.',
      bg: '/images/templatemo-neural-03.jpg',
    },
  ];

  return (
    <section id="features" className="features relative overflow-hidden py-[150px]">
      <div className="max-w-[1240px] mx-auto px-5">
        <h2 className="section-title text-center text-[clamp(2.5rem,6vw,4rem)] mb-20 text-[#00ffff] relative">QUANTUM CAPABILITIES</h2>
        <div className="flex flex-col gap-[60px]">
          {features.map((f, idx) => {
            const isEven = (idx % 2) === 1;
            return (
              <div
                key={f.title}
                className={`flex flex-col items-center gap-20 relative ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                <div className="flex-1 p-[50px] glass [transform:skew(-5deg)] transition-all duration-300 hover:[transform:skew(-5deg)_translateY(-10px)] hover:shadow-[0_30px_60px_rgba(0,255,255,0.2)]">
                  <div className="text-[4rem] mb-[25px] bg-gradient-to-br from-[#ff0080] to-[#8000ff] bg-clip-text text-transparent [-webkit-text-fill-color:transparent]">{f.icon}</div>
                  <h3 className="text-white text-[2.2rem] mb-5">{f.title}</h3>
                  <p className="text-[#cccccc] text-[1.1rem] leading-[1.8]">{f.text}</p>
                </div>
                <div
                  className="feature-visual glass flex-1 h-[300px] relative rounded-[20px] overflow-hidden bg-cover bg-center bg-no-repeat transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_20px_40px_rgba(224,163,255,0.3)]"
                  style={{ backgroundImage: `url(${f.bg})` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
