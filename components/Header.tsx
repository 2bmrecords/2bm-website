'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const MotionDiv = motion.div as any;

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

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
  const headerBg = isMobileMenuOpen || (isHome && !isScrolled)
    ? 'bg-transparent'
    : 'bg-brand-cream/85 backdrop-blur-xl shadow-sm';

  const textColor = (isHome && !isScrolled && !isMobileMenuOpen) ? 'text-white' : 'text-black';
  const logoFilter = (isHome && !isScrolled && !isMobileMenuOpen) ? 'brightness-0 invert' : '';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${headerBg}`}>
      <div className={`relative flex items-center justify-between px-6 md:px-12 transition-all duration-500 ease-out ${isScrolled ? 'h-20' : 'h-24'}`}>

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-6 group z-50">
          <Image
            src="/logo.png"
            alt="Two Biquitous Music"
            width={300}
            height={150}
            className={`h-10 md:h-12 w-auto transition-all duration-300 ${logoFilter}`}
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

        {/* DESKTOP NAV */}
        <nav className={`absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-12 ${textColor}`}>
          {NAV_ITEMS.map((item) => {
            const isActive = item.href === '/'
              ? pathname === '/'
              : pathname.startsWith(item.href);

            const activeStyle = isHome && !isScrolled
              ? 'bg-brand-cream text-black'
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

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden z-50 p-2 ${textColor}`}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col items-end gap-1.5 transition-all">
            <span
              className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
                }`}
            />
            <span
              className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-4'
                }`}
            />
            <span
              className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'
                }`}
            />
          </div>
        </button>

        {/* MOBILE MENU OVERLAY */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <MotionDiv
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed inset-0 bg-brand-cream z-40 flex flex-col items-center justify-center md:hidden"
            >
              <nav className="flex flex-col items-center gap-8">
                {NAV_ITEMS.map((item, i) => (
                  <MotionDiv
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-3xl font-bold tracking-tight text-black hover:text-neutral-500 transition-colors ${pathname === item.href ? 'line-through decoration-2' : ''
                        }`}
                    >
                      {item.label}
                    </Link>
                  </MotionDiv>
                ))}
              </nav>
            </MotionDiv>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}
