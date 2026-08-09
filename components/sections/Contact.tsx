'use client';

import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';

// ---------------------------------------------------------------------------
// Brand icons (unchanged)
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
const socials: {
  icon: (props: IconProps) => React.JSX.Element;
  label: string;
  href: string;
}[] = [
  { icon: FacebookIcon, label: 'Facebook', href: 'https://facebook.com/g2foss' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com/g2foss' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/company/g2foss-enit/' },
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/g2foss' },
];

// ---------------------------------------------------------------------------
// Contact section – refined & balanced
// ---------------------------------------------------------------------------
export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ backgroundColor: '#00081a' }}
    >
      {/* Top transition – soft fade from Team background (#00091d) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-20"
        style={{
          background: 'linear-gradient(to bottom, #00091d 0%, transparent 100%)',
        }}
      />

      {/* Ambient glows – placed lower so they aren’t clipped */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-600/5 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1540px] px-6 lg:px-12">
        <div className="mx-auto max-w-xl text-center">
          {/* Pill badge – same as other sections */}
          <div
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-400/15 px-3 py-1.5 text-xs font-semibold text-blue-300 uppercase tracking-wider animate-fade-slide-in"
            style={{ '--slide-delay': '0.05s' } as React.CSSProperties}
          >
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Get in touch
          </div>

          {/* Smaller, calmer heading */}
          <h2
            className="mb-6 font-sans font-bold text-white animate-fade-slide-in"
            style={
              {
                fontSize: 'clamp(1.8rem, 1.2rem + 2.5vw, 2.5rem)',
                lineHeight: '1.2',
                '--slide-delay': '0.1s',
              } as React.CSSProperties
            }
          >
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to join us?
            </span>
          </h2>

          {/* Short subtext */}
          <p
            className="mb-10 font-sans text-slate-400 animate-fade-slide-in"
            style={
              {
                fontSize: 'clamp(1rem, 0.95rem + 0.2vw, 1.1rem)',
                lineHeight: '1.6',
                '--slide-delay': '0.15s',
              } as React.CSSProperties
            }
          >
            Questions about workshops, projects, or the next competition?
            We’re one message away.
          </p>

          {/* Buttons – same size as Hero, stacked nicely */}
          <div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-slide-in"
            style={{ '--slide-delay': '0.45s' } as React.CSSProperties}
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=enitg2fossclub@gmail.com"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 font-semibold text-base px-7 py-4 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-500"
            >
              <Mail size={18} strokeWidth={2} />
              Email us
            </a>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScvUaWj3K0v0-nnBd1gLa1WIlwjf2vt6Du8Hum-trjAfMyEdw/closedform"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-base px-7 py-4 rounded-xl shadow-md shadow-black/10 transition-all duration-300 group"
            >
              Apply to join
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                {'->'}
              </span>
            </Link>
          </div>

          {/* Social icons – glass cards, same as member cards */}
          <div
            className="mt-12 flex items-center justify-center gap-4 animate-fade-slide-in"
            style={{ '--slide-delay': '0.55s' } as React.CSSProperties}
          >
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-transparent transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.15] hover:bg-white/[0.08] hover:shadow-[0_8px_24px_-8px_rgba(59,130,246,0.2)] transform-gpu will-change-transform"
              >
                <Icon className="h-5 w-5 text-white/70 transition-colors duration-300 group-hover:text-white" />
              </a>
            ))}
          </div>

          {/* Location */}
          <div
            className="mt-10 flex items-center justify-center gap-2 animate-fade-slide-in"
            style={{ '--slide-delay': '0.65s' } as React.CSSProperties}
          >
            <MapPin size={14} strokeWidth={2} className="text-slate-500" />
            <span className="font-sans text-sm text-slate-500">ENIT, Tunis, Tunisia</span>
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