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
    image: '/images/dhouha.jpg',
    initials: 'YN',
  },
  {
    id: 'vice-president',
    role: 'Vice President',
    name: 'Your Name',
    icon: Star,
    image: '/images/raslen.jpg',
    initials: 'YN',
  },
];

const managers: Member[] = [
  {
    id: 'hr-manager',
    role: 'HR Manager',
    name: 'Your Name',
    icon: Users,
    image: '/images/bader.jpg',
    initials: 'YN',
  },
  {
    id: 'technical-manager',
    role: 'Technical Manager',
    name: 'Wissem Toujeni',
    icon: Code2,
    image: '/images/Wissem.jpg',
    initials: 'YN',
  },
  {
    id: 'media-manager',
    role: 'Media Manager',
    name: 'Your Name',
    icon: Megaphone,
    image: '/images/zied.jpg',
    initials: 'YN',
  },
  {
    id: 'general-secretary',
    role: 'General Secretary',
    name: 'Your Name',
    icon: FileText,
    image: '/images/aicha.jpg',
    initials: 'YN',
  },
  {
    id: 'financial-manager',
    role: 'Financial Manager',
    name: 'Your Name',
    icon: DollarSign,
    image: '/images/mariem.jpg',
    initials: 'YN',
  },
  {
    id: 'cp-manager',
    role: 'CP Manager',
    name: 'Your Name',
    icon: Trophy,
    image: '/images/moetez.jpg',
    initials: 'YN',
  },
];

// Accent palettes adapted for dark backgrounds
const accents = [
  { bg: 'bg-blue-500/20', text: 'text-blue-400' },
  { bg: 'bg-cyan-500/20', text: 'text-cyan-400' },
  { bg: 'bg-indigo-500/20', text: 'text-indigo-400' },
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
      className={`relative shrink-0 overflow-hidden rounded-2xl bg-slate-700 ${
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
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800 font-sans text-lg font-bold text-slate-400">
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
      <div className="group flex h-full items-center gap-5 rounded-3xl border border-slate-700/80 bg-slate-800/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/10 sm:p-6">
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
            className={`font-sans font-bold leading-snug text-white ${
              large ? 'text-xl sm:text-2xl' : 'text-lg'
            }`}
          >
            {member.role}
          </h4>

          <span className="my-2 block h-0.5 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

          <p className="font-sans text-sm text-slate-300">{member.name}</p>
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
    <section id="team" className="relative overflow-hidden py-24 sm:py-32" style={{ backgroundColor: '#00091d' }}>
      <div className="relative z-10 mx-auto max-w-[1540px] px-6 lg:px-12">
        {/* ------------------------------------------------------------- */}
        {/* Section header — centred title, no description                 */}
        {/* ------------------------------------------------------------- */}
        <div className="mb-14 text-center sm:mb-16">
          <div
            className="inline-flex items-center gap-2 animate-fade-slide-in"
            style={{ '--slide-delay': '0.05s' } as React.CSSProperties}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-400/15 px-3 py-1.5 text-xs font-semibold text-blue-300 uppercase tracking-wider animate-fade-slide-in" style={{ '--slide-delay': '0.05s' } as React.CSSProperties}>
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            OUR TEAM 
          </div>
          </div>

          <h2
            className="font-sans font-bold tracking-[0.02em] text-white animate-fade-slide-in mt-5"
            style={
              {
                fontSize: 'clamp(2rem, 1.3rem + 2.6vw, 3.1rem)',
                lineHeight: '1.15',
                '--slide-delay': '0.1s',
              } as React.CSSProperties
            }
          >
            MEET THE PEOPLE BEHIND{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              G2FOSS
            </span>
          </h2>
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