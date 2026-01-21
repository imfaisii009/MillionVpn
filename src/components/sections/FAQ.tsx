'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

// FAQ data for both display and schema
const faqs = [
    {
        question: 'What is a VPN and how does it work?',
        answer: 'A VPN (Virtual Private Network) creates a secure, encrypted tunnel between your device and the internet. It masks your IP address and encrypts your data, making your online actions virtually untraceable. MillionVPN uses AES-256 encryption to protect your privacy.'
    },
    {
        question: 'How much does MillionVPN cost?',
        answer: 'MillionVPN starts at $1.99/month on the 2-year plan (90% off). Monthly plans are $9.99/month, and 1-year plans are $4.99/month. All plans include a 7-day free trial and 30-day money-back guarantee.'
    },
    {
        question: 'Will MillionVPN slow down my internet?',
        answer: 'No. MillionVPN uses high-speed 10Gbps servers and the lightweight WireGuard protocol to ensure speed loss is imperceptible. Most users experience no noticeable difference in speed.'
    },
    {
        question: 'Can I watch Netflix with MillionVPN?',
        answer: 'Yes! MillionVPN is optimized for streaming. You can securely access Netflix, Hulu, BBC iPlayer, Disney+, and other streaming services from anywhere in the world without buffering.'
    },
    {
        question: 'Does MillionVPN keep logs?',
        answer: 'No. We have a strict, audited no-logs policy. We do not track, collect, or share your browsing data. We are based in a privacy-friendly jurisdiction with no data retention laws.'
    },
    {
        question: 'How many devices can I connect?',
        answer: 'You can connect up to 5 devices simultaneously with a single subscription. Protect your laptop, phone, tablet, and smart TV all at once without paying extra.'
    },
    {
        question: 'Is MillionVPN safe for online banking?',
        answer: 'Yes. We use military-grade AES-256 encryption, the same standard used by banks and governments. Your financial data is completely secure from hackers, even on public Wi-Fi.'
    },
    {
        question: 'Does MillionVPN have a kill switch?',
        answer: 'Yes. Our automatic kill switch instantly blocks all internet traffic if your VPN connection drops, ensuring your real IP address is never exposed.'
    },
    {
        question: 'Does MillionVPN offer a free trial?',
        answer: 'Yes! MillionVPN offers a 7-day free trial on all plans. No credit card is required to start. You can test all premium features risk-free before committing.'
    }
];

// FAQ Schema component for SEO
function FAQSchemaScript() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-white">
            {/* FAQ Schema for rich snippets */}
            <FAQSchemaScript />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-colors"
                            itemScope
                            itemProp="mainEntity"
                            itemType="https://schema.org/Question"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex justify-between items-center w-full p-6 text-left bg-white hover:bg-gray-50/50 transition-colors"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <span className="font-semibold text-gray-900 text-lg" itemProp="name">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <Minus className="h-5 w-5 text-primary-600 flex-shrink-0" aria-hidden="true" />
                                ) : (
                                    <Plus className="h-5 w-5 text-gray-400 flex-shrink-0" aria-hidden="true" />
                                )}
                            </button>
                            {/* CSS transition instead of framer-motion */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                                itemScope
                                itemProp="acceptedAnswer"
                                itemType="https://schema.org/Answer"
                            >
                                <div
                                    id={`faq-answer-${index}`}
                                    className="p-6 pt-0 text-gray-600 leading-relaxed bg-white"
                                    itemProp="text"
                                >
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
