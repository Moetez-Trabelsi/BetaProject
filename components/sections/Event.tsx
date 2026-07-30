'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const highlights = ['Algorithms', 'Competition', 'National Title'];
const images = [
  '/images/loc1.jpg',
  '/images/loc2.jpg',
  '/images/loc3.jpg',
  '/images/loc4.jpg',
  '/images/loc5.jpg',
];
const AUTO_PLAY_INTERVAL = 5000;

export default function EventSection() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goTo = useCallback((index: number) => {
    setCurrent((index + images.length) % images.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(next, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isHovered, next]);

  return (
    <section id="event" className="relative overflow-hidden bg-[#0A0F1F] py-24 sm:py-32">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-80 w-80 rounded-full bg-cyan-600/[0.06] blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-blue-600/[0.06] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1540px] px-6 sm:px-10 lg:px-12">
        {/* Two-column split – text left, gallery right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left – Text content */}
          <div className="animate-fade-slide-in" style={{ '--slide-delay': '0.1s' } as React.CSSProperties}>
            {/* Label */}
            <div className="mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span className="text-xs font-semibold tracking-[0.18em] text-cyan-300 uppercase">
                THE EVENT WE HOST
              </span>
            </div>
            <h2 className="mt-5 text-4xl font-extrabold text-white sm:text-5xl lg:text-5xl tracking-tight">
              LEAGUE OF CODERS
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-slate-300 sm:text-xl">
              The pinnacle of collegiate coding competition — the League of
              Coders gathers top student talents from across the nation for an
              ultimate test of grit, algorithmic prowess, and competitive
              excellence. Compete, collaborate, and define your legacy.
            </p>

            {/* Highlights */}
            <div className="mt-7 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm font-medium text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9">
              <Link
                href="#league-of-coders"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-7 py-3 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 group"
              >
                Discover More
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
          </div>

          {/* Right – Image gallery */}
          <div
            className="relative animate-fade-slide-in"
            style={{ '--slide-delay': '0.2s' } as React.CSSProperties}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none overflow-hidden rounded-3xl border border-white/[0.08] bg-slate-900/30 backdrop-blur-sm shadow-2xl shadow-black/40 group">
              {/* Aspect ratio box matching image proportions */}
              <div className="relative w-full" style={{ aspectRatio: '940 / 788' }}>
                {images.map((src, index) => (
                  <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === current ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`League of Coders — photo ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                ))}

                {/* Navigation arrows */}
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                  aria-label="Next image"
                >
                  <ChevronRight size={16} />
                </button>

                {/* Dot indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        i === current ? 'bg-white scale-125' : 'bg-white/40'
                      }`}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Optional: subtle glow behind the card */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 blur-xl -z-10" />
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