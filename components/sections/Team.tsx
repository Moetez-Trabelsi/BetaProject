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
// Data
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
    name: 'Dhouha Ben Arab',
    icon: Crown,
    image: '/images/dhouha.jpg',
    initials: 'DA',
  },
  {
    id: 'vice-president',
    role: 'Vice President',
    name: 'Med Raslen Amdouni',
    icon: Star,
    image: '/images/raslen.jpg',
    initials: 'RA',
  },
];

const managers: Member[] = [
  {
    id: 'hr-manager',
    role: 'HR Manager',
    name: 'Bader Hamdi',
    icon: Users,
    image: '/images/bader.jpg',
    initials: 'BH',
  },
  {
    id: 'technical-manager',
    role: 'Technical Manager',
    name: 'Wissem Toujeni',
    icon: Code2,
    image: '/images/wissem.jpg',
    initials: 'WT',
  },
  {
    id: 'media-manager',
    role: 'Media Manager',
    name: 'Zied Ben Hammouda',
    icon: Megaphone,
    image: '/images/zied.jpg',
    initials: 'ZH',
  },
  {
    id: 'general-secretary',
    role: 'General Secretary',
    name: 'Aicha Bacha',
    icon: FileText,
    image: '/images/aicha.jpg',
    initials: 'AB',
  },
  {
    id: 'financial-manager',
    role: 'Financial Manager',
    name: 'Mariam Ahmed',
    icon: DollarSign,
    image: '/images/mariem.jpg',
    initials: 'MA',
  },
  {
    id: 'cp-manager',
    role: 'CP Manager',
    name: 'Med Moetez Trabelsi',
    icon: Trophy,
    image: '/images/moetez.jpg',
    initials: 'MT',
  },
];

// Accent colours — subtle, consistent with the About cards
const accents = [
  { bg: 'bg-blue-500/10', text: 'text-blue-400', shadow: 'rgba(59,130,246,0.15)' },
  { bg: 'bg-cyan-500/10', text: 'text-cyan-400', shadow: 'rgba(6,182,212,0.15)' },
  { bg: 'bg-indigo-500/10', text: 'text-indigo-400', shadow: 'rgba(99,102,241,0.15)' },
];

// ---------------------------------------------------------------------------
// Member photo — clean, no swoosh, with a soft glass border that glows on hover
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
      className={`relative shrink-0 overflow-hidden rounded-xl border border-white/[0.08] transition-all duration-500 group-hover:border-white/[0.15] group-hover:shadow-lg ${
        large ? 'h-24 w-24 sm:h-28 sm:w-28' : 'h-20 w-20 sm:h-[5rem] sm:w-[5rem]'
      }`}
    >
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="160px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 font-sans text-lg font-bold text-slate-500">
          {initials}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Member card — same glass style as the About cards
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
      <div className="group flex h-full items-center gap-5 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-transparent p-5 sm:p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/[0.15] hover:bg-white/[0.08] hover:shadow-[0_8px_32px_-8px_rgba(59,130,246,0.15)] transform-gpu will-change-transform">
        {/* Photo with soft glass border */}
        <MemberPhoto
          src={member.image}
          alt={member.name}
          initials={member.initials}
          large={large}
        />

        {/* Info */}
        <div className="min-w-0 flex-1">
          <div
            className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg ${accent.bg} ${accent.text}`}
          >
            <Icon size={large ? 20 : 18} strokeWidth={1.75} />
          </div>

          <h4
            className={`font-sans font-bold leading-snug text-white transition-colors duration-300 group-hover:text-slate-100 ${
              large ? 'text-xl sm:text-2xl' : 'text-lg'
            }`}
          >
            {member.role}
          </h4>

          <span className="my-2 block h-1 w-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-500 group-hover:w-12" />

          <p className="font-sans text-sm text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
            {member.name}
          </p>
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
    <section
      id="team"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ backgroundColor: '#00091d' }}
    >
      {/* Smooth transition from previous section (Event: #000c25) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-32"
        style={{
          background: 'linear-gradient(to bottom, #000c25 0%, transparent 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1540px] px-6 lg:px-12">
        {/* Header — matching About section style */}
        <div className="mb-14 text-center sm:mb-16">
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-400/15 px-3 py-1.5 text-xs font-semibold text-blue-300 uppercase tracking-wider animate-fade-slide-in"
            style={{ '--slide-delay': '0.05s' } as React.CSSProperties}
          >
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Our Team
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
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              G2FOSS
            </span>
          </h2>
        </div>

        {/* Leadership (2 cards) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {leadership.map((member, i) => (
            <MemberCard key={member.id} member={member} accentIndex={i} large delay={0.2 + i * 0.06} />
          ))}
        </div>

        {/* Managers (3‑column grid) */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {managers.map((member, i) => (
            <MemberCard key={member.id} member={member} accentIndex={i} delay={0.32 + i * 0.06} />
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