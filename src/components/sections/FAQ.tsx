'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: 'How does a VPN work?',
        answer: 'A VPN (Virtual Private Network) creates a secure, encrypted tunnel between your device and the internet. It masks your IP address and encrypts your data, making your online actions virtually untraceable.'
    },
    {
        question: 'Will MillionVPN slow down my internet?',
        answer: 'While encryption can theoretically slow down speeds, MillionVPN uses high-speed 10Gbps servers and the lightweight WireGuard protocol to ensure speed loss is imperceptible for most users.'
    },
    {
        question: 'Can I watch Netflix with MillionVPN?',
        answer: 'Yes! MillionVPN is optimized for streaming. You can securely access Netflix, Hulu, BBC iPlayer, and other streaming services from anywhere in the world without buffering.'
    },
    {
        question: 'Do you keep logs?',
        answer: 'No. We have a strict, audited no-logs policy. We do not track, collect, or share your private data. We are based in a privacy-friendly jurisdiction with no data retention laws.'
    },
    {
        question: 'How many devices can I connect?',
        answer: 'You can connect up to 10 devices simultaneously with a single subscription. Protect your laptop, phone, tablet, and TV all at once without paying extra.'
    },
    {
        question: 'Is MillionVPN safe for online banking?',
        answer: 'Absolutely. We use military-grade AES-256 encryption, the same standard used by banks and governments. Your financial data is completely secure from hackers, even on public Wi-Fi.'
    },
    {
        question: 'Does a VPN hide my IP address?',
        answer: 'Yes, connecting to MillionVPN instantly replaces your real IP address with one from our secure servers. This prevents websites, advertisers, and ISPs from tracking your physical location.'
    },
    {
        question: 'Is it legal to use a VPN?',
        answer: 'Yes, using a VPN is completely legal in the vast majority of countries. It is a legitimate tool for privacy and security. However, we do not condone secure connections for illegal activities.'
    },
    {
        question: 'What makes MillionVPN the best VPN for gaming?',
        answer: 'Our optimized network minimizes latency and prevents DDoS attacks. With servers in 60+ countries, you can play in any region with stable, low-ping connections.'
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-colors">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex justify-between items-center w-full p-6 text-left bg-white hover:bg-gray-50/50 transition-colors"
                            >
                                <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="h-5 w-5 text-primary-600 flex-shrink-0" />
                                ) : (
                                    <Plus className="h-5 w-5 text-gray-400 flex-shrink-0" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-gray-600 leading-relaxed bg-white">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
