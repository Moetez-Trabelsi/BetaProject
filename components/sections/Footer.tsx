import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#040814] py-10">
      <div className="mx-auto max-w-[1540px] px-6 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="#home" className="shrink-0">
            <Image
              src="/images/log.png"
              alt="G2FOSS"
              width={128}
              height={128}
              className="h-9 w-auto object-contain"
            />
          </Link>

          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-sm text-white/60 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6 text-center">
          <p className="font-sans text-xs text-white/40">
            &copy; {year + ' '} G2FOSS &mdash; General and Geographical Open Source Software club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}