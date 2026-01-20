'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import WaitlistForm from './WaitlistForm';

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto mb-16"
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary-900 mb-6 leading-tight">
                        One VPN. Limitless<br />
                        <span className="text-primary-600">possibilities.</span>
                    </h1>

                    <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Experience true freedom online. Gain unrestricted access to global content, block annoying ads, and safeguard your privacy with a fast and secure VPN.
                    </p>

                    <div className="max-w-md mx-auto">
                        <WaitlistForm source="hero" />
                        <div className="mt-6 flex justify-center">
                            <Link
                                href="#business"
                                className="inline-flex justify-center items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                            >
                                Business VPN
                                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Hero Image Area */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative max-w-5xl mx-auto"
                >
                    {/* Main Illustration */}
                    <div className="relative z-10">
                        <Image
                            src="/images/hero-new.png"
                            alt="MillionVPN Protection"
                            width={1200}
                            height={800}
                            priority
                            className="w-full h-auto object-contain"
                        />
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
