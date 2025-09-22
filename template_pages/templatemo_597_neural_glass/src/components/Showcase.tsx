import React from 'react';
import { JSX } from 'react/jsx-runtime';

type Item = {
  icon: string;
  title: string;
  text: string;
};

const items: Item[] = [
  { icon: '🔮', title: 'Holographic UI', text: '3D interfaces projected into reality space' },
  { icon: '🛡️', title: 'Quantum Security', text: 'Unbreakable encryption protocols' },
  { icon: '🚀', title: 'Warp Navigation', text: 'Instant travel between data nodes' },
  { icon: '💎', title: 'Crystal Storage', text: 'Infinite capacity data crystals' },
  { icon: '🎯', title: 'Neural Targeting', text: 'Thought-based interaction systems' },
  { icon: '⭐', title: 'Stellar Network', text: 'Galactic-scale connectivity matrix' },
];

export default function Showcase(): JSX.Element {
  return (
    <section id="showcase" className="showcase py-[150px] relative">
      <h2 className="section-title">MATRIX PROTOCOLS</h2>

      <div className="hexagon-container flex justify-center items-center flex-wrap gap-10 max-w-[1200px] mx-auto px-5">
        {items.map((item, idx) => {
          const isEven = (idx + 1) % 2 === 0;
          const innerBg = isEven
            ? 'bg-[linear-gradient(135deg,rgba(255,0,128,0.12),rgba(128,0,255,0.12))] border-[rgba(255,0,128,0.3)]'
            : 'bg-[linear-gradient(135deg,rgba(0,255,255,0.12),rgba(255,0,128,0.12))] border-[rgba(0,255,255,0.3)]';

          return (
            <div
              key={item.title}
              className="hexagon group w-[280px] h-[320px] md:w-[220px] md:h-[290px] m-5 transition-transform duration-300 hover:scale-110"
            >
              <div
                className={[
                  'hexagon-inner flex flex-col items-center justify-center text-center overflow-hidden',
                  'w-full h-full rotate-[30deg] rounded-[25px] transition-all duration-300',
                  'py-[60px] px-[35px] md:py-[50px] md:px-[25px]',
                  'border',
                  innerBg,
                  'backdrop-blur-[20px]'
                ].join(' ')}
              >
                <div className="hexagon-icon text-[3.5rem] md:text-[2.8rem] mb-[25px] -rotate-[30deg] transition-all duration-300 [filter:drop-shadow(0_0_10px_currentColor)] group-hover:rotate-0">
                  {item.icon}
                </div>
                <h4 className="text-white font-bold mb-[15px] text-[1.6rem] md:text-[1.3rem] -rotate-[30deg] transition-all duration-300 [text-shadow:0_0_10px_rgba(255,255,255,0.3)] group-hover:rotate-0">
                  {item.title}
                </h4>
                <p className="text-[#e0e0e0] leading-[1.5] text-[1.1rem] md:text-[0.95rem] max-w-[200px] md:max-w-[140px] -rotate-[30deg] transition-all duration-300 group-hover:rotate-0">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
