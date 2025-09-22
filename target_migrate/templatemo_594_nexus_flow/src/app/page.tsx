import EffectsClient from './components/EffectsClient';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Page() {
  return (
    <>
      {/* Enhanced Background Elements */}
      <div className="cyber-bg fixed top-0 left-0 w-full h-full bg-[#0f051a] overflow-hidden z-[-5]">
        <div className="cyber-gradient absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,255,0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(255,0,255,0.15)_0%,transparent_50%),radial-gradient(circle_at_40%_80%,rgba(124,58,237,0.15)_0%,transparent_50%),radial-gradient(circle_at_60%_20%,rgba(249,115,22,0.15)_0%,transparent_50%)] animate-[gradientRotate_30s_linear_infinite] blur-2xl" />
        <div id="matrixRain" className="matrix-rain hidden md:block absolute inset-0 overflow-hidden opacity-[0.15]" />
      </div>
      <div id="particlesContainer" className="particles fixed inset-0 overflow-hidden z-[-3] opacity-50" />
      <div id="dataStreams" className="data-streams hidden md:block fixed inset-0 overflow-hidden pointer-events-none z-[-3]" />
      <div className="orb orb1 fixed z-[-4] w-[300px] h-[300px] bg-[#00ffff] top-[10%] -left-[150px] blur-[100px] opacity-30 [animation:orbFloat_20s_ease-in-out_infinite] [animation-delay:0s]" />
      <div className="orb orb2 fixed z-[-4] w-[400px] h-[400px] bg-[#ff00ff] bottom-[10%] right-[-200px] blur-[100px] opacity-30 [animation:orbFloat_20s_ease-in-out_infinite] [animation-delay:5s]" />
      <div className="orb orb3 fixed z-[-4] top-1/2 left-1/2 w-[250px] h-[250px] bg-[#7c3aed] blur-[100px] opacity-30 [animation:orbFloat_20s_ease-in-out_infinite] [animation-delay:10s]" />
      <div className="grid-overlay fixed inset-0 z-[-2]">
        <div className="grid-lines absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] [background-size:50px_50px] animate-[gridMove_20s_linear_infinite]" />
        <div className="grid-glow absolute top-0 left-0 w-full h-full [background-image:linear-gradient(rgba(255,0,255,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(255,0,255,0.03)_2px,transparent_2px)] [background-size:100px_100px] animate-[gridMove_30s_linear_infinite_reverse]" />
      </div>
      <div className="scanlines fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]">
        <div className="absolute inset-0 [background:linear-gradient(transparent_0%,rgba(0,255,255,0.03)_50%,transparent_100%)] [background-size:100%_4px] animate-[scanline_8s_linear_infinite]" />
        <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      </div>
      <div className="noise-overlay hidden md:block fixed inset-0 opacity-[0.03] z-[-1] pointer-events-none [background-image:repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_4px),repeating-linear-gradient(-45deg,transparent,transparent_2px,rgba(0,255,255,0.02)_2px,rgba(0,255,255,0.02)_4px)]" />

      {/* Navigation and Content */}
      <Nav />
      <main>
        <a id="top" className="block" />
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
      <EffectsClient />
    </>
  );
}
