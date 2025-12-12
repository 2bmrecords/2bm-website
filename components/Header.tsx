'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const base =
    'uppercase text-[16px] font-medium tracking-[0.02em] transition duration-300';
  const pill =
    'px-5 py-1.5 rounded-md bg-black text-white';
  const normal =
    'hover:opacity-70';

  const NAV_ITEMS = [
    { label: 'HOME', href: '/' },
    { label: 'NEWS', href: '/news' },
    { label: 'ABOUT', href: '/about' },
  ];

  // Determine if we are on the home page (transparent header initially)
  const isHome = pathname === '/';

  // Header background logic
  const headerBg = isHome && !isScrolled ? 'bg-transparent' : 'bg-white shadow-sm';
  const textColor = isHome && !isScrolled ? 'text-white' : 'text-black';
  const logoFilter = isHome && !isScrolled ? 'brightness-0 invert' : ''; // Make logo white on dark bg if needed, or keep as is

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
      <div className={`relative flex items-center h-24 px-6 md:px-12 transition-all duration-500 ${isScrolled ? 'h-20' : 'h-24'}`}>
        {/* LEFT: LOGO + WORDMARK IMAGE */}
        <Link href="/" className="flex items-center gap-6 group">
          <Image
            src="/logo.png"
            alt="Two Biquitous Music"
            width={300}
            height={150}
            className={`h-12 w-auto transition-all duration-300 ${logoFilter}`}
            priority
          />

          <Image
            src="/logo2.png"
            alt="Two Biquitous Music Text Logo"
            width={500}
            height={100}
            className={`h-8 w-auto hidden md:block transition-all duration-300 ${logoFilter}`}
            priority
          />
        </Link>

        {/* CENTER: NAV */}
        <nav className={`absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-12 ${textColor}`}>
          {NAV_ITEMS.map((item) => {
            const isActive = item.href === '/'
              ? pathname === '/'
              : pathname.startsWith(item.href);

            // Adjust active pill style based on background
            const activeStyle = isHome && !isScrolled
              ? 'bg-white text-black'
              : 'bg-black text-white';

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${base} ${isActive ? `px-5 py-1.5 rounded-md ${activeStyle}` : normal}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button (Placeholder) */}
        <button className={`md:hidden ml-auto ${textColor}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
    </header>
  );
}
