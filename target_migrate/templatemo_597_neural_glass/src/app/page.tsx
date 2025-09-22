import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      const scrolled = window.pageYOffset;
      if (header) {
        if (scrolled > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    const updateActiveMenuItem = () => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
      let currentSection = '';
      const scrollPos = window.pageYOffset + 100;
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id') || '';
        }
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    };

    const handleClickOutside = (e: MouseEvent) => {
      const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
      const mobileNav = document.querySelector('.mobile-nav');
      if (mobileMenuToggle && mobileNav && !mobileMenuToggle.contains(e.target as Node) && !mobileNav.contains(e.target as Node)) {
        setMenuActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', updateActiveMenuItem);
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', updateActiveMenuItem);
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-20 animate-[backgroundPulse_14s_ease-in-out_infinite] bg-[radial-gradient(circle_at_15%_85%,_rgba(75,0,130,0.7)_0%,_transparent_50%),_radial-gradient(circle_at_85%_15%,_rgba(139,37,99,0.8)_0%,_transparent_50%),_radial-gradient(circle_at_45%_60%,_rgba(128,0,128,0.6)_0%,_transparent_50%),_radial-gradient(circle_at_70%_40%,_rgba(34,139,34,0.4)_0%,_transparent_50%),_linear-gradient(135deg,#0a0a0a_0%,#2d1b3d_50%,#000000_100%)]">
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute border border-[rgba(0,255,255,0.3)] animate-[floatShape_20s_linear_infinite]"></div>
        <div className="absolute border border-[rgba(0,255,255,0.3)] animate-[floatShape_20s_linear_infinite]"></div>
        <div className="absolute border border-[rgba(0,255,255,0.3)] animate-[floatShape_20s_linear_infinite]"></div>
        <div className="absolute border border-[rgba(0,255,255,0.3)] animate-[floatShape_20s_linear_infinite]"></div>
      </div>

      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <div className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[neuralPulse_3s_ease-in-out_infinite]"></div>
        <div className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[neuralPulse_3s_ease-in-out_infinite]"></div>
        <div className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[neuralPulse_3s_ease-in-out_infinite]"></div>
      </div>

      <header className="bg-[rgba(255,255,255,0.05)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.1)] rounded-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        <nav>
          <Link href="#home">
            <a className="flex items-center gap-3 text-[28px] font-bold bg-gradient-to-br from-[#e0a3ff] via-[#e0a3ff] to-[#ff69b4] bg-clip-text text-transparent no-underline animate-[logoGlow_3s_ease-in-out_infinite] transition-all duration-300 ease-in">
              <svg className="w-10 h-10 drop-shadow-[0_0_10px_#e0a3ff]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#e0a3ff' }} />
                    <stop offset="50%" style={{ stopColor: '#ff69b4' }} />
                    <stop offset="100%" style={{ stopColor: '#9370db' }} />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="30" r="8" fill="url(#logoGradient)" opacity="0.8">
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="30" cy="60" r="6" fill="url(#logoGradient)" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="70" cy="65" r="7" fill="url(#logoGradient)" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="1.8s" repeatCount="indefinite" />
                </circle>
                <line x1="50" y1="30" x2="30" y2="60" stroke="url(#logoGradient)" strokeWidth="2" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
                </line>
                <line x1="50" y1="30" x2="70" y2="65" stroke="url(#logoGradient)" strokeWidth="2" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite" />
                </line>
                <line x1="30" y1="60" x2="70" y2="65" stroke="url(#logoGradient)" strokeWidth="2" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2.8s" repeatCount="indefinite" />
                </line>
              </svg>
              NEURALGLASS
            </a>
          </Link>
          <ul className="hidden">
            <li><Link href="#features"><a>Neural</a></Link></li>
            <li><Link href="#showcase"><a>Matrix</a></Link></li>
            <li><Link href="#timeline"><a>Evolution</a></Link></li>
            <li><Link href="#contact"><a>Connect</a></Link></li>
            <li><a href="https://example.com" target="_blank" rel="noopener noreferrer" className="external-link">External</a></li>
          </ul>
          <div className="flex mobile-menu-toggle" onClick={toggleMenu}>
            <div className="w-[25px] h-[3px] bg-gradient-to-br from-[#e0a3ff] to-[#ff69b4] my-1.5 rounded-[2px] transition-all duration-300 ease-linear"></div>
            <div className="w-[25px] h-[3px] bg-gradient-to-br from-[#e0a3ff] to-[#ff69b4] my-1.5 rounded-[2px] transition-all duration-300 ease-linear"></div>
            <div className="w-[25px] h-[3px] bg-gradient-to-br from-[#e0a3ff] to-[#ff69b4] my-1.5 rounded-[2px] transition-all duration-300 ease-linear"></div>
          </div>
        </nav>
        <div className={`fixed top-[90px] left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] bg-[rgba(0,0,0,0.95)] backdrop-blur-[25px] border border-[rgba(255,255,255,0.2)] rounded-[20px] p-[30px] ${menuActive ? 'flex' : 'hidden'} flex-col gap-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.8)]`}>
          <Link href="#features"><a>Neural</a></Link>
          <Link href="#showcase"><a>Matrix</a></Link>
          <Link href="#timeline"><a>Evolution</a></Link>
          <Link href="#contact"><a>Connect</a></Link>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="external-link">External</a>
        </div>
      </header>

      <section className="flex items-center justify-center text-center relative overflow-hidden" id="home">
        <div className="px-5 py-10">
          <div className="text-[0.9rem] text-[#e0a3ff] mb-[25px] opacity-0 animate-[slideInFromLeft_1.2s_ease_0.3s_forwards] uppercase tracking-[0.4em] relative inline-block font-light">Welcome to the Future</div>
          <h1>NEURAL INTERFACE</h1>
          <div className="max-w-[700px] mx-auto my-[40px] mb-[50px] opacity-0 text-center animation-fadeInScale animation-duration-[1.2s] animation-ease animation-delay-[0.9s] animation-fill-forwards">
            <p>Experience the convergence of consciousness and technology through quantum-enhanced glassmorphism interfaces. Step into a reality where digital dreams become tangible experiences, transcending the boundaries between mind and machine.</p>
          </div>
          <div className="grid grid-cols-2 gap-5 my-[40px] mx-auto mb-[35px]">
            <div className="p-[15px]">
              <span className="text-xl">99.9%</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-normal">Neural Sync Rate</span>
            </div>
            <div className="p-[15px]">
              <span className="text-xl"></span>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-normal">Processing Power</span>
            </div>
            <div className="p-[15px]">
              <span className="text-xl">0.001</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-normal">Latency (ms)</span>
            </div>
            <div className="p-[15px]">
              <span className="text-xl">24/7</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-normal">Neural Access</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Link href="#features"><a className="w-full max-w-[280px] text-center">Initialize Neural Link</a></Link>
            <Link href="#showcase"><a className="w-full max-w-[280px] text-center bg-transparent border-2 border-[#e0a3ff] text-[#e0a3ff] shadow-[0_4px_15px_rgba(224,163,255,0.1)]">Explore Matrix</a></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
