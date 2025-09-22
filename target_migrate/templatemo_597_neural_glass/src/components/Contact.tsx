import React from 'react';
import { JSX } from 'react/jsx-runtime';

export default function Contact(): JSX.Element {
  return (
    <section id="contact" className="contact py-[150px] relative">
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="contact-info glass relative py-[60px] px-[40px]">
          <h3 className="text-[#00ffff] text-[2.5rem] mb-[30px]">ESTABLISH CONNECTION</h3>
          <p className="text-[#cccccc] text-[1.2rem] leading-[1.7] mb-[30px]">
            Ready to interface with the future? Our neural network specialists are standing by to guide you through the quantum realm of possibilities.
          </p>
          <p className="text-[#cccccc] text-[1.2rem] leading-[1.7] mb-[30px]">
            Connect through the dimensional gateway and let us initialize your journey into the digital consciousness matrix.
          </p>

          <div className="social-links flex gap-5 mt-10">
            <a
              href="#"
              className="glass flex items-center justify-center w-[60px] h-[60px] rounded-[15px] text-[#00ffff] text-[1.5rem] no-underline transition-all relative overflow-hidden"
              aria-label="Broadcast"
            >
              📡
            </a>
            <a
              href="#"
              className="glass flex items-center justify-center w-[60px] h-[60px] rounded-[15px] text-[#00ffff] text-[1.5rem] no-underline transition-all relative overflow-hidden"
              aria-label="Web"
            >
              🌐
            </a>
            <a
              href="#"
              className="glass flex items-center justify-center w-[60px] h-[60px] rounded-[15px] text-[#00ffff] text-[1.5rem] no-underline transition-all relative overflow-hidden"
              aria-label="Chat"
            >
              💬
            </a>
            <a
              href="#"
              className="glass flex items-center justify-center w-[60px] h-[60px] rounded-[15px] text-[#00ffff] text-[1.5rem] no-underline transition-all relative overflow-hidden"
              aria-label="Mail"
            >
              📨
            </a>
          </div>
        </div>

        <div className="glass py-[50px] px-[40px]">
          <div className="mb-[30px] relative">
            <input
              type="text"
              placeholder="Neural ID (Name)"
              required
              className="w-full p-[15px] bg-white/5 border border-white/20 rounded-[10px] text-white backdrop-blur-[10px] transition-all outline-none focus:border-[#00ffff] focus:shadow-[0_0_20px_rgba(0,255,255,0.3)] focus:bg-white/10 placeholder-[#888]"
            />
          </div>
          <div className="mb-[30px] relative">
            <input
              type="email"
              placeholder="Quantum Channel (Email)"
              required
              className="w-full p-[15px] bg-white/5 border border-white/20 rounded-[10px] text-white backdrop-blur-[10px] transition-all outline-none focus:border-[#00ffff] focus:shadow-[0_0_20px_rgba(0,255,255,0.3)] focus:bg-white/10 placeholder-[#888]"
            />
          </div>
          <div className="mb-[30px] relative">
            <input
              type="text"
              placeholder="Mission Objective (Subject)"
              required
              className="w-full p-[15px] bg-white/5 border border-white/20 rounded-[10px] text-white backdrop-blur-[10px] transition-all outline-none focus:border-[#00ffff] focus:shadow-[0_0_20px_rgba(0,255,255,0.3)] focus:bg-white/10 placeholder-[#888]"
            />
          </div>
          <div className="mb-[30px] relative">
            <textarea
              rows={5}
              placeholder="Transmission Data (Message)"
              required
              className="w-full p-[15px] bg-white/5 border border-white/20 rounded-[10px] text-white backdrop-blur-[10px] transition-all outline-none focus:border-[#00ffff] focus:shadow-[0_0_20px_rgba(0,255,255,0.3)] focus:bg-white/10 placeholder-[#888]"
            />
          </div>
          <button type="submit" className="submit-btn w-full p-[18px] bg-[linear-gradient(45deg,#00ffff,#ff0080)] border-0 rounded-[10px] text-black font-bold text-[1.1rem] cursor-pointer transition-all hover:-translate-y-[3px] hover:shadow-[0_10px_30px_rgba(0,255,255,0.4)]">TRANSMIT TO MATRIX</button>
        </div>
      </div>
    </section>
  );
}
