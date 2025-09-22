import React, { useEffect } from 'react';

const useMobileMenu = () => {
  useEffect(() => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    const toggleMenu = () => {
      mobileMenuToggle?.classList.toggle('active');
      mobileNav?.classList.toggle('active');
    };

    const closeMenu = () => {
      mobileMenuToggle?.classList.remove('active');
      mobileNav?.classList.remove('active');
    };

    mobileMenuToggle?.addEventListener('click', toggleMenu);
    document.querySelectorAll('.mobile-nav a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    const handleClickOutside = (e: MouseEvent) => {
      if (!mobileMenuToggle?.contains(e.target as Node) && !mobileNav?.contains(e.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      mobileMenuToggle?.removeEventListener('click', toggleMenu);
      document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.removeEventListener('click', closeMenu);
      });
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
};

const useSmoothScrolling = () => {
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (targetId && targetId !== '#') {
        const target = document.querySelector(targetId);
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);
};

const useHeaderScrollEffect = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      const scrolled = window.pageYOffset;
      if (scrolled > 50) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

const useActiveMenuItemHighlight = () => {
  useEffect(() => {
    const updateActiveMenuItem = () => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
      let currentSection = '';
      const scrollPos = window.pageYOffset + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          currentSection = (section as HTMLElement).getAttribute('id') || '';
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', updateActiveMenuItem);
    window.addEventListener('load', updateActiveMenuItem);

    return () => {
      window.removeEventListener('scroll', updateActiveMenuItem);
      window.removeEventListener('load', updateActiveMenuItem);
    };
  }, []);
};

const useParallaxEffect = () => {
  useEffect(() => {
    const handleParallax = () => {
      const shapes = document.querySelectorAll('.shape');
      const scrolled = window.pageYOffset;

      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.3;
        (shape as HTMLElement).style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
      });
    };

    window.addEventListener('scroll', handleParallax);
    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);
};

const useNeuralLinesPulseEffect = () => {
  useEffect(() => {
    const neuralLines = document.querySelectorAll('.neural-line');
    const pulseEffect = setInterval(() => {
      neuralLines.forEach((line, index) => {
        setTimeout(() => {
          (line as HTMLElement).style.opacity = '1';
          (line as HTMLElement).style.transform = 'scaleX(1.2)';
          setTimeout(() => {
            (line as HTMLElement).style.opacity = '0.2';
            (line as HTMLElement).style.transform = 'scaleX(0.5)';
          }, 200);
        }, index * 300);
      });
    }, 2000);

    return () => clearInterval(pulseEffect);
  }, []);
};

const useQuantumParticleGeneration = () => {
  useEffect(() => {
    const createQuantumParticle = () => {
      const particle = document.createElement('div');
      (particle as HTMLElement).style.position = 'fixed';
      particle.style.width = Math.random() * 4 + 1 + 'px';
      (particle as HTMLElement).style.height = (particle as HTMLElement).style.width;
      (particle as HTMLElement).style.background = ['#00ffff', '#ff0080', '#8000ff'][Math.floor(Math.random() * 3)];
      (particle as HTMLElement).style.borderRadius = '50%';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = '100vh';
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = '-1';
      particle.style.boxShadow = `0 0 10px ${particle.style.background as string}`;

      document.body.appendChild(particle);

      const duration = Math.random() * 3000 + 2000;
      const drift = (Math.random() - 0.5) * 200;

      particle.animate([
        { transform: 'translateY(0px) translateX(0px)', opacity: 0 },
        { transform: `translateY(-100vh) translateX(${drift}px)`, opacity: 1 }
      ], {
        duration: duration,
        easing: 'ease-out'
      }).onfinish = () => particle.remove();
    };

    const particleInterval = setInterval(createQuantumParticle, 1500);

    return () => clearInterval(particleInterval);
  }, []);
};

const useIntersectionObserverAnimations = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.timeline-content, .hexagon');
    elements.forEach(el => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(50px)';
      (el as HTMLElement).style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(el);
    });

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
};

const useFormSubmissionEffect = () => {
  useEffect(() => {
    const submitButton = document.querySelector('.submit-btn');
    const handleSubmit = (e: Event) => {
      e.preventDefault();
      if (submitButton) {
        (submitButton as HTMLElement).innerHTML = 'TRANSMITTING...';
        (submitButton as HTMLElement).style.background = 'linear-gradient(45deg, #8000ff, #00ffff)';

        setTimeout(() => {
          (submitButton as HTMLElement).innerHTML = 'TRANSMISSION COMPLETE';
          (submitButton as HTMLElement).style.background = 'linear-gradient(45deg, #00ff00, #00ffff)';

          setTimeout(() => {
            (submitButton as HTMLElement).innerHTML = 'TRANSMIT TO MATRIX';
            (submitButton as HTMLElement).style.background = 'linear-gradient(45deg, #00ffff, #ff0080)';
          }, 2000);
        }, 1500);
      }
    };

    submitButton?.addEventListener('click', handleSubmit);

    return () => {
      submitButton?.removeEventListener('click', handleSubmit);
    };
  }, []);
};

const Scripts: React.FC = () => {
  useMobileMenu();
  useSmoothScrolling();
  useHeaderScrollEffect();
  useActiveMenuItemHighlight();
  useParallaxEffect();
  useNeuralLinesPulseEffect();
  useQuantumParticleGeneration();
  useIntersectionObserverAnimations();
  useFormSubmissionEffect();

  return null;
};

export default Scripts;
