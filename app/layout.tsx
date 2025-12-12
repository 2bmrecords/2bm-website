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
    icon: '/logo.png',
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
