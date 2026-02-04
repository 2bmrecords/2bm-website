import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import localFont from 'next/font/local';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DynamicFavicon from '../components/DynamicFavicon';

const hostGrotesk = localFont({
  src: [
    {
      path: '../public/Host_Grotesk/HostGrotesk-VariableFont_wght.ttf',
      weight: '400 700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Two Biquitous Music',
  description: "The home for artists who define today's sound.",
  openGraph: {
    title: 'Two Biquitous Music',
    description: "The home for artists who define today's sound.",
    type: 'website',
    locale: 'en_US',
    siteName: 'Two Biquitous Music',
    images: ['/2BM_black_transparent.png'],
  },
  icons: {
    icon: [
      {
        url: '/2BM_white_favicon.png',
        sizes: '1024x1024',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/2BM_black_favicon.png',
        sizes: '1024x1024',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
    ],
    apple: '/2BM_black_favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${hostGrotesk.className} min-h-screen flex flex-col`}>
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

