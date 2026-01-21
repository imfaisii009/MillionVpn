import type { Metadata } from 'next';
import { Outfit, Caveat } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { OrganizationSchema } from '@/components/structured-data/OrganizationSchema';
import { WebSiteSchema } from '@/components/structured-data/WebPageSchema';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caveat',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://millionvpn.com'),
  title: {
    default: 'MillionVPN - Fast, Secure & Affordable VPN Service',
    template: '%s | MillionVPN',
  },
  description:
    'Protect your privacy with MillionVPN. 10 Gbps speeds, 100+ countries, 5 devices. Military-grade AES-256 encryption & no-logs policy. 90% OFF 2-year plan. Try free for 7 days.',
  keywords: [
    'VPN',
    'best VPN',
    'fast VPN',
    'secure VPN',
    'cheap VPN',
    'VPN service',
    'Virtual Private Network',
    'online privacy',
    'encrypted connection',
    'no-logs VPN',
    'VPN for streaming',
    'VPN kill switch',
    'AES-256 encryption',
  ],
  authors: [{ name: 'MillionVPN' }],
  creator: 'MillionVPN',
  publisher: 'MillionVPN',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://millionvpn.com',
    siteName: 'MillionVPN',
    title: 'MillionVPN - Fast, Secure & Affordable VPN Service',
    description:
      'Protect your privacy with MillionVPN. 10 Gbps speeds, 100+ countries, 5 devices. 90% OFF 2-year plan. Try free for 7 days.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MillionVPN - Secure Your Digital Life',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MillionVPN - Fast, Secure & Affordable VPN Service',
    description:
      'Protect your privacy with MillionVPN. 10 Gbps speeds, 100+ countries, 5 devices. Try free for 7 days.',
    images: ['/og-image.png'],
    creator: '@millionvpn',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://millionvpn.com',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${caveat.variable}`}>
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
