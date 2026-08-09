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
      'Workshops, training sessions, and technical talks that help students strengthen their practical skills.',
    iconBg: 'bg-white',
    iconText: 'text-blue-600',
    underline: 'bg-blue-500',
    numberColor: 'text-blue-400',
  },
  {
    step: '02',
    icon: Code2,
    title: 'Build',
    description:
      'Collaborative projects and challenges that transform ideas into real and impactful solutions.',
    iconBg: 'bg-white',
    iconText: 'text-blue-600',
    underline: 'bg-blue-500',
    numberColor: 'text-blue-400',
  },
  {
    step: '03',
    icon: Users,
    title: 'Connect',
    description:
      'A community where students meet mentors, teammates, and future innovators.',
    iconBg: 'bg-white',
    iconText: 'text-blue-600',
    underline: 'bg-blue-500',
    numberColor: 'text-blue-400',
  },
];

function GroupPhoto() {
  return (
    <div className="relative mx-auto w-full">
      <div className="relative aspect-[1686/933] w-full overflow-hidden rounded-3xl">
        <Image
          src="/images/about-club-photo.png"
          alt="G2FOSS members at ENIT"
          fill
          sizes="(min-width: 1024px) 50vw, 90vw"
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Visual — a group photo instead of an illustration or mockup. This is the
// strongest possible visual for an "about us" section: real faces build more
// trust than any icon composition can. Drop the file in as
// /public/images/about-group.jpg (landscape crop, roughly 4:3, works best).
// ---------------------------------------------------------------------------
export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#011236' }}>
      <div className="relative z-10 mx-auto max-w-[1540px] px-6 lg:px-12">
        <div className="mb-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-400/15 px-3 py-1.5 text-xs font-semibold text-blue-300 uppercase tracking-wider animate-fade-slide-in" style={{ '--slide-delay': '0.05s' } as React.CSSProperties}>
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            About G2FOSS
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-10">
            <div>
              <h2
                className="mb-6 font-sans font-bold tracking-tight text-white animate-fade-slide-in"
                style={
                  {
                    fontSize: 'clamp(2rem, 1.3rem + 2.5vw, 3rem)',
                    lineHeight: '1.2',
                    '--slide-delay': '0.1s',
                  } as React.CSSProperties
                }
              >
                Empowering Students Through{' '}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Technology & Open Source
                </span>
              </h2>

              <div
                className="space-y-4 font-sans text-slate-400 animate-fade-slide-in"
                style={
                  {
                    fontSize: 'clamp(0.95rem, 0.9rem + 0.2vw, 1.05rem)',
                    lineHeight: '1.7',
                    '--slide-delay': '0.15s',
                  } as React.CSSProperties
                }
              >
                <p>
                  G2FOSS is a student-led ICT club at ENIT dedicated to helping future engineers grow through practical learning, technical events, collaborative projects, and open-source culture.
                </p>
                <p>
                  Our community brings together students who are passionate about technology and eager to learn, build, and share knowledge.
                </p>
              </div>
            </div>

            <GroupPhoto />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="animate-fade-slide-in"
                style={{ '--slide-delay': `${0.35 + i * 0.08}s` } as React.CSSProperties}
              >
                <div className="group flex h-full flex-col rounded-2xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm p-8 transition-all duration-300 hover:border-blue-400/50 hover:bg-slate-800/60 hover:shadow-lg hover:shadow-blue-500/10">
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${card.iconBg} ${card.iconText} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={24} strokeWidth={1.75} />
                  </div>

                  <h3 className="mb-3 font-sans text-xl font-bold text-white">
                    {card.title}
                  </h3>
                  <p className="flex-grow font-sans text-sm leading-relaxed text-slate-400">
                    {card.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between">
                    <span className={`h-1 w-8 rounded-full ${card.underline}`} />
                    <span className={`text-3xl font-bold opacity-50 ${card.numberColor}`}>
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