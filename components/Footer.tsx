import { Instagram, Mail, Youtube } from 'lucide-react';
// @ts-ignore - Tiktok might not be exported in all versions, using fallback if needed or assuming it exists based on version
import { Music2 } from 'lucide-react';

// Check if Tiktok icon exists in lucide-react, if not we can use a custom SVG or fallback
// Since we can't easily check at runtime in this environment without running code, we will assume standard Lucide icons or use a reliable set.
// However, Lucide 'Twitter' is 'Twitter', 'X' is not standard? 'Youtube', 'Instagram', 'Mail' are standard.
// For Tiktok, let's use a clear SVG if unsure, or 'Music2' as a placeholder if we want to be safe, but user specifically asked for Tiktok.
// The user has lucide-react ^0.555.0, which definitely has 'Twitter' and likely 'Tiktok' was added recently but let's verify.
// Actually, 'Tiktok' is NOT in standard lucide-react export list in some versions.
// I will provide an SVG for TikTok to be safe and aesthetic.

export default function Footer() {
  const ICON_SIZE = 20;
  const SOCIALS = [
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@twobiquitousmusic', // Guessing or placeholder
      icon: (
        <svg
          width={ICON_SIZE}
          height={ICON_SIZE}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@twobiquitousmusic', // Placeholder
      icon: <Youtube size={ICON_SIZE} />,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/twobiquitousmusic', // Placeholder
      icon: <Instagram size={ICON_SIZE} />,
    },
    {
      name: 'Email',
      href: 'mailto:contact@twobiquitousmusic.com',
      icon: <Mail size={ICON_SIZE} />,
    },
  ];

  return (
    <footer className="w-full bg-brand-cream text-black py-8 flex items-center justify-center relative z-20">
      <div className="flex items-center gap-8">
        {SOCIALS.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target={social.name === 'Email' ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="text-black hover:text-neutral-500 hover:scale-110 transition-all duration-300"
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}


