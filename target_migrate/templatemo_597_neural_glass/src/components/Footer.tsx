import React from 'react';

export default function Footer(): JSX.Element {
  return (
    <footer className="text-center pt-[60px] pb-10 px-5 border-t border-[rgba(224,163,255,0.2)] bg-[rgba(0,0,0,0.5)] backdrop-blur-[20px]">
      <div className="footer-content max-w-[1200px] mx-auto my-0">
        <div className="footer-links flex justify-center flex-wrap gap-[30px] mb-[30px]">
          <a href="#features" className="text-[#cccccc] no-underline text-[0.9rem] transition-all hover:text-[#e0a3ff]">
            Neural Networks
          </a>
          <a href="#showcase" className="text-[#cccccc] no-underline text-[0.9rem] transition-all hover:text-[#e0a3ff]">
            Matrix Protocols
          </a>
          <a href="#timeline" className="text-[#cccccc] no-underline text-[0.9rem] transition-all hover:text-[#e0a3ff]">
            Evolution
          </a>
          <a href="#" className="text-[#cccccc] no-underline text-[0.9rem] transition-all hover:text-[#e0a3ff]">
            Privacy Policy
          </a>
          <a href="#" className="text-[#cccccc] no-underline text-[0.9rem] transition-all hover:text-[#e0a3ff]">
            Terms of Service
          </a>
          <a href="#" className="text-[#cccccc] no-underline text-[0.9rem] transition-all hover:text-[#e0a3ff]">
            Documentation
          </a>
          <a
            href="https://github.com/yourproject"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#cccccc] no-underline text-[0.9rem] transition-all hover:text-[#e0a3ff]"
          >
            GitHub
          </a>
        </div>

        <div className="footer-copyright text-[#888] text-[0.9rem] mb-[15px]">
          <p>&copy; 2025 NeuralGlass Interface. All quantum rights reserved across dimensions.</p>
        </div>

        <div className="footer-design text-[#666666] text-[0.85rem] mt-5">
          Design: {' '}
          <a
            href="https://templatemo.com"
            target="_blank"
            rel="nofollow noopener"
            className="text-[#e0a3ff] hover:text-[#ff69b4] no-underline"
          >
            TemplateMo
          </a>{' '}
          | Enhanced by Neural AI Systems |{' '}
          <a href="#" className="text-[#e0a3ff] hover:text-[#ff69b4] no-underline">
            Quantum Framework
          </a>
        </div>
      </div>
    </footer>
  );
}
