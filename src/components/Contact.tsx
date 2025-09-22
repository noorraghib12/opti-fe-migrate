"use client";
import React, { useCallback, useRef, useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const btn = btnRef.current;
    if (btn) {
      btn.textContent = 'TRANSMITTING...';
      btn.style.background = 'linear-gradient(135deg, #22d3ee, #ff00ff)';
    }

    setTimeout(() => {
      if (btn) {
        btn.textContent = 'TRANSMISSION COMPLETE';
        btn.style.background = '#22d3ee';
      }

      if (nameRef.current) nameRef.current.value = '';
      if (emailRef.current) emailRef.current.value = '';
      if (messageRef.current) messageRef.current.value = '';

      setTimeout(() => {
        if (btn) {
          btn.textContent = 'Transmit Message';
          btn.style.background = '';
        }
        setIsSubmitting(false);
      }, 3000);
    }, 2000);
  }, [isSubmitting]);

  return (
	  <section className="contact fade-up py-20 px-4 bg-[rgba(229,231,235,0.03)] border-t border-gray-200 border-opacity-20" id="contact">
      <div className="contact-container max-w-[1400px] mx-auto">
        <div className="section-header text-center mb-20">
          <h2 className="section-title text-3xl font-extrabold text-cyan-400 uppercase tracking-wider mb-4 relative ">Initialize Contact</h2>
          <p className="section-subtitle text-[1.2rem] text-gray-400 max-w-[600px] mx-auto">Send a transmission through the neural network</p>
        </div>

        <div className="contact-form-wrapper max-w-[600px] mx-auto mt-16">
          <form className="contact-form p-8 bg-[rgba(229,231,235,0.03)] border border-[rgba(229,231,235,0.2)] backdrop-blur-[10px] [clip-path:polygon(30px_0%,100%_0%,100%_calc(100%_-_30px),calc(100%_-_30px)_100%,0%_100%,0%_30px)] shadow-[0_0_30px_rgba(0,255,255,0.1)]" onSubmit={handleSubmit}>
            <div className="form-group mb-8">
              <label htmlFor="name" className="block text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-2">Neural ID</label>
              <input ref={nameRef} type="text" id="name" name="name" placeholder="Enter your designation" required className="w-full p-4 bg-cyan-400/5 border border-white/20 text-white placeholder:text-gray-400 [clip-path:polygon(10px_0%,_100%_0%,_100%_calc(100%_-_10px),_calc(100%_-_10px)_100%,_0%_100%,_0%_10px)]" />
            </div>
            <div className="form-group mb-8">
              <label htmlFor="email" className="block text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-2">Quantum Address</label>
              <input ref={emailRef} type="email" id="email" name="email" placeholder="your.id@nexusflow.com" required className="w-full p-4 bg-cyan-400/5 border border-white/20 text-white placeholder:text-gray-400 [clip-path:polygon(10px_0%,_100%_0%,_100%_calc(100%_-_10px),_calc(100%_-_10px)_100%,_0%_100%,_0%_10px)]" />
            </div>
            <div className="form-group mb-8">
              <label htmlFor="message" className="block text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-2">Transmission</label>
              <textarea ref={messageRef} id="message" name="message" rows={5} placeholder="Compose your message to the network..." required className="w-full p-4 bg-cyan-400/5 border border-white/20 text-white placeholder:text-gray-400 min-h-[120px] [clip-path:polygon(10px_0%,_100%_0%,_100%_calc(100%_-_10px),_calc(100%_-_10px)_100%,_0%_100%,_0%_10px)]" />
            </div>
            <button ref={btnRef} type="submit" className="btn-primary btn-submit w-full cursor-pointer text-base mt-4 border-0 transition-all duration-300 bg-gradient-to-tr from-cyan-400 to-purple-700 text-[#0f051a] font-extrabold uppercase tracking-[2px] py-4 [clip-path:polygon(20px_0%,_100%_0%,_calc(100%_-_20px)_100%,_0%_100%)]" disabled={isSubmitting}>Transmit Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
