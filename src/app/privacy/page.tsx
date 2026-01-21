import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// ISR: Revalidate daily (legal content rarely changes)
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description:
        'MillionVPN Privacy Policy. Learn about our strict no-logs policy and how we protect your data. We never track, collect, or share your private information.',
    alternates: {
        canonical: 'https://millionvpn.com/privacy',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
                <p className="text-gray-500 mb-12">Last Updated: January 1, 2026</p>

                <div className="prose prose-lg prose-indigo max-w-none text-gray-600">
                    <p className="lead">
                        At MillionVPN, your privacy is our core mission. We believe that what you do online is your business, and no one else's. This policy outlines exactly what we do (and more importantly, what we don't do) with your data.
                    </p>

                    <h3>1. Zero Logs Policy</h3>
                    <p>
                        We strictly do not track, collect, or share your private data. This means:
                    </p>
                    <ul>
                        <li>No traffic logs</li>
                        <li>No IP address logs</li>
                        <li>No browsing history logs</li>
                        <li>No connection timestamps</li>
                    </ul>

                    <h3>2. Data We Do Collect</h3>
                    <p>
                        We only collect the minimal data necessary to operate our service:
                    </p>
                    <ul>
                        <li><strong>Account Information:</strong> Email address (for account management) and payment information (processed securely by third-party processors).</li>
                        <li><strong>Operational Data:</strong> Server load information to ensure network stability (anonymous and aggregated).</li>
                    </ul>

                    <h3>3. International Data Transfers</h3>
                    <p>
                        As a Swiss-based company, we are protected by some of the world's strongest privacy laws. We do not respond to foreign warrants unless compelled by a Swiss court order, which is a rigorous legal process.
                    </p>

                    <h3>4. Third-Party Services</h3>
                    <p>
                        We use trusted third-party payment processors (like Stripe) to handle payments. They store payment details, and we do not have access to your full credit card information.
                    </p>

                    <h3>5. Cookies</h3>
                    <p>
                        We use minimal cookies on our website purely for session management and language preferences. We do not use tracking cookies for advertising purposes.
                    </p>

                    <div className="bg-primary-50 p-6 rounded-xl mt-8 border border-primary-100">
                        <h4 className="text-primary-800 mt-0">Contact our Data Protection Officer</h4>
                        <p className="mb-0 text-primary-700 text-sm">
                            If you have any questions about this policy, please contact us at <a href="mailto:privacy@millionvpn.com">privacy@millionvpn.com</a>.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
