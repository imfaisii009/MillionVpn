import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// ISR: Revalidate daily (legal content rarely changes)
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Terms of Service',
    description:
        'MillionVPN Terms of Service. Read our acceptable use policy, refund policy, and service terms. 30-day money-back guarantee on all plans.',
    alternates: {
        canonical: 'https://millionvpn.com/terms',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function Terms() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
                <p className="text-gray-500 mb-12">Effective Date: January 1, 2026</p>

                <div className="prose prose-lg prose-indigo max-w-none text-gray-600">
                    <p>
                        By accessing or using MillionVPN, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                    </p>

                    <h3>1. Acceptable Use Policy</h3>
                    <p>
                        You agree not to use MillionVPN for any illegal activities, including but not limited to:
                    </p>
                    <ul>
                        <li>Transmitting child sexual abuse material (CSAM)</li>
                        <li>Sending spam or engaging in phishing</li>
                        <li>Hacking or attacking other computers or networks</li>
                        <li>Violating intellectual property rights</li>
                    </ul>

                    <h3>2. Account Responsibility</h3>
                    <p>
                        You are responsible for maintaining the confidentiality of your account credentials. You are responsible for all activities that occur under your account. Please notify us immediately of any unauthorized use.
                    </p>

                    <h3>3. Refunds and Cancellations</h3>
                    <p>
                        We offer a 30-day money-back guarantee for all new accounts. If you are not satisfied, you may request a full refund within 30 days of your initial purchase.
                    </p>

                    <h3>4. Disclaimers</h3>
                    <p>
                        MillionVPN is provided "as is" without warranty of any kind. We do not guarantee that the service will be uninterrupted or error-free. We are not liable for any damages arising from the use of our service.
                    </p>

                    <h3>5. Changes to Terms</h3>
                    <p>
                        We may update these terms from time to time. We will notify you of any significant changes by posting the new terms on this page or via email.
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    );
}
