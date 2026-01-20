import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://millionvpn.com'),
  title: {
    default: 'MillionVPN - Secure Your Digital Life',
    template: '%s | MillionVPN',
  },
  description:
    'Fast, Private & Affordable VPN Protection. Secure your digital life with military-grade encryption, 100+ server locations, and unlimited bandwidth. Starting at $1.99/mo.',
  keywords: [
    'VPN',
    'Virtual Private Network',
    'online privacy',
    'secure browsing',
    'encrypted connection',
  ],
  authors: [{ name: 'MillionVPN' }],
  creator: 'MillionVPN',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://millionvpn.com',
    siteName: 'MillionVPN',
    title: 'MillionVPN - Secure Your Digital Life',
    description: 'Fast, Private & Affordable VPN Protection',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MillionVPN',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MillionVPN - Secure Your Digital Life',
    description: 'Fast, Private & Affordable VPN Protection',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
