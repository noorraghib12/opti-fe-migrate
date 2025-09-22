'use client';

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full p-4 md:p-4 bg-[rgba(15,15,35,0.9)] backdrop-blur-2xl border-b border-[rgba(229,231,235,0.2)] z-[10000] transition-all duration-300">
      <div className="nav-container max-w-[1400px] mx-auto flex flex-row items-center gap-0">
        <a href="#top" className="logo inline-block relative cursor-pointer no-underline transition-all duration-300 text-[1.8rem] font-bold text-[#00ffff] [text-shadow:0_0_20px_#00ffff]">NexusFlow</a>
        <ul className="nav-links hidden md:flex list-none gap-10 mx-8">
          <li><a href="#features" className="text-[#a1a1aa] no-underline font-medium uppercase text-sm tracking-[1px] hover:text-[#00ffff]">Features</a></li>
          <li><a href="#pricing" className="text-[#a1a1aa] no-underline font-medium uppercase text-sm tracking-[1px] hover:text-[#00ffff]">Pricing</a></li>
          <li><a href="#stats" className="text-[#a1a1aa] no-underline font-medium uppercase text-sm tracking-[1px] hover:text-[#00ffff]">Stats</a></li>
          <li><a href="#contact" className="text-[#a1a1aa] no-underline font-medium uppercase text-sm tracking-[1px] hover:text-[#00ffff]">Contact</a></li>
        </ul>
        <div className="nav-bottom ml-auto hidden md:block">
          <a href="#" className="cyber-button inline-block bg-[linear-gradient(135deg,#00ffff,#7c3aed)] text-[#0f051a] py-3.5 px-6 text-sm font-bold uppercase tracking-[2px] no-underline">Access Terminal</a>
        </div>
        <button id="mobileMenuBtn" className="mobile-menu-button md:hidden inline-flex items-center justify-center w-[30px] h-[30px] text-[#00ffff] relative" aria-label="Open menu">
          <div className="hamburger relative w-[25px] h-5 m-auto">
            <span className="block absolute h-[2px] w-full bg-[#00ffff] left-0 top-0" />
            <span className="block absolute h-[2px] w-full bg-[#00ffff] left-0 top-[9px]" />
            <span className="block absolute h-[2px] w-full bg-[#00ffff] left-0 top-[18px]" />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div id="mobileMenuOverlay" className="mobile-menu-overlay fixed top-0 left-0 w-full h-screen bg-black/70 z-[9998] opacity-0 invisible transition-all duration-[300ms] ease-[ease] [&.active]:opacity-100 [&.active]:visible" />

      {/* Mobile Menu Panel */}
      <div id="mobileMenu" className="mobile-menu fixed top-[78px] right-[-100%] w-[90%] max-w-[350px] h-[calc(100vh-78px)] bg-[#0f051a] border-l border-[rgba(229,231,235,0.2)] z-[9999] transition-[right] duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)] overflow-y-auto flex flex-col shadow-2xl [&.active]:right-0">
        <div className="mobile-menu-header p-6 border-b border-[rgba(229,231,235,0.2)] flex items-center justify-between">
          <a href="#top" className="mobile-menu-logo text-2xl font-bold text-[#00ffff] [text-shadow:0_0_15px_#00ffff] no-underline inline-block">NexusFlow</a>
          <button id="mobileMenuClose" className="mobile-menu-close bg-transparent border-0 text-[#00ffff] text-2xl cursor-pointer w-[30px] h-[30px] flex items-center justify-center" aria-label="Close menu">✕</button>
        </div>
        <div className="mobile-menu-cta p-6 border-b border-[rgba(229,231,235,0.2)]">
          <a href="#" className="cyber-button block bg-[linear-gradient(135deg,#00ffff,#7c3aed)] text-[#0f051a] py-3.5 px-6 text-sm font-bold uppercase tracking-[2px] no-underline text-center">Access Terminal</a>
        </div>
        <nav className="mobile-menu-nav">
          <ul className="list-none m-0 p-0">
            <li><a href="#features" className="block px-8 py-6 text-[#a1a1aa] no-underline font-semibold uppercase tracking-[1px] border-b border-[rgba(229,231,235,0.1)]">Features</a></li>
            <li><a href="#pricing" className="block px-8 py-6 text-[#a1a1aa] no-underline font-semibold uppercase tracking-[1px] border-b border-[rgba(229,231,235,0.1)]">Pricing</a></li>
            <li><a href="#stats" className="block px-8 py-6 text-[#a1a1aa] no-underline font-semibold uppercase tracking-[1px] border-b border-[rgba(229,231,235,0.1)]">Stats</a></li>
            <li><a href="#contact" className="block px-8 py-6 text-[#a1a1aa] no-underline font-semibold uppercase tracking-[1px]">Contact</a></li>
          </ul>
        </nav>
      </div>
    </nav>
  );
}
