'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Event', href: '#event' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1840px] px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo (mascot icon – replace with full logo on desktop if available) */}
        <Link href="#home" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/g2foss-logo.png"
            alt="G2FOSS"
            width={128}
            height={128}
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-[16px] text-white/80 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Join button – desktop */}
          <div className="shrink-0">
            <Link
              href="#contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-base px-6 py-2.5 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 inline-flex items-center gap-2 group"
            >
              Join us
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                {"->"}
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/80 p-2 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/10 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-white/80 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-lg transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 mt-1 border-t border-white/10">
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 w-full shadow-lg shadow-cyan-500/20"
            >
              Join us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}