"use client";

import { useEffect } from "react";

/**
 * ClientEffects
 * Ports the vanilla JS behaviors into a React client component using useEffect hooks.
 * - Mobile menu toggle (adds/removes 'active' on .mobile-menu-toggle and .mobile-nav)
 * - Close on link click and outside click
 * - Smooth scrolling for in-page anchors
 * - Header scrolled state toggle on scroll
 * - Active menu item highlighting based on scroll position
 * - Parallax transform for .shape elements
 * - Neural lines pulse effect via setInterval
 * - Quantum particle generation with requestAnimation to animate floating particles
 * - IntersectionObserver to reveal .timeline-content and .hexagon
 * - Submit button interaction changing text and background with timeouts
 * All queries are guarded and listeners/intervals/observers are cleaned up on unmount.
 */
export default function ClientEffects(): null {
  useEffect(() => {
    // Respect user motion preferences
    const rM =
      typeof window !== "undefined" &&
      !!window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Detect if a React-managed nav/header is present; if so, skip mobile menu wiring here
    const reactNavPresent = !!document.querySelector('header[data-react-nav="true"]');

    // ========== Mobile Menu: toggle, close on link and outside click ==========
    let mobileCleanup: () => void = () => {};

    if (!reactNavPresent) {
      const mobileMenuToggle = document.querySelector(
        ".mobile-menu-toggle"
      ) as HTMLElement | null;
      const mobileNav = document.querySelector(".mobile-nav") as HTMLElement | null;

      const handleMobileToggle = (e: MouseEvent) => {
        e.stopPropagation();
        if (!mobileMenuToggle || !mobileNav) return;
        mobileMenuToggle.classList.toggle("active");
        mobileNav.classList.toggle("active");
      };

      const handleMobileLinkClick = () => {
        if (!mobileMenuToggle || !mobileNav) return;
        mobileMenuToggle.classList.remove("active");
        mobileNav.classList.remove("active");
      };

      const handleOutsideClick = (e: MouseEvent) => {
        if (!mobileMenuToggle || !mobileNav) return;
        const target = e.target as Node;
        if (!mobileMenuToggle.contains(target) && !mobileNav.contains(target)) {
          mobileMenuToggle.classList.remove("active");
          mobileNav.classList.remove("active");
        }
      };

      const mobileNavLinks = document.querySelectorAll(
        ".mobile-nav a"
      ) as NodeListOf<HTMLAnchorElement>;

      if (mobileMenuToggle && mobileNav) {
        mobileMenuToggle.addEventListener("click", handleMobileToggle);
        document.addEventListener("click", handleOutsideClick);
      }
      mobileNavLinks.forEach((link) => link.addEventListener("click", handleMobileLinkClick));

      // cleanup only what we attached
      mobileCleanup = () => {
        if (mobileMenuToggle) mobileMenuToggle.removeEventListener("click", handleMobileToggle);
        document.removeEventListener("click", handleOutsideClick);
        mobileNavLinks.forEach((link) => link.removeEventListener("click", handleMobileLinkClick));
      };
    }

    // ========== Smooth Scrolling for in-page anchors ==========
    const anchorLinks = document.querySelectorAll('a[href^="#"]') as NodeListOf<HTMLAnchorElement>;
    const handleAnchorClick = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      // Early outs: allow default behavior when explicitly marked as no-smooth or external
      if (a.hasAttribute("data-no-smooth")) return;
      const rel = a.getAttribute("rel");
      if (rel && /\bexternal\b/i.test(rel)) return;

      e.preventDefault();
      const targetId = a.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId) as HTMLElement | null;
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    anchorLinks.forEach((a) => a.addEventListener("click", handleAnchorClick));

    // ========== Header scrolled state ==========
    const handleHeaderScroll = () => {
      const header = document.querySelector("header") as HTMLElement | null;
      if (!header) return;
      const scrolled = window.pageYOffset;
      if (scrolled > 50) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    window.addEventListener("scroll", handleHeaderScroll, { passive: true });
    // initialize state
    handleHeaderScroll();

    // ========== Active menu item highlighting ==========
    const updateActiveMenuItem = () => {
      const sections = document.querySelectorAll("section[id]") as NodeListOf<HTMLElement>;
      const navLinks = document.querySelectorAll(
        ".nav-links a, .mobile-nav a"
      ) as NodeListOf<HTMLAnchorElement>;

      let currentSection = "";
      const scrollPos = window.pageYOffset + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          const id = section.getAttribute("id");
          if (id) currentSection = id;
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        const href = link.getAttribute("href");
        if (href === `#${currentSection}`) {
          link.classList.add("active");
        }
      });
    };

    // Throttle active item updates to once per animation frame
    let ticking = false;
    let rafId: number | null = null;
    const onScrollUpdateActive = () => {
      if (ticking) return;
      ticking = true;
      rafId = window.requestAnimationFrame(() => {
        updateActiveMenuItem();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScrollUpdateActive, { passive: true });
    window.addEventListener("load", updateActiveMenuItem);
    // Initial state: ensure active link is correct on mount
    updateActiveMenuItem();

    // ========== Parallax for .shape elements ==========
    const handleParallaxScroll = () => {
      if (rM) return; // skip transforms under reduced motion
      const shapes = document.querySelectorAll(".shape") as NodeListOf<HTMLElement>;
      const scrolled = window.pageYOffset;
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.3;
        (shape as HTMLElement).style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
      });
    };
    window.addEventListener("scroll", handleParallaxScroll, { passive: true });

    // ========== Neural lines pulse effect ==========
    const neuralLines = document.querySelectorAll(".neural-line") as NodeListOf<HTMLElement>;
    const timeouts: number[] = [];
    const pulseNeuralLines = () => {
      neuralLines.forEach((line, index) => {
        const t1 = window.setTimeout(() => {
          (line as HTMLElement).style.opacity = "1";
          (line as HTMLElement).style.transform = "scaleX(1.2)";
          const t2 = window.setTimeout(() => {
            (line as HTMLElement).style.opacity = "0.2";
            (line as HTMLElement).style.transform = "scaleX(0.5)";
          }, 200);
          timeouts.push(t2);
        }, index * 300);
        timeouts.push(t1);
      });
    };
    let neuralInterval: number | null = null;
    if (!rM) {
      neuralInterval = window.setInterval(pulseNeuralLines, 2000);
    }

    // ========== Quantum particle generation ==========
    const createQuantumParticle = () => {
      const particle = document.createElement("div");
      const size = Math.random() * 4 + 1;
      const colors = ["#00ffff", "#ff0080", "#8000ff"] as const;
      const color = colors[Math.floor(Math.random() * colors.length)];
      Object.assign(particle.style, {
        position: "fixed",
        width: `${size}px`,
        height: `${size}px`,
        background: color,
        borderRadius: "50%",
        left: `${Math.random() * 100}%`,
        top: "100vh",
        pointerEvents: "none",
        zIndex: "-1",
        boxShadow: `0 0 10px ${color}`,
      } as Partial<CSSStyleDeclaration>);

      document.body.appendChild(particle);

      const duration = Math.random() * 3000 + 2000;
      const drift = (Math.random() - 0.5) * 200;

      const anim = particle.animate(
        [
          { transform: "translateY(0px) translateX(0px)", opacity: 0 },
          { transform: `translateY(-100vh) translateX(${drift}px)`, opacity: 1 },
        ],
        { duration, easing: "ease-out" }
      );
      anim.onfinish = () => particle.remove();
    };
    let particleInterval: number | null = null;
    if (!rM) {
      particleInterval = window.setInterval(createQuantumParticle, 1500);
    }

    // ========== IntersectionObserver: reveal timeline and hexagons ==========
    let observer: IntersectionObserver | null = null;
    const revealEls = document.querySelectorAll(
      ".timeline-content, .hexagon"
    ) as NodeListOf<HTMLElement>;

    const canObserve = typeof window !== "undefined" && "IntersectionObserver" in window;

    if (!canObserve) {
      // Fallback: ensure elements are visible and not translated when IO is unavailable
      revealEls.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    } else {
      const observerOptions: IntersectionObserverInit = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const ioCallback: IntersectionObserverCallback = (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            obs.unobserve(el);
          }
        });
      };

      observer = new IntersectionObserver(ioCallback, observerOptions);

      revealEls.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(50px)";
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        observer!.observe(el);
      });
    }

    // ========== Submit button interaction ==========
    const submitBtn = document.querySelector(".submit-btn") as HTMLButtonElement | null;
    let submitT1: number | null = null;
    let submitT2: number | null = null;

    const onSubmitClick = (e: MouseEvent) => {
      e.preventDefault();
      if (!submitBtn) return;
      submitBtn.innerHTML = "TRANSMITTING...";
      submitBtn.style.background = "linear-gradient(45deg, #8000ff, #00ffff)";

      submitT1 = window.setTimeout(() => {
        submitBtn!.innerHTML = "TRANSMISSION COMPLETE";
        submitBtn!.style.background = "linear-gradient(45deg, #00ff00, #00ffff)";

        submitT2 = window.setTimeout(() => {
          submitBtn!.innerHTML = "TRANSMIT TO MATRIX";
          submitBtn!.style.background = "linear-gradient(45deg, #00ffff, #ff0080)";
        }, 2000);
      }, 1500);
    };

    if (submitBtn) {
      submitBtn.addEventListener("click", onSubmitClick);
    }

    // ========== Cleanup ==========
    return () => {
      // Mobile menu (only if we attached any)
      mobileCleanup();

      // Smooth scroll
      anchorLinks.forEach((a) => a.removeEventListener("click", handleAnchorClick));

      // Scroll handlers
      window.removeEventListener("scroll", handleHeaderScroll as EventListener);
      window.removeEventListener("scroll", onScrollUpdateActive as EventListener);
      window.removeEventListener("scroll", handleParallaxScroll as EventListener);
      window.removeEventListener("load", updateActiveMenuItem);

      // Cancel any pending rAF
      if (rafId !== null) window.cancelAnimationFrame(rafId);

      // Intervals and timeouts
      if (neuralInterval !== null) window.clearInterval(neuralInterval);
      if (particleInterval !== null) window.clearInterval(particleInterval);
      timeouts.forEach((t) => window.clearTimeout(t));
      if (submitT1) window.clearTimeout(submitT1);
      if (submitT2) window.clearTimeout(submitT2);

      // IntersectionObserver
      if (observer) observer.disconnect();

      // Submit button
      if (submitBtn) submitBtn.removeEventListener("click", onSubmitClick);
    };
  }, []);

  return null;
}
