'use client';

import Image from 'next/image';
import Link from 'next/link';

const highlights = ['Algorithms', 'Competition', 'National Title'];

// Last 5 event photos
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

      <div className="relative z-10 mx-auto max-w-[1540px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          {/* LEFT: eyebrow first, then the logo as the identity mark, no redundant heading */}
          <div className="lg:col-span-4 animate-fade-slide-in" style={{ '--slide-delay': '0.05s' } as React.CSSProperties}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider" style={{ borderColor: '#C28C4F', backgroundColor: 'rgba(194, 140, 79, 0.15)', color: '#C28C4F' }}>
              <span className="h-2 w-2 rounded-full" style={{ background: '#C28C4F' }} />
              The event we host
            </div>

            <div className="relative w-full max-w-[400px] md:h-[15rem] -ml-2">
              <Image
                src="/images/league_of_coders_logo.png"
                alt="League of Coders"
                fill
                className="object-contain object-left"
                sizes="400px"
                priority
              />
            </div>

            <p className="text-base leading-relaxed max-w-sm mb-8" style={{ color: '#a3a3a3' }}>
              Tunisia's premier competitive programming championship, uniting the country's sharpest algorithmic minds for a single day of high-stakes problem solving. Teams from top universities go head-to-head in timed rounds, racing to out-think and out-code one another for a shot at the national title.
            </p>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2.5 font-black text-sm px-7 py-3.5 rounded-lg transition-all duration-300 group uppercase tracking-wide border"
              style={{
                background: 'rgba(194, 140, 79, 0.1)',
                borderColor: '#C28C4F',
                color: '#C28C4F',
              }}
            >
              Learn more
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* RIGHT: full-width mosaic using all 5 photos — one large anchor + 4 smaller */}
          <div className="lg:col-span-8 animate-fade-slide-in" style={{ '--slide-delay': '0.2s' } as React.CSSProperties}>
            <div className="mb-6">
              <p className="text-[20px] font-bold uppercase tracking-[0.2em]" style={{ color: '#C28C4F' }}>Event Gallery</p>
              <h3 className="text-5xl font-bold text-white mt-1.5">LEAGUE OF CODERS MOMENTS</h3>
            </div>

            <div className="grid grid-cols-4 grid-rows-2 gap-5">
              {/* Large anchor — same square ratio as the others, just spans 2x2 cells */}
              <div
                className="col-span-2 row-span-2 group relative overflow-hidden rounded-xl border bg-slate-900 aspect-square"
                style={{ borderColor: 'rgba(194, 140, 79, 0.22)' }}
              >
                <Image
                  src={images[0]}
                  alt="League of Coders — championship moment 1"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* 2x2 of remaining 4 photos, each the same square ratio */}
              {images.slice(1).map((src, index) => (
                <div
                  key={src}
                  className="col-span-1 row-span-1 group relative overflow-hidden rounded-xl border bg-slate-900 aspect-square"
                  style={{ borderColor: 'rgba(194, 140, 79, 0.22)' }}
                >
                  <Image
                    src={src}
                    alt={`League of Coders — championship moment ${index + 2}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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