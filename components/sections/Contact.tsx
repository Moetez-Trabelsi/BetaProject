'use client';

import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';

// ---------------------------------------------------------------------------
// Brand icons — lucide-react doesn't ship logo/brand marks, so these are
// small inline SVGs (paths from Simple Icons, MIT licensed). Add or remove
// entries here as needed; no extra dependency required.
// ---------------------------------------------------------------------------
type IconProps = { className?: string };

const FacebookIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const LinkedinIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.125 2.062 2.062 0 01-.001 4.125zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const socials: { icon: (props: IconProps) => React.JSX.Element; label: string; href: string }[] = [
  { icon: FacebookIcon, label: 'Facebook', href: 'https://facebook.com/g2foss' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com/g2foss' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/company/g2foss' },
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/g2foss' },
];

// ---------------------------------------------------------------------------
// Contact section
// ---------------------------------------------------------------------------
export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#050B1F] py-24 sm:py-32">
      {/* Ambient glows — same device as Hero/Event, closing the page on the
          same visual register it opened with */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 right-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1540px] px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <div
            className="mb-5 flex items-center justify-center gap-2 animate-fade-slide-in"
            style={{ '--slide-delay': '0.05s' } as React.CSSProperties}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span className="font-sans text-xs font-semibold tracking-[0.18em] text-cyan-300">
              GET IN TOUCH
            </span>
          </div>

          <h2
            className="mb-5 font-sans font-bold tracking-[0.02em] text-white animate-fade-slide-in"
            style={
              {
                fontSize: 'clamp(2rem, 1.3rem + 2.6vw, 3.1rem)',
                lineHeight: '1.15',
                '--slide-delay': '0.1s',
              } as React.CSSProperties
            }
          >
            Ready to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
              join us
            </span>
            ?
          </h2>

          <p
            className="mb-10 font-sans text-gray-300 animate-fade-slide-in"
            style={
              {
                fontSize: 'clamp(1.05rem, 0.98rem + 0.3vw, 1.15rem)',
                lineHeight: '1.75',
                '--slide-delay': '0.15s',
              } as React.CSSProperties
            }
          >
            Questions about workshops, projects, or the next contest?
            We&apos;re one message away.
          </p>

          {/* CTAs — same ghost + gradient pair used in the Hero */}
          <div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-slide-in"
            style={{ '--slide-delay': '0.2s' } as React.CSSProperties}
          >
            {/* Replace with your real inbox */}
            <a
              href="mailto:hello@g2foss.org"
              className="inline-flex items-center gap-2 border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 font-semibold px-6 py-2.5 rounded-xl transition-all duration-300"
            >
              <Mail size={17} strokeWidth={2} />
              Email us
            </a>
            {/* Replace href with your membership form (Google Form, Tally, etc.) */}
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 group"
            >
              Apply to join
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">{'->'}</span>
            </Link>
          </div>

          {/* Social links */}
          <div
            className="mt-10 flex items-center justify-center gap-3 animate-fade-slide-in"
            style={{ '--slide-delay': '0.25s' } as React.CSSProperties}
          >
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>

          {/* Location */}
          <div
            className="mt-10 flex items-center justify-center gap-2 animate-fade-slide-in"
            style={{ '--slide-delay': '0.3s' } as React.CSSProperties}
          >
            <MapPin size={14} strokeWidth={2} className="text-white/40" />
            <span className="font-sans text-sm text-white/40">ENIT, Tunis, Tunisia</span>
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