import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DynamicFavicon from '../components/DynamicFavicon';

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
    icon: '/real favicon1.png',
    apple: '/real favicon1.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <DynamicFavicon />
        <Header />
        <div className="pt-24 flex-grow bg-brand-cream">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

