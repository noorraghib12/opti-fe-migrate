"use client";
import React, { useEffect } from 'react';

export default function NexusEffects() {
  useEffect(() => {
    const cleanupFns: Array<() => void> = [];
    // Spawn particles
    const particlesContainer = document.getElementById('particlesContainer');
    if (particlesContainer && particlesContainer.children.length === 0) {
      const particleCount = 80;
      for (let i = 0; i < particleCount; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.top = Math.random() * 100 + 'vh';
        p.style.animationDelay = (Math.random() * 20).toFixed(2) + 's';
        p.style.transform = `translateX(${(Math.random() * 200 - 100).toFixed(0)}px)`;
        particlesContainer.appendChild(p);
      }
    }

    // Spawn matrix columns (template behavior)
    const matrixRain = document.getElementById('matrixRain');
    if (matrixRain && matrixRain.children.length === 0) {
      const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const columns = Math.floor(window.innerWidth / 20);
      for (let i = 0; i < columns; i++) {
        const col = document.createElement('div');
        col.className = 'matrix-column';
        col.style.left = `${i * 20}px`;
        col.style.animationDuration = `${(Math.random() * 5 + 10).toFixed(2)}s`;
        col.style.animationDelay = `${(Math.random() * 5).toFixed(2)}s`;
        let text = '';
        const charCount = Math.floor(Math.random() * 20 + 10);
        for (let j = 0; j < charCount; j++) {
          text += characters[Math.floor(Math.random() * characters.length)] + ' ';
        }
        col.textContent = text;
        matrixRain.appendChild(col);
      }
    }

    // Data streams
    const dataStreams = document.getElementById('dataStreams');
    if (dataStreams && dataStreams.children.length === 0) {
      const streamCount = 10;
      for (let i = 0; i < streamCount; i++) {
        const stream = document.createElement('div');
        stream.className = 'data-stream';
        stream.style.top = `${Math.random() * 100}%`;
        stream.style.left = `-300px`;
        stream.style.animationDelay = `${(Math.random() * 5).toFixed(2)}s`;
        stream.style.transform = `rotate(${(Math.random() * 30 - 15).toFixed(2)}deg)`;
        dataStreams.appendChild(stream);
      }
    }

    // Window resize: regenerate matrix
    let resizeTimer: any;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const rain = document.getElementById('matrixRain');
        if (rain) {
          rain.innerHTML = '';
          // re-run generation logic
          const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
          const columns = Math.floor(window.innerWidth / 20);
          for (let i = 0; i < columns; i++) {
            const col = document.createElement('div');
            col.className = 'matrix-column';
            col.style.left = `${i * 20}px`;
            col.style.animationDuration = `${(Math.random() * 5 + 10).toFixed(2)}s`;
            col.style.animationDelay = `${(Math.random() * 5).toFixed(2)}s`;
            let text = '';
            const charCount = Math.floor(Math.random() * 20 + 10);
            for (let j = 0; j < charCount; j++) {
              text += characters[Math.floor(Math.random() * characters.length)] + ' ';
            }
            col.textContent = text;
            rain.appendChild(col);
          }
        }
      }, 250);
    };
    window.addEventListener('resize', handleResize);

    // Mouse interactions
    let mouseTimer: any;
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseTimer) {
        mouseTimer = setTimeout(() => {
          const mouseX = e.clientX;
          const mouseY = e.clientY;
          const orbs = document.querySelectorAll<HTMLElement>('.orb');
          orbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.02;
            const x = (mouseX - window.innerWidth / 2) * speed;
            const y = (mouseY - window.innerHeight / 2) * speed;
            orb.style.transform = `translate(${x}px, ${y}px)`;
          });

          if (window.innerWidth > 768) {
            const particles = document.querySelectorAll<HTMLElement>('.particle');
            particles.forEach((particle) => {
              const rect = particle.getBoundingClientRect();
              const particleX = rect.left + rect.width / 2;
              const particleY = rect.top + rect.height / 2;
              const distance = Math.hypot(mouseX - particleX, mouseY - particleY);
              if (distance < 150) {
                const brightness = 1 - distance / 150;
                particle.style.boxShadow = `0 0 ${20 + brightness * 30}px rgba(0, 255, 255, ${0.5 + brightness * 0.5})`;
                particle.style.transform = `scale(${1 + brightness * 0.5})`;
              } else {
                particle.style.boxShadow = '';
                particle.style.transform = '';
              }
            });
          }
          mouseTimer = null;
        }, 16);
      }
    };
    document.addEventListener('mousemove', handleMouseMove);

    // Cursor glow (template-like)
    let cursorGlow: HTMLDivElement | null = null;
    if (window.innerWidth > 768) {
      cursorGlow = document.createElement('div');
      cursorGlow.style.cssText = `
        position: fixed;
        width: 400px;
        height: 400px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 70%);
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s ease;
        opacity: 0;
      `;
      document.body.appendChild(cursorGlow);

      const onMove = (e: MouseEvent) => {
        if (!cursorGlow) return;
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
        cursorGlow.style.opacity = '1';
      };
      const onLeave = () => {
        if (!cursorGlow) return;
        cursorGlow.style.opacity = '0';
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseleave', onLeave);

      cleanupFns.push(() => {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseleave', onLeave);
        if (cursorGlow && cursorGlow.parentElement) cursorGlow.parentElement.removeChild(cursorGlow);
        cursorGlow = null;
      });
    }

    // Random cyber text effects
    const cyberTexts = [
      'CONNECTING...',
      'NEURAL LINK ESTABLISHED',
      'QUANTUM SYNC ACTIVE',
      'REALITY MATRIX LOADED',
    ];
    const intervalId = window.setInterval(() => {
      const randomText = cyberTexts[Math.floor(Math.random() * cyberTexts.length)];
      const tempElement = document.createElement('div');
      tempElement.textContent = randomText;
      tempElement.style.cssText = `
        position: fixed;
        top: ${Math.random() * 100}vh;
        left: ${Math.random() * 100}vw;
        color: #22d3ee;
        font-size: 0.8rem;
        font-weight: 700;
        z-index: 1000;
        opacity: 0.7;
        pointer-events: none;
        animation: fadeOut 3s ease-out forwards;
        text-shadow: 0 0 10px #22d3ee;
      `;
      document.body.appendChild(tempElement);
      window.setTimeout(() => {
        if (tempElement && tempElement.parentElement) {
          tempElement.parentElement.removeChild(tempElement);
        }
      }, 3000);
    }, 5000);
    cleanupFns.push(() => window.clearInterval(intervalId));

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return (
    <>
      <div className="cyber-bg">
        <div className="cyber-gradient" />
        <div className="matrix-rain" id="matrixRain" />
      </div>

      <div className="particles" id="particlesContainer" />
      <div className="data-streams" id="dataStreams" />

      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />

      <div className="grid-overlay">
        <div className="grid-lines" />
        <div className="grid-glow" />
      </div>

      <div className="scanlines" />
      <div className="noise-overlay" />
    </>
  );
}
