'use client';

import Image from 'next/image';
import Link from 'next/link';

const images = [
  '/images/league-of-coders-1.jpg',
  '/images/league-of-coders-2.jpg',
  '/images/league-of-coders-3.jpg',
  '/images/league-of-coders-4.jpg',
  '/images/league-of-coders-5.jpg',
];

export default function EventSection() {
  return (
    <section
      id="event"
      className="relative overflow-hidden py-28 sm:py-32 lg:py-40"
      style={{ backgroundColor: '#000c25' }}
    >
      {/* Smooth fade from About section's navy */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-32"
        style={{
          background:
            'linear-gradient(to bottom, #011236 0%, transparent 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1540px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          {/* LEFT */}
          <div
            className="lg:col-span-4 animate-fade-slide-in"
            style={{ '--slide-delay': '0.05s' } as React.CSSProperties}
          >
            {/* Pill badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C28C4F]/40 bg-[#C28C4F]/15 px-3 py-1.5 text-xs font-semibold text-[#C28C4F] uppercase tracking-wider">
              <span className="h-2 w-2 rounded-full bg-[#C28C4F]" />
              The event we host
            </div>

            {/* Logo */}
            <div className="relative w-full max-w-[400px] h-28 sm:h-36 md:h-[15rem] -ml-2">
              <Image
                src="/images/league_of_coders_logo.png"
                alt="League of Coders"
                fill
                className="object-contain object-left"
                sizes="400px"
                priority
              />
            </div>

            {/* Simple description */}
            <p className="text-base leading-relaxed max-w-sm mb-8 text-slate-400">
              We host the League of Coders, a competitive programming event that brings together students from top engineering schools in tunisia to prove their coding skills and problem-solving abilities. Participants engage in a series of challenging coding tasks, fostering their algorithmic thinking, engineering mindset, and passion for technology.
            </p>

            {/* Glass CTA */}
            <Link
              href="https://www.facebook.com/profile.php?id=61551749751403"
              className="inline-flex items-center gap-2 font-semibold text-base px-7 py-4 rounded-xl border border-[#C28C4F]/30 bg-[#C28C4F]/10 backdrop-blur-md text-[#C28C4F] transition-all duration-500 hover:border-[#C28C4F]/50 hover:bg-[#C28C4F]/20 group"
            >
              Discover more
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                {'->'}
              </span>
            </Link>
          </div>

          {/* RIGHT */}
          <div
            className="lg:col-span-8 animate-fade-slide-in"
            style={{ '--slide-delay': '0.2s' } as React.CSSProperties}
          >
            <div className="mb-6">
              <p className="text-[20px] font-bold uppercase tracking-[0.2em] text-[#C28C4F]">
                Event Gallery
              </p>
              <h3
                className="font-bold text-white mt-1.5"
                style={{
                  fontSize: 'clamp(2rem, 1.3rem + 2.5vw, 3rem)',
                  lineHeight: '1.2',
                }}
              >
                LEAGUE OF CODERS{' '}
                <span className="bg-gradient-to-r from-[#C28C4F] to-yellow-300 bg-clip-text text-transparent">
                  MOMENTS
                </span>
              </h3>
            </div>

            <div className="grid grid-cols-4 grid-rows-2 gap-5">
              {/* Large image (2x2) — no backdrop-blur, GPU promoted */}
              <div className="col-span-2 row-span-2 group relative overflow-hidden rounded-xl border border-white/[0.08] bg-slate-900/40 aspect-square transition-all duration-500 hover:border-[#C28C4F]/30 hover:shadow-[0_8px_32px_-8px_rgba(194,140,79,0.2)] transform-gpu will-change-transform">
                <Image
                  src={images[0]}
                  alt="League of Coders — championship moment 1"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Remaining 4 images — same fix */}
              {images.slice(1).map((src, index) => (
                <div
                  key={src}
                  className="col-span-1 row-span-1 group relative overflow-hidden rounded-xl border border-white/[0.08] bg-slate-900/40 aspect-square transition-all duration-500 hover:border-[#C28C4F]/30 hover:shadow-[0_8px_32px_-8px_rgba(194,140,79,0.2)] transform-gpu will-change-transform"
                >
                  <Image
                    src={src}
                    alt={`League of Coders — championship moment ${index + 2}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
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