import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';  // ⬅️ go UP one level

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Two Biquitous Music',
  description: "The home for artists who define today's sound.",
  openGraph: {
    title: 'Two Biquitous Music',
    description: "The home for artists who define today's sound.",
    type: 'website',
    locale: 'en_US',
    siteName: 'Two Biquitous Music',
    images: ['/logo.png'],
  },
  icons: {
    icon: [
      {
        url: '/favicon-square-light.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon-square-dark.png',
        media: '(prefers-color-scheme: dark)',
      },
      // Fallback for browsers that don't support media queries
      {
        url: '/favicon-square-light.png',
      }
    ],
    // Apple touch icon for iOS home screen shortcuts
    apple: '/favicon-square-light.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="pt-24 min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}
