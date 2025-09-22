export default function HeroSection(){
  return (
    <section className="hero pt-[150px] px-8 pb-[100px] text-center relative min-h-screen flex items-center">
      <div className="hero-container max-w-[1400px] w-full mx-auto">
        <h1 className="hero-title text-[clamp(3rem,8vw,6rem)] font-black uppercase tracking-[3px] mb-8 leading-[1.2]">
          <span className="hero-nexus bg-gradient-to-br from-[#00ffff] to-[#00ccff] bg-clip-text text-transparent inline-block animate-[cyanPulse_3s_ease-in-out_infinite] relative max-[480px]:block">NEXUS</span>
          <span className="hero-flow bg-gradient-to-br from-[#7c3aed] to-[#ff00ff] bg-clip-text text-transparent inline-block ml-1 animate-[purplePulse_3s_ease-in-out_infinite] [animation-delay:1.5s] relative max-[480px]:block max-[480px]:ml-0">FLOW</span>
        </h1>
        <p className="hero-subtitle text-[1.5rem] text-[#a1a1aa] max-w-[800px] mx-auto font-light mb-12">The quantum leap in team collaboration. Connect minds, sync realities, achieve impossible.</p>
        <div className="hero-buttons flex gap-8 justify-center flex-wrap max-[768px]:flex-col max-[768px]:items-center">
          <a href="#" className="btn-primary bg-[linear-gradient(135deg,#00ffff,#7c3aed)] text-[#0f051a] py-[1.2rem] px-[3rem] font-bold uppercase tracking-[2px] no-underline clip-path-[polygon(20px_0%,_100%_0%,_calc(100%_-_20px)_100%,_0%_100%)]">Initialize System</a>
          <a href="#" className="btn-secondary bg-transparent text-[#00ffff] py-[1.2rem] px-[3rem] border-2 border-[#00ffff] font-bold uppercase tracking-[2px] no-underline clip-path-[polygon(20px_0%,_100%_0%,_calc(100%_-_20px)_100%,_0%_100%)] max-[768px]:w-full max-[768px]:max-w-[300px]">View Documentation</a>
        </div>
      </div>
    </section>
  );
}
