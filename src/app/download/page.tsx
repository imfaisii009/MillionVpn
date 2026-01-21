import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DownloadContent from './DownloadContent';

// ISR: Revalidate every hour
export const revalidate = 3600;

export const metadata: Metadata = {
    title: 'Download VPN for All Devices',
    description:
        'Download MillionVPN for Windows, macOS, iOS, Android, Linux, and browser extensions. One-click setup, connect in seconds. Get protected now.',
    keywords: [
        'download VPN',
        'VPN for Windows',
        'VPN for Mac',
        'VPN for iPhone',
        'VPN for Android',
        'VPN app',
        'VPN extension',
    ],
    openGraph: {
        title: 'Download MillionVPN for All Devices',
        description:
            'Download MillionVPN for Windows, macOS, iOS, Android, Linux, and browser extensions.',
        type: 'website',
        url: 'https://millionvpn.com/download',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Download MillionVPN for All Devices',
        description:
            'Download MillionVPN for Windows, macOS, iOS, Android, Linux, and browser extensions.',
    },
    alternates: {
        canonical: 'https://millionvpn.com/download',
    },
};

// Software Application Schema
function SoftwareAppSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'MillionVPN',
        applicationCategory: 'SecurityApplication',
        operatingSystem: 'Windows, macOS, iOS, Android, Linux',
        description:
            'Fast, secure VPN application with military-grade encryption, 10 Gbps speeds, and servers in 100+ countries.',
        offers: {
            '@type': 'Offer',
            price: '1.99',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '1250',
            bestRating: '5',
            worstRating: '1',
        },
        featureList: [
            'AES-256 Encryption',
            'No-Logs Policy',
            'Kill Switch',
            '10 Gbps Speeds',
            '1000+ Servers',
            '100+ Countries',
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// Breadcrumb Schema
function BreadcrumbSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://millionvpn.com',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Download',
                item: 'https://millionvpn.com/download',
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export default function DownloadPage() {
    return (
        <main className="min-h-screen bg-white">
            <SoftwareAppSchema />
            <BreadcrumbSchema />
            <Navbar />
            <DownloadContent />
            <Footer />
        </main>
    );
}
