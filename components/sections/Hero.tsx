'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

// ---------------------------------------------------------------------------
// Mascot with mouse‑following tilt
// ---------------------------------------------------------------------------
function MascotTilt() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handlePointerMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const offsetX = (e.clientX - centerX) / (rect.width / 2);
      const offsetY = (e.clientY - centerY) / (rect.height / 2);

      targetRef.current.x = Math.max(-1, Math.min(1, offsetX));
      targetRef.current.y = Math.max(-1, Math.min(1, offsetY));
    };

    const handlePointerLeave = () => {
      targetRef.current.x = 0;
      targetRef.current.y = 0;
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseleave', handlePointerLeave);

    const tick = () => {
      const damping = 0.12;
      const cx = currentRef.current.x + (targetRef.current.x - currentRef.current.x) * damping;
      const cy = currentRef.current.y + (targetRef.current.y - currentRef.current.y) * damping;
      currentRef.current.x = cx;
      currentRef.current.y = cy;

      if (imageRef.current) {
        imageRef.current.style.transform = `translate3d(${cx * 1.2}px, ${cy * 1.2}px, 0) rotate(${cx * 1.8}deg)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseleave', handlePointerLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="mx-auto mb-8 flex items-center justify-center overflow-hidden rounded-full border border-[rgba(127,176,255,0.14)] bg-[#0B3692] shadow-[0_8px_22px_rgba(12,40,88,0.16)]"
      style={{ width: 73, height: 73 }}
      aria-hidden="true"
    >
      <img
        ref={imageRef}
        src="/images/hero-mascot.png"
        alt="G2FOSS mascot"
        className="h-full w-full object-contain transition-transform duration-300 ease-out"
        style={{
          transform: 'translate3d(0px, 0px, 0px) rotate(0deg)',
        }}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------
export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: 'calc(100vh)',
        backgroundImage: 'url("/images/background-hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.38) 50%, rgba(0,0,0,0.50) 100%)',
        }}
      />

      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 sm:px-10 py-20 text-center">
        {/* Mascot with tilt */}
        <div
          className="animate-fade-slide-in"
          style={{ '--slide-delay': '0.05s' } as React.CSSProperties}
        >
          <MascotTilt />
        </div>

        <h1
          className="font-bold text-white tracking-[0.02em] sm:tracking-[0.04em] animate-fade-slide-in drop-shadow-lg mb-3 sm:mb-4"
          style={
            {
              fontSize: 'clamp(2rem, 1.1rem + 4.2vw, 3.5rem)',
              lineHeight: '1.08',
              '--slide-delay': '0.1s',
            } as React.CSSProperties
          }
        >
          WELCOME TO G2FOSS
        </h1>

        <p
          className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 font-semibold animate-fade-slide-in drop-shadow mb-5 sm:mb-6"
          style={
            {
              fontSize: 'clamp(2rem, 1.4rem + 2.3vw, 2.7rem)',
              lineHeight: '1.3',
              '--slide-delay': '0.15s',
            } as React.CSSProperties
          }
        >
          The LEADING ICT CLUB AT ENIT
        </p>

        <p
          className="text-gray-200 mx-auto mb-10 leading-relaxed animate-fade-slide-in drop-shadow"
          style={
            {
              fontSize: 'clamp(1rem, 0.85rem + 0.7vw, 1.25rem)',
              lineHeight: '1.6',
              maxWidth: '44rem',
              '--slide-delay': '0.2s',
            } as React.CSSProperties
          }
        >
          Join a threiving community of future engineers and innovators who wants to
          learn, collaborate, compete, and turn your ideas into
          real‑world impact through open source.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-slide-in"
          style={{ '--slide-delay': '0.4s' } as React.CSSProperties}
        >
          <Link
            href="#about"
            className="inline-flex items-center gap-2 border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 font-semibold px-6 py-2.5 rounded-xl transition-all duration-300"
          >
            About the club
            <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 group"
          >
            Join our family
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">{'->'}</span>
          </Link>
        </div>
      </div>

      {/* Fade‑slide keyframes */}
      <style jsx>{`
        @keyframes fadeSlideIn {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-slide-in {
          animation: fadeSlideIn 0.6s ease-out both;
          animation-delay: var(--slide-delay, 0s);
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-slide-in {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}