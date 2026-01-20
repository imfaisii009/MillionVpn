'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Download, Monitor, Smartphone, Globe } from 'lucide-react';

export default function DownloadPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="pt-32 pb-24 bg-primary-900 text-white relative overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-primary-500 blur-[150px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-teal blur-[150px] rounded-full" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Download MillionVPN
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-primary-200 max-w-2xl mx-auto mb-12"
                    >
                        Protect all your devices with our easy-to-use apps. High speed, total privacy, zero logs.
                    </motion.p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 -mt-24 relative z-20">
                        {[
                            { name: 'Windows', icon: Monitor, version: 'v2.4.1', desc: 'Windows 10, 11' },
                            { name: 'macOS', icon: Monitor, version: 'v3.0.2', desc: 'macOS 12+' },
                            { name: 'Linux', icon: Monitor, version: 'v1.5.0', desc: 'Ubuntu, Fedora, Debian' },
                            { name: 'iOS', icon: Smartphone, version: 'Latest', desc: 'iPhone, iPad' },
                            { name: 'Android', icon: Smartphone, version: 'Latest', desc: 'Phones, Tablets, TV' },
                            { name: 'Chrome', icon: Globe, version: 'Extension', desc: 'Chrome, Brave, Edge' },
                        ].map((platform, i) => (
                            <motion.div
                                key={platform.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all group cursor-pointer"
                            >
                                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                                    <platform.icon className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{platform.name}</h3>
                                <p className="text-gray-500 mb-4">{platform.desc}</p>
                                <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                                    <span className="text-xs font-mono text-gray-400 bg-gray-100 px-2 py-1 rounded">{platform.version}</span>
                                    <span className="text-primary-600 font-semibold group-hover:translate-x-1 transition-transform flex items-center">
                                        Download <Download className="ml-2 h-4 w-4" />
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
