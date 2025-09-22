export default function ContactSection(){
  return (
    <section id="contact" className="contact fade-up py-20 px-4 bg-[rgba(0,255,255,0.02)] border-t border-[rgba(229,231,235,0.2)]">
      <div className="contact-container max-w-[1400px] mx-auto">
        <div className="section-header text-center mb-20">
          <h2 className="section-title text-5xl font-extrabold text-[#00ffff] uppercase tracking-[2px] mb-4">Initialize Contact</h2>
          <p className="section-subtitle text-[1.2rem] text-[#a1a1aa] max-w-[600px] mx-auto">Send a transmission through the neural network</p>
        </div>
        <div className="contact-form-wrapper max-w-[600px] mx-auto mt-16">
          <form className="contact-form bg-[rgba(229,231,235,0.03)] border border-[rgba(229,231,235,0.2)] p-8 md:p-12 backdrop-blur-[10px] clip-path-[polygon(30px_0%,_100%_0%,_100%_calc(100%_-_30px),_calc(100%_-_30px)_100%,_0%_100%,_0%_30px)] shadow-[0_0_30px_rgba(0,255,255,0.1)]">
            <div className="form-group mb-8">
              <label htmlFor="name" className="block text-[#00ffff] font-semibold uppercase tracking-[1px] text-sm mb-2">Neural ID</label>
              <input id="name" name="name" type="text" required placeholder="Enter your designation" className="w-full p-4 bg-[rgba(0,255,255,0.05)] border border-[rgba(229,231,235,0.2)] text-white font-mono text-base outline-none transition-all focus:border-[#00ffff] focus:bg-[rgba(0,255,255,0.08)] focus:shadow-[0_0_20px_rgba(0,255,255,0.3)] [clip-path:polygon(10px_0%,_100%_0%,_100%_calc(100%_-_10px),_calc(100%_-_10px)_100%,_0%_100%,_0%_10px)]" />
            </div>
            <div className="form-group mb-8">
              <label htmlFor="email" className="block text-[#00ffff] font-semibold uppercase tracking-[1px] text-sm mb-2">Quantum Address</label>
              <input id="email" name="email" type="email" required placeholder="your.id@nexusflow.com" className="w-full p-4 bg-[rgba(0,255,255,0.05)] border border-[rgba(229,231,235,0.2)] text-white font-mono text-base outline-none transition-all focus:border-[#00ffff] focus:bg-[rgba(0,255,255,0.08)] focus:shadow-[0_0_20px_rgba(0,255,255,0.3)] [clip-path:polygon(10px_0%,_100%_0%,_100%_calc(100%_-_10px),_calc(100%_-_10px)_100%,_0%_100%,_0%_10px)]" />
            </div>
            <div className="form-group mb-8">
              <label htmlFor="message" className="block text-[#00ffff] font-semibold uppercase tracking-[1px] text-sm mb-2">Transmission</label>
              <textarea id="message" name="message" rows={5} required placeholder="Compose your message to the network..." className="w-full p-4 bg-[rgba(0,255,255,0.05)] border border-[rgba(229,231,235,0.2)] text-white font-mono text-base outline-none transition-all focus:border-[#00ffff] focus:bg-[rgba(0,255,255,0.08)] focus:shadow-[0_0_20px_rgba(0,255,255,0.3)] [clip-path:polygon(10px_0%,_100%_0%,_100%_calc(100%_-_10px),_calc(100%_-_10px)_100%,_0%_100%,_0%_10px)] min-h-[120px] resize-y" />
            </div>
            <button type="submit" className="btn-primary btn-submit w-full cursor-pointer text-base mt-4 border-0 bg-[linear-gradient(135deg,#00ffff,#7c3aed)] text-[#0f051a] py-[1.2rem] px-[3rem] font-bold uppercase tracking-[2px] clip-path-[polygon(20px_0%,_100%_0%,_calc(100%_-_20px)_100%,_0%_100%)]">Transmit Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
