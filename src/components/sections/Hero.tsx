'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import WaitlistForm from './WaitlistForm';

// Lazy load HeartCounter since it requires Supabase client
const HeartCounter = dynamic(() => import('@/components/ui/HeartCounter'), {
    ssr: false,
    loading: () => (
        <div className="flex flex-col items-center gap-2">
            <p className="text-gray-500 text-3xl font-handwriting font-medium transform -rotate-2 mb-6">
                Spread some love to the world
            </p>
            <div className="h-14 w-48 bg-gray-100 rounded-full animate-pulse" />
            <div className="h-8 w-20 bg-gray-100 rounded animate-pulse mt-2" />
        </div>
    ),
});

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Text Content - CSS animations instead of framer-motion for LCP */}
                <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up">
                    {/* H1 with speakable class for voice search */}
                    <h1 className="speakable-headline text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary-900 mb-6 leading-tight">
                        One VPN. Limitless<br />
                        <span className="text-primary-600">possibilities.</span>
                    </h1>

                    {/* TL;DR for LLMs and voice assistants - speakable content */}
                    <div className="speakable-tldr text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                        <p>
                            MillionVPN protects your online privacy with military-grade AES-256 encryption and a strict no-logs policy.
                            Get 10 Gbps speeds across 1,000+ servers in 100+ countries.
                            Plans start at $1.99/month with a 7-day free trial.
                        </p>
                    </div>

                    {/* CTA Section with speakable class */}
                    <div className="speakable-cta max-w-md mx-auto">
                        <WaitlistForm source="hero" />
                    </div>

                    {/* Heart Counter - Lazy loaded */}
                    <div className="mt-10">
                        <HeartCounter />
                    </div>
                </div>

                {/* Hero Image Area - CSS animation */}
                <div className="relative max-w-5xl mx-auto animate-fade-in-scale">
                    {/* Main Illustration */}
                    <div className="relative z-10">
                        <Image
                            src="/images/hero-new.png"
                            alt="MillionVPN app interface showing secure VPN connection with global server map and one-click connect button"
                            width={1200}
                            height={800}
                            priority
                            fetchPriority="high"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
