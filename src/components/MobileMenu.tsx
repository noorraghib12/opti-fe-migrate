import React from 'react';

export default function MobileMenu() {
  return (
    <>
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
    </>
  );
}
