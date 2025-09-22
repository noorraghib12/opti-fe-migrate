'use client';
import { useEffect } from 'react';

export default function EffectsClient(){
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const flag = 'effectsInitialized';
    if ((document.body as any)[flag]) return; // idempotent
    (document.body as any)[flag] = true;

    function initializeMobileMenu(){
      const mobileMenuBtn = document.getElementById('mobileMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
      const mobileMenuClose = document.getElementById('mobileMenuClose');
      const mobileMenuLinks = document.querySelectorAll('.mobile-menu-nav a');
      const mobileMenuCta = document.querySelector('.mobile-menu-cta') as HTMLElement | null;
      const mobileMenuCtaButton = document.querySelector('.mobile-menu-cta a');
      const mobileMenuLogo = document.querySelector('.mobile-menu-logo');
      if (!mobileMenuBtn || !mobileMenu || !mobileMenuOverlay || !mobileMenuClose) return;

      const openMobileMenu = () => {
        mobileMenuBtn.classList.add('active');
        mobileMenu.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        (document.body.style as any).overflow = 'hidden';
        mobileMenuLinks.forEach((link, index) => {
          const el = link as HTMLElement;
          el.style.animation = 'none'; el.style.opacity = '0'; el.style.transform = 'translateX(20px)';
          setTimeout(() => { el.style.animation = `slideInLeft 0.4s ease forwards`; }, 250 + (index * 100));
        });
        if (mobileMenuCta){
          mobileMenuCta.style.animation = 'none'; mobileMenuCta.style.opacity = '0'; mobileMenuCta.style.transform = 'translateY(20px)';
          setTimeout(() => { mobileMenuCta.style.animation = 'slideInUp 0.4s ease forwards'; }, 100);
        }
      };
      const closeMobileMenu = () => {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        (document.body.style as any).overflow = '';
      };

      mobileMenuBtn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); mobileMenu.classList.contains('active') ? closeMobileMenu() : openMobileMenu(); });
      mobileMenuClose.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); closeMobileMenu(); });
      mobileMenuOverlay.addEventListener('click', (e) => { e.stopPropagation(); closeMobileMenu(); });
      mobileMenuLinks.forEach(link => link.addEventListener('click', () => closeMobileMenu()));
      if (mobileMenuCtaButton){ mobileMenuCtaButton.addEventListener('click', (e) => { if ((mobileMenuCtaButton as HTMLAnchorElement).getAttribute('href') === '#'){ e.preventDefault(); } closeMobileMenu(); }); }
      if (mobileMenuLogo){ mobileMenuLogo.addEventListener('click', () => closeMobileMenu()); }
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && mobileMenu.classList.contains('active')) closeMobileMenu(); });
      mobileMenu.addEventListener('touchmove', (e) => { e.stopPropagation(); });
    }

    function generateMatrixRain(){
      const matrixRain = document.getElementById('matrixRain'); if (!matrixRain) return;
      const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const columns = Math.floor(window.innerWidth / 20);
      for (let i=0;i<columns;i++){
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.position='absolute'; column.style.top='-100vh';
        column.style.left = `${i*20}px`;
        column.style.animation = `matrixFall ${Math.random()*5+10}s linear infinite`;
        column.style.animationDelay = `${Math.random()*5}s`;
        column.style.fontFamily = `'Courier New', monospace`;
        column.style.fontSize = '14px';
        column.style.color = 'var(--primary-cyan)';
        column.style.textShadow = '0 0 5px var(--primary-cyan)';
        (column.style as any).writingMode = 'vertical-rl';
        (column.style as any).textOrientation = 'upright';
        let text=''; const charCount = Math.floor(Math.random()*20+10);
        for (let j=0;j<charCount;j++){ text += characters[Math.floor(Math.random()*characters.length)] + ' '; }
        column.textContent = text; matrixRain.appendChild(column);
      }
    }

    function generateParticles(){
      const c = document.getElementById('particlesContainer'); if (!c) return; const count=50;
      for (let i=0;i<count;i++){
        const p = document.createElement('div');
        p.className='particle';
        p.style.position='absolute'; p.style.width='4px'; p.style.height='4px'; p.style.borderRadius='50%';
        p.style.left = `${Math.random()*100}%`;
        p.style.animation = `float ${Math.random()*10+20}s infinite`;
        p.style.animationDelay = `${Math.random()*20}s`;
        p.style.background = i%2===0 ? 'var(--primary-pink)' : 'var(--primary-cyan)';
        p.style.boxShadow = `0 0 10px ${i%2===0?'var(--primary-pink)':'var(--primary-cyan)'}`;
        c.appendChild(p);
      }
    }

    function generateDataStreams(){
      const d = document.getElementById('dataStreams'); if (!d) return; const count=10;
      for (let i=0;i<count;i++){
        const s = document.createElement('div'); s.className='data-stream';
        s.style.position='absolute'; s.style.height='1px'; s.style.top=`${Math.random()*100}%`;
        s.style.left='-300px'; s.style.opacity='0'; s.style.transform=`rotate(${Math.random()*30-15}deg)`;
        s.style.background = i%2===0 ? 'linear-gradient(90deg, transparent, var(--primary-pink), transparent)' : 'linear-gradient(90deg, transparent, var(--primary-cyan), transparent)';
        s.style.animation = `${i%2===0?'dataFlow 4s ease-in-out infinite':'dataFlow 3s ease-in-out infinite'}`; d.appendChild(s);
      }
    }

    initializeMobileMenu();
    generateMatrixRain();
    generateParticles();
    generateDataStreams();

    let resizeTimer: any; window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(()=>{ const m = document.getElementById('matrixRain'); if (m){ m.innerHTML=''; generateMatrixRain(); } },250); });

    let mouseTimer: any; document.addEventListener('mousemove', (e) => {
      if (!mouseTimer){ mouseTimer = setTimeout(()=>{
        const mouseX = e.clientX, mouseY = e.clientY;
        const orbs = document.querySelectorAll('.orb');
        orbs.forEach((orb, idx) => { const el = orb as HTMLElement; const speed=(idx+1)*0.02; const x=(mouseX-window.innerWidth/2)*speed; const y=(mouseY-window.innerHeight/2)*speed; el.style.transform = `translate(${x}px, ${y}px)`; });
        if (window.innerWidth>768){
          const particles = document.querySelectorAll('.particle');
          particles.forEach(p => { const el = p as HTMLElement; const rect=el.getBoundingClientRect(); const px=rect.left+rect.width/2; const py=rect.top+rect.height/2; const dist = Math.hypot(mouseX-px, mouseY-py); if (dist<150){ const b = 1 - (dist/150); el.style.boxShadow = `0 0 ${20 + b*30}px rgba(0,255,255,${0.5+b*0.5})`; el.style.transform = `scale(${1 + b*0.5})`; } else { el.style.boxShadow=''; el.style.transform=''; } });
        }
        mouseTimer=null;
      },16); }
    });

    if (window.innerWidth>768){
      const cursorGlow = document.createElement('div'); cursorGlow.style.cssText = 'position:fixed;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(0,255,255,0.1) 0%,transparent 70%);pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:opacity .3s ease;opacity:0;';
      document.body.appendChild(cursorGlow);
      const mm = (e:MouseEvent)=>{ cursorGlow.style.left = e.clientX+'px'; cursorGlow.style.top = e.clientY+'px'; cursorGlow.style.opacity='1'; };
      const ml = ()=>{ cursorGlow.style.opacity='0'; };
      document.addEventListener('mousemove', mm); document.addEventListener('mouseleave', ml);
    }
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (href && href.length > 1) {
          e.preventDefault();
          if (href === '#top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            const target = document.querySelector(href);
            if (target) {
              (target as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        }
      });
    });

    window.addEventListener('scroll', () => {
      const nav = document.querySelector('nav') as HTMLElement | null; if (!nav) return;
      if (window.scrollY>100){ nav.style.background='rgba(15, 15, 35, 0.95)'; nav.style.boxShadow='0 0 30px rgba(0, 255, 255, 0.2)'; } else { nav.style.background='rgba(15, 15, 35, 0.9)'; nav.style.boxShadow='none'; }
    });

    const observer = new IntersectionObserver((entries)=>{ entries.forEach(entry=>{ if (entry.isIntersecting){ entry.target.classList.add('visible'); } }); }, { threshold:0.1, rootMargin:'0px 0px -100px 0px' });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
      btn.addEventListener('mouseenter', function(this: HTMLElement){ this.style.boxShadow='0 0 30px rgba(0, 255, 255, 0.6)'; });
      btn.addEventListener('mouseleave', function(this: HTMLElement){ this.style.boxShadow=''; });
    });

    const animateStats = () => {
      const stats = document.querySelectorAll('.stat-number');
      stats.forEach(stat => {
        const el = stat as HTMLElement; const target = parseInt(el.textContent?.replace(/[^\d]/g,'')||'0');
        let count = 0; const increment = target/100; const suffix = el.textContent?.replace(/[\d]/g,'')||'';
        const timer = window.setInterval(()=>{ count += increment; if (count>=target){ window.clearInterval(timer); count=target; } el.textContent = Math.floor(count) + suffix; }, 20);
      });
    };

    const statsSection = document.querySelector('.stats');
    if (statsSection){ const so = new IntersectionObserver((entries)=>{ entries.forEach(entry=>{ if (entry.isIntersecting){ animateStats(); so.unobserve(entry.target); } }); }, { threshold:0.5 }); so.observe(statsSection); }

    document.querySelectorAll('.feature-card').forEach(card => {
      card.addEventListener('mouseenter', function(this: HTMLElement){ 
        this.style.animation = 'glitch1 0.3s ease-in-out';
        setTimeout(() => {
          this.style.animation = '';
        }, 300);
      });
    });

    const cyberTexts = ['CONNECTING...','NEURAL LINK ESTABLISHED','QUANTUM SYNC ACTIVE','REALITY MATRIX LOADED'];
    window.setInterval(() => {
      const randomText = cyberTexts[Math.floor(Math.random()*cyberTexts.length)];
      const temp = document.createElement('div'); temp.textContent=randomText; temp.style.cssText='position:fixed;color:var(--primary-cyan);font-size:.8rem;font-weight:700;z-index:1000;opacity:.7;pointer-events:none;animation:fadeOut 3s ease-out forwards;text-shadow:0 0 10px var(--primary-cyan);';
      temp.style.top = Math.random()*100 + 'vh'; temp.style.left = Math.random()*100 + 'vw';
      document.body.appendChild(temp); window.setTimeout(()=>{ temp.remove(); }, 3000);
    }, 5000);
    const submitBtn = document.querySelector('.btn-submit');
    if (submitBtn) {
      submitBtn.addEventListener('click', function(this: HTMLElement, e) {
        e.preventDefault();
        const name = (document.getElementById('name') as HTMLInputElement)?.value;
        const email = (document.getElementById('email') as HTMLInputElement)?.value;
        const message = (document.getElementById('message') as HTMLTextAreaElement)?.value;

        if (name && email && message) {
          const btn = this;
          btn.textContent = 'TRANSMITTING...';
          btn.setAttribute('style', 'background:linear-gradient(135deg,var(--primary-cyan),var(--primary-pink))');

          window.setTimeout(() => {
            btn.textContent = 'TRANSMISSION COMPLETE';
            btn.setAttribute('style', 'background:var(--primary-cyan)');
            
            (document.getElementById('name') as HTMLInputElement).value = '';
            (document.getElementById('email') as HTMLInputElement).value = '';
            (document.getElementById('message') as HTMLTextAreaElement).value = '';

            window.setTimeout(() => {
              btn.textContent = 'Transmit Message';
              btn.setAttribute('style', '');
            }, 3000);
          }, 2000);
        }
      });
    }

  }, []);
  return null;
}
