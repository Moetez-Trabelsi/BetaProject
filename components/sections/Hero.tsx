'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: 'calc(100vh)',
        backgroundImage: 'url("/images/hero-background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(2,6,20,0.45) 0%, rgba(2,6,20,0.55) 50%, rgba(2,6,20,0.72) 100%)',
        }}
      />

      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 sm:px-10 py-12 sm:py-20 text-center">
        <h1
          className="font-bold text-white tracking-[0.02em] sm:tracking-[0.04em] animate-fade-slide-in drop-shadow-lg mb-3 sm:mb-4"
          style={
            {
              // Responsive: 2.2rem on very small screens → 4rem on desktop
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              lineHeight: '1.05',
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
              // Responsive: 1.8rem on very small screens → 2.7rem on desktop
              fontSize: 'clamp(1.8rem, 4vw, 2.7rem)',
              lineHeight: '1.2',
              '--slide-delay': '0.15s',
            } as React.CSSProperties
          }
        >
          THE LEADING ICT CLUB AT ENIT
        </p>

        <p
          className="text-gray-200 mx-auto mb-10 leading-relaxed animate-fade-slide-in drop-shadow"
          style={
            {
              // Responsive: 1rem on very small screens → 1.25rem on desktop
              fontSize: 'clamp(1rem, 3vw, 1.25rem)',
              lineHeight: '1.6',
              maxWidth: '44rem',
              '--slide-delay': '0.2s',
            } as React.CSSProperties
          }
        >
          Join a thriving community of future engineers and innovators who want to
          learn, collaborate, compete, and turn ideas into real‑world impact
          through open source.
        </p>

        {/* Buttons — refined delays & glass style */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-slide-in"
          style={{ '--slide-delay': '0.55s' } as React.CSSProperties}
        >
          <Link
            href="#about"
            className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 font-semibold text-base px-7 py-4 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-500"
          >
            About the club
            <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
          </Link>

          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScvUaWj3K0v0-nnBd1gLa1WIlwjf2vt6Du8Hum-trjAfMyEdw/closedform"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-base px-7 py-4 rounded-xl shadow-md shadow-black/10 transition-all duration-300"
          >
            Join our family
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">{'->'}</span>
          </Link>
        </div>
      </div>

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