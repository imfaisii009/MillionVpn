'use client';

import { Globe, Zap, Shield, Hand, Unlock, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'Global Network',
        description: '15,000+ servers in 120+ countries. The world is yours.',
        icon: Globe,
        gradient: 'from-blue-500 to-cyan-400',
    },
    {
        title: 'Blazing Speed',
        description: '10Gbps servers with VPN Accelerator. Up to 400% faster.',
        icon: Zap,
        gradient: 'from-yellow-400 to-orange-500',
    },
    {
        title: 'Ironclad Privacy',
        description: 'Swiss-based, zero-logs, and 100% open source.',
        icon: Shield,
        gradient: 'from-green-400 to-emerald-500',
    },
    {
        title: 'Ad & Malware Block',
        description: 'NetShield technology blocks threats before they reach you.',
        icon: Hand,
        gradient: 'from-red-500 to-pink-500',
    },
    {
        title: 'Unrestricted Access',
        description: 'Bypass censorship with our proprietary Stealth protocol.',
        icon: Unlock,
        gradient: 'from-purple-500 to-indigo-500',
    },
    {
        title: '10 Simultaneous Devices',
        description: 'One account covers your phone, laptop, tablet, and TV.',
        icon: Monitor,
        gradient: 'from-teal-400 to-cyan-500',
    },
];

export default function Features() {
    return (
        <section id="features" className="py-32 bg-gray-900 relative overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-900/40 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                    >
                        Why millions choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-teal">MillionVPN</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Experience the next generation of privacy technology. Engineered for speed, designed for security.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Card Background with Glassmorphism */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative h-full bg-gray-800/50 backdrop-blur-sm border border-white/10 p-8 rounded-3xl overflow-hidden group-hover:border-white/20 transition-all duration-300 group-hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-900/50">

                                {/* Gradient Orb in Card */}
                                <div className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${feature.gradient} opacity-20 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-500`} />

                                {/* Icon */}
                                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center p-0.5 mb-6 shadow-lg`}>
                                    <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                                        <feature.icon className="h-7 w-7 text-white" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-200 transition-colors">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
