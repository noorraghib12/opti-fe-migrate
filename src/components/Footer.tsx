import React from 'react';

export default function Footer() {
  return (
    <footer className="footer mt-10 pt-10 pb-7 px-4 border-t border-white/20 text-center bg-black/50 !z-[10000]">
      <div className="footer-content max-w-[1400px] mx-auto">
        <div className="footer-links flex flex-col gap-4 items-center justify-center mb-6">
          <div className="flex flex-wrap items-center justify-center gap-2 text-gray-400 uppercase text-sm tracking-wide">
            <a href="#" className="px-2 hover:text-cyan-400 transition">Privacy Policy</a>
            <span className="footer-separator hidden">•</span>
            <a href="#" className="px-2 hover:text-cyan-400 transition">Terms of Service</a>
            <span className="footer-separator hidden">•</span>
            <a href="#" className="px-2 hover:text-cyan-400 transition">Documentation</a>
            <span className="footer-separator hidden">•</span>
            <a href="#" className="px-2 hover:text-cyan-400 transition">Contact Support</a>
          </div>
        </div>
        <div className="footer-bottom text-gray-400 text-[0.9rem]">
          <p>&copy; 2025 NexusFlow Systems. All realities reserved.</p>
          <p className="footer-credit text-sm opacity-80 mt-2">
            Brought to you by{" "}
            <a href="https://templatemo.com" target="_blank" rel="noopener nofollow" className="text-cyan-400 font-semibold hover:underline">TemplateMo</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
