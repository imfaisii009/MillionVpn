import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactContent from './ContactContent';

// ISR: Revalidate every hour
export const revalidate = 3600;

export const metadata: Metadata = {
    title: 'Contact Us - Support & Help',
    description:
        'Contact MillionVPN support team. Get help with technical issues, billing questions, or general inquiries. 24/7 live chat and email support available.',
    keywords: ['VPN support', 'contact VPN', 'VPN help', 'customer service'],
    openGraph: {
        title: 'Contact MillionVPN Support',
        description: 'Get help from our 24/7 support team. Live chat and email support available.',
        type: 'website',
        url: 'https://millionvpn.com/contact',
    },
    alternates: {
        canonical: 'https://millionvpn.com/contact',
    },
};

// Contact Page Schema
function ContactPageSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact MillionVPN',
        description: 'Contact MillionVPN support team for help with technical issues, billing, or general inquiries.',
        url: 'https://millionvpn.com/contact',
        mainEntity: {
            '@type': 'Organization',
            name: 'MillionVPN',
            contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer support',
                email: 'support@millionvpn.com',
                availableLanguage: ['English'],
            },
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Turner Business Centre, Greengate, Middleton',
                addressLocality: 'Manchester',
                postalCode: 'M24 1RU',
                addressCountry: 'GB',
            },
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <ContactPageSchema />
            <Navbar />
            <ContactContent />
            <Footer />
        </main>
    );
}
