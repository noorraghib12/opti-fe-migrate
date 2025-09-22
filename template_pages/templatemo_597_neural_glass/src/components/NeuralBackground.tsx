import React from 'react';

/**
 * NeuralBackground
 * Renders the animated neural background, floating geometric shapes, and neural lines.
 * Uses Tailwind utility classes per the provided CSS CLASS MAPPING and inline styles to emulate nth-child rules.
 */
export default function NeuralBackground() {
  return (
    <>
      {/* Epic Neural Background */}
      <div
        className={
          [
            'neural-background',
            'fixed top-0 left-0 w-full h-full z-[-2]',
            'bg-[radial-gradient(circle_at_15%_85%,rgba(75,0,130,0.7)_0%,_transparent_50%),_radial-gradient(circle_at_85%_15%,rgba(139,37,99,0.8)_0%,_transparent_50%),_radial-gradient(circle_at_45%_60%,rgba(128,0,128,0.6)_0%,_transparent_50%),_radial-gradient(circle_at_70%_40%,rgba(34,139,34,0.4)_0%,_transparent_50%),_linear-gradient(135deg,_#0a0a0a_0%,_#2d1b3d_50%,_#000000_100%)]',
            'animate-[backgroundPulse_14s_ease-in-out_infinite]'
          ].join(' ')
        }
        aria-hidden
      />

      {/* Floating Geometric Shapes */}
      <div
        className={[
          'geometric-shapes',
          'fixed inset-0 w-full h-full z-[-1] overflow-hidden'
        ].join(' ')}
        aria-hidden
      >
        {/* .shape:nth-child(1) */}
        <div
          className={[
            'shape',
            'absolute border border-[rgba(0,255,255,0.3)]',
            'animate-[floatShape_20s_linear_infinite]'
          ].join(' ')}
          style={{
            width: '100px',
            height: '100px',
            left: '10%',
            borderColor: 'rgba(255, 105, 180, 0.4)',
            animationDelay: '0s'
          }}
        />

        {/* .shape:nth-child(2) */}
        <div
          className={[
            'shape',
            'absolute border border-[rgba(0,255,255,0.3)]',
            'animate-[floatShape_20s_linear_infinite]'
          ].join(' ')}
          style={{
            width: '60px',
            height: '60px',
            left: '70%',
            borderRadius: '50%',
            borderColor: 'rgba(147, 112, 219, 0.4)',
            animationDelay: '-5s'
          }}
        />

        {/* .shape:nth-child(3) */}
        <div
          className={[
            'shape',
            'absolute border border-[rgba(0,255,255,0.3)]',
            'animate-[floatShape_20s_linear_infinite]'
          ].join(' ')}
          style={{
            width: '80px',
            height: '80px',
            left: '30%',
            transform: 'rotate(45deg)',
            borderColor: 'rgba(224, 163, 255, 0.4)',
            animationDelay: '-10s'
          }}
        />

        {/* .shape:nth-child(4) */}
        <div
          className={[
            'shape',
            'absolute border border-[rgba(0,255,255,0.3)]',
            'animate-[floatShape_20s_linear_infinite]'
          ].join(' ')}
          style={{
            width: '120px',
            height: '120px',
            left: '50%',
            animationDelay: '-15s',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            background: 'linear-gradient(45deg, rgba(255, 105, 180, 0.1), transparent)'
          }}
        />
      </div>

      {/* Neural Network Lines */}
      <div className={['neural-lines', 'fixed inset-0 z-[-1]'].join(' ')} aria-hidden>
        {/* .neural-line:nth-child(1) */}
        <div
          className={[
            'neural-line',
            'absolute h-px',
            'bg-gradient-to-r from-transparent via-[#00ffff] to-transparent',
            'animate-[neuralPulse_3s_ease-in-out_infinite]'
          ].join(' ')}
          style={{
            top: '20%',
            left: 0,
            width: '100%',
            background: 'linear-gradient(90deg, transparent, #e0a3ff, transparent)',
            animationDelay: '0s'
          }}
        />

        {/* .neural-line:nth-child(2) */}
        <div
          className={[
            'neural-line',
            'absolute h-px',
            'bg-gradient-to-r from-transparent via-[#00ffff] to-transparent',
            'animate-[neuralPulse_3s_ease-in-out_infinite]'
          ].join(' ')}
          style={{
            top: '60%',
            left: 0,
            width: '100%',
            background: 'linear-gradient(90deg, transparent, #ff69b4, transparent)',
            animationDelay: '-1s'
          }}
        />

        {/* .neural-line:nth-child(3) */}
        <div
          className={[
            'neural-line',
            'absolute h-px',
            'bg-gradient-to-r from-transparent via-[#00ffff] to-transparent',
            'animate-[neuralPulse_3s_ease-in-out_infinite]'
          ].join(' ')}
          style={{
            top: '40%',
            left: 0,
            width: '100%',
            background: 'linear-gradient(90deg, transparent, #9370db, transparent)',
            animationDelay: '-2s'
          }}
        />
      </div>
    </>
  );
}
