'use client';

import Image from 'next/image';
import { BookOpen, Code2, Users, type LucideIcon } from 'lucide-react';

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
type Card = {
  step: string;
  icon: LucideIcon;
  title: string;
  description: string;
  iconBg: string;
  iconText: string;
  underline: string;
  numberColor: string;
};

const cards: Card[] = [
  {
    step: '01',
    icon: BookOpen,
    title: 'Learn',
    description:
      'Hands-on workshops and technical talks that turn theory into practical skill — no prior experience required.',
    iconBg: 'bg-blue-50',
    iconText: 'text-blue-600',
    underline: 'bg-blue-500',
    numberColor: 'text-blue-200',
  },
  {
    step: '02',
    icon: Code2,
    title: 'Build',
    description:
      'Team projects and challenges where half-formed ideas get shipped as real, working solutions.',
    iconBg: 'bg-cyan-50',
    iconText: 'text-cyan-600',
    underline: 'bg-cyan-500',
    numberColor: 'text-cyan-200',
  },
  {
    step: '03',
    icon: Users,
    title: 'Connect',
    description:
      'A network of mentors, teammates, and alumni that stays with you well past graduation.',
    iconBg: 'bg-indigo-50',
    iconText: 'text-indigo-600',
    underline: 'bg-indigo-500',
    numberColor: 'text-indigo-200',
  },
];

// ---------------------------------------------------------------------------
// Visual — a group photo instead of an illustration or mockup. This is the
// strongest possible visual for an "about us" section: real faces build more
// trust than any icon composition can. Drop the file in as
// /public/images/about-group.jpg (landscape crop, roughly 4:3, works best).
// ---------------------------------------------------------------------------
function GroupPhoto() {
  return (
    <div
      className="relative mx-auto w-full max-w-lg animate-fade-slide-in"
      style={{ '--slide-delay': '0.3s' } as React.CSSProperties}
    >
      {/* Offset color block behind the photo — adds depth, echoes the Hero's gradient */}
      <div
        className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 sm:block"
        aria-hidden="true"
      />

      {/* Photo */}
      <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white shadow-xl shadow-blue-900/10">
        <Image
          src="/images/about-club-photo.png"
          alt="G2FOSS members at ENIT"
          fill
          sizes="(min-width: 1024px) 560px, 90vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// About section
// ---------------------------------------------------------------------------
export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white pb-28 sm:pb-30">
      <div className="relative z-10 mx-auto max-w-[1540px] px-6 pt-28 sm:pt-25 lg:px-12">
        {/* ------------------------------------------------------------- */}
        {/* Identity                                                       */}
        {/* ------------------------------------------------------------- */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-20">
          <div className="max-w-2xl">
            <div
              className="mb-5 flex items-center gap-2 animate-fade-slide-in"
              style={{ '--slide-delay': '0.05s' } as React.CSSProperties}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              <span className="font-sans text-xs font-semibold tracking-[0.18em] text-blue-600">
                WHY G2FOSS
              </span>
            </div>

            <h2
              className="mb-6 font-sans font-bold tracking-[0.02em] text-slate-900 animate-fade-slide-in"
              style={
                {
                  fontSize: 'clamp(2rem, 1.3rem + 2.6vw, 3.1rem)',
                  lineHeight: '1.15',
                  '--slide-delay': '0.1s',
                } as React.CSSProperties
              }
            >
              From curious beginners to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                confident builders
              </span>
            </h2>

            <div
              className="space-y-4 font-sans text-slate-600 animate-fade-slide-in"
              style={
                {
                  fontSize: 'clamp(1.05rem, 0.98rem + 0.3vw, 1.15rem)',
                  lineHeight: '1.75',
                  '--slide-delay': '0.15s',
                } as React.CSSProperties
              }
            >
              <p>
                G2FOSS is a student-led ICT club at ENIT. We don&apos;t just talk
                about technology — we run the workshops, ship the projects, and
                show up for each other, one commit at a time.
              </p>
              <p>
                No matter where you&apos;re starting from, there&apos;s a place
                for you here: to learn something new, build something real, and
                find the people who&apos;ll push you to go further.
              </p>
            </div>
          </div>

          <GroupPhoto />
        </div>

        {/* ------------------------------------------------------------- */}
        {/* Learn / Build / Connect                                        */}
        {/* ------------------------------------------------------------- */}
        <div className="mt-24 grid grid-cols-1 gap-6 sm:mt-20 md:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="animate-fade-slide-in"
                style={{ '--slide-delay': `${0.35 + i * 0.08}s` } as React.CSSProperties}
              >
                <div className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5">
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${card.iconBg} ${card.iconText} transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon size={24} strokeWidth={1.75} />
                  </div>

                  <h4 className="mb-2 font-sans text-xl font-bold text-slate-900">
                    {card.title}
                  </h4>
                  <p className="font-sans text-[15px] leading-relaxed text-slate-500">
                    {card.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between">
                    <span className={`h-1 w-8 rounded-full ${card.underline}`} />
                    <span className={`text-3xl font-bold ${card.numberColor}`}>
                      {card.step}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
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