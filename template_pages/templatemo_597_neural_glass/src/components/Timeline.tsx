export default function Timeline() {
  return (
    <section id="timeline" className="timeline py-[60px] px-0">
      <h2 className="section-title">EVOLUTION TIMELINE</h2>
      <div className="timeline-container max-w-[1100px] mx-auto my-0 relative px-5 py-0">
        <div className="timeline-line absolute left-[30px] top-0 bottom-0 w-1 bg-gradient-to-b from-[#e0a3ff] via-[#ff69b4] to-[#9370db] -translate-x-1/2 rounded shadow-[0_0_20px_rgba(224,163,255,0.3)]" />

        <div className="timeline-item flex justify-end pr-[60px] relative mb-[60px]">
          <div className="timeline-content glass max-w-full p-[50px] px-[40px]">
            <div className="timeline-year text-[1.8rem] text-[#e0a3ff] mb-5 font-bold [text-shadow:0_0_15px_rgba(224,163,255,0.4)]">2024</div>
            <h4>Genesis Protocol</h4>
            <p>
              NeuralGlass is a cutting-edge cyberpunk glassmorphism HTML template featuring a striking purple, pink, and green color palette with futuristic neural network aesthetics.
            </p>
          </div>
          <div className="timeline-dot absolute left-[30px] top-[60px] -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white/20 bg-gradient-to-br from-[#ff69b4] to-[#e0a3ff] shadow-[0_0_25px_rgba(255,105,180,0.6),_0_4px_15px_rgba(0,0,0,0.3)] z-[1]" />
        </div>

        <div className="timeline-item flex justify-end pr-[60px] relative mb-[60px]">
          <div className="timeline-content glass max-w-full p-[50px] px-[40px]">
            <div className="timeline-year text-[1.8rem] text-[#e0a3ff] mb-5 font-bold [text-shadow:0_0_15px_rgba(224,163,255,0.4)]">2025</div>
            <h4>Matrix Integration</h4>
            <p>
              Built with pure HTML/CSS and vanilla JavaScript, it offers smooth scrolling, mobile-responsive navigation with hamburger menu, parallax effects, and dynamic visual elements that respond to user interaction.
            </p>
          </div>
          <div className="timeline-dot absolute left-[30px] top-[60px] -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white/20 bg-gradient-to-br from-[#ff69b4] to-[#e0a3ff] shadow-[0_0_25px_rgba(255,105,180,0.6),_0_4px_15px_rgba(0,0,0,0.3)] z-[1]" />
        </div>

        <div className="timeline-item flex justify-end pr-[60px] relative mb-[60px]">
          <div className="timeline-content glass max-w-full p-[50px] px-[40px]">
            <div className="timeline-year text-[1.8rem] text-[#e0a3ff] mb-5 font-bold [text-shadow:0_0_15px_rgba(224,163,255,0.4)]">2026</div>
            <h4>Quantum Leap</h4>
            <p>
              This HTML CSS template is brought to you by TemplateMo website. Perfect for tech startups, AI companies, gaming platforms, or any project requiring a bold, futuristic web presence.
            </p>
          </div>
          <div className="timeline-dot absolute left-[30px] top-[60px] -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white/20 bg-gradient-to-br from-[#ff69b4] to-[#e0a3ff] shadow-[0_0_25px_rgba(255,105,180,0.6),_0_4px_15px_rgba(0,0,0,0.3)] z-[1]" />
        </div>

        <div className="timeline-item flex justify-end pr-[60px] relative mb-[60px]">
          <div className="timeline-content glass max-w-full p-[50px] px-[40px]">
            <div className="timeline-year text-[1.8rem] text-[#e0a3ff] mb-5 font-bold [text-shadow:0_0_15px_rgba(224,163,255,0.4)]">2027</div>
            <h4>Neural Singularity</h4>
            <p>
              Human consciousness successfully merges with AI systems, creating hybrid intelligences that transcend biological limitations.
            </p>
          </div>
          <div className="timeline-dot absolute left-[30px] top-[60px] -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white/20 bg-gradient-to-br from-[#ff69b4] to-[#e0a3ff] shadow-[0_0_25px_rgba(255,105,180,0.6),_0_4px_15px_rgba(0,0,0,0.3)] z-[1]" />
        </div>
      </div>
    </section>
  );
}
