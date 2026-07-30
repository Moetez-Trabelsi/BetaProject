'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Crown,
  Star,
  Users,
  Code2,
  Megaphone,
  FileText,
  DollarSign,
  Trophy,
  GraduationCap,
  Lightbulb,
  Handshake,
  type LucideIcon,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Data — placeholder names/images. Swap `image` paths and `name` once real
// content is ready; everything else (fallback, layout) keeps working as-is.
// ---------------------------------------------------------------------------
type Member = {
  id: string;
  role: string;
  name: string;
  icon: LucideIcon;
  image: string;
  initials: string;
};

const leadership: Member[] = [
  {
    id: 'president',
    role: 'President',
    name: 'Your Name',
    icon: Crown,
    image: '/images/team/president.jpg',
    initials: 'YN',
  },
  {
    id: 'vice-president',
    role: 'Vice President',
    name: 'Your Name',
    icon: Star,
    image: '/images/team/vice-president.jpg',
    initials: 'YN',
  },
];

const managers: Member[] = [
  {
    id: 'hr-manager',
    role: 'HR Manager',
    name: 'Your Name',
    icon: Users,
    image: '/images/team/hr-manager.jpg',
    initials: 'YN',
  },
  {
    id: 'technical-manager',
    role: 'Technical Manager',
    name: 'Your Name',
    icon: Code2,
    image: '/images/team/technical-manager.jpg',
    initials: 'YN',
  },
  {
    id: 'media-manager',
    role: 'Media Manager',
    name: 'Your Name',
    icon: Megaphone,
    image: '/images/team/media-manager.jpg',
    initials: 'YN',
  },
  {
    id: 'general-secretary',
    role: 'General Secretary',
    name: 'Your Name',
    icon: FileText,
    image: '/images/team/general-secretary.jpg',
    initials: 'YN',
  },
  {
    id: 'financial-manager',
    role: 'Financial Manager',
    name: 'Your Name',
    icon: DollarSign,
    image: '/images/team/financial-manager.jpg',
    initials: 'YN',
  },
  {
    id: 'cp-manager',
    role: 'CP Manager',
    name: 'Your Name',
    icon: Trophy,
    image: '/images/team/cp-manager.jpg',
    initials: 'YN',
  },
];

const accents = [
  { bg: 'bg-blue-50', text: 'text-blue-600' },
  { bg: 'bg-cyan-50', text: 'text-cyan-600' },
  { bg: 'bg-indigo-50', text: 'text-indigo-600' },
];

const closing: { icon: LucideIcon; pre: string; word: string }[] = [
  { icon: GraduationCap, pre: 'Built by', word: 'students.' },
  { icon: Lightbulb, pre: 'Driven by', word: 'curiosity.' },
  { icon: Handshake, pre: 'Powered by', word: 'collaboration.' },
];

