export default function StatsSection(){
  return (
    <section id="stats" className="stats fade-up py-20 px-8 bg-[rgba(0,255,255,0.02)] border-t border-b border-[rgba(229,231,235,0.2)]">
      <div className="stats-container max-w-[1400px] mx-auto">
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div className="stat-item relative"><span className="stat-number block mb-2 text-[3rem] md:text-[4rem] font-black bg-gradient-to-br from-[#00ffff] to-[#7c3aed] bg-clip-text text-transparent filter drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]">50K+</span><span className="stat-label text-[1.1rem] text-[#a1a1aa] uppercase tracking-[1px]">Active Users</span></div>
          <div className="stat-item relative"><span className="stat-number block mb-2 text-[3rem] md:text-[4rem] font-black bg-gradient-to-br from-[#00ffff] to-[#7c3aed] bg-clip-text text-transparent filter drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]">99.9%</span><span className="stat-label text-[1.1rem] text-[#a1a1aa] uppercase tracking-[1px]">Uptime</span></div>
          <div className="stat-item relative"><span className="stat-number block mb-2 text-[3rem] md:text-[4rem] font-black bg-gradient-to-br from-[#00ffff] to-[#7c3aed] bg-clip-text text-transparent filter drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]">500M+</span><span className="stat-label text-[1.1rem] text-[#a1a1aa] uppercase tracking-[1px]">Tasks Processed</span></div>
          <div className="stat-item relative"><span className="stat-number block mb-2 text-[3rem] md:text-[4rem] font-black bg-gradient-to-br from-[#00ffff] to-[#7c3aed] bg-clip-text text-transparent filter drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]">180+</span><span className="stat-label text-[1.1rem] text-[#a1a1aa] uppercase tracking-[1px]">Countries</span></div>
        </div>
      </div>
    </section>
  );
}
