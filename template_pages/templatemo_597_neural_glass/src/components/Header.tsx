"use client";

import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLDivElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const t = e.target as Node;
      if (!toggleRef.current || !drawerRef.current) return;
      if (!toggleRef.current.contains(t) && !drawerRef.current.contains(t)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      data-react-nav="true"
      className="glass fixed top-5 left-1/2 -translate-x-1/2 z-[100] w-[96%] max-w-[1200px] px-[35px] py-[18px] rounded-[25px] border border-[rgba(224,163,255,0.15)] bg-[rgba(224,163,255,0.08)] backdrop-blur-[25px] shadow-[0_8px_32px_rgba(0,0,0,0.3),_inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-300 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]"
    >
      <nav className="flex items-center justify-between">
        <a href="#home" className="logo flex items-center gap-3 text-[28px] font-bold bg-gradient-to-br from-[#e0a3ff] to-[#ff69b4] bg-clip-text text-transparent [-webkit-text-fill-color:transparent] no-underline animate-[logoGlow_3s_ease-in-out_infinite] transition-all duration-300 ease-[ease]">
          <svg
            className="logo-icon w-10 h-10 drop-shadow-[0_0_10px_#e0a3ff]"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#e0a3ff" }} />
                <stop offset="50%" style={{ stopColor: "#ff69b4" }} />
                <stop offset="100%" style={{ stopColor: "#9370db" }} />
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

        <ul className="nav-links hidden md:flex list-none items-center gap-3">
          <li>
            <a href="#features" className="text-white no-underline py-3 px-5 rounded-[15px] text-[0.95rem] font-medium tracking-[0.02em] transition-all">
              Neural
            </a>
          </li>
          <li>
            <a href="#showcase" className="text-white no-underline py-3 px-5 rounded-[15px] text-[0.95rem] font-medium tracking-[0.02em] transition-all">
              Matrix
            </a>
          </li>
          <li>
            <a href="#timeline" className="text-white no-underline py-3 px-5 rounded-[15px] text-[0.95rem] font-medium tracking-[0.02em] transition-all">
              Evolution
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white no-underline py-3 px-5 rounded-[15px] text-[0.95rem] font-medium tracking-[0.02em] transition-all">
              Connect
            </a>
          </li>
          <li>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link text-white no-underline py-3 px-5 rounded-[15px] text-[0.95rem] font-medium tracking-[0.02em] transition-all"
            >
              External
            </a>
          </li>
        </ul>

        <div
          ref={toggleRef}
          className={`mobile-menu-toggle md:hidden flex cursor-pointer p-2 rounded-lg bg-white/5 border border-white/10 transition-all duration-300 ${open ? "active" : ""}`}
          role="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="hamburger-line w-[25px] h-[3px] bg-gradient-to-br from-[#e0a3ff] to-[#ff69b4] my-[3px] mx-0 rounded-sm transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]" />
          <div className="hamburger-line w-[25px] h-[3px] bg-gradient-to-br from-[#e0a3ff] to-[#ff69b4] my-[3px] mx-0 rounded-sm transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]" />
          <div className="hamburger-line w-[25px] h-[3px] bg-gradient-to-br from-[#e0a3ff] to-[#ff69b4] my-[3px] mx-0 rounded-sm transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]" />
        </div>
      </nav>

      <div
        ref={drawerRef}
        className={`mobile-nav fixed top-[90px] left-1/2 -translate-x-1/2 transform w-[90%] max-w-[400px] bg-[rgba(0,0,0,0.95)] backdrop-blur-[25px] border border-[rgba(255,255,255,0.2)] rounded-[20px] p-[30px] ${open ? "flex animate-[slideDown_0.3s_ease-out]" : "hidden"} flex-col gap-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.8)] ${open ? "active" : ""}`}
      >
        <a href="#features" onClick={closeMenu}>
          Neural
        </a>
        <a href="#showcase" onClick={closeMenu}>
          Matrix
        </a>
        <a href="#timeline" onClick={closeMenu}>
          Evolution
        </a>
        <a href="#contact" onClick={closeMenu}>
          Connect
        </a>
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="external-link"
          onClick={closeMenu}
        >
          External
        </a>
      </div>
    </header>
  );
}