// ---------------------------------------------------------------------------
// Member photo — falls back to initials if the file isn't there yet, so the
// section looks finished even before real photos are dropped in.
// ---------------------------------------------------------------------------
function MemberPhoto({
  src,
  alt,
  initials,
  large,
}: {
  src: string;
  alt: string;
  initials: string;
  large?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-2xl bg-slate-100 ${
        large ? 'h-28 w-28 sm:h-32 sm:w-32' : 'h-20 w-20 sm:h-[5.5rem] sm:w-[5.5rem]'
      }`}
    >
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="160px"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 font-sans text-lg font-bold text-slate-400">
          {initials}
        </div>
      )}
      {/* Brand accent swoosh */}
      <div
        className={`absolute -bottom-1 -left-1 rounded-tr-[999px] bg-gradient-to-br from-cyan-400 to-blue-600 ${
          large ? 'h-11 w-11' : 'h-9 w-9'
        }`}
        aria-hidden="true"
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Member card
// ---------------------------------------------------------------------------
function MemberCard({
  member,
  accentIndex,
  large,
  delay,
}: {
  member: Member;
  accentIndex: number;
  large?: boolean;
  delay: number;
}) {
  const Icon = member.icon;
  const accent = accents[accentIndex % accents.length];

  return (
    <div
      className="animate-fade-slide-in"
      style={{ '--slide-delay': `${delay}s` } as React.CSSProperties}
    >
      <div className="group flex h-full items-center gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 sm:p-6">
        <MemberPhoto src={member.image} alt={member.name} initials={member.initials} large={large} />

        <div className="min-w-0 flex-1">
          <div
            className={`mb-3 flex items-center justify-center rounded-xl ${accent.bg} ${accent.text} ${
              large ? 'h-11 w-11' : 'h-10 w-10'
            }`}
          >
            <Icon size={large ? 20 : 18} strokeWidth={1.75} />
          </div>

          <h4
            className={`font-sans font-bold leading-snug text-slate-900 ${
              large ? 'text-xl sm:text-2xl' : 'text-lg'
            }`}
          >
            {member.role}
          </h4>

          <span className="my-2 block h-0.5 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

          <p className="font-sans text-sm text-slate-500">{member.name}</p>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Team section
// ---------------------------------------------------------------------------
export default function Team() {
  return (
    <section id="team" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-[1540px] px-6 lg:px-12">
        {/* ------------------------------------------------------------- */}
        {/* Section header — same split rhythm as About / Event            */}
        {/* ------------------------------------------------------------- */}
        <div className="mb-14 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <div
              className="mb-5 flex items-center gap-2 animate-fade-slide-in"
              style={{ '--slide-delay': '0.05s' } as React.CSSProperties}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              <span className="font-sans text-xs font-semibold tracking-[0.18em] text-blue-600">
                OUR TEAM
              </span>
            </div>

            <h2
              className="font-sans font-bold tracking-[0.02em] text-slate-900 animate-fade-slide-in"
              style={
                {
                  fontSize: 'clamp(2rem, 1.3rem + 2.6vw, 3.1rem)',
                  lineHeight: '1.15',
                  '--slide-delay': '0.1s',
                } as React.CSSProperties
              }
            >
              Meet the people behind{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                G2FOSS
              </span>
            </h2>
          </div>

          <p
            className="max-w-sm font-sans text-slate-500 animate-fade-slide-in sm:text-right"
            style={
              {
                fontSize: 'clamp(1rem, 0.94rem + 0.25vw, 1.05rem)',
                lineHeight: '1.75',
                '--slide-delay': '0.15s',
              } as React.CSSProperties
            }
          >
            A dedicated team of students working together to create learning
            opportunities, organize events, and grow the technology community
            at ENIT.
          </p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* Leadership                                                     */}
        {/* ------------------------------------------------------------- */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {leadership.map((member, i) => (
            <MemberCard key={member.id} member={member} accentIndex={i} large delay={0.2 + i * 0.06} />
          ))}
        </div>

        {/* ------------------------------------------------------------- */}
        {/* Managers                                                       */}
        {/* ------------------------------------------------------------- */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {managers.map((member, i) => (
            <MemberCard
              key={member.id}
              member={member}
              accentIndex={i}
              delay={0.32 + i * 0.06}
            />
          ))}
        </div>

        {/* ------------------------------------------------------------- */}
        {/* Closing strip                                                  */}
        {/* ------------------------------------------------------------- */}
        <div
          className="mt-6 animate-fade-slide-in"
          style={{ '--slide-delay': '0.75s' } as React.CSSProperties}
        >
          <div className="flex flex-col items-center gap-8 rounded-3xl border border-slate-100 bg-slate-50 px-8 py-10 sm:flex-row sm:justify-around sm:gap-4 sm:py-8">
            {closing.map(({ icon: Icon, pre, word }, i) => (
              <div key={word} className="flex items-center gap-4">
                {i > 0 && (
                  <span className="hidden h-8 w-px bg-slate-200 sm:block" aria-hidden="true" />
                )}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <p className="font-sans text-base font-semibold text-slate-800 sm:text-[15px]">
                    {pre}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                      {word}
                    </span>
                  </p>
                </div>
              </div>
            ))}
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